let randomNumber = () => {
    let min = 1111111111;
    let max = 5555555555;

    min = Math.ceil(min);
    max = Math.floor(max);

    return (Math.floor(Math.random() * (max - min + 1)) + min).toString();
}

let randomEmailId = () => {
    let charSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let randomString = '';
    for (let i = 0; i < 5; i++) {
        let randomPoz = Math.floor(Math.random() * charSet.length);
        randomString += charSet.substring(randomPoz, randomPoz + 1);
    }
    return `${randomString}@gmail.com`;
}

let randomName = () => {
    let charSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let randomString = '';
    for (let i = 0; i < 6; i++) {
        let randomPoz = Math.floor(Math.random() * charSet.length);
        randomString += charSet.substring(randomPoz, randomPoz + 1);
    }
    return randomString;
}

export { randomNumber, randomEmailId, randomName }

