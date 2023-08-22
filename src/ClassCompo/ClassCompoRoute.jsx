import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import ClassCompoMenu from './ClassCompoMenu';
import ClassCompoIntro from './01ClassCompoIntro.jsx';
import UseStateObject from './02UseStateObject.jsx';
import ChangeStateObject from './03ChangeStateObject.jsx';
import ComponentDidMount from './04componentDidMount.jsx';
import ComponentUpdating from './05componentUpdating.jsx';
import Passdata from './06Passdata.jsx';
import ReactEvent from './07ReactEvent.jsx';
import ReactConditionalRendering from './08ReactConditionalRendering.jsx';
import ReactList from './08ReactList.jsx';
import ReactForm from './09ReactForm.jsx';
import UseState from './10UseState.jsx';




class ClassCompoRoute extends Component {
    render() {
        return (
            <>
                <Routes>
                    <Route path="/" element={<ClassCompoMenu />} >
                        <Route path="classcompointro" element={<ClassCompoIntro />} />
                        <Route path="usestateobject" element={<UseStateObject />} />
                        <Route path="changstateobject" element={<ChangeStateObject />} />
                        <Route path="componentdidmount" element={<ComponentDidMount />} />
                        <Route path="componentupdating" element={<ComponentUpdating />} />
                        <Route path="passdata" element={<Passdata />} />
                        <Route path="reactevent" element={<ReactEvent />} />
                        <Route path="reactconditionalrendering" element={<ReactConditionalRendering />} />
                        <Route path="reactlist" element={<ReactList />} />
                        <Route path="reactform" element={<ReactForm />} />
                        <Route path="usestate" element={<UseState />} />
                    </Route>
                </Routes>
            </>
        );
    }
}

export default ClassCompoRoute;