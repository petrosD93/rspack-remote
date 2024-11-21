import './App.css';
import {Routes, Route, Link} from "react-router-dom";
import {Home} from "./Home.tsx";

const App = () => {


  return (
      <div className="app-wrapper">
          <Routes>
              <Route path="/" element={<Content/>}/>
              <Route path="/home" element={<Home/>}/>
          </Routes>
      </div>
)};

export default App;


const Content = () => {
    return <div className="content">
        <Link to="/home" style={{color: 'white'}}>Home</Link>
        <h1>REMOTE</h1>
        <p>Start building amazing things with Rsbuild.</p>
    </div>
}
