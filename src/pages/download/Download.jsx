import React from 'react';
import './Download.css'
import { assets } from '../../assets/assets'

const Download = () => {
    return (
        <div className='app-downlaod' id='app-downlaod'>
            <hr />
            <p>For Better Experience Download <br /> Assistant</p>
            <div className="app-download-platforms">
                <img src={assets.playstore} alt="" />
                <img src={assets.appstore} alt="" />
            </div>
            <hr />
        </div>

    )
}

export default Download;
