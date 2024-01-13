import { Outlet } from "react-router-dom";
import Footer from "./shared/Footer";
import Navbar from "./shared/Navbar";

const App = () => {
    return (
        <div>
            <Navbar />
            <div className="min-h-[calc(100vh-80px)]">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default App;