// import React, { createContext, useState } from "react";
// import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
// import ItemList from "./component/home";
// import ItemForm from "./component/form";

// const UserContext = createContext();
import { Provider } from "react-redux";
import { store } from "./redux/store";

// function App() {

  
//   const [user,setUser] = useState("Umair");

//   return (

//   //  <Router>
//   //   <Routes>
//   //    <Route path="item/:id" element={<ItemForm/>}/>
//   //    <Route path="/" element={<ItemList/>}/>


//   //   </Routes>
    
//   //  </Router>
//   <div>
//     <UserContext>

//     </UserContext>
//   </div>
//   );
// }

// export default App;

// import { useState, React } from "react";

// import MyComponent from "./component/MyComponent";
// import { MyContext } from "./component/MyContext";
// import SecondComponent from "./component/SecondComponent";
// import { RouterProvider } from "react-router-dom";

function App() {
  // const [text, setText] = useState("");
  // const [name, setName] = useState("");

  return (
    // <div>
    //   {/* <MyContext.Provider value={{ text, setText, name, setName} }>
    //     <MyComponent />
    //     <SecondComponent />

    //   </MyContext.Provider> */}
      
    // </div>
    <Provider store={store}></Provider> // to provide the store to the app just like context api provider
  );
}

export default App;