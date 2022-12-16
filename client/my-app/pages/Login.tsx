import React from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import {MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
  } from "firebase/auth";

  import Link from "next/link"
  import AppContext from './AppContext.js'
  import {useState,useContext} from "react"

function Login() {

    /////////////////////////////////////  useStates   ///////////////////////////////////
const[email,setEmail]=useState("")
const[password,setPassword]=useState("")
const [loading, setLoading] = useState(false);

const [userInfo,setUserInfo]=useState("")
const [error, setError] = useState(false);
    //////////////////////////////////////////////////////////////////////////////////////////

    const setUserData=useContext(AppContext)


      /////////////////////////////////////  FireBase config  (HAD MAYMESOU) ///////////////////////////////////
const firebaseConfig = {
        apiKey: "AIzaSyAB4Tbd8160wL9DLTgQXb8QmuKa7oVVZ_w",
        authDomain: "fedi-brand.firebaseapp.com",
        projectId: "fedi-brand",
        storageBucket: "fedi-brand.appspot.com",
        messagingSenderId: "173756680980",
        appId: "1:173756680980:web:6f8b4400b81bdb6f181001",
        measurementId: "G-X5FVPCC6SK"
      };
      //////////////////////////////////////////////////////////////////////////////////////////

const app = initializeApp(firebaseConfig);
const auth = getAuth();


/////////////////////////////////////  kI BECH TA3MEL AWEL MARA COMPTE   ///////////////////////////////////
const submitThis = (e) => {
    setLoading(true);
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((Credential) => {
        setLoading(false);
        setUserInfo(Credential.user);
    
        // here to put the function that will insert in the database
        console.log("######## ", Credential.user.uid);
        console.log("######## ", Credential.user.email);
        //insertUser(Credential.user.uid, Credential.user.email); // CALLING THE FUNCTION OF INSERTING USER INTO DATABASE
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
        console.log(err);
      });
  };
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  

  /////////////////////////////////////  kI BECH TA3MEL LOGIN (DEJA ANDEK COMPTE)   ///////////////////////////////////
  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email,password)
      .then((res) => {
        console.log("User LoggedIn", res.user);
        setUserData.setUserInfo(res.user)
        setUserData.setFavoriteData(email)
        
      })
      .then((err) => {
        setLoading(false);
        setError(true);
        console.log(err);
      });

  };
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  if (loading) {
    return <ClipLoader color={"green"} loading={loading} size={300} />;
  }


  return (
    <MDBContainer fluid className="p-3 my-5 h-custom">

      <MDBRow>

        <MDBCol col='10' md='6'>
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="img-fluid" alt="Sample image" />
        </MDBCol>

        <MDBCol col='4' md='6'>

         

          <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg" onChange={(e)=>setEmail(e.target.value)}/>
          <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg" onChange={(e)=>setPassword(e.target.value)}/>

          <div className="d-flex justify-content-between mb-4">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
            
          </div>

              {error?<h5 className="warning">Your have an error in your information, please check again </h5>:null}
          <div className='text-center text-md-start mt-4 pt-2'>
            <Link href="/"><MDBBtn className="buttonLogin"  onClick={(e)=>{console.log(email,password)
            submitThis(e)
            }}>Sign in</MDBBtn></Link>
            <MDBBtn className="buttonLogin" onClick={(e)=>{console.log(email,password)
            handleLogin(e)
            }}>Login</MDBBtn>
            <p className="small fw-bold mt-2 pt-1 mb-2">Don't have an account? <a href="#!" className="link-danger">Register</a></p>
          </div>

        </MDBCol>

      </MDBRow>

    

    </MDBContainer>
  );
}

export default Login;