import React from 'react';
import JASPER from './jasper.png';

export default function Footer() {
    const height = '30px';
    const width = '80px';
    const fontSize = 10;
    const opacity = .9;

    return (
        <div className="fixed-bottom d-flex ms-3 mb-3" style={ { opacity } }>
            <div className="d-flex justify-content-around align-items-center bg-light rounded" style={ { height, width } }>
                <div className="d-flex flex-column centered text-muted pe-none" style={ { fontSize } }>
                    <small>powered</small>
                    <small>with</small>
                </div>
                <img src={ JASPER } alt="..." width="26" />
            </div>
        </div>
    );
}