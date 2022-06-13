import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "../components/login-form";
import ForYouLogo from "../components/logo";

function LoginPage() {
  return (
    <div className="flex items-center justify-center sans-serif">
      <div className="pv4 ph3 w-100" style={{ maxWidth: 500 }}>
        <ForYouLogo />
        <LoginForm />
        <Link className="blue no-underline underline-hover" to="/">
          Go back home
        </Link>
      </div>
    </div>
  );
}

export default LoginPage;
