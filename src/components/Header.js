import React from 'react';
import { Link } from 'react-router-dom';
import LOGO from '../media/TwinzLogo.png';

export default function Header() {
    const height = window.innerHeight * .1;
    const borderRadius = 30;

    return (
        <div className="fixed-top" style={ { height } }>
            <div id="NavMenu" className="collapse">
                <div className="d-flex flex-fill bg-light justify-content-around p-3">
                    <Link to="/" className="txtTwinz lead navLink">
                        <div data-bs-toggle="collapse" data-bs-target="#NavMenu">Home</div>
                    </Link>
                    <Link to="/about" className="txtTwinz lead navLink">
                        <div data-bs-toggle="collapse" data-bs-target="#NavMenu">About</div>
                    </Link>
                    <Link to="/menu" className="txtTwinz lead navLink">
                        <div data-bs-toggle="collapse" data-bs-target="#NavMenu">Menu</div>
                    </Link>
                </div>
            </div>

            <nav className="d-flex bg-light shadow-lg header" style={ { borderBottomLeftRadius: borderRadius, borderBottomRightRadius: borderRadius } }>
                <div className="container-fluid">
                    <div className="row d-flex flex-fill">
                        <div className="col">

                        </div>
                        <div className="col-2 d-flex centered">
                            <Link to="/">
                                <img src={ LOGO } alt="..." height={ height } />
                            </Link>
                        </div>
                        <div className="col d-flex justify-content-end align-items-center">
                            <div className="p-2" data-bs-toggle="collapse" data-bs-target="#NavMenu">
                                <svg xmlns="http://www.w3.org/2000/svg" width={ height * .5 } height={ height * .5 } fill="#C62828" className="bi bi-list" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}