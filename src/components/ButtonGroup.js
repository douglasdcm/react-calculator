import React from 'react'

const ButtonGroup = ({ buttons }) => {
    return (
        <row className='btn-block' >{buttons[0]} {buttons[1]} {buttons[2]} <br/></row>
    )
}

export default ButtonGroup