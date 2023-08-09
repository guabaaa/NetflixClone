import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/organisms/Header/Header";
import Footer from "./components/organisms/Footer/Footer";
import Loadingspinner from "./components/molecules/Loading/Loadingspinner";

const App = () => {
    return (
        <>
            <Header />
            <Suspense fallback={<Loadingspinner />}>
                <Outlet />
            </Suspense>
            <Footer />
        </>
    );
};

export default App;