import {useState} from "react";
import "./App.scss"

export const App = () => {
    const [n, setN] = useState(0)
    return (
        <div className={"main"}>
            Hello World
            {n}
            <button
                className={"button"}
                onClick={() => setN(n + 1)}
            >
                +1
            </button>
        </div>
    )
}