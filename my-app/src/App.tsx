import "./App.css";
import { Container } from "./components/layouts/Container";
import { Footer } from "./components/layouts/Footer";
import { LayoutWrapper } from "./components/layouts/LayoutWrapper";
import { Navbar } from "./components/layouts/Navbar";

function App() {
  return (
    <LayoutWrapper>
      <Navbar />
      <Container>
        <h1>Conteúdo Principal</h1>
      </Container>
      <Footer />
    </LayoutWrapper>
  );
}

export default App;
