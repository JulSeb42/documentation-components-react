// Packages
import React from "react"
import Highlight from "react-highlight"

function CodeContainer(props) {
    return (
        <Highlight className={props.className || "javascript"}>
            {props.children}
        </Highlight>
    )
}

export default CodeContainer
