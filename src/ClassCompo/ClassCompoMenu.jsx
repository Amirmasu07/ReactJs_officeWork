import React, { Component } from 'react';
import { Link, Outlet } from 'react-router-dom';

class ClassCompoIntro extends Component {
  render() {
    return (
      <>
        <div className='col-md-6 col-12 border border-start-5 border-warning pb-3'>
          <div className="class-content mt-2">
            <ul>
              <li><Link to="classcompointro">Class Components Intro</Link></li>
              <li><Link to="usestateobject">Using the state Object</Link></li>
              <li><Link to="changstateobject">Changing the state Object</Link></li>
              <li><Link to="componentdidmount">Componentdidmount</Link></li>
              <li><Link to="componentupdating">ComponentUpdating</Link></li>
              <li><Link to="passdata">Pass Data (Props)</Link></li>
              <li><Link to="reactevent">React Event</Link></li>
              <li><Link to="reactconditionalrendering">React Conditional Rendering</Link></li>
              <li><Link to="reactlist">React List</Link></li>
              <li><Link to="reactform">React Form</Link></li>
              <li><Link to="usestate">React Form</Link></li>
            </ul>
            <Outlet></Outlet>
          </div>
        </div>
      </>
    );
  }
}

export default ClassCompoIntro;