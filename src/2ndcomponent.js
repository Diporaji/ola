// import React, { useState } from 'react'
function Myform(){
    const [emailEntered,setEmailEntered]=useState('')
    const [passswordEntered,setpasswordEntered]=useState('')
    function formhandler(event){
        event.preventDefault();
        const fhg=new FormData(event.target)
        const myemail=Object.fromEntries(fhg.entries());
        const hgvgj=fhg.get('email');
        console.log(hgvgj)
        const mypass=fhg.get('pass')
        
        
        
        // console.log(myemail)
        // console.log(mypass)

    }
    // function passget(event){
    //     setpasswordEntered(event.target.value);
    // }
    // function emailget(event){
    //     setEmailEntered(event.target.value);
    // }

    <div>
    <form>
        <h2>LOGIN FORM</h2>
        <div className="form-control">
            <label htmlFor="email">Email</label><br/>
            <input 
            type="email" 
            id="email"
            name="email"
            // onChange={emailget}
            value={emailEntered}
            />
        </div>
        <div className="form-control">
            <label htmlFor="password">Email</label><br/>
            <input 
            type="passsword" 
            id="password"    
            name="pass"
            // onChange={passget}
            value={passswordEntered}
            />
        </div>
        <button>send</button>
    </form>
    </div>

}

export default Myform