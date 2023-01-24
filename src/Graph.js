import { useReactToPrint } from 'react-to-print'
import React,{useRef} from 'react'
import { useEffect,useState } from 'react'
import{Line} from 'react-chartjs-2'
import { useNavigate } from 'react-router-dom'
import{Chart as ChartJS,Title,Tooltip,LineElement,Legend,CategoryScale,LinearScale,PointElement,Filler} from 'chart.js'
ChartJS.register(
    Title,Tooltip,LineElement,Legend,CategoryScale,LinearScale,PointElement,Filler
)
const Graph = () => {
    const componentRef=useRef();
    const handlePrint=useReactToPrint({
        content:()=>componentRef.current,
        documentTitle:'graph',
        onAfterPrint:()=>alert('print success')
    });
    const navigate=useNavigate();
    const tologin=()=>{
        localStorage.removeItem("jwt");
        navigate('/');
    }
    const buttonStyle={
        border:" none",
        color:"black",
        padding: "10px 16px",
        textAlign: "center",
        textDecoration: "none",
        display: "inline-block",
        fontSize:" 10px",
        position: "absolute",
          }
    const [data,setData]=useState({
        labels:["Jan","Feb","March","April","May","June","July","August","September","October","November","December"],
         datasets:[
             { label:"First Dataset",
               data:[10, 20, 30, 42, 51, 82, 31, 59, 61, 73, 91, 58],
               backgroundColor:'yellow',
               borderColor:'green',
               tension:0.4,
               fill:true,
               pointStyle:'rect',
                pointBorderColor:'blue',
                pointBackgroudColor:'#fff',
                showline:true,
                drawBorder:false
             }
         ],
     })  
    useEffect(()=>{
        let arr=[];
          fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => {console.log("json",json)
       json.map((item,index)=>{
       arr.push(item.id);
       arr.reverse();
       setData({
        labels:["Jan","Feb","March","April","May","June","July","August","September","October","November","December"],
         datasets:[
             { label:"First Dataset",
               data:arr,
               backgroundColor:'yellow',
               borderColor:'green',
               tension:0.4,
               fill:true,
               pointStyle:'rect',
                pointBorderColor:'blue',
                pointBackgroudColor:'#fff',
                showline:true,
                drawBorder:false
             }
         ],
     })
     })})
      console.log("arr",arr)
     console.log(data);  
    },[])
  return (
    <div style={{position: "absolute",
    top:0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: "auto",
    width: "500px",
    height: "500px"}}>
    <div ref={componentRef}>
        <Line data={data}>Hello</Line>
    </div>
    <button onClick={tologin} style={{margin:"50px",fontSize:"20px"}} >LOGOUT</button>
    <button onClick={handlePrint} style={{margin:"50px",fontSize:"20px"}} >PRINT</button>
    </div>
  )
}

export default Graph