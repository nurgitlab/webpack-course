import {useState} from "react";
import classes from "./App.module.scss"
import {Link, Outlet} from "react-router-dom";
import RavenPng from "@/assets/raven.png"
import LionJpg from "@/assets/lion.jpg"
import HotelSvg from "@/assets/hotel.svg"

export const App = () => {
    const [n, setN] = useState(0)
    return (
        <div className={"main"}>
            <h1>PLATFORM={__PLATFORM__}</h1>
            Hello World Hot Reload!
            {n}
            <button
                className={classes.button}
                onClick={() => setN(n + 1)}
            >
                +1
            </button>
            <br/>
            <img src={RavenPng} style={{width: 100}}/>
            <br/>
            <img src={LionJpg} style={{width: 100}}/>
            <br/>
                <HotelSvg width={100} height={100}/>
            <br/>
            <Link to={'/About'}>about</Link>
            <Link to={'/shop'}>shop</Link>
            <Outlet/>
        </div>
    )
}