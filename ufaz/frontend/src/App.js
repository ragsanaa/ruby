import React from "react";
import "./index.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Redirect, Route, Switch,useParams } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";
import Home from "./views/homePage";
import Login from "./components/Login";
import Register from "./components/Register";
import ProtectedPage from "./views/ProtectedPage";
import Posts from "./components/Posts";
import Plan from "./components/Plan";
import Post from "./components/Post";
import CardInfo from "./components/CardInfo";


function App() {

  return (
    <Router>
      <div className="flex flex-col min-h-screen overflow-hidden">
        <AuthProvider>
          <Navbar />
          <Switch>
            <Route component={Plan} path="/pricingPlan" />
            <Route component={Login} path="/login" />
            <Route component={Register} path="/register" />
            <Route path="/posts/:id" exact >
                  <Post/>
              </Route>
            <Route component={Posts} path="/" />

            <Route component={CardInfo} path="/cardInfo" />

          </Switch>
        </AuthProvider>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
