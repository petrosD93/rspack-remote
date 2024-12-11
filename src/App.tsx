import './App.css';
import {Link, Outlet} from "react-router-dom";

const App = () => {


  return (
      <div className="app-wrapper">
          {/*<Routes>*/}
          {/*    <Route path="/" element={<Content/>}/>*/}
          {/*    <Route path="/home" element={<Home/>}/>*/}
          {/*</Routes>*/}

           <div className="content">
          <Link to="./route1" style={{color: 'white'}}>route1</Link>
          <Link to="./route2" style={{color: 'white'}}>route2</Link>
               <Outlet />
      </div>
      </div>
)};

export default App;


// const Content = () => {
//     return <div className="content">
//         <Link to="/home" style={{color: 'white'}}>Home</Link>
//         <h1>REMOTE</h1>
//         <p>Start building amazing things with Rsbuild.</p>
//     </div>
// }
