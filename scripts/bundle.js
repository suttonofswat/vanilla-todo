(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';
// var _ = require('lodash');

var toDoBtn = document.getElementById('toDoBtn');
var label = document.getElementById('label');
var ulList = document.getElementById('ulList');
var lsList = document.getElementById('lsList');
var listArray = [];
localStorage['listArray'] = JSON.stringify(listArray);

toDoBtn.addEventListener('click', function () {
	listArray.push(label.value);
	console.log(label.value);
	render();
});

function render() {
	ulList.innerHTML = '';
	for (var i = 0; i < listArray.length; i++) {
		var toDoList = document.createElement('li');
		ulList.appendChild(toDoList);
		toDoList.innerHTML = listArray[i];
	}
};

for (var i = 0; i < localStorage.length; i++) {
	var doneList = document.createElement('div');
	lsList.appendChild(doneList);
	lsList.innerHTML = localStorage[i];
}

},{}]},{},[1])


//# sourceMappingURL=bundle.js.map