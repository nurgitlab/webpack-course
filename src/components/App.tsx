import {useState} from "react";
import classes from "./App.module.scss"
import {Link, Outlet} from "react-router-dom";

export const App = () => {
    const [n, setN] = useState(0)
    return (
        <div className={"main"}>
            Hello World
            {n}
            <button
                className={classes.button}
                onClick={() => setN(n + 1)}
            >
                +1
            </button>
            <br/>
            <Link to={'/About'}>about</Link>
            <br/>
            <Link to={'/shop'}>shop</Link>
            <Outlet/>
        </div>
    )
}