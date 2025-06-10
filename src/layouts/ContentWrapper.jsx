import React from "react";

export const ContentWrapper = ({classes,children}) =>{
    return(
        <div className={`xs:px-4 sm:px-6 md:px-8 lg:px-12 ${classes}`}>
            {children}
        </div>
    )
}