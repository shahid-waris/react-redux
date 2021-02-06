import React from 'react'
import './App.css';
import BookContainer from './components/bookContainer'
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
    <div className="App">
     <BookContainer/> 
    </div>
    </Provider>
  );
}

export default App;
