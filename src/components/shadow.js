import React from 'react'

export default function Shadow(props) {

    return <div onClick={props.toggleSideBar}
        className="fixed top-0 left-0 z-30 w-full h-full bg-black bg-opacity-50"></div>

}