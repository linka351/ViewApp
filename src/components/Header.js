import React from 'react';

const Header = () => {
    return (
        <div className={"container"}>
            <div className={"header"}>
                <div className={"logo"}>
                    <h1 className={"header_color"}>View<span>App</span></h1>
                </div>
                <nav>
                    <ul>
                        <li><a href={"#"} role={"button"}>Ulubione</a></li>
                        <li><a href={"#"}>Obejrzane</a></li>
                        <li><a href={"#"}>Do obejrzenia</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Header;