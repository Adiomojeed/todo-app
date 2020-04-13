import React, {useState} from 'react'

const useInput = (val1) => {
    const [oruko, setOruko] = useState(val1)
    const userDrop = () => {
        return (
            <input 
                type='text' 
                value={oruko} 
                onChange={e => {
                    setOruko(e.target.value)
                    
                }}
            />
        )
    }
    return [userDrop]
}
export default useInput