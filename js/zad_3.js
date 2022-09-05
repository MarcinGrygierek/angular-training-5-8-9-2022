// v1
const cars = [
    {
        name: 'Toyota',
        isBroken: false,
    },
    {
        name: 'Fiat',
        isBroken: true,
    },
    {
        name: 'Mercedes',
        isBroken: false,
    },
    {
        name: 'Porsche',
        isBroken: true
    }
 ]
 
//  const getBrokenCarsInfo = (items) => {
//      const broken = items.filter(el => el.isBroken);
//      const mappedInfo = broken.map(el => `Samochód ${el.name} jest zesputy`);
//      return mappedInfo;
//  }

// brak stanów pośrednich
 const getBrokenCarsInfo = (items) => {
     return items
         .filter(el => el.isBroken)
         .map(el => `Samochód ${el.name} jest zesputy`);
 }
 
 const filteredCars = getBrokenCarsInfo(cars);