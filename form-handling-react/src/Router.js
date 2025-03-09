import {createBrowserRouter} from "react-router-dom"
import RegistrationForm from "./components/RegistrationForm"

const Router = createBrowserRouter([{
    path:"/",
    Component:RegistrationForm
}

])
export default Router