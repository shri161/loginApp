import Axios  from 'axios'
import React, { useState } from 'react'
import{Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const Form = () => {
    const navigate=useNavigate();
    const mystyle={
        // height: "300px",
        // width: "200px",
        backgroundColor:"#66cdaa",
//         display: "flex",
//   justifyContent:"center",
//   alignItems: "center",
//   textAlign: "center",
//   minHeight: "100vh",
position: "absolute",
top:0,
bottom: 0,
left: 0,
right: 0,
margin: "auto",
width:" 200px",
height: "350px",

    }
    const buttonStyle={
  border:" none",
  color:"black",
  padding: "10px 16px",
  textAlign: "center",
  textDecoration: "none",
  display: "inline-block",
  fontSize:" 16px",
  marginLeft:"60px",marginTop:"20px"
    }
    const [password,setPassword]=useState("")
    const [uid,setUid]=useState("")
    const postData=(e)=>{
        e.preventDefault();
        const body={
            uid,
            password,
            blocked:0
        }  
        
        console.log(body);
        Axios.post('https://myphysio.digitaldarwin.in/api/login/'
        ,body
         ).then(res=>{
            localStorage.setItem('jwt',res.data.jwt)
            console.log("YES"); 
           navigate('/about');
         }).catch(err=>console.log(err))
    
    }
    console.log(uid);
    console.log(password);
  return (
    <div style={mystyle}>
        <h1 style={{color:"white",margin:"20px"}}>PHYSIOAI</h1>
        <h2 style={{color:"black",fontWeight:"normal",margin:"10px"}}>Welcome Back!</h2>
    <form>
     <label style={{fontFamily:"serif",margin:"20px"}} >Username</label>
     <input className='w3-input w3-border w3-round' style={{margin:"10px",boxSizing:"inherit"}}type="text" value={uid} onChange={(e)=>setUid(e.target.value)}></input>
     <label style={{fontFamily:"serif",margin:"20px"}}>Password</label>
     <input style={{margin:"10px"}} type="password" value={password} onChange={(e)=>setPassword(e.target.value)}></input>
     <button style={buttonStyle} onClick={postData}>Login</button>
    </form>
    </div>
  )
}

export default Form