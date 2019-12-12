"use strict";

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
// vardas (virsuj)
const pasisveikinimas = 'Labas'
const skaiciaiSuRaide = s1 + s2 + 'a' + s3;
// s1 + s2 + 'a' + s3;
// 7 + s2 + 'a' + s3;
// 7 + 13 + 'a' + s3;
// 7 + 13 + 'a' + -8;
// 20 + 'a' + -8;
// '20a' + -8;
// '20a-8';
console.log(skaiciaiSuRaide);

console.log('------------');

const tavoVardas = 'Rasa';
const kreipiuosiI = 'Labas';

const kreipinioSakinys = kreipiuosiI + ', ' + tavoVardas + '.';
console.log(kreipinioSakinys);

const t1 = 'asd';
const t2 = 'qwe';
const t3 = 1511551;
const t4 = 'iop';

const t14 = t1 + ' ' + t2 + ' ' + t3 + ' ' + t4;

console.log( t14 );

console.log('---------------');

const ss = [1, 8, 95, 4, 6, 7, 54, 55];
const ssSuma = ss[0] - ss[1] + ss[2] - ss[3] + ss[4];

console.log('ss suma:', ssSuma);

console.log( ss.length-1 );
console.log( ss[ ss.length-1 ] );
console.log( ss[ ss.length ] );
console.log( ss[ -1 ] );

console.log('---------------');

const ab = ['a', 'b', 'c', 'd', 'e'];

console.log( ab[4] + ', ' + ab[3] + ', ' + ab[2] + ', ' + ab[1] + ', ' + ab[0] );
console.log( ab.join(', ') );

console.log('*********************');
console.log('KINTAMUJU PALYGINIMAS');
console.log('*********************');

const k1 = 21;
const k2 = '21';

// vartotini: >, <, >=, <=, ===, !==
// nevartotini: ==, !=
if ( k1 === k2 ) {
    console.log( 'k1-k2 sekmes tekstas' );
} else {
    console.log(':(');
}

console.log('---------------');

const akys = 'raudonos';

// if ( akys === 'zalios' ) {
//     console.log('Zaliakis :P');
// }
// if ( akys === 'melynos' ) {
//     console.log('Gerulis =]');
// }
// if ( akys === 'rudos' ) {
//     console.log('Melagis :P');
// }

// if ( akys === 'zalios' ) {
//     console.log('Zaliakis :P');
// } else {
//     if ( akys === 'melynos' ) {
//         console.log('Gerulis =]');
//     } else {
//         if ( akys === 'rudos' ) {
//             console.log('Melagis :P');
//         } else {
//             console.log('O tu turi akis?..');
//         }
//     }
// }

if ( akys === 'zalios' ) {
    console.log('Zaliakis :P');
} else if ( akys === 'melynos' ) {
    console.log('Gerulis =]');
} else if ( akys === 'rudos' ) {
    console.log('Melagis :P');
} else {
    console.log('O tu turi akis?..');
}


console.log('----------------');

const x = 5;

if ( '5' === ''+x ) {
    console.log('tiesa');
} else {
    console.log('melas');
}

console.log('*********************');
console.log('FOR CIKLAS');
console.log('*********************');

// nuo = 0
// iki = 8
// i+1

for ( let i=0; i<10; i++ ) {
    // if ( i === 6 ) {
    //     continue;
    // }

    console.log(i);

    // if ( i === 7 ) {
    //     break;
    // }
}



console.log('---------------');


const nuo1 = -3;
const iki1 = -5;
let suma = 0;

for ( let i=nuo1; i<=iki1; i++ ) {
    suma = suma + i;
}

console.log('Suma intervale nuo '+nuo1+' iki '+iki1+' yra lygi '+suma);


console.log('---------------');

const tekstas = 'abcdef';
let atbulas = '';

for ( let i=tekstas.length-1; i>=0; i-- ) {
    // logika
    atbulas = atbulas + tekstas[i];
    console.log(i, tekstas[i], atbulas);
}


function sumavimas( pirmas, antras ) {
    return pirmas + antras;
}

console.log( sumavimas( 7, 5 ) );
console.log( sumavimas( 2, 2, 8 ) );
console.log( sumavimas( -2, 9 ) );
console.log( sumavimas( -2 ) );

function sveikinu( name ) {
    return name + ' buk sviekas!';
}

console.log( sveikinu('Vardeni') );
console.log( sveikinu('Jonai') );
console.log( sveikinu('Maryte') );



console.log('---------------');

// 1) logiskas, bet pats neefektyviausias budas

// const nuo = -6;
// const iki = 6;
// const daliklis = 5;
// let kiekis = 0;

// einame per skaiciu intervala (for ciklas)
    // jeigu (if) tas skaicius dalinasi be liekanos
        // tai kiekis+1

// for ( let i=nuo; i<=iki; i++) {
//     if ( i % daliklis === 0 ) {
//         kiekis++;
//     }
// }


// 2) logiskas, bet tik nezymiai efektyvesnis ir veikia tik jei intervalas prasideda su be liekanos besidalinanciu

// const nuo = -6;
// const iki = 6;
// const daliklis = 5;
// let kiekis = 0;

// for ( let i=nuo; i<=iki; i=i+daliklis ) {
//     kiekis++;
// }


// 3) pats efektyviausias

// const nuo = 0;
// const iki = 12;
// const daliklis = 3;
// let kiekis = 0;

// // ( iki - nuo ) / daliklis + 1
// if ( nuo >= 0 && iki >= 0 ) {
//     const galas = Math.floor(iki / daliklis) + 1;
//     const pradzia = Math.floor(nuo / daliklis) + 1;
//     kiekis = galas - pradzia;
// }

// console.log('Skaiciu intervale tarp ' + nuo + ' ir ' + iki + ', besidalinanciu be liekanos is ' + daliklis + ' yra ' + kiekis + ' vienetai.');

function dalikliuKiekis( nuo, iki, daliklis ) {
    let kiekis = 0;

    const galas = Math.floor(iki / daliklis) + 1;
    const pradzia = Math.floor(nuo / daliklis) + 1;
    kiekis = galas - pradzia;
    if ( nuo % daliklis === 0 ) {
        kiekis++;
    }

    const ats = 'Skaiciu intervale tarp ' + nuo + ' ir ' + iki + ', besidalinanciu be liekanos is ' + daliklis + ' yra ' + kiekis + ' vienetai.';

    return ats;
}

console.log( dalikliuKiekis( 0, 12, 3 ) );
console.log( dalikliuKiekis( 1, 12, 3 ) );
console.log( dalikliuKiekis( 2, 12, 3 ) );
console.log( dalikliuKiekis( 3, 12, 3 ) );

console.log( dalikliuKiekis( -12, 0, 3 ) );
console.log( dalikliuKiekis( -12, -1, 3 ) );
console.log( dalikliuKiekis( -12, -2, 3 ) );
console.log( dalikliuKiekis( -12, -3, 3 ) );

console.log( dalikliuKiekis( 0, 11, 3 ) );
console.log( dalikliuKiekis( 1, 11, 3 ) );
console.log( dalikliuKiekis( 2, 11, 3 ) );
console.log( dalikliuKiekis( 3, 11, 3 ) );

console.log( dalikliuKiekis( -11, 0, 3 ) );
console.log( dalikliuKiekis( -11, -1, 3 ) );
console.log( dalikliuKiekis( -11, -2, 3 ) );
console.log( dalikliuKiekis( -11, -3, 3 ) );

console.log('*****************');
console.log('tusciaFunkcija');
console.log('*****************');

function tusciaFunkcija() {
    return false;
}

console.log( tusciaFunkcija() );

console.log('*****************');
console.log('daugyba');
console.log('*****************');

function daugyba( pirmas, antras ) {
    if ( isFinite(pirmas) === false ||
         typeof(pirmas) !== 'number' ) {
        return 'ERROR: pirma reiksme ne normalus skaicius.'
    }
    if ( isFinite(antras) === false ||
         typeof(antras) !== 'number' ) {
        return 'ERROR: antra reiksme ne normalus skaicius.'
    }

    return pirmas * antras;
}

console.log( daugyba( 2, 2 ) );
console.log( daugyba( 2, 3 ) );
console.log( daugyba( 2, -3 ) );
console.log( daugyba( -2, 3 ) );
console.log( daugyba( -2, -3 ) );
console.log( daugyba( 'asd', 'qwe' ) );
console.log( daugyba( true, false ) );
console.log( daugyba( [], 5 ) );
console.log( daugyba( [], 'asd' ) );
console.log( daugyba( 5, 'asd' ) );
console.log( daugyba( [58], 5 ) );
console.log( daugyba( ['58'], 5 ) );
console.log( daugyba( ['58s'], 5 ) );
console.log( daugyba( ['ASD'], 5 ) );
console.log( daugyba( 5, null ) );
console.log( daugyba( Infinity, 2 ) );
console.log( daugyba( NaN, Infinity ) );
console.log( daugyba( NaN, 8 ) );
