import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./shared/redux/store.js";
import { BrowserRouter } from "react-router-dom";
import App from "./app/routes/App.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>
);