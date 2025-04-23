import './App.css'
import {RouterProvider} from "react-router-dom";
import {router} from "./router/web.jsx";
import UserContext from "./context/UserContext.jsx";

function App() {

  return (
    <>
        <UserContext>
            <RouterProvider router={router}/>
        </UserContext>

    </>
  )
}

export default App
