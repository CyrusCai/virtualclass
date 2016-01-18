'use strict';
var socket = io();
var optionID;
socket.on('questionToStudent', renderQuestion);
/**
 * For the given question, generates DOM elements and
 * appends to the parent element.
 * @param question the question object
 * @param parent the DOM element to append question to
 */
function renderQuestion(quiz) {
        var question= quiz.question;
        document.body.innerHTML = '<br><label id="question">Question:</label>'+question+'</br>';
        document.body.innerHTML += '<ul id = "options"> </ul>';
        document.body.innerHTML +='<br><label>student Answer is:</label><label id="studentAnswer"></label></br>';
        addOptions(quiz.options);
        addSendButton('send');
}

function addOptions(optionList)
{
    var optionsElement = document.getElementById('options');
    optionList.forEach(establishOption(optionJsonObj,optionsElement));
}

function establishOption(optionJsonObj,optionsElement){
    var optionElement = document.createElement('li');
    var labelElement = document.createElement('label');
    labelElement.innerHTML=optionJsonObj.option;

    addEventListenerToOption(labelElement,optionJsonObj);
    optionElement.appendChild(labelElement);
    optionsElement.appendChild(optionElement);

}

function addEventListenerToOption(labelElement,optionJsonObj)
{
    labelElement.addEventListener('click',function(){
        document.getElementById('studentAnswer').innerHTML = optionJsonObj.option;
        optionID=optionJsonObj.id;
    });
}
/*function addOptions(optionList){
    var optionsElement = document.getElementById('options');
    optionList.forEach(function(option) {
        var optionElement = document.createElement('li');
        var labelElement = document.createElement('label');
        labelElement.innerHTML = option;
        labelElement.addEventListener('click',function(){
            document.getElementById('studentAnswer').innerHTML = option;
        });

        optionElement.appendChild(labelElement);
        optionsElement.appendChild(optionElement);
    });
}*/
function addSendButton(content){
    var sendButton=document.createElement('button');
    sendButton.innerHTML = content;
    document.body.appendChild(sendButton);
    sendButton.addEventListener('click', sendAnswer);
}
function getQuestionId(quiz){
    var questionId =  quiz.id;
    return questionId;
}
function getQuestionText() {
    var el = document.getElementById('question');
    return el.innerHTML;
}

function getAnswerText() {
    var el = document.getElementById('studentAnswer');
    return el.innerHTML;
}

function getAnswer() {
    return {
        question: getQuestionText(),
        option: getAnswerText()
    }
}

function sendAnswer() {
    var answer = getAnswer();
    socket.emit('answerFromStudent',answer);
    console.log(answer);
}

var dummyQuest={question:"question one",options:['a.option','b.option']};
renderQuestion(dummyQuest);