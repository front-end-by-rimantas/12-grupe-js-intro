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


console.log('*****************');
console.log('skaitmenuKiekisSkaiciuje');
console.log('*****************');

function skaitmenuKiekisSkaiciuje( number ) {
    // patikrinimai
    if ( typeof(number) !== 'number' ||
         isFinite(number) === false ) {
        return 'Pateikta netinkamo tipo reikšmė.';
    }

    // LOGIKA
    // spejamas pradinis ilgis
    let ilgis = (''+number).length;
    console.log( ''+number );
    

    // pataisa del minuso
    if ( number < 0 ) {
        ilgis--;
    }

    // pataisa del desimtainiu skaiciu
    if ( number % 1 !== 0 ) {
        ilgis--;
    }

    // rezultato grazinimas
    return ilgis;
}

console.log( skaitmenuKiekisSkaiciuje( true ) );
console.log( skaitmenuKiekisSkaiciuje( 'asd' ) );
console.log( skaitmenuKiekisSkaiciuje( NaN ) );
console.log( skaitmenuKiekisSkaiciuje( Infinity ) );

console.log( skaitmenuKiekisSkaiciuje( 5 ), '-', 1 );
console.log( skaitmenuKiekisSkaiciuje( 781 ), '-', 3 );
console.log( skaitmenuKiekisSkaiciuje( 37060123456 ), '-', 11 );
console.log( skaitmenuKiekisSkaiciuje( -24 ), '-', 2 );
console.log( skaitmenuKiekisSkaiciuje( 3.14159256 ), '-', 9 );
console.log( skaitmenuKiekisSkaiciuje( -3.14159256 ), '-', 9 );
console.log( skaitmenuKiekisSkaiciuje( 0 ), '-', 1 );
console.log( skaitmenuKiekisSkaiciuje( -0 ), '-', 1 );
console.log( skaitmenuKiekisSkaiciuje( +0 ), '-', 1 );
console.log( skaitmenuKiekisSkaiciuje( 0.5000000 ), '-', 2 );
console.log( skaitmenuKiekisSkaiciuje( 1e2 ), '-', 3 );
console.log( skaitmenuKiekisSkaiciuje( 1e6 ), '-', 7 );

console.log( skaitmenuKiekisSkaiciuje( 1e21 ), '-', 22 );
console.log( skaitmenuKiekisSkaiciuje( 1e-21 ), '-', 22 );


console.log('*****************');
console.log('didziausiasSkaiciusSarase');
console.log('*****************');

function didziausiasSkaiciusSarase( list ) {
    if ( Array.isArray(list) === false ) {
        return 'Pateikta netinkamo tipo reikšmė.';
    }
    if ( list.length === 0 ) {
        return 'Pateiktas sąrašas negali būti tuščias.';
    }

    let didziausias = -Infinity;

    for ( let i=0; i<list.length; i++ ) {
        const skaicius = list[i];
        if ( typeof(skaicius) !== 'number' ||
             isFinite(skaicius) === false ) {
            continue;
        }
        if ( skaicius > didziausias ) {
            didziausias = skaicius;
        }
    }

    if ( didziausias === -Infinity ) {
        return 'Sarase nera nei vieno normalaus skaiciaus.'
    }

    return didziausias;
}

console.log( didziausiasSkaiciusSarase( 'pomidoras' ) );
console.log( didziausiasSkaiciusSarase( {} ) );
console.log( didziausiasSkaiciusSarase( [] ) );
console.log( didziausiasSkaiciusSarase( [ Infinity, Infinity, Infinity, Infinity, '115' ] ) );
console.log( didziausiasSkaiciusSarase( [ '118' ] ) );

console.log( didziausiasSkaiciusSarase( [ 1 ] ), '-', 1 );
console.log( didziausiasSkaiciusSarase( [ 1, 2, 3 ] ), '-', 3 );
console.log( didziausiasSkaiciusSarase( [ -5, 78, 14, 0, 18 ] ), '-', 78 );
console.log( didziausiasSkaiciusSarase( [ 69, 69, 69, 69, 66 ] ), '-', 69 );
console.log( didziausiasSkaiciusSarase( [ -1, -2, -3, -4, -5, -6, -7, -8 ] ), '-', -1 );
console.log( didziausiasSkaiciusSarase( [ 0.1 ] ), '-', 0.1 );
console.log( didziausiasSkaiciusSarase( [ 5125, 845548, Infinity, 84526 ] ), '-', 845548 );
console.log( didziausiasSkaiciusSarase( [ 5125, 845548, Infinity, NaN ] ), '-', 845548 );
console.log( didziausiasSkaiciusSarase( [ 5125, 845548, NaN, Infinity, 84526 ] ), '-', 845548 );
console.log( didziausiasSkaiciusSarase( [ 5125, NaN, 845548, Infinity, 84526 ] ), '-', 845548 );
console.log( didziausiasSkaiciusSarase( [ NaN, 845548, Infinity, 84526 ] ), '-', 845548 );
console.log( didziausiasSkaiciusSarase( [ Infinity, 845548, 115, 84526 ] ), '-', 845548 );
console.log( didziausiasSkaiciusSarase( [ Infinity, Infinity, Infinity, Infinity, 115 ] ), '-', 115 );


console.log('*****************');
console.log('isrinktiRaides');
console.log('*****************');

function isrinktiRaides( text, step ) {
    if ( typeof(text) !== 'string' ) {
        return 'ERROR: pirmas turi buti tekstas.';
    }
    if ( typeof(step) !== 'number' ||
         isFinite(step) === false ) {
        return 'ERROR: antras turi buti normalus skaicius';
    }
    if ( text.length < Math.abs(step) ) {
        return 'ERROR: per trumpas tekstas, nurodytam zingsniu kiekiui.';
    }
    if ( step === 0 ) {
        return 'ERROR: per trumpas zingsnis.';
    }
    if ( step % 1 !== 0 ) {
        return 'ERROR: zingsnis turi buti naturalusis skaicius.';
    }

    let result = '';

    if ( step > 0 ) {
        for ( let i=step-1; i<text.length; i+=step ) {
            result += text[i];
        }
    } else {
        for ( let i=text.length+step; i>=0; i+=step ) {
            result += text[i];
        }
    }

    return result;
}

console.log( isrinktiRaides( 1561, 2 ) );
console.log( isrinktiRaides( 'abc', '4' ) );
console.log( isrinktiRaides( 'abc', 4 ) );
console.log( isrinktiRaides( 'abc', 0 ) );
console.log( isrinktiRaides( 'abcdefghijkl', 3.357 ) );

console.log( isrinktiRaides( 'abcdefg', 2 ) );
console.log( isrinktiRaides( 'abcdefghijkl', 3 ) );
console.log( isrinktiRaides( 'abcdefg', -2 ) );
console.log( isrinktiRaides( 'abcdefghijkl', -3 ) );
console.log( isrinktiRaides( 'abcdef', -2 ) );
console.log( isrinktiRaides( 'abcdef', -200 ) );


console.log('*****************');
console.log('dalyba');
console.log('*****************');

function dalyba( a, b ) {
    if ( typeof(a) !== 'number' ||
         isFinite(a) === false ||
         typeof(b) !== 'number' ||
         !isFinite(b) ) {
        return 'ERROR: duok skaiciu!!!';
    }
    if ( b === 0 ) {
        return 'ERROR: musu atveju is nulio dalinti nesinori... :(';
    }

    return a / b;
}

console.log( dalyba( 5, 0 ) );
console.log( dalyba( 0.9, 'asd' ) );
console.log( dalyba( 'asd', 0.8 ) );
console.log( dalyba( -0.9, [-0.8] ) );
console.log( dalyba( -0.9, Infinity ) );
console.log( dalyba( Infinity, 0 ) );
console.log( dalyba( 8 ) );
console.log( dalyba() );
console.log( dalyba( 8, true ) );
console.log( dalyba( 8, NaN ) );
console.log( dalyba( 8, null ) );

console.log( dalyba( 5, 2 ) );
console.log( dalyba( 0.9, 0.8 ) );
console.log( dalyba( -0.9, 0.8 ) );
console.log( dalyba( 0.9, -0.8 ) );
console.log( dalyba( -0.9, -0.8 ) );
console.log( dalyba( 948526548565456585584658685, 0.4559455745545541547547547 ) );