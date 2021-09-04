import React from 'react';
import Food2 from '../media/food2.jpg';
import Food3 from '../media/food3.jpg';
import MOTTO from '../media/TwinzMotto.png';

export default function Home() {
    const paddingTop = window.innerHeight * .1;
    const width = window.innerWidth * .8 < 500 ? window.innerWidth * .8 : 500;
    const height = width * .205;

    return (
        <div className="d-flex flex-fill flex-column" >
            <div className="d-flex flex-fill justify-content-center pe-2 bgFade" style={ { paddingTop } }>
                <img className="my-3" src={ MOTTO } alt="..." style={ { height: `${height}px`, width: `${width}px` } } />
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md" />
                    <div className="col-md-4 mb-3">
                        <img className="d-block w-100" src={ Food2 } alt="..." style={ { borderRadius: 20 } } />
                    </div>
                    <div className="col-md-1"/>
                    <div className="col-md-4 mb-3">
                        <img className="d-block w-100" src={ Food3 } alt="..." style={ { borderRadius: 20 } } />
                    </div>
                    <div className="col-md" />
                </div>
            </div>
        </div>
    );
}