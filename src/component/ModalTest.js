import React from 'react'

class Lesson extends React.Component {
    constructor (props) {
        super (props)
        this.state={
            isModalOpen: false
        }
        this.handleClick=this.handleClick.bind(this);
        
    }
    handleClick () {
        this.setState({isModalOpen: true})
    }
    handleClickClose () {
        this.setState({isModalOpen: false})
      }
    render () {
        let modal;
        if (this.state.isModalOpen) {
            modal = (
                <div className='modal' onClick={() => {this.handleClickClose()}}>
                    <div className='modal-intro'>
                        <div className='modal-body'>
                            <h2>{this.props.name}</h2>
                            <p>{this.props.intro}</p>
                        </div>
                        
                        <button type='button' onClick={() => {this.handleClickClose()}}>close</button>
                    </div>
                </div>
            )
        }
        return (
            <div>
                <div className='lesson-item' onClick={this.handleClick}>
                    <p>{this.props.name}</p>
                </div>
                {modal}
            </div>
        )
    }
}

export default Lesson