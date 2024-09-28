import { PlusCircleOutlined } from "@ant-design/icons";
import React from "react";

function Header({ title, className, style, main_header,setModal,modal }) {
  return (
    <div className={className} style={{ ...style, display: "flex",justifyContent:'center' }}>
      {main_header ? (
        <div style={{ display: "flex", justifyContent: "space-between",width:'93vw',alignItems:'center' }}>
          <h1 style={{  textAlign: "center" }}>{title}</h1>
          <div style={{  paggin: "5px", marginRight: "0px",border:'2px solid white',
           borderRadius:'2px',backgroundColor:'violet',cursor:'pointer',padding:'0px 15px',display:'flex',background:'rgba(249, 249, 249 , 0.68)',color:'black'}} onClick={()=>{
            setModal(true)
           }}>
            <PlusCircleOutlined />
            <h4 style={{margin:'0px 5px',padding:'0px'}}>Add Task</h4>
            
          </div>
        </div>
      ) : (
        <h6 style={{ margin: "0px", textAlign: "center",padding:'10px 0px' }}>{title}</h6>
      )}
    </div>
  );
}

export default Header;
