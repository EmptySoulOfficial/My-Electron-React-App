import React from 'react'
import './TitleBar.css'

function TitleBar() {
    const electron = require('electron');
const path = require('path');
    const remote = electron.remote;
    const win = remote.getCurrentWindow();
    //this functions ar send to main.js
function closeAction(e) {
    win.close;
}


    
    return (
    <div className="TitleBar" >
        <div className="titleBar-DragAble">
        <label className="titleLabel">MY App</label>
        </div>
        <div className="title-buttons_container">

            <div className="title-button minimize-button" id="min-button" onClick={closeAction}>
                <span className="minimize-button-span"></span>
            </div>
            <div className="title-button close-button" id="close-button" onClick={closeAction}>
                <span className="close-button-span"></span>
                <span className="close-button-span cl2"></span>
            </div>

        </div>
    </div>
)
}

export default TitleBar