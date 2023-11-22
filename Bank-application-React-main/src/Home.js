
import React from 'react'
import './HHome.css';
import { useNavigate } from 'react-router-dom';

export default function Home() {

    const navigate = useNavigate();

  return (

    <div> 
    <nav class="navbar background"> 
        <ul class="nav-list"> 
          
            <li><a href="#home">HOME</a></li> 
            <li><a href="#acdetails">ACCOUNT DETAILS</a></li> 
            <li><a href="#trans">TRANSACTION</a></li> 
            <li><a href='#signout'>SIGN OUT</a></li> 
        </ul> 

        <div class="rightNav"> 
        
            <button class="btm btn-sm" onClick={()=>navigate('login')}>LOGIN</button> 
            <button class="btn btn-sm" onClick={()=>navigate('signup')}>SIGNUP</button> 
            
        </div> 
    </nav> 
    <div className='mc'>
        <section className='c'>
            <p className='cw'>
                FOR YOUR SAFE AND SECURE TRANSACTION
            </p>
            
            
            
               <b className='bn'>TCIC</b>  <p>Never ask for confidential information such as PIN and OTP from customers.<br></br>
                Any such call can be made by a fraudster. Please do not share personal info.</p>
            
                
        </section>
        <section className='cimg'>

        </section>
    </div>
    <div className='blogo'>
        <section>

        </section>
    </div>

    
    <footer className="footer"> 
        <p className="text-footer"> 
            Copyright ©-All rights are reserved 
        </p> 
    </footer> 
</div> 
  )

} 

      
 

