import "./App.css";
import { Container } from "./components/layouts/Container";
import { Footer } from "./components/layouts/Footer";
import { Navbar } from "./components/layouts/Navbar";

function App() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Navbar />
      <Container>
        <h1>Conteúdo Principal</h1>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
