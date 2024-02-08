import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";

export default function LayoutLanding() {
  return (
    <>
      <Container className="py-3">
        <Outlet key="layout-landing" />
      </Container>
    </>
  );
}
