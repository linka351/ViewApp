import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className={"container"}>
            <div className={"header"}>
                <div className={"logo"}>
                    <h1 className={"header_color"}>View<span>App</span></h1>
                </div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/Favourites">Ulubione</Link>
                        </li>
                        <li>
                            <Link to="/Watched">Obejrzane</Link>
                        </li>
                        <li>
                            <Link to="/ToWatch">Do obejrzenia</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Header;