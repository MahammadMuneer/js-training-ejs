"use strict";

const friends = [
    { id: 1, name: 'Sting', nearMe: true },
    { id: 2, name: 'Radiohead', nearMe: true },
    { id: 3, name: 'NIN', nearMe: false },
    { id: 4, name: 'Echo', nearMe: true },
    { id: 5, name: 'Zeppelin', nearMe: false }
];
  
/*
names of friends who are near me
*/
console.log(friends.filter(each => each.nearMe === true).map(each => each.name));

// OR

console.log(friends.filter(each => each.nearMe).map(each => each.name));

// OR

let isNear = ({nearMe}) => nearMe;
let getName = ({name}) => name;
console.log(friends.filter(isNear).map(getName));