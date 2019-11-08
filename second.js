'use strict';
/*
 * second.mjs
 */
//res.setHeader('Access-Control-Allow-Origin', '*');

//import {$, Quiz} from 'https://github.com/Dominoeffekten/DE.mod.10A/blob/master/modules/shape.js';
import {$, Quiz} from './modules/shape.js';


let things = [];
var score = 0;

console.log('b, c, a, a, c, b, b, a');

//spørgsmål 1
let quiz = Object.create(Quiz);
quiz.init('What is a function?', 'The same as an loop', 0, 'It is a group of statements that perform a specific task', 1, 'It has an input and output', 0);//navn, sporg1, value1, sporg2, value2, sporg3, value3
things.push(quiz);

//spørgsmål 2
let quiz1 = Object.create(Quiz);
quiz1.init('Loops are...', 'checking if the user have clicked on an element', 0, 'telling the user what day it is', 0, 'checking a condition', 1);//navn, sporg1, value1, sporg2, value2, sporg3, value3
things.push(quiz1);

//spørgsmål 3
let quiz3 = Object.create(Quiz);
quiz3.init('What is an object?', 'It is a group of variables and function which create a model to do something', 1, 'It is a function which describes the date', 0, 'It is a another name for JavaScript modules', 0);//navn, sporg1, value1, sporg2, value2, sporg3, value3
things.push(quiz3);

//spørgsmål 4
let quiz4 = Object.create(Quiz);
quiz4.init('Which of these operators is equal to?', '==', 1, '!=', 0, '>=', 0);//navn, sporg1, value1, sporg2, value2, sporg3, value3
things.push(quiz4);

//spørgsmål 5
let quiz5 = Object.create(Quiz);
quiz5.init('EventListner can..', 'can show a date', 0, 'collect data from the user', 0, 'see if the user have clicked on an element', 1);//navn, sporg1, value1, sporg2, value2, sporg3, value3
things.push(quiz5);

//spørgsmål 6
let quiz6 = Object.create(Quiz);
quiz6.init('What is an array?', 'Another form of an expression', 0, 'A variable that stores a list of values', 1, 'It is a variable that rely on operators', 0);//navn, sporg1, value1, sporg2, value2, sporg3, value3
things.push(quiz6);

//spørgsmål 7
let quiz7 = Object.create(Quiz);
quiz7.init('What is a statement?', 'It explained how what the code does', 0, 'An instruction that a computer can follow on-by-one', 1, 'It store some information in it, so you can use it later', 0);//navn, sporg1, value1, sporg2, value2, sporg3, value3
things.push(quiz7);

//spørgsmål 8
let quiz8 = Object.create(Quiz);
quiz8.init('How do you name variables?', 'The name must begin with a letter, $, or _ ', 1, 'The name must begin with a letter, number or _', 0, 'The name must begin with number, letter or $', 0);//navn, sporg1, value1, sporg2, value2, sporg3, value3
things.push(quiz8);



 

///Tjek spørgsmål + sæt score
$('yourScore').innerHTML = 'Correct: ' + score + ' out of 8' ;

function start(){
    $('formid').addEventListener('change', function(){
        if(quiz.check() == false){
            alert('Har du svaret?');
        } 
        for(var i = 0; i < things.length; i++){
            if(things[i].correct() == true ){
                score++;
                $('yourScore').innerHTML = 'Correct: ' + score + ' out of 8' ;
            }
            //Går videre til næste spg,når der bliver valgt et spg.
            if($('a').checked == true || $('b').checked == true || $('c').checked == true){
                things.shift(); 
                show();
            }
        }
    });
};

//Går videre til næste spg,når der bliver valgt et spg.
function hide2() { 
    for(var i = 0; i < things.length; i++){
        things.shift(); 
        show();
    }   
};

//Vis spørgsmål
//$('quiz').innerHTML = quiz.vis();
//$('quiz').innerHTML = quiz1.vis();
function show(){
    for (var i = 0; i < things.length; i++) {
        $('quiz').innerHTML = things[0].vis();
        start();
    }
};
show();