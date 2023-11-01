import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import User from "./components/user/User";
//  import Prodcuts from "./components/products/Products";
import PrivateRoute from "./components/auth/PrivateRoute";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import PageNotFound from "./components/PagenotFound/PageNotFound";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./components/Home/Home";
import Post, { redirectPost } from "./components/Post/Post";
import PostDetails from "./components/Post/PostDetails";

const Prodcuts = React.lazy(() => import("./components/products/Products"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Home />} />

      {/* Private route implementation  */}
      <Route path="user" element={<PrivateRoute Component={User} />} />

      {/* <Route path="prodcuts"  
            element={
              <Prodcuts />
            }
      /> */}
      
      {/* Lazy loading route implementation  */}
      <Route
        path="prodcuts"
        element={
          <React.Suspense fallback={<>...</>}>
            <Prodcuts />
          </React.Suspense>
        }
      />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="post" element={<Post />} loader={redirectPost} />
      <Route path="post/:id" element={<PostDetails />} />
      <Route path="*" element={<PageNotFound />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
