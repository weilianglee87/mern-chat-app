import "./App.css";
import axios from "axios";
import { Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import ChatPage from "./Pages/ChatPage";

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
axios.defaults.withCredentials = true;

function App() {
  return (
    <div className='App'>
      <Route path='/' component={Homepage} exact />
      <Route path='/chat' component={ChatPage} />
    </div>
  );
}

export default App;
