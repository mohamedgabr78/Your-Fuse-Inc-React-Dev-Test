import "./styles/styles.scss";
import Footer from "./components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { listCoins } from "./redux/actions/Action";
import LoadingIndicator from "./components/LoadingIndicator/LoadingIndicator";

function App() {
  const dispatch = useDispatch();

  return (
    <div className="App">
      <Footer />

      <LoadingIndicator />
      <button
        onClick={(e) => {
          dispatch(listCoins());
        }}
      >
        action
      </button>
    </div>
  );
}

export default App;
