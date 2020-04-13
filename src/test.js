import React, {useState, useEffect, useCallback} from 'react'
import useInput from './useInput'
import styled from 'styled-components'

export const Button = styled.button`
    background-color: ${props => props.gold ? 'gold' : 'pink'};
    border: 1px solid teal;
    padding: 15px;
    &:hover {
        background-color: red;
    }
`
const Ech = styled.h1`
    font-size: 50px;
`


const Test = () => {
    const [name, setName] = useState('Mojeed')
    const [count, setCount] = useState(0)
    const [NameDrop] = useInput('name')
    const [PassDrop] = useInput('pass')

    useEffect(() => {
        console.log('componentDidMount')
    }, [name, count])
    return(
        <div>
            <Button gold>gold</Button>
    <h1>Hi, I am {name} and it was clicked {count} times {test.content}</h1> 
            <NameDrop />
            <PassDrop />
            <button onClick={() => setCount(count+1)}>count</button>
            <button onClick={() => setName(name === 'Mojeed' ? 'ewe': 'lanre')}>name</button>
        </div>
    )
}
export default Test