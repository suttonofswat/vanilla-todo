'use strict';
// var _ = require('lodash');

var toDoBtn = document.getElementById('toDoBtn');
var label = document.getElementById('label');
var ulList = document.getElementById('ulList');
// var lsList = document.getElementById('lsList');
var listArray = [];
localStorage['listArray'] = JSON.stringify(listArray);

toDoBtn.addEventListener('click', function(){
	listArray.push(label.value);
	console.log(label.value);
	render();
	
});



function render(){
	ulList.innerHTML = ''
	for (var i=0; i < listArray.length; i++){
		var toDoList = document.createElement('li');
		ulList.appendChild(toDoList);
		toDoList.innerHTML = listArray[i];
	}

};


// for (var i = 0; i < localStorage.length; i++){
//    var doneList = document.createElement('div');
//    lsList.appendChild(doneList);
//    lsList.innerHTML = localStorage[i];

	
// }