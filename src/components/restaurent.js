import React from 'react'
import Cardmenu from './card';
import { useState } from "react"
import Menu from '../menapi';

import Header from './header';


const catlist = [...new Set(Menu.map((e) => {
    return e.category;
})),
    "All",
]

console.log(catlist);

const Res = () => {
    const [open, setopen] = useState(Menu);
    const [menulist, setmenulist] = useState(catlist)

    const filteredarray = (cat) => {
        if (cat === "All") {
            return setopen(Menu);
        }

        const putin = Menu.filter((e) => {
            return e.category == cat;
        })
        setopen(putin);
    }

    return (
        <>

            <Header filteredarray={filteredarray} menulist={menulist} />
            <Cardmenu menuopen={open} />
        </>
    )
}

export default Res;