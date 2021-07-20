import "./styles/styles.scss";
import Footer from "./components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "./redux/actions/Action";

function App() {
  const loading = useSelector((state) => state.productListReducer.loading);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <Footer />
      loading: {`${loading}`}
      <button
        onClick={(e) => {
          dispatch(listProducts());
        }}
      >
        action
      </button>
    </div>
  );
}

export default App;
