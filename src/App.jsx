// import reactLogo from './assets/react.svg'

// function App() {

//   return (
//     <>
//       <h1>hello</h1>
//     </>
//   )
// }

// export default App
import "./App.css";
import { React, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  getAllUsers,
  increment,
  login,
  logout,
  reset,
} from "./app/slices/genral";

const App = () => {
  const { counter, loginState, isLoading, user } = useSelector(
    (state) => state.general
  );

  //dispatch
  const dispatch = useDispatch();
  const incrementfn = () => {
    dispatch(increment());
  };
  const decrementfn = () => {
    dispatch(decrement());
  };
  const resetfn = () => {
    dispatch(reset({ resetValue: 10, name: "soukaina" }));
  };
  // console.log(state)
  //api call
  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  return (
    <div className="App">
      {/* API  */}
      {isLoading ? (
  <h1>Loading...</h1>
) : (user && user.length) ? (
  <>
    <ul>
      {user.map((user) => (
        <li key={user.id}>
          {user.name}- {user.email}
        </li>
      ))}
    </ul>
  </>
) : null}

  {/* redux basics */}
      {/* <h1>hello {counter}</h1> */}
      {/* <button onClick={incrementfn}>increment</button>
      <button onClick={decrementfn}>decrement</button>
      <button onClick={resetfn}>reset</button>
      <br />
      <br />
      <br />

      <h2>{loginState ? "welcome soukaina" : "logout success!"}</h2>
      {loginState ? (
        <button onClick={() => dispatch(logout())}>logout</button>
      ) : (
        <button onClick={() => dispatch(login())}>login</button>
      )} */}
    </div>
  );
};

export default App;
