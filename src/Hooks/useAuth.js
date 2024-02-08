import { useState } from "react";

export default function useAuth() {
  const [isLogin, setIsLogin] = useState(false);

  function handleLogin() {
    setIsLogin(() => true);
  }

  function handleLogout() {
    setIsLogin(() => false);
  }

  return {
    isLogin,
    handleLogin,
    handleLogout,
  };
}
