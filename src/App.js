import { Provider } from "react-redux";
import { store } from "./redux/store";
import TestingRedux from "./component/TestingRedux";
import { myContext } from "./context/context";
import { useState } from "react";
import SecondComponent from "./component/SecondComponent";
import ContextProvider from "./ContextProvider";
import { BrowserRouter as Router, Route, Routes, useNavigate, Link } from "react-router-dom";
import TestingById from "./component/TestingById";
// import store from "./component/redux1/store";
// import Test2 from "./component/Test2";

function App() {
  // const [text,setText] = useState("");
  const navigate = useNavigate();

  const navigateToContacts = () => {
    // 👇️ navigate to /contacts
    navigate('/contacts');
  };

  const navigateHome = () => {
    // 👇️ navigate to /
    navigate('/');
  };

  return (
    <div>
    
    <Provider store={store}>
        {/* <TestingRedux /> */}
        <Router>
          <Routes>
            <Route path="/TestingRedux" element={<TestingRedux /> } />
            <Route path="/TestingRedux/:id" element={<TestingById />} />
          </Routes>
        </Router>
    </Provider> 
    </div>  
    
    // <myContext.Provider value={{text,setText}} >
    //   <SecondComponent />
    // </myContext.Provider>
 
//using use COntext 

//  <ContextProvider>
//  <SecondComponent />
// </ContextProvider> 



  );
}

export default App;