import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { handleLogin } from "../store/reducers/auth";

export default function Login() {
  const navigateTo = useNavigate();
  const storeAuth = useSelector((store) => store.auth);
  const dispatch = useDispatch();

  function onLogin() {
    localStorage.setItem("isLogin", true);
    // dispatch({ type: "LOGIN", value: true });

    dispatch(handleLogin());

    navigateTo("/admin");
  }

  return (
    <Container className="my-3">
      <h3>Login {JSON.stringify(storeAuth.isLogin)}</h3>

      <Button onClick={onLogin}>Login</Button>
    </Container>
  );
}
