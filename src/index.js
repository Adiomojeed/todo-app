import React from "react";
import ReactDOM from "react-dom";
import Lesson from './component/ModalTest';
import './css/style.css'
/** import TodoList from './component/TodoList'; **/
//import TodoPage from './component/TodoPage'
//import Test, {Button} from './test'
//import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'
//import NotFound from './notFound'

class Index extends React.Component {
    render() {
    const lessonItem = [
        {name: 'HTML/CSS', intro: "Intro to html"},
        {name: 'SASS', intro: "Intro to sass"},
        {name: 'REACT', intro: "Intro to react"}
    ];
    return (
        <div>
            {lessonItem.map(item => {
                return (
                    <Lesson name={item.name} intro={item.intro} key={item.intro} />
                )
            })}
        </div>
    )}   
}

let App = document.getElementById('app')
ReactDOM.render(<Index />, App);