import React from 'react'
 import {Link} from 'react-router-dom';


function Sidebar() {
    
    
  return <>
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            {/*<!-- Sidebar - Brand -->*/}
            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink"></i>
                </div>
                <div className="sidebar-brand-text mx-3">Project  <sup>Manager</sup></div>
            </a>

            {/*<!-- Divider -->*/}
            <hr className="Sidebar-divider my-0"/>

            {/*<!-- Nav Item - Dashboard -->*/}
            <li className="nav-item active">
            <Link to='/dashboard'>  <div className="nav-link btn">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span></div></Link>
            </li>

            {/*<!-- Divider -->*/}
            <hr className="sidebar-divider"/>

            {/*<!-- Heading -->*/}
            <div className="sidebar-heading">
                Interface
            </div>

            {/*<!-- Nav Item - Pages Collapse Menu -->*/}
            <li className="nav-item">
                <div className="nav-link collapsed" href="#!" data-toggle="collapse" data-target="#collapseTwo"
                    aria-expanded="true" aria-controls="collapseTwo">
                    <i className="fas fa-fw fa-cog"></i>
                    <Link to='/create-student'><span style={{color:"white"}}>CreateStudent</span></Link>
                </div>
                <div className="nav-link collapsed" href="#!" data-toggle="collapse" data-target="#collapseTwo"
                    aria-expanded="true" aria-controls="collapseTwo">
                    <i className="fas fa-fw fa-cog"></i>
                    <Link to='/create-student'><span style={{color:"white"}}>Employee</span></Link>
                </div>
                <div className="nav-link collapsed" href="#!" data-toggle="collapse" data-target="#collapseTwo"
                    aria-expanded="true" aria-controls="collapseTwo">
                    <i className="fas fa-fw fa-cog"></i>
                    <Link to='/create-student'><span style={{color:"white"}}>Projects</span></Link>
                </div>
                <div className="nav-link collapsed" href="#!" data-toggle="collapse" data-target="#collapseTwo"
                    aria-expanded="true" aria-controls="collapseTwo">
                    <i className="fas fa-fw fa-cog"></i>
                    <Link to='/create-student'><span style={{color:"white"}}>Tasks</span></Link>
                </div>
                
            </li>
         

         
         
                </ul>
  
  </>
   
}

export default Sidebar