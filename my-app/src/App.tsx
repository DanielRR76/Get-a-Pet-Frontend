import { LayoutWrapper, Navbar, Container, Footer } from "./layouts";
import { Router, Routes } from "./router";

function App() {
  return (
    <Router>
      <LayoutWrapper>
        <Navbar />
        <Container>
          <Routes />
        </Container>
        <Footer />
      </LayoutWrapper>
    </Router>
  );
}

export default App;
