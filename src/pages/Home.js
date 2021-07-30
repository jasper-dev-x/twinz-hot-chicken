import React from 'react';
import Food1 from '../media/food1.jpg';
import Food2 from '../media/food2.jpg';
import Food3 from '../media/food3.jpg';

export default function Home() {
    const XY = window.innerHeight > window.innerWidth;

    return (
        <div className="d-flex flex-fill flex-column">
            <div className="d-flex w-100 justify-content-center bgFade">
                <div className="txt-Twinz text-light display-1 pb-5 my-2">
                    <span>L</span>ove <span>a</span>t F<span>i</span>rst B<span>i</span><span>t</span>e
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 mb-3">
                        <img className="d-block w-100" src={ Food1 } alt="..." style={ { borderRadius: 20 } } />
                    </div>
                    <div className="col-md-4 mb-3">
                        <img className="d-block w-100" src={ Food2 } alt="..." style={ { borderRadius: 20 } } />
                    </div>
                    <div className="col-md-4 mb-3">
                        <img className="d-block w-100" src={ Food3 } alt="..." style={ { borderRadius: 20 } } />
                    </div>
                </div>
            </div>
        </div>
    );
}