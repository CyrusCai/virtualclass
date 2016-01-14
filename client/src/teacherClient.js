'use strict';

var sock = io();

function setJson(){	
	var optionOne = document.getElementById('optionOne').value;
	var optionTwo = document.getElementById('optionTwo').value;
	var questionOne = document.getElementById('questionOne').value;

	var question = {};

	question[questionOne] = [optionOne, optionTwo];
	var response = JSON.stringify(question);
	sock.emit('questionFromTeacher', response);	
};

sock.on('answerToTeacher', displayAnswer);

function displayAnswer(answer) {
	for(var i in answer){
		document.getElementById('questionST').innerHTML = i;
		document.getElementById('answerST').innerHTML = answer[i];
	}
    
}

