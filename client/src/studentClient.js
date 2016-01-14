"use strict";

function receiveFromJson(){
    socket.on('questionFromTeacher',displayQustionFromJson);

}

function displayQustionFromJson(JsonObj)
{
    var dataArray=JsonObj.split(':');
    document.getElementById("question").innerHTML=dataArray[0];

    var answerArray=dataArray[1].split(',');
    document.getElementById("option1").innerHTML=answerArray[0];
    document.getElementById("option2").innerHTML=answerArray[1];
    document.getElementById("option2").innerHTML=answerArray[2];
    document.getElementById("option2").innerHTML=answerArray[3];

}

function setAns2Json(){
    var question = document.getElementById("question");
    var answer = document.getElementsByName("option");
    console.log("answer is "+ answer);

    var oriAnswer = {};
    oriAnswer[question] = answer;
    var ansJSON = JSON.stringify(oriAnswer);

    var socket=io();


    socket.emit('answerFromStudent',oriAnswer);
}

