import React from 'react';
import { useSelector } from 'react-redux';
import COMBO1 from '../../../media/combo1.png';
import COMBO2 from '../../../media/combo2.png';
import COMBO3 from '../../../media/combo3.png';

export default function Combos() {
    const combos = [COMBO1, COMBO2, COMBO3];
    const menu = useSelector((state) => state.menu);
    const borderRadius = 15;

    return (
        <div>
            <h1 className="display-3 txtTwinz mb-4">Combos</h1>
            <div className="d-flex row">
                { menu.filter((x) => x.section === 'combos').map((item, key) => {
                    return (
                        <div key={ key } className="col-md">
                            <div className="card shadow bg-light mb-3 border-0" style={ { borderRadius } }>
                                <img src={ combos[key] } alt="..." className="card-img-top" style={ { borderTopLeftRadius: borderRadius, borderTopRightRadius: borderRadius } } />
                                {/* COMBO NUMBER */ }
                                <div className="card-img-overlay d-flex align-items-start">
                                    <span className="display-6 txtTwinz glow px-2 py-1" style={ { borderRadius: 100 } }>{ `#${key + 1}` }</span>
                                </div>
                                {/* COMBO DETAILS */ }
                                <div className="card-body">
                                    <div className="d-flex flex-fill justify-content-between">
                                        <span className="fw-bold">{ item.name }</span>
                                        <span>${ item.price }</span>
                                    </div>
                                    <div className="d-flex flex-fill">
                                        <small className="text-muted">{ item.details }</small>
                                    </div>
                                </div>
                            </ div>
                        </div>

                    );
                }) }
            </div>

        </div >
    );
}