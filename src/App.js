

// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
// // import Greet from './components/Greet';
// // import Welcome from './components/welcome';
// import { Contact } from './components/Contact';
// import { About } from './components/About';
// import { Team } from './components/Team';
// import { Courses } from './components/Courses';
// import { Home } from './components/Home';
// import Heading1 from './components/Heading1';
// import Heading2 from './components/Heading2';
// import Form from './components/Form';
// import {Routes, Route, BrowserRouter } from 'react-router-dom';
// import Header from './components/header';
// import { useState } from 'react';

// class App extends Component{
// //   state={
// //     isChanged:true
// // }
// // onHandleChange=(e)=>{
// //     this.setState({
// //         isChanged:!this.state.isChanged
// //     })
// //     console.log(e.target.id);
// // }
//   render(){

//   return (
//     <>
//     {/* {
//         this.state.isChanged ?
//         <>
//         <Heading1></Heading1>
//         </>
//         :
//         <>
//         <Heading2></Heading2>
//         </>
//     } */}
//             {/* <button id='btn1' onClick={this.onHandleChange}>Change</button> */}

//             {/* <><Form></Form></> */}
// {/*             
//             <BrowserRouter>
//             <Header></Header>
//             <Routes>
//             <Route path="/" element={<Home></Home>}></Route>
//               <Route path="/home" element={<Home></Home>}></Route>
//               <Route path='/contact' element={<Contact></Contact>}></Route>
//               <Route path='/about' element={<About></About>}></Route>
//               <Route path='/team' element={<Team></Team>}></Route>
//               <Route path='/courses' element={<Courses></Courses>}></Route>
//             </Routes>
//             </BrowserRouter> */}

//     </>
//   );
//   }
// }

// export default App;

import React, { useRef, useState } from 'react'
import { useReducer,reducer,initialState } from 'react';
import Comp1 from './components/comp1';





function App() {
  return (
    <div><Comp1/></div>
  )
}

export default App
// function HOCRed(props)
// {
//   return <h2 style={{backgroundColor:'red',width:100}}>Red<props.cmp /></h2>
// }
// function HOCGreen(props)
// {
//   return <h2 style={{backgroundColor:'green',width:100}}>Grren<props.cmp /></h2>
// }
// function HOCBlue(props)
// {
//   return <h2 style={{backgroundColor:'blue',width:100}}>blue <props.cmp /></h2>
// }
// function Counter()
// {
//   const [count,setCount]=useState(0)
//   return<div>
//     <h3>{count}</h3>
//     <button onClick={()=>setCount(count+1)}>Update</button>
//   </div>
// }


