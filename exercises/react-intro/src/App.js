import React from "react";

import Header from "./Header.js";
import Content from "./Content.js";
import Footer from "./Footer.js";

function App(){
    // Components render React elements for other components
    return (
    <div>
        <Header />
        <Content />
        <Footer />
    </div>
    )
}

export default App;