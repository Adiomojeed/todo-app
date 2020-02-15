import React from 'react';
import ReactDOM from 'react-dom';
import '../css/style.css'


class TodoPage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            value: '',
            listItems: []
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleAdd=this.handleAdd.bind(this);
        this.handleDelete=this.handleDelete.bind(this);
    }

    handleChange(e){
        this.setState({value: e.target.value})
    }

    handleAdd(){
        var arr = [...this.state.listItems]

        if (this.state.value.length > 1){
            arr.push({value: this.state.value, key: this.state.value})
        }

        else{
            arr.push({value: this.state.value, key: this.state.value})
            arr.pop({value: this.state.value, key: this.state.value})
        }
        
        this.setState({listItems: arr, value: ''})
    }

    handleDelete(val){
        var newArr = this.state.listItems.filter(x => (x.key != val))
        this.setState({listItems: newArr})
    }

    render(){
        return(
            <React.Fragment>
                <div className='container'>
                <h1>Todo List</h1>
                <div className='form-group'>
                    <input type='text' className='form-control' value={this.state.value} onChange={this.handleChange} />
                    <input type='submit' className='btn' value='Add Item' onClick={this.handleAdd} />
                </div>
                <ul className='list-group'>
                    {this.state.listItems.map(item => (
                        <div className='dflex'>
                            <li key={item.key}>
                                {item.value}
                            </li>    
                            <button className='btn-danger' onClick={() => this.handleDelete(item.key)}>
                                    Delete Item
                                </button>                    
                        </div>
                    ))}
                </ul>
            </div>
            <footer>
                <i className='fas fa-laptop-code'></i> with  
                <i className='fab fa-html5'></i>, 
                <i className='fab fa-css3-alt'></i> &amp; 
                <span className='react'><i className='fab fa-react react'></i></span> <br/>
                By codeLeaf
                <i className='fas fa-rocket'></i>
            </footer>
            </React.Fragment>
        )
    }
}

export default TodoPage;