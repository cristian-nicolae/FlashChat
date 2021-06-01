import "./WelcomePage.scss";
import TextField from "@material-ui/core/TextField";
import React from "react";

function WelcomePage(props) {

  function submit(){

    props.onBtnClick()
  }

  function enterSubmit(e){
    if(e.key === "Enter" || e.key === "NumpadEnter")
      submit();
  }

  return (
    <div className="wp-container">
      <div className="wp-title">{props.title}</div>
      <div className="wp-form-cointainer">
        <div className="wp-form-label">{props.label}</div>
        <TextField
          inputProps={{ maxLength: 12 }}
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
      <button className="wp-btn" onClick={submit}>Join now!</button>
    </div>
  );
}

export default WelcomePage;
