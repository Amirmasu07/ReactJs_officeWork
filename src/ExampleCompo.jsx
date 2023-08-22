import React from 'react';
// import {Link,Outlet} from "react-router-dom";
import ClassAndFunctionCompo from "./ClassAndFunctionalCompo";

const HomePage = () => {
    return (
        <div className='container'>
            <div className="row mt-3">
                <div className="col">
                    <h1 className='text-center'>React Js Components</h1>
                </div>
            </div>
            <ClassAndFunctionCompo/>
        </div>
    );
};

export default HomePage;