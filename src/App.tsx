import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./i18n";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import Menu from "./components/Menu";
import TodoProvider from "./context/TodoContext";

const Home = React.lazy(() => import("./views/Home"));
const Login = React.lazy(() => import("./views/Login"));
const NotFound = React.lazy(() => import("./views/NotFound"));
const Register = React.lazy(() => import("./views/Register"));
const Configuration = React.lazy(() => import("./views/Configuration"));
const Examples = React.lazy(() => import("./views/Examples"));
const Table = React.lazy(() => import("./views/Table"));

const App = () => {
    return (
        <TodoProvider>
            <Suspense fallback={""}>
                <BrowserRouter>
                    <div className="container">
                        <nav>
                            <Menu />
                        </nav>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/register" element={<Register />} />
                            <Route path="/configuration" element={<Configuration />} />
                            <Route path="/examples" element={<Examples />} />
                            <Route path="/table" element={<Table />} />
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    </div>
                </BrowserRouter>
            </Suspense>
        </TodoProvider>
    )
}

export default App;
