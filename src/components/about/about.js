import React from "react";
import { Link } from "react-router-dom"
import "./about.css"

export const About = () => {
    return (
        <>
            <div>
                Placeholder About
                <Link className="nav-link" to="/backpack"><button>My Backpack</button></Link>
                <Link className="nav-link" to="/"><button>Home</button></Link>
            </div>
        </>
    )
}
