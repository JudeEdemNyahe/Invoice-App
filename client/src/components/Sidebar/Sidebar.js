import React from 'react';
import useLocalStorage from "use-local-storage";

import './Sidebar.css'
import Avatar from '../../assets/image-avatar.jpg'
import { ReactComponent as MoonIcon } from '../../assets/icon-moon.svg';
import { ReactComponent as SunIcon } from '../../assets/icon-sun.svg';

const Sidebar = (props) => {
    const [icon, setIcon] = useLocalStorage('');

    const handleClick = () => {
        setIcon(!icon)
    }

    return (
        <div className='sidebar'>
                <div className='logo'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="26"><path fill="#FFF" fillRule="evenodd" d="M20.513 0C24.965 2.309 28 6.91 28 12.21 28 19.826 21.732 26 14 26S0 19.826 0 12.21C0 6.91 3.035 2.309 7.487 0L14 12.9z"/></svg>
                </div>
                <div className='logo-mask'>
                </div>
                <div className='bottom-section'>
                    <div className='moon-icon' onClick={props.onClick}>
                        <button onClick={handleClick} className='moon' >
                            {icon ? 
                            <MoonIcon />
                            :
                            <SunIcon />
                            }
                            </button>
                    </div>
                    <hr></hr>
                    <div className='avatar'>
                        <img src={Avatar} alt='' />
                    </div>
            </div>
        </div>
    )    
}

export default Sidebar;