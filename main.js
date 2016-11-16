import $ from 'jquery';
import {add, subtract, multiply, divide} from './calculator.js';

$(document).ready(function() {
    const addBtn = $('.add-btn'),
          subtractBtn = $('.subtract-btn'),
          multiplyBtn = $('.multiply-btn'),
          divideBtn = $('.divide-btn'),
          firstNum = $('.first-number'),
          secondNum = $('.second-number'),
          answer = $('.answer');

    
    function calculateAns(cb) {
        return function() {
            let ans = cb(firstNum.val(), secondNum.val())
            answer.text(ans);
        }
    }

    addBtn.click(calculateAns(add))
    subtractBtn.click(calculateAns(subtract))
    multiplyBtn.click(calculateAns(multiply))
    divideBtn.click(calculateAns(divide))
})