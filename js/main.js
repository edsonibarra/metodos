import { forEachObject, filterObject, findObject, mapObject, findIndexObject, containsObject, pluckObject, withoutObject} from './methods-within-objects.js'

//ARRAYS UTILIZADOS PARA HACER LAS PRUEBAS
//ESTOS ARRAYS SE UTILIZAN EN TODO EL CODIGO
const integers = [2,4,6,8,6];
const adjectives = ['great', 'big', 'white', 'small', 'four','white'];
const returnNegativeOne = [1,2,3];
const stooges = [{name: 'moe', age: 40},{name: 'larry', age: 50},{name: 'curly', age: 60}];

// FOR EACH METHOD
forEachObject.forEachEdson(integers, (item) => {
    console.log(item);
});
// FILTER METHOD
const arrayEdson = filterObject.filterEdson(adjectives, (item) => item.length > 4);
console.log(arrayEdson);
// FIND METHOD
const valueReturned = findObject.findEdson(integers, (integer) => integer > 5);
console.log(valueReturned);
// MAP METHOD
const sqrtValues = mapObject.mapEdson(integers, (integer) => integer**2);
console.log(sqrtValues);
// FIND INDEX METHOD
console.log(findIndexObject.findIndexEdson(integers, (integer) => integer > 7));
console.log(findIndexObject.findIndexEdson(adjectives, (adjective) => adjective === 'white'));
console.log(findIndexObject.findIndexEdson(returnNegativeOne, (item) => item > 7));
console.log(findIndexObject.findIndexEdson(adjectives, (adjective) => adjective === 'fast'));
// CONTAINS METHOD _.
console.log(containsObject.containsEdson(adjectives[0], 't'));
console.log(containsObject.containsEdson(integers, 10));
// PLUCK METHOD _.
const valuesFromPluck = pluckObject.pluckEdson(stooges, 'name');
console.log(valuesFromPluck);
const valuesFromPluckAge = pluckObject.pluckEdson(stooges, 'age');
console.log(valuesFromPluckAge);
// WITHOUT METHOD _.
console.log(withoutObject.withoutMethodEdson(integers, 2,4,11));
const justSizes = withoutObject.withoutMethodEdson(adjectives, 'white','great','four');
console.log(justSizes);