import React, { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage.jsx";
import AboutPage from "./AboutPage.jsx";
import ContactPage from "./ContactPage.jsx";
import Header from "./CommonCompo/Header";
import ExampleCompo from "./ExampleCompo";
import Footer from "./CommonCompo/Footer.jsx";



const ClassCompoRoute = React.lazy(() => { return import('./ClassCompo/ClassCompoRoute.jsx') })


const MainRouter = createBrowserRouter([
    {
        path: "/",
        element: <><Header /><HomePage /><Footer /></>,
    },
    {
        path: "/about",
        element: <><Header /><AboutPage></AboutPage><Footer /></>,
    },
    {
        path: "/examples",
        element: <><Header /><ExampleCompo /><Footer /></>,
        children: [
            {
                path: "classcompo/*",
                element: <Suspense><ClassCompoRoute /></Suspense>,
            },
        ]
    },
    {
        path: "/contact",
        element: <><Header /><ContactPage /><Footer /></>,
    },
]);


export default MainRouter;