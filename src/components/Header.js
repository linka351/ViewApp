import React from 'react';

const Header = () => {
    return (
        <div className={"container"}>
            <div className={"header"}>
                <div className={"logo"}>
                    <h1>View<span className={"header_color"}>App</span></h1>
                </div>
                <nav>
                    <ul>
                        <li><a href={"#"}>Ulubione</a></li>
                        <li>Obejrzane</li>
                        <li>Do obejrzenia</li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Header;