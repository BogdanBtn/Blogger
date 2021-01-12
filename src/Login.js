import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";
import "./Login.css";
//import {insertIntoDb} from './connect';




const usern = React.createRef();
    const passw = React.createRef();
    const email = React.createRef();
    const name = React.createRef();




function Login() {

    const history = useHistory();
  function handleSubmit(event) {


    event.preventDefault();
    const data = {
        username: usern.current.value,
        password: passw.current.value,
        
        // rememberMe: rememb?erMeEl.current.checked,
      }
      let url="http://localhost:4000/login";
      
     // console.log(data);
      
    fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data) // body data type must match "Content-Type" header
      }).then(response => response.json())
      .then(data => {
        console.log(data.id);
        localStorage.setItem('currentUser',data.id);
        console.log(localStorage.getItem('currentUser'));
        //setUserId(data.id);
        //console.log(userId.getId());
        if(data.rez==='true'){
            try {
                history.push("/");
              } catch (e) {
                alert(e.message);
              }
        }
      });
    // });
    
      
    
     // console.log(data);

    //   res.redirect("/connect");
  }

  return (
    //<h3 className="text-center text-white pt-5">Login form</h3>
        <div className="container">
            <div id="login-row" className="row justify-content-center align-items-center">
                <div id="login-column" className="col-md-6">
                    <div id="login-box" className="col-md-12">
                        <form id="login-form" className="form" onSubmit={handleSubmit}>
                            <h3 className="text-center text-info">Login</h3>
                            <div className="form-group">
                                <label htmlFor="username" className="text-info">Username:</label>
                                <input type="text" name="username" id="username" className="form-control" ref={usern}/> 
                            </div>
                            <div className="form-group">
                                <label htmlFor="password" className="text-info">Password:</label>
                                <input type="password" name="password" id="password" className="form-control" ref={passw} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="remember-me" className="text-info"><span>Remember me</span> <span><input id="remember-me" name="remember-me" type="checkbox"/></span></label><br></br>
                                {/* <input type="submit" name="submit" className="btn btn-info btn-md" value="submit" href={url} /> */}
                                <button className="btn btn-primary" id="submit">Submit</button>
                            </div>
                            <div id="register-link" className="text-right">
                                <a href="/register" className="text-info">Register here</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
  );
  }


  function Register() {
  
  
    function insertFunction(event) {
        event.preventDefault();
        
        
        const data = {
            username: usern.current.value,
            password: passw.current.value,
            email:  email.current.value,
            // rememberMe: rememb?erMeEl.current.checked,
          }
         
            let url="http://localhost:4000/register";
            
           // console.log(data);
            
          fetch(url, {
              method: 'POST', // *GET, POST, PUT, DELETE, etc.
              mode: 'cors', // no-cors, *cors, same-origin
              cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
              credentials: 'same-origin', // include, *same-origin, omit
              headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
              redirect: 'follow', // manual, *follow, error
              referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
              body: JSON.stringify(data) // body data type must match "Content-Type" header
            
            }).then(response => {
                if (!response.ok) {
                    return response.json()
                        .catch(() => {
                            // Couldn't parse the JSON
                            throw new Error(response.status);
                        })
                        .then(({message}) => {
                            // Got valid JSON with error response, use it
                            throw new Error(message || response.status);
                        });
                }
                // Successful response, parse the JSON and return the data
                console.log( response.json());
            });
          

        // insertIntoDb(usern.current.value,passw.current.value,email.current.value);
     
    }
  
    return (
      //<h3 className="text-center text-white pt-5">Login form</h3>
          <div className="container">
              <div id="login-row" className="row justify-content-center align-items-center">
                  <div id="login-column" className="col-md-6">
                      <div id="login-box" className="col-md-12">
                          <form id="login-form" className="form" onSubmit={insertFunction}>
                              <h3 className="text-center text-info">Login</h3>
                              <div className="form-group">
                                  <label htmlFor="username" className="text-info">Username:</label>
                                  <input type="text" name="username" id="username" className="form-control" ref={usern} required/> 
                              </div>
                              <div className="form-group">
                                  <label htmlFor="password" className="text-info">Password:</label>
                                  <input type="password" name="password" id="password" className="form-control" ref={passw} required/>
                              </div>
                              <div className="form-group">
                                  <label htmlFor="password" className="text-info">Email:</label>
                                  <input type="text" name="password" id="password" className="form-control" ref={email} required/>
                              </div>
                              <div className="form-group">
                                  {/* <input type="submit" name="submit" className="btn btn-info btn-md" value="submit" href={url} /> */}
                                  <button className="btn btn-primary" id="submit">Submit</button>
                              </div>
                              
                          </form>
                      </div>
                  </div>
              </div>
          </div>
    );
    }



export{Login,Register};
