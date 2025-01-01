import Calculator from "./components/calculator";
import store from "./store";
import { Provider } from "react-redux";
function App() {
  return (
    <>
      <Provider store={store}>
        <Calculator />
      </Provider>
    </>
  );
}

export default App;
