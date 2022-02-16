import React from 'react'

const Screen = ({ theValue1, theValue2, theOperation, theResult }) => {
    return (
        <div>
            <h2> {theValue1} {theOperation} {theValue2} = {theResult} </h2>
        </div>
    )
}

export default Screen