// Packages
import React from "react"

function DemoIconMixin(props) {
    return (
        <>
            div:before &#123; $&#123;IconMixin(&#123; icon: "name-of-icon",
            size: 12, color: "black", &#125;)&#125; &#125;
        </>
    )
}

export { DemoIconMixin }
