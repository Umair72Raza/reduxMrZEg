import { Provider } from "react-redux";
import { store } from "./redux/store";
import TestingRedux from "./component/TestingRedux";

function App() {

  return (

    <Provider store={store}>
    <TestingRedux />
    </Provider> // to provide the store to the app just like context api provider
  );
}

export default App;