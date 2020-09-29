"use strict";

let data = [
    {
        name: 'Butters',
        age: 3,
        type: 'dog'
    },
    {
        name: 'Lizzy',
        age: 6,
        type: 'dog'
    },
    {
        name: 'Red',
        age: 1,
        type: 'cat'
    },
    {
        name: 'Joey',
        age: 3,
        type: 'dog'
    },
];

/*
Select only the dogs
Translate their ages into dog years (multiply them by seven)
Sum the results
*/

/*let result = data.filter(each => each.type === "dog");
console.log(result);
result = result.map(data => data.age * 2);
console.log(result);
result = result.reduce((acc, cur) => acc + cur);
console.log(result);*/

//             OR

let result = data.filter(each => each.type === "dog")
                 .map(data => data.age * 2)
                 .reduce((acc, cur) => acc + cur);
console.log(result);