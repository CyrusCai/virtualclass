var sock = io();

sock.on('questionFromTeacher', function(){
	setJson();
})
sock.emit('questionFromTeacher',)

function setJson(){
	
	var optionOne = document.getElementById('optionOne').value;
	var optionTwo = document.getElementById('optionTwo').value;
	var questionOne = document.getElementById('questionOne').value;

	var question = {};

	question[questionOne] = [optionOne, optionTwo];
	JSON.stringify(question);
	
};
