import React, { useState } from "react";
import "../styles/form.css";
import validator from 'validator'

function App(props) {
  //original
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [ConPassword, setConPassword] = useState("");
  const [Website, setWebsite] = useState("");

  //errors
  const [NameError, setNameError] = useState("");
  const [EmailError, setEmailError] = useState("");
  const [UsernameError, setUsernameError] = useState("");
  const [PasswordError, setPasswordError] = useState("");
  const [ConPasswordError, setConPasswordError] = useState("");
  const [WebsiteError, setWebsiteError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    let err = false;
// Name
    if (Name === "") {
        err = true
        setNameError("- Cannot Be Blank");
      }else{
        setNameError("")
      }
// Email
    if (Email !== "") {
      if(!validator.isEmail(Email)){
        err = true;
        setEmailError("- Required to be a valid email");
      }else{
          setEmailError("")
      }
    } else {
        err = true
        setEmailError("- Cannot Be Blank");
    }
// Username
    if (Username !== "") {
        if(!validator.isAlphanumeric(Username)){
            err = true;
            setUsernameError("- Not a Valid Username");
        }else{
            setUsernameError("")
        }
    } else {
        err = true
        setUsernameError("- Cannot Be Blank");
    }
// Password
    if(Password !== "" && ConPassword !== "" ){
        if(!validator.isAscii(Password)){
            err = true
            setPasswordError("- Cannot Be blank")
        }else if(!validator.isAscii(ConPassword)){
            err = true
            setConPasswordError("- Cannot Be blank")
            }if(Password === ConPassword){
                setPasswordError("")
                setConPasswordError("")
            }else if(Password !== ConPassword){
                err = true
                setPasswordError("- Doesn't Match Password")
                setConPasswordError("- Doesn't Match Password")
            }
    }else if(Password !== "" && ConPassword === ""){
            err = true
            setConPasswordError("- Cannot Be blank")
    }else if(Password === "" && ConPassword !== ""){
        err = true
        setPasswordError("- Cannot Be blank")
    }else {
        err = true
        setPasswordError("- Cannot Be blank")
        setConPasswordError("- Cannot Be blank")
    }
// Website
    if (Website !== "") {
      if(!validator.isURL(Website)){
        err = true;
        setWebsiteError("- Required to be an accurate URL");
      }else{
        setWebsiteError("")
      }
    } else {
        err = true
        setWebsiteError("- Cannot Be Blank");
    }

    if (err === false) {
      props.history.push("/submitted");
    }
  }

  return (
    <div>
      <form id="container" onSubmit={handleSubmit}>
        <div id="container2">
          <div className="title">Profile From - All fields required</div>
          <div>
            <div id={NameError === '' ? '' : 'error'} className='label'>Name {NameError}</div>
            <input
              type="text"
              placeholder="Mike Hawk"
              onChange={e => setName(e.target.value)}
              className={NameError === '' ? '' : 'error'} 
              value={Name}
            />
          </div>
          <div>
            <div id={EmailError === '' ? '' : 'error'} className="label">Email {EmailError}</div>
            <input
              type="email"
              placeholder="noonewriteslettersanymore@email.com"
              onChange={e => setEmail(e.target.value)}
              className={EmailError === '' ? '' : 'error'} 
              value={Email}
            />
          </div>
          <div>
            <div id={UsernameError === '' ? '' : 'error'} className="label">Username {UsernameError}</div>
            <input
              type="text"
              placeholder="Username"
              onChange={e => setUsername(e.target.value)}
              className={UsernameError === '' ? '' : 'error'} 
              value={Username}
            />
          </div>
          <div>
            <div id={PasswordError === '' ? '' : 'error'} className="label">Password {PasswordError}</div>
            <input
              type="password"
              placeholder="1234"
              onChange={e => setPassword(e.target.value)}
              className={PasswordError === '' ? '' : 'error'} 
              value={Password}
            />
          </div>
          <div>
            <div id={ConPasswordError === '' ? '' : 'error'} className="label">Confirm Password {ConPasswordError}</div>
            <input
              type="password"
              placeholder="1234"
              onChange={e => setConPassword(e.target.value)}
              className={ConPasswordError === '' ? '' : 'error'} 
              value={ConPassword}
            />
          </div>
          <div>
            <div id={WebsiteError === '' ? '' : 'error'} className="label">Website {WebsiteError}</div>
            <input
              type="url"
              placeholder="http://www.staggeringbeauty.com/"
              onChange={e => setWebsite(e.target.value)}
              className={WebsiteError === '' ? '' : 'error'} 
              value={Website}
            />
          </div>
        </div>
        <button id="submit" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
