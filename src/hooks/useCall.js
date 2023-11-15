import React, { useState, useEffect } from "react";

const useCall = () => {
    // let [response, setResponse]= useState({
    //     responseValue:{},
    //     success:false,
        
    // })
    // console.log("date1", response);
  const apiCall=async(method, url, values, token)=>{
    let dataReturn ={
        responseValue:{},
        success:false,
    }
    

    try{
        let response;
        if (method === "POST") {
            response = await fetch(url, {
              method: "POST",
              headers: new Headers({
                "content-type": "application/json",
              }),
              body: JSON.stringify(values),
            });
          } else {
            console.log("method, url, values, token", method, url, values, token);
            let headers;
            if(token){
              console.log("token", token,"url", url);
            // token = token.access_token;
            headers= {'Authorization': `Bearer ${token}`};
            }
            console.log("token", token,"url", url);
            response = await fetch(url, {headers});

          }
          const responseValue = await response.json();
          dataReturn.responseValue= responseValue;
          dataReturn.success = true;
        //   setResponse({
            
        //     ['responseValue']: responseValue,
        //     ['success']:true,
        //   })

        //   if(data.error){
        //     toast.error(data.error)
        //   }
        //   if(data.token){
        //     sessionStorage.setItem("token", data.token);
        //     toast.success('Login Success');
        //     navigate("/");
        //   }
    
       }
       catch(error){
        console.log('error', error);
        // toast.error('Error, Try again')
       }


    // console.log("date", response);
   return dataReturn;
  }

  return {apiCall};
};

export default useCall;
