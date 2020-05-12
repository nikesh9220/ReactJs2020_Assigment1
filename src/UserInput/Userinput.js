import React from 'react'

const UserInput = (props) =>{
    const style ={
        border: '3px solid black'
    }
       return <input type="text"  onChange={props.change} value={props.userName} style={style} />
       
        
}
export default UserInput;