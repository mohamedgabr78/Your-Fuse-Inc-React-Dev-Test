import "./styles/styles.scss";
import Footer from "./components/Footer";
import LoadingIndicator from "./components/LoadingIndicator/LoadingIndicator";
import SingleCard from "./components/Card";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Footer />
      <LoadingIndicator />
      <SingleCard />
    </div>
  );
}

export default App;
