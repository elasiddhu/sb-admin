import './App.css';
import React,{useState} from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import CreateStudent from './components/CreateStudent';
import EditStudent from './components/EditStudent';
import HooksDemo from './components/HooksDemo';





export const url ='https://62d64f81d4406e523568079d.mockapi.io/students'

export const StudentContext=React.createContext();



function App() {
  let data={
    monthly:"rs.40,000",
    annual:"rs.4,80,000",
    task:50,
    pending:18

  }
  let [students,setStudents]=useState([
    {
      name:"ela",
      email:"elamaha02@gmail.com",
      mobile:"12345678",
      batch:"b36WDT",
    },
    {
      name:"dharz",
      email:"edhz@gmail.com",
      mobile:"12345678",
      batch:"b36WDT",
    },
    {
      name:"bala",
      email:"bala02@gmail.com",
      mobile:"12345678",
      batch:"b36WDT",
    },
  ])
  return<>
  <div className="wrapper" >
    
    <BrowserRouter>
    <Sidebar/>
    <StudentContext.Provider value ={{data,students,setStudents}}>
    <Routes>
    <Route path='dashboard' element={<Dashboard />}/>
    <Route path='create-student' element={<CreateStudent />}/>
    <Route path='edit-student/:id' element={<EditStudent />}/>
    <Route path='hooks-demo' element={<HooksDemo/>}/>
    
    <Route path='*' element={<Navigate to='/dashboard' />}/>
   
    </Routes>
    </StudentContext.Provider>
    </BrowserRouter>
  </div>
  </>
}

export default App;
