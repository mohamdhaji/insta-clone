import React from 'react'
import Header from "../Header"
import Sidebar from "../sidebar"
export default function Layout(props) {
    return (
        <div>
            <Header/>
            <Sidebar/>
            {props.children}
        </div>
    )
}
