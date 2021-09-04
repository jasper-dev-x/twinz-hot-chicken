import React from 'react';
import { useSelector } from 'react-redux';

export default function Sides() {
    const menu = useSelector((state) => state.menu);

    return (
        <div className="container mb-5">
            <h1 className="display-5 txtTwinz mt-5 mb-3">Sides</h1>
            <div className="row px-3">
                { menu.filter((x) => x.section === 'sides').map((item, key) => {
                    return (
                        <div key={ key } className="col-6 d-flex flex-column">
                            <span className="fw-bold mb-1">{ item.name }</span>
                            <span className="mb-3">${ item.price }</span>
                        </div>
                    );
                }) }
            </div>

        </div>
    );
}