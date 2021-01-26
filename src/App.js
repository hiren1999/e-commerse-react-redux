import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Cart from "./components/Cart/Cart";
import { Provider } from "react-redux";
import store from "./store/index";
import Details from "./components/Product/Details";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Route path='/' exact component={Home} />
        <Route path='/cart' exact component={Cart} />
        <Route path='/details/:id' exact component={Details} />
      </Router>
    </Provider>
  );
}

export default App;
