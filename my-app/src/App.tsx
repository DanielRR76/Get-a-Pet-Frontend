import "./App.css";
import { Container } from "./components/layouts/Container";
import { Footer } from "./components/layouts/Footer";
import { LayoutWrapper } from "./components/layouts/LayoutWrapper";
import { Navbar } from "./layouts";
import { Home } from "./pages/Home";

function App() {
  return (
    <LayoutWrapper>
      <Navbar />
      <Container>
        <Home />
      </Container>
      <Footer />
    </LayoutWrapper>
  );
}

export default App;
