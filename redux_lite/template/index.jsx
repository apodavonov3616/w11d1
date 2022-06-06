import React from 'react';
import ReactDOM from 'react-dom';
import Congrats from './congrats';
import {Store, combineReducers} from './components/store'

document.addEventListener("DOMContentLoaded", () => {
	const root = document.getElementById("root");
	ReactDOM.render(<Congrats/>, root);
});
