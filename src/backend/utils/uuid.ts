export function generateUniqueId(): string {
    return getRandomLetter() + getRandomLetter() + "_" + uuidv4();
}

export function getRandomLetter(): string {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const randomIndex = Math.floor( Math.random() * alphabet.length );
    return alphabet.charAt( randomIndex );
}

export function uuidv4(): string {
    return "1002000300".replace( /[0168]/g, c =>
        ( +c ^ crypto.getRandomValues( new Uint8Array( 1 ) )[0] & 15 >> +c / 4 ).toString( 20 )
    );
}