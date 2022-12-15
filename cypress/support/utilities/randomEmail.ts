export function generatRandomEmail()
{

    const chars = 'abcdefghijklmnopqrstuvwxyz';

    return chars[Math.floor(Math.random() * 26)] + Math.random().toString(36).substring(2, 11) + '@domain.com';

}