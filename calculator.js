import calc from './utilities.js';

function calcAdd(a, b) {
    return a + b;
}

function calcSubtract(a, b) {
    return a - b;
}

function calcDivide(a, b) {
    return a / b;
}

function calcMult(a, b) {
    return a * b;
}

export function add(a, b) {
    return calc(a, b, calcAdd)
}

export function subtract(a, b) {
    return calc(a, b, calcSubtract)
}

export function divide(a, b) {
    return calc(a, b, calcDivide)
}

export function multiply(a, b) {
    return calc(a, b, calcMult);
}