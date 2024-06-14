import React from 'react'

export default function Alert(props) {
  return (
    <div>

   {props.alert&& <div><div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
   <strong>
    
    </strong>{props.alert.message} 
   
  </div></div>}
      </div>
  )
}
