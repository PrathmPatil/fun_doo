import { HeartFilled } from '@ant-design/icons'
import React from 'react'

function Footer() {
  return (
    <div style={{width:'100vw',height:'5vh',background:'black',color:'white',display:'flex',alignItems:'center',justifyContent:'center'}}>
      <p style={{margin:'0px'}}>"Thank you for giving me this opportunity." </p><HeartFilled />
    </div>
  )
}

export default Footer
