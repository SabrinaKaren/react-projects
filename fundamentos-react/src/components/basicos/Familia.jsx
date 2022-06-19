import React from "react";

const fun = props => {
    return (
        <div>
            {
                props.children.map((child, i) => {
                    return React.cloneElement(child, { ...props, key: i })
                })
            }
        </div>
    )
}

export default fun;