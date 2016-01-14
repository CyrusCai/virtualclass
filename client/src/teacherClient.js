'use strict';

var sock = io();

var question = function setJson(){
	
	var optionOne = document.getElementById('optionOne').value;
	var optionTwo = document.getElementById('optionTwo').value;
	var questionOne = document.getElementById('questionOne').value;

	var question = {};

	question[questionOne] = [optionOne, optionTwo];
	return JSON.stringify(question);	
};

sock.on('answerToTeacher', displayAnswer);

function displayAnswer(answer) {
	for(var i in answer){
		document.getElementById('questionST').innerHTML = i;
		document.getElementById('answerST').innerHTML = answer[i];
	}
    
}

sock.emit('questionFromTeacher', question);