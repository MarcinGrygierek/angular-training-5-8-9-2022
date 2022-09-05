// console.log(a); // błąd - hoisting nie występuje dla let/const

let a = 10;

for(let i = 0; i < 10; i++) {
    console.log(i);
}

console.log(i); // błąd - i posiada zakres blokowy, więc na tym etapie juz nie istnieje

const arr = [1, 2, 3]
const arr2 = [...arr]; // płytka kopia tablicy arr

const obj = {
    name: 'Marcin',
    lastName: 'Grygierek'
}

const obj2 = { ...obj }; // płytka kopia obiektu obj

const objFull = {
    name: 'Marcin',
    lastName: 'Grygierek',
    address: {
        city: 'Test',
        street: 'Test'
    }
}

const { name, address: { city }} = objFull; // wyciągnięte name oraz city z objFull przy pomocy destrukturyzacji

// głęboka kopia - kazde zagniezdzenie jest kopiowane indywidualnie - inaczej została by skopiowana referencja zamiast utworzonego nowego podobiektu
const objDeepCopy = { 
    ...objFull,
    address: {
        ...objFull.address
    }
}

// dowolna ilość parametrów - wazne zeby rest operator ... był zawsze na samym końcu
const foo = (a, b, ...args) => {
    console.log(a, b, args)
}

// domyslne parametry - równiez wazna jest kolejność ich umiejscowienia - powinny być na końcu
const bar = (a, b, c = 100) => {
    return a + b + c;
}

console.log(bar(1, 2, 3));
console.log(bar(1, 2));

// funkcje wyzszego rzedu to funkcje które przyjmują funkcję w parametrze lub zwracają funkcję w wyniku działania
const tab = [1, 2, 3, 4, 5, 6];
const squares = tab.map(el => el * el); // nowa tablica z kwadratami wartości z oryginalnej tablicy
const filtered = tab.filter(el => el % 2 === 0); // nowa tablica z parzystymi liczbami
const sum = tab.reduce((acc, curr) => acc + curr); // tablica zredukowana do sumy jej wartości

// interpolacja
console.log(`Ala ma ${190} kotów`);

const count = 10;
console.log(`Ala ma ${count} kotów`);