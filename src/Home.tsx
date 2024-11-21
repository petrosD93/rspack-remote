import {Link} from "react-router-dom";

export const Home = () =>{
    return <div className="home">
        <Link to="/" style={{color: 'white'}}>StartPage</Link>

        <h1>Home</h1>
    </div>
}
