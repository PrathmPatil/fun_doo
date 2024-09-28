import React from "react";
import Header from "./header";
import Task from "./Task";

function List({title,data,status,fetchTasks}) {
    let dataList=data?.filter((value)=>value?.status === status)
  return (
    <div      style={{
      minHeight: "60vh",
      minWidth: "30vw",
      border: "none",
      borderRadius: "10px",
      backdropFilter: "blur(-14px) brightness(15)",
      background: "rgba(255, 255, 255, 0.2)",
      boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
      display: "flex",
      justifyContent: "space-around",
      margin: "10px",
    }}
    >
      <div
       
        style={{background:'#fff',
          color: "black",
          height: "100%",
          width: "100%",
          margin: "10px",
          display:'flex',
          flexDirection:'column',
          justifyContent:'center',
          
        }}
      >
<Header title={title} style={{background:'#281111c4',color:'white'}}/>
<div style={{
    display:'flex',
    flexDirection:'column',
    maxHeight:'50vh',
    overflow:"hidden",
    overflowY:'scroll'
}}>
{ dataList?.length >0 && dataList?.map((value,index)=>{
    return(
        <Task title={value.title} icon={value.status} value={value} fetchTasks={fetchTasks}/>
    )
})}  </div> 
   </div>
     
    </div>
  );
}

export default List;
