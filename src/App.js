import "./styles/styles.scss";
import Footer from "./components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { listCoins } from "./redux/actions/Action";

function App() {
  const loading = useSelector((state) => state.coinListReducer.loading);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <Footer />
      loading: {`${loading}`}
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
