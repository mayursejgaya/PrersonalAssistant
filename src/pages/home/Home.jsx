import React from 'react'
import '../home/Home.css'
import { assets } from '../../assets/assets'
import Download from '../download/Download'
import Footer from '../Footer/Footer'


function Home() {
    return (
        <div>
            <div className='header'>
                <img src={assets.first} alt='' id='image' />
                <div className='mic'>
                    <div className='micbtn'>
                        <img src={assets.mic} alt='' id='micImg' />
                    </div>
                    <div id='btn'>
                        <button className='btnStyle' >Ask Me Anything<img src={assets.record} alt='' id='record' /></button>

                    </div>
                </div>


            </div>
            <Download />
            <Footer />
        </div>
    )
}

export default Home
