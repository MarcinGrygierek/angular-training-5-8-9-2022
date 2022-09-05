// jawne przypisanie typu
let val: number = 123;
// val = '123'; // brak mozliwości przypisania innego typu

let val2 = 123;
// val = '123'; // brak mozliwości przypisania innego typu z powodu automatycznego określenia typu na number

// typowanie parametrów oraz wartości zwracanej
const foo = (a: number, b: number): number => {
    return a * b;
}

foo(10, 12);

// automatyczne przyjęcie typu przez tablicę - w tym przypadku będzie to (number | string)[]; 
const arr = [1, 2, 'asd'];

// jawne przypisanie typu na number[] - wtedy stringa ju nie da rady dorzucić
const arr2: number[] = [1, 2];

// bezpośrednie typowanie obiektu
const user: {
    name: string,
    lastName: string,
    age: number
} = {
    name: 'Marcin',
    lastName: 'Grygierek',
    age: 29
}

// typowanie przy pomocy interfejsu, tutaj interfejs posiada opcjonalną właściwość oznaczoną ? - age
interface User {
    name: string;
    lastName: string;
    age?: number;
}

const user2: User = {
    name: 'Marcin',
    lastName: 'Grygierek',
    age: 29
}

const user3: User = {
    name: 'Lorem',
    lastName: 'Ipsum',
}

interface Address {
    street: string;
    city: string;
    country: string;
}

// interfejsy mogą korzystać równiez z interfejsów do typowania zagniezdzonych struktur, tak jak tutaj tablica obiektów danego typu
interface FullUser extends User {
    address: Address[]
}

const fullUser: FullUser = {
    name: 'Marcin',
    lastName: 'Grygierek',
    address: [{
        street: 'Testowa',
        city: 'Testowe',
        country: 'Polska'
    }, {
        street: '2',
        city: '2',
        country: 'Polska'
    }]
}

let valNumber: number = 1000;
valNumber = '1000' as any; // ogromny błąd - olewamy wtedy kontrolę TypeScript!
valNumber = '1000' as unknown as number // tak jak wyzej!;

// funkcja nigdy nie zwróci wartości
const bar = (a: number, b: number) => {
    throw new Error('błąd kalkulacji');
}

console.log(bar(10, 20));

// Zwrócenie string albo number
const baz = (a: number, b: number): number | string => {
    if(a > 10) return 'Za duża wartość'

    return a * b;
}

const result = baz(5,2);
// sprawdzenie typu przed operacją - TS wtedy automatycznie dobierze pasujący (bo wykluczyliśmy 1 z 2)
if(typeof result === 'number') {
    console.log(result.toFixed(2));
}
// rzutowanie na określony typ (z mozliwych dostępnych)
console.log((result as number).toFixed(2));
console.log((<number>result).toFixed(2));

enum MagicNumbers {
    Pi = 3.14,
    Fi = 5,
    Epsilon = 0.0000000001
}

console.log(MagicNumbers.Pi * 10 * 10)

// unia - typ jeden albo drugi
let value: string | number = 10;
value = 'asd';

type UserResponse = User | FullUser;

const userResponse: UserResponse = {
    name: 'Marcin',
    lastName: 'Grygierek',
    address: [{
        city: 'Test',
        street: 'Test',
        country: 'Test'
    }]
}

// unia dyskryminująca
interface SuccessResponse {
    status: 'success';
    ok: true;
    data: string;
}

interface ErrorResponse  {
    status: 'error';
    ok: false;
    errorMessage: string;
}

type ApiResponse = SuccessResponse | ErrorResponse;

// przypisanie status: 'success' wymaga przez nas uzycia pól zgodnych z SuccessResponse
const response: ApiResponse = {
    status: 'success',
    ok: true,
    data: 'Jest ok!'
}

// przypisanie status: 'error' wymaga przez nas uzycia pól zgodnych z SuccessResponse
const errorResponse: ApiResponse = {
    status: 'error',
    ok: false,
    errorMessage: 'Jest błąd!'
}

interface UserLocation {
    name: string;
}

type FullLocation = UserLocation & Address;

const userLocation: FullLocation = {
    name: 'Dom',
    street: 'Test',
    city: 'Test',
    country: 'Polska'
}

// typ generyczny
const getValue = <T>(a: T, b: T): T => {
    return a;
}

getValue<string>('10', '10');

// obiektowość - mozliwosc kontroli dostępu, właściwość readonly
class Point2D {
    private x: number;
    private y: number;
    readonly magicValue: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.magicValue = 10;
    }

    public getDistance(startX: number, startY: number): number {
        // this.magicValue = 100; // nie możemy nadpisać bo readonly
        return startX - this.x + startY - this.y;
    }
}

const point = new Point2D(10, 20);
point.getDistance(0, 0)
