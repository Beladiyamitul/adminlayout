import React from 'react';
import { useContext } from 'react';




function ThemeContextShow(props) {
const theme = useContext(ContextApi);

    return (
        <div>
            <button onClick={theme.toogle_theme()}>Change</button>
        </div>  
    );
}

export default ThemeContextShow;