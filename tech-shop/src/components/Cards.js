import React from 'react'

function Cards() {
  return (
    <div className="card-payment">
    <div>
    <div className="payment-type-img">
    <img className="img" 
      src="images/cash-on-delivery.png"
      alt=""
    />
    </div>
    <h3>Add New Card</h3>
    <p className="paragraph">We accept card from Mastercard, American Express, Rupay, Visa</p>
    </div>
    <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Full Name</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Full Name" />
  </div>
 
 
  
  <div class="form-group card-form">
    <label for="exampleInputLandmark">Card Number</label>
    <input type="text" class="form-control" id="xampleInputLandmark" aria-describedby="emailHelp" />
  </div>
  
  
  <div class="form-group">
    <label for="exampleInputCity">Expiry Date</label>
    <input type="text" class="form-control" id="exampleInputCit" aria-describedby="emailHelp" placeholder="" />
  </div>

  <a href=".">
     <button style={{color:"white",backgroundColor:"green",fontSize:"20px"}}>
       <p className="paragraph">Pay<span>&#8377;</span>100</p>
     </button>
    </a>
  
 
  </form>
   

    </div>
  )
}

export default Cards
