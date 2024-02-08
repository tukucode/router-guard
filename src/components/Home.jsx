import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigateTo = useNavigate();

  function goToAdmin() {
    // redirect to page /admin
    navigateTo("/admin");
  }

  return (
    <div>
      <h1>Landing Page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, est?
      </p>

      <button onClick={goToAdmin}>Go To Admin</button>
    </div>
  );
}
