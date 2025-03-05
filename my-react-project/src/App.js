//import logo from './logo.svg';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// import UnControlledComp from './ControlledUnContrComp/UnControlledComp';
// import AddEmployee from './CRUD_Using_ContextAPI/AddEmployee';
// import EditEmployee from './CRUD_Using_ContextAPI/EditEmployee';
// import EmployeeList from './CRUD_Using_ContextAPI/EmployeeList';

// import ParentCallback from './UseCallbackHook/ParentCallback';
// import Tasks from './UseCallbackHook/Tasks';
// import ControlledComp from './ControlledUnContrComp/ControlledComp';
// import UsecallbackParent from './UseCallbackHook/UsecallbackParent';
// import MyUseCallbackHook from './UseCallbackHook/MyUseCallbackHook';
// import UseReducerHook from './useReducerTest/UseReducerHook';
// import Parent from './ContextAPI.jsx/Parent';
// import ParentUseContext from './ContextAPI.jsx/ParentUseContext';
// import MemoParent from './MemoTest/MemoParent';
// import UseMemoParent from './MemoTest/UseMemoParent';
// import AdvanceFormHand from './FormHandling/AdvanceFormHand';
// import BasicFormUsingClassAssign from './FormHandling/BasicFormUsingClassAssign';
// import FormBasic from './FormHandling/FormBasic';
// import NormalComp from './PureComp/NormalComp';
// import PureComp from './PureComp/PureComp';
// import Parent_PTC from './ChildToParentCall/Parent_PTC';
// import UseEffectHook from './APIIntegration/UseEffectHook';
// import AssignAPIIntFetch from './APIIntegration/AssignAPIInFetch';
// import Welcome from './Welcome';
// import JSXTest from './JsxTest/JSXTest';
// import UseEffectAPICall from './APIIntegration/UseEffectAPICall';
//import Parent_PTC from './ChildToParentCall/Parent_PTC';
//import FormBasic from './FormHandling/FormBasic';
// import APIIntUsingFetch from './APIIntegration/APIINTUsingFetch';
// import APIIntUsingAxios from './APIIntegration/APIINTUsingAxios';

//import LogSignIn from './PropsTest/LogSignIn';
// import StateInClassComp from './StateClassComp/StateInClassComp';
// import StateInFuncComp from './StateClassComp/StateInFuncComp';
// import Main from './Routing Test/Main';
// import LifeCycleMethods from './ClassCompLifeCycle/LifeCycleMethods';
// import DailyRoutine from './ClassCompLifeCycle/DailyRoutine';
//import StateInClassCompAssign from './StateClassComp/StateInClassCompAssign';
//import ClassCompBody from './ClassComponent';
//import Welcome from './Welcome';
//import FragmentTest from './../FragmentTest/FragmentTest';
// import FragmentReactTest from './FragmentTest/FragmentReactTest';
// import WelcomeCompCall from './CompCall/WelcomeCompCall';
// import ParentComp from './CompCallAssignment/ParentComp';
//import WelcomeComp from './FragmentTest/CompCall/Welcome';
//import ParentComp from './PropsTest/ParentComp';
// import ConditionalRendering from './ConditionalRendering/ConditionalRendering';
// import LogSignIn from './ConditionalRederingAssignment/LogSignIn';
// import ParentComp from './CompCallAssignment/ParentComp';
// import Assign2APIFetch from './APIIntegration/ASSign2APIInFetch';
// import ParentCallback from './ChildToParentCall/ParentCallback';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddEmployee from './CRUD_Using_Redux/AddEmployee';
import EmployeeList from './CRUD_Using_Redux/EmployeeList';
import EditEmployee from './CRUD_Using_Redux/EditEmployee';
// import { EmployeeProvider } from './CRUD_Using_ContextAPI/EmployeeStore';
import { EmployeeProvider } from './CRUD_Using_Redux/EmployeeStore';


function App() {
  return (
    <React.Fragment>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <h1>i am able to setup reactjs project successfully</h1> */}
      {/* <Welcome/> */}
      {/* <ClassCompBody/>  */}
          
         {/* <FragmentReactTest/>   */}
        {/* <WelcomeComp/>  */}
         {/* <ParentComp/>  */}
        {/* <ConditionalRendering/> */}
        {/* <LogSignIn/> */}
        {/* <StateInClassComp/> */}
        {/* <StateInClassCompAssign/> */}
        {/* <StateInFuncComp/> */}
        {/* <LifeCycleMethods/> */}
        {/* <Main/> */}
        {/* <DailyRoutine/> */}
        
       {/* <APIIntUsingFetch/>  */}
       {/* <APIIntUsingAxios/> */}
     {/* <UseEffectAPICall/> */}
     {/* <Parent_PTC/> */}
     {/* <FormBasic/> */}
     {/* <JSXTest/> */}
     {/* <WelcomeCompCall/> */}
     {/* <ParentComp/> */}
     {/* <LogSignIn/> */}
     {/* <ParentComp/> */}
     {/* <UseEffectHook/> */}
     {/* <AssignAPIIntFetch/> */}
     {/* <Assign2APIFetch/> */}
     {/* <NormalComp/> */}
     {/* <PureComp/> */}
     {/* <Parent_PTC/> */}
     {/* <ParentCallback/> */}
     {/* <FormBasic/> */}
     {/* <BasicFormUsingClassAssign/> */}
     {/* <AdvanceFormHand/> */}
     {/* <Parent/> */}
     {/* <ParentUseContext/> */}
     {/* <MemoParent/> */}
     {/* <UseMemoParent/> */}
     {/* <UseReducerHook/> */}
     {/* <MyUseCallbackHook/> */}
     {/* <UsecallbackParent/> */}
     {/* <ControlledComp/> */}
     {/* <UnControlledComp/> */}
     {/* <AddEmployee/>
     <EditEmployee/>
     <EmployeeList/> */}
     {/* <ParentCallback/> */}
     {/* <Tasks/> */}

     <Router>
    <EmployeeProvider>
      <Routes>
       
        <Route exact path= '/' element= {<EmployeeList/>}></Route>
        <Route exact path= '/AddEmployee' element= {<AddEmployee/>}></Route>
        <Route exact path= '/editEmployee/:id' element= {<EditEmployee/>}></Route>
        </Routes>
      </EmployeeProvider>
     </Router>
    
    </React.Fragment>
  );
}

export default App;
