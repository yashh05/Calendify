import React from "react";
import {useGoogleLogin} from "@react-oauth/google"
import axios from 'axios'

function LandingPage() {
 
  const responseGoogle=(response)=>{
    const {code}= response,
    axios.post("http://localhost:4000/api",{code})
    .then(response=>{
      console.log(response.data);
    })
    .catch(error=>{
      console.log(error.message);
    })
  }
const login = useGoogleLogin({
  onSuccess: ,
  flow: 'auth-code',
  cookie_policy:'single_host_origin',
  scope:'openid email profile https://www.googleapis.com/auth/calendar',

});

  return (
    <div className=" w-full">
      <button
        // onSuccess={(credentialResponse) => {
        //   console.log(credentialResponse);
        // }}
        // onError={() => {
        //   console.log("Login Failed");
        // }}
        // width="56px"

        // buttonText="Click to Connect to Calender"
        // scope="openid email profile https://www.googleapis.com/auth/calendar"
        // cookiePolicy={'single_host_origin'}
        // responsetype="code"
        // accessType="offline"
        className="border border-3 p-2 rounded-md bg-slate-300 hover:bg-white border-black mt-10 ml-20"
        onClick={()=>login()}
      >
        Connect to Google Calender
      </button>
      {/* <button className="border border-3 p-2 rounded-md bg-slate-300 hover:bg-white border-black mt-10 ml-20">
        Click to Connect to Calender
      </button> */}
    </div>
  );
}

export default LandingPage;
