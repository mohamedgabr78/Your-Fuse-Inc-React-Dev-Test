import "./styles/styles.scss";
import Footer from "./components/Footer";
import LoadingIndicator from "./components/LoadingIndicator/LoadingIndicator";
import Header from "./components/Header";
import Container from "./components/Container";

function App() {
  return (
    <div className="App">
      <Header />
      <LoadingIndicator />
      <Container />
      <Footer />
    </div>
  );
}

export default App;
