import React,{usestate} from 'react'
import Styles from './Signup.module.css'

export const Signup = () => {
    const signup=()=>{
const [Name,SetName]=usestate("")
const [Password,SetPassword]=usestate("")
const [Phone,SetPhon]=usestate("")
const [Email,SetEmail]=usestate("")
    }
  return (
    <div>
    <h1>Register</h1>
    <div className={Styles.forms}>
    <input className='bai ' type='text' placeholder='Name'></input>
    <input className='bai r2' type='Email' placeholder='bai@12345'></input>
    <input className='bai r3' type='Phone' placeholder='879012345'></input>
    <input className='bai r4' type='Password' placeholder='Password'></input>
    <button>Submit</button>
    
    </div>
    </div>
  )
}
