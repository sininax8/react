import React from "react";
import 'scss/common.scss'

function Header(){
    return(
        <header className="MyComponent">
            <div className="header01">
                <ul>
                    <li>Header 1</li>
                    <li>Header 2</li>
                    <li>Header 3</li>
                    <li>Header 4</li>
                </ul>
            </div>
        </header>
    );
}

export default Header;