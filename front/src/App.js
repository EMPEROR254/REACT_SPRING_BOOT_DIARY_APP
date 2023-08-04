// // import { HashRouter, Route, Routes } from 'react-router-dom';
// // import './App.css';
// // import Header from './components/Header';
// // import Homepage from './components/Homepage';
// // import Login from './components/Login';
// // import Dashboard from './components/Dashboard';
// // import NewEntry from './components/NewEntry';
// // import Sidebar from './components/Sidebar';

// // function App() {
// //   return (
// //     <HashRouter >
// //       <Header />
// //      <div className='flex  absolute justify-center items-top w-full h-full '>
// //      <Routes>
// //         <Route element={<Homepage />} index path='/' />
// //         <Route element={<Login />} path='/login' />
// //       </Routes>
// //       <div>
// //         <Sidebar />
// //         <Routes>
// //         <Route element={<Dashboard />} path='/admin/dashboard' />
// //         <Route element={<NewEntry />} path='/admin/entries/new' />
// //         </Routes>
// //       </div>
// //      </div>

// //     </HashRouter>
// //   );
// // }

// // export default App;



// import { HashRouter, Route, Routes } from 'react-router-dom';
// import './App.css';
// import Header from './components/Header';
// import Homepage from './components/Homepage';
// import Login from './components/Login';
// import Dashboard from './components/Dashboard';
// import NewEntry from './components/NewEntry';
// import Sidebar from './components/Sidebar';

// function App() {
//   return (
//     <HashRouter>
//       <Header />
//       <div className='flex  items-top w-full h-full'>
//         <Routes>
//           <Route element={<Homepage />} index path='/' />
//           <Route element={<Login />} path='/login' />
//           <Route element={<AdminRoutes />} path='/admin/*' />
//         </Routes>
//       </div>
//     </HashRouter>
//   );
// }

// function AdminRoutes() {
//   return (
//     <div>
//       <Sidebar />
//       <Routes>
//         <Route element={<Dashboard />} path='/dashboard' />
//         <Route element={<NewEntry />} path='/entries/new' />
//       </Routes>
//     </div>
//   );
// }

// export default App;


import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Homepage from './components/Homepage';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import NewEntry from './components/NewEntry';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <HashRouter>
      <Header />
      <div className='flex justify-center items-center h-full'> {/* Updated: Center content both vertically and horizontally */}
        <Routes>
          <Route element={<Homepage />} index path='/' />
          <Route element={<Login />} path='/login' />
          <Route element={<AdminRoutes />} path='/admin/*' />
        </Routes>
      </div>
    </HashRouter>
  );
}

function AdminRoutes() {
  return (
    <div className='flex items-top w-full h-full'> {/* Updated: Center content horizontally */}
      <Sidebar />
      <Routes>
        <Route element={<Dashboard />} path='/dashboard' />
        <Route element={<NewEntry />} path='/entries/new' />
      </Routes>
    </div>
  );
}

export default App;
