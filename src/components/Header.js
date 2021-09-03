import React from 'react';

const Header = () => {
    return (
        <div className={"container"}>
            <div className={"header"}>
                <div className={"logo"}>
                    <a href={"/"}> <h1 className={"header_color"}>View<span>App</span></h1></a>
                </div>
                <nav>
                    <ul>
                        <li>
                            <a href={"/Favourites"}>Ulubione</a>
                        </li>
                        <li>
                            <a href={"/Watched"}>Obejrzane</a>
                        </li>
                        <li>
                            <a href={"/ToWatch"}>Do obejrzenia</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Header;