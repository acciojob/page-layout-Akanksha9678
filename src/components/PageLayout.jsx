import React from "react";

const PageLayout=(props)=>{

    return(
        <>
            <h1>{props.heading}</h1>
            {props.children}
            <p>{props.para}</p>
        </>
    )
}
export default PageLayout;

