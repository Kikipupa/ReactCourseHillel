import React from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";

function LoginForm({ onLogin }) {
  return (
    <form
      className="login-form"
      onSubmit={(e) => {
        e.preventDefault();
        onLogin();
      }}
    >
      <Input type={"text"} placeholder={"Your full name"} />
      <Button text={"Login"} />
    </form>
  );
}

export default LoginForm;
