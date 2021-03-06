import React from 'react';
import './Home.less'
import Logo from "../../assets/casmm_logo.png"
import HomeJoin from "./HomeJoin"
import NavBar from "../../components/NavBar/NavBar";

export default function Home(props) {

    return(
        <div className='container nav-padding'>
            <NavBar />
            <div id='join-wrapper'>
                <img src={Logo} id='casmm-logo' alt='logo'/>
                <HomeJoin history={props.history}/>
            </div>
        </div>
    )
}