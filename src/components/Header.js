import React from 'react';
import LOGO from '../media/TwinzLogo.png';

export default function Header() {
    const height = window.innerHeight * .1;

    return (
        <div className="fixed-top d-flex bg-light centered shadow" style={ { height, borderBottomLeftRadius: 10, borderBottomRightRadius: 10 } }>
            <img className="d-block" src={ LOGO } alt="..." height={ height } />
            <button className="btn">
                <svg xmlns="http://www.w3.org/2000/svg" width={ height * .5 } height={ height * .5 } fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                </svg>
            </button>
        </div>
    );
}