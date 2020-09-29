"use strict";

let tasks = [
    {
        name: 'Write for Envato Tuts+',
        duration: 120,
        isPriority: true
    },
    {
        name: 'Work out',
        duration: 60,
        isPriority: true
    },
    {
        name: 'Read Novel',
        duration: 240,
        isPriority: false
    },
    {
        name: 'Read EJS',
        duration: 120,
        isPriority: true

    },
    {
        name: 'Have dinner',
        duration: 30,
        isPriority: true
    },
    {
        name: 'Take a nap',
        duration: 10,
        isPriority: false
    },
    {
        name: 'Procrastinate on Duolingo',
        duration: 240,
        isPriority: false
    }
];

/* 
List of priority task names.
*/

console.log(tasks.filter(each=> each.isPriority === true).map(each => each.name));

//            OR

console.log(tasks.filter(each => each.isPriority).map(each => each.name));

//            OR

const isPriority = ({isPriority}) => isPriority;
const getName = ({name}) => name;
console.log(tasks.filter(isPriority).map(getName));

/*
How much effort is spent on non priority tasks 
*/

console.log(tasks.filter(each => each.isPriority === false)
                 .map(each => each.duration)
                 .reduce((acc, cur) => acc + cur));

//            OR

console.log(tasks.filter(each => !each.isPriority)
                 .map(each => each.duration)
                 .reduce((acc, cur) => acc + cur));
