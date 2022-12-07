import React from 'react'
import ButtonGroup from "react-bootstrap/ButtonGroup"
import { Button } from "react-bootstrap"

const Header = ({ filteredarray, menulist }) => {
    return (

        <ButtonGroup size="lg" className="mb-2">

            {menulist.map((e) => {
                return (
                    <Button key={e} onClick={() => { filteredarray(`${e}`) }}>{e}</Button>
                )
            })

            }

        </ButtonGroup >
    )
}

export default Header