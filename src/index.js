import React from "react";
import ReactDOM from "react-dom";
/** import TodoList from './component/TodoList'; **/
import TodoPage from './component/TodoPage'


class Index extends React.Component {
    render() {
        return (
            <TodoPage />
        )
    }
}

let App = document.getElementById('app')
ReactDOM.render(<Index />, App);