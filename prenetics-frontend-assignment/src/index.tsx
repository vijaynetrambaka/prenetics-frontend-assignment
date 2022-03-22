import * as React from "react";
import ReactDOM from "react-dom";
import App from "./app/app"
import {BrowserRouter} from "react-router-dom"
import { OrganizationProvider } from "./app/hooks/useContext/organizationContext";


//import {AuthProvider} from "./components/context/AuthProvider";

// const App = () => (
//   <h1>My React and TypeScript App!</h1>
// );

ReactDOM.render(
   <React.StrictMode>    
  <BrowserRouter>
  <OrganizationProvider>
  <App />
  </OrganizationProvider>
  </BrowserRouter>
   </React.StrictMode>,
  document.getElementById("root")
);