import './Login.css'
import logo from '../../assets/logo.png'
import { useEffect, useRef, useState } from 'react';
import { login,signup } from '../../firebase';

function Login(){

const [signState,setSignState]=useState("Sign Up")
const [name,setName] = useState("")
const [email,setEmail] = useState("")
const [password,setPassword ] = useState("")

// useRef
const modalRef = useRef();
const clsBtnRef = useRef();
const modalMesRef = useRef()

const user_auth = async (e)=>{
    e.preventDefault()
    if(signState==='Sign In')
    {
        await login(email,password,showErrorModal);
    }
    else
    {
        await signup(name,email,password,showErrorModal);
    }
}


useEffect(()=>{

    setName("");
    setEmail("");
    setPassword("");
},[signState])

// Function to show the modal with the error message
function showErrorModal(message) {
   
  
    modalMesRef.current.innerText = message;
    modalRef.current.style.display = 'block'; // Show the modal
  
    // Close the modal when clicking the "x" button

    clsBtnRef.current.onclick = function() {
      modalRef.current.style.display = 'none';
    };
  
    // Close the modal when clicking anywhere outside of it
    window.onclick = function(event) {
      if (event.target === modalRef.current) {
        modalRef.current.style.display = 'none';
      }
    };
  }
  

return(
    <div className='login'>
        {/* <!-- Modal Structure --> */}
    <div id="error-modal" ref={modalRef} class="modal">
         <div class="modal-content">
            <span ref={clsBtnRef} class="close-btn">&times;</span>
            <h2>Error</h2>
            <p ref={modalMesRef} id="modal-error-message"></p>
        </div>
    </div>

       <div className='login-logo'><img src={logo} alt="login logo"  /></div>
        <div className='login-form'>
            <h1>{signState}</h1>
            <form>
                {signState==='Sign Up'?<><input onChange={(e)=>setName(e.target.value)} value={name} name="name"  type="text" placeholder='Your name' /><br /></>:<></>}
                <input onChange={(e)=>setEmail(e.target.value)} name="email" value={email} type="email" placeholder='Your email'/><br />
                <input onChange={(e)=>setPassword(e.target.value)} name="password"  value={password} type="password" placeholder='password'/><br />
                <button onClick={user_auth} type='submit'>{signState}</button>
            </form>
            <div className="for-switch">
                {signState==='Sign Up'?<p>Already have an account? <span onClick={()=>setSignState("Sign In")}>Sign In now</span></p>:<p>New to Netflix? <span onClick={()=>setSignState("Sign Up")}>Sign Up now</span></p>}
            </div>
        </div>
        <div className='h-[305px] login-rounded-div div1 absolute w-[100%]'></div>
        <div className='h-[300px] login-rounded-div  div2 absolute w-[100%]'></div>
    </div>
    )
}

export default Login;