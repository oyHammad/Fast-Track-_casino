/// <reference types = "Cypress" />

import { AddLotteryTicket } from "../../support/models/lottery/addLotteryTicket";
import { SlideMenu } from "../../support/models/slideMenu/slideMenu";
import { login } from "../../support/utilities/login";

const slideMenu = new SlideMenu;
const addLotteryTicket = new AddLotteryTicket;

describe("Manage the lottery", () =>
{
    beforeEach(() =>
    {
        login();
    });
    it("Validate buying a lottery ticket", () =>
    {
        let balanceBeforeBuying: string;
        let balanceAfterBuying: string;
        let finalBalanceBeforeBuying: number;
        let finalBalanceAfterBuying: number;
        slideMenu.menuButton().click();
        slideMenu.lotteryButton().click().then(() =>
        {
            addLotteryTicket.totalBalance().find('.button').then(($value) =>
            {
                balanceBeforeBuying = $value.text().split(' ').toString();
                balanceBeforeBuying = balanceBeforeBuying.slice(10,);
                finalBalanceBeforeBuying = parseInt(balanceBeforeBuying);
            });
            addLotteryTicket.addAnotherTicketButton().click();
            addLotteryTicket.ticketNumber().click();
            addLotteryTicket.buyTicketButton().click();

            slideMenu.menuButton().click();
            slideMenu.lotteryButton().click().then(() =>
            {
                addLotteryTicket.totalBalance().then((value2) =>
                {
                    balanceAfterBuying = value2.text().split(' ').toString();
                    balanceAfterBuying = balanceAfterBuying.slice(10,);
                    finalBalanceAfterBuying = parseInt(balanceAfterBuying);
                    const ticketPrice: number = 5;
                    expect(finalBalanceBeforeBuying).eql(finalBalanceAfterBuying + ticketPrice);
                });
            });
        });
    });
});