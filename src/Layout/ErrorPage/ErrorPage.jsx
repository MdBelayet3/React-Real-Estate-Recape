import { useNavigate, useLocation } from "react-router-dom";

const ErrorPage = () => {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <div className="flex flex-col justify-center text-center mt-32 gap-3">
            <div>
                <h2 className="text-2xl font-extrabold">Oops!!!</h2>
                <p>Sorry, the page you are looking for does not exist.</p>
                <p className="text-gray-500">URL: {location.pathname}</p>
                <button
                    onClick={() => navigate("/")}
                    className="w-28 btn bg-blue-500 text-white"
                >
                    Go Home
                </button>
            </div>
        </div>
    );
};

export default ErrorPage;
