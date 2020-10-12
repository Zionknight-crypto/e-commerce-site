import React from 'react';
import './menu-item.sass';
import {withRouter} from 'react-router-dom';

const MenuItem = ({title,imageUrl,size, history}) => {
    return (
    <div className={`${size} menu-item`} onClick={() => history.push()}>
        <div style={{backgroundImage:`url(${imageUrl})`}} className='background-image' />
        {/* receiving props from directory and image div set to background*/}
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
    
    )
}

export default withRouter(MenuItem);
