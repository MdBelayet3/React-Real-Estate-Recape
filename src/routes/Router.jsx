import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Root from "../Layout/Root";
import AboutUs from "../pages/AboutUs/AboutUs";
import ErrorPage from "../Layout/ErrorPage/ErrorPage";
import EstateDetails from "../pages/EstateDetails/EstateDetails";
import FAQ from "../pages/EstateDetails/FAQ/FAQ";
import Payment from "../pages/Payment/Payment";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import UpdateProfile from "../pages/UpdateProfile/UpdateProfile";
import PrivetRouter from "./PrivetRouter";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Root></Root>}>
                <Route path="/" element={<Home></Home>} ></Route>
                <Route path="/about" element={<AboutUs></AboutUs>} ></Route>
                <Route path="/estate/:id" element={<PrivetRouter><EstateDetails></EstateDetails></PrivetRouter>}></Route>
                <Route path="/faq" element={<FAQ></FAQ>} ></Route>
                <Route path="/payment/method" element={<Payment></Payment>}></Route>
                <Route path="/login" element={<Login></Login>}></Route>
                <Route path="/register" element={<Register></Register>}></Route>
                <Route path="profile" element={<UpdateProfile></UpdateProfile>}></Route>
                {/* error element */}
                <Route path="*" element={<ErrorPage></ErrorPage>}></Route>
            </Route>
        </Routes>
    );
};

export default Router;