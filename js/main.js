// Kaip isnesti pranesima i console?

console.log('Labas rytas :)');
console.log('ka tu?');
console.log('nieko, o tu?');

// Sudedamosios dalys:
// - kintamieji
// - funkcijos
// - event'ai (listener'iai)

// skaiciaus tipas
const PI = 3.1415;
console.log( PI );

let amzius = 0;
console.log('mano amzius yra', amzius);

amzius = 1;
console.log('mano amzius yra', amzius);

amzius = 7;
console.log('mano amzius yra', amzius);

// teksto tipas
var vardas = 'Vardenis';
console.log('mano vardas:', vardas);

vardas = 'vardnis';
console.log('nuo siol vardas:', vardas);

let slaptazodis = '123456';

// saraso tipas / masyvas - array
const pirminiaiSkaiciai = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];

console.log(pirminiaiSkaiciai);

const abc = ['a', 'b', 'c', 'd', 'e'];
console.log(abc);



const a = 8;
const manoSkaiciusYraVaToks = 8;
const b = 'adsf';
const c = [5165, 84159];
const d = ['asd', 'qwe', 'as'];
const e = [5415, 'asdfd', 'asd', 84155];
const f = [0, 'a', [1, 'b'], [a, b]];
console.log(f);

const s1 = 7;
const s2 = 13;
const s3 = -8;

const skaiciuSumaPliusVienas = s1 + s2 + s3 + 1;
console.log(skaiciuSumaPliusVienas);

const skaiciaiSuRaide = s1 + s2 + 'a' + s3;
// s1 + s2 + 'a' + s3;
// 7 + s2 + 'a' + s3;
// 7 + 13 + 'a' + s3;
// 7 + 13 + 'a' + -8;
// 20 + 'a' + -8;
// '20a' + -8;
// '20a-8';
console.log(skaiciaiSuRaide);
