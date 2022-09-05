// wersja najbardziej skompresowana
const getSumCompressed = (...arr) => arr.reduce((acc, curr) => acc + curr);
 
// wersja subiektywnie czytelniejsza
const getSum = (...arr) => {
    return arr.reduce((acc, curr) => acc + curr); 
}

console.log(getSum(1, 2, 3, 4, 5));
console.log(getSum(5, 10, 15, 20));
console.log(getSum(2, 10, 9, 11));