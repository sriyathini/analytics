import React from "react";
import Web from "../web";
import {Outlet} from 'react-router-dom';
function Rootlayout(){
    return(
<div>
    <Web/>
    <Outlet/>
</div>
    );
}
export default Rootlayout;