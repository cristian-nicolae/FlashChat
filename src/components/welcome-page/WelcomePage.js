import "./WelcomePage.scss";
import TextField from "@material-ui/core/TextField";
import React from "react";

function WelcomePage(props) {

  function submit(){

    props.onBtnClick()
  }

  function enterSubmit(event){
    if(event.code === "Enter" || event.code === "NumpadEnter")
      submit();
  }

  return (
    <div className="wp-container">
      <div className="wp-title">{props.title}</div>
      <div className="wp-form-cointainer">
        <div className="wp-form-label">{props.label}</div>
        <div>
          <TextField
            required
            type={props.type}
            variant="outlined"
            id="wp-key-form"
            value={props.text}
            placeholder={props.placeholder}
            onChange={(e) => props.setText(e.target.value)}
            onKeyPress={enterSubmit}
          />
        </div>
      </div>
      <button onClick={submit}>Join now!</button>
    </div>
  );
}

export default WelcomePage;
