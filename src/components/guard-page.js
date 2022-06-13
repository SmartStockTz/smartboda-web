import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { currentUser } from "../services/auth";

function GuardPage({ target }) {
  const [isLogin, setIsLogin] = useState(false);
  const nav = useNavigate();
  useEffect(() => {
    currentUser()
      .then((u) => {
        if (u && u.id) setIsLogin(true);
      })
      .catch(console.log)
      .finally(() => {
        if (isLogin === false) {
          nav("/login");
        }
      });
  }, [target]);

  if (isLogin) return target;
  return (
    <div className="vh-100 flex items-center justify-center sans-serif f4">
      Loading...
    </div>
  );
}

export default GuardPage;
