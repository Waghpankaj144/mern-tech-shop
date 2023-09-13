import React from 'react'

function Modal(props) {

  function handleChange(event){
    const {name,value}=event.target;
    props.setAddress((prevDetails)=>{
      return{
      ...prevDetails,
      [name]: value
      }

    })

  }
  return (
    <div className="modal-background">

   <div className="modal-container">

     <h3 style={{marginBottom:"18px",fontSize:"18.5px",textDecoration:"underline",fontWeight:"bold"}}>Enter Shipping Details</h3>
      <form style={{width:"90%"}}>
     
      <div 
       className="form-group">
    <label style={{fontSize:"16px"}}>Flat / House no, Building, Company, Apartment</label>
    <br></br>
    <input style={{fontSize:"16px",margin:"10px 0px",width:"100%",height:"30px"}} type="text" class="form-control" name ="flatNo" value={props.address.flatNo} placeholder=""   onChange={handleChange}  />
  </div>
 
  <div className="form-group">
    <label  style={{fontSize:"16px"}}>Area, Street, Sector, Village</label>
    <br></br>
    <input  style={{fontSize:"16px",margin:"10px 0px",width:"100%",height:"30px"}}  type="text" class="form-control" name="area" value={props.address.area} placeholder=""  onChange={handleChange}  />
  </div>

  <div className="form-group">
    <label  style={{fontSize:"16px"}}>Landmark</label>
    <br></br>
    <input  style={{fontSize:"16px",margin:"10px 0px",width:"100%",height:"30px"}} type="text" class="form-control" name="landmark" value={props.address.landmark} placeholder="eg. near royal hotel"  onChange={handleChange} />
  </div>
  <div className="form-group">
    <label  style={{fontSize:"16px"}}>Pin Code</label>
    <br></br>
    <input style={{fontSize:"16px",margin:"10px 0px",width:"100%",height:"30px"}}  type="text"  maxLength="6"class="form-control" name="pincode" value={props.address.pincode} placeholder="Enter 6 Digit Pincode"  onChange={handleChange} />
  </div>
  
  <div className="form-group">
    <label  style={{fontSize:"16px"}}>City/ Town</label>
    <br></br>
    <input  style={{fontSize:"16px",margin:"10px 0px ",width:"100%",height:"30px"}} type="text" class="form-control" name="city" value={props.address.city} placeholder="" onChange={handleChange}  />
  </div>
  <div className="form-group">
    <label  style={{fontSize:"16px"}} >Selct State</label>
    <br></br>
    <input  style={{fontSize:"16px",margin:"10px 0px",width:"100%",height:"30px"}} type="text" class="form-control" name="state" value={props.address.state} placeholder=""  onChange={handleChange} />
  </div>
  


  
  
  <button
  style={{width:"200px",height:"30px",borderRadius:"10px",backgroundColor:"white"}}
        onClick={()=>{
        props.close(false);
      }}
  
   type="submit" className="btn btn-primary">
    Submit
  
  </button>
 
  </form>

      
    </div>
      
    </div>
  )
}

export default Modal
