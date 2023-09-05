import logo from './logo.svg';
import './App.css';
import React from 'react';
import R003_ImportComponent from './R003_ImportComponent';
import R004_LifecycleEx from './R004_LifecycleEx';
import R005_LifecycleEx from './R005_LifecycleEx';
import R006_LifecycleEx from './R006_LifecycleEx';
import R007_LifecycleEx from './R007_LifecycleEx';
import R008_LifecycleEx from './R008_LifecycleEx';
import R018_PropsDatatype from './R018_PropsDatatype';
import R020_PropsObjVal from './R020_PropsObjVal';
import $ from 'jquery';
function App() {
  return (
    <div className="App">
    <R003_ImportComponent></R003_ImportComponent>
      <h1>Hello React</h1>
    <PropsDatatype String="react" Number={200} Boolean={1==1} Array={[0,1,8]} Object Json={{React:"리액트", twohundred:"200"}} function={console.log("FunctionProps: function!")}/>
    </div>
  );
}

export default App;
