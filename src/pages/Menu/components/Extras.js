import React from 'react';
import { useSelector } from 'react-redux';

export default function Extras() {
    const menu = useSelector((state) => state.menu);

    return (
        <div className="col">
            <h1 className="txtTwinz display-6">Extras</h1>
            { menu.filter((x) => x.section === 'extras').map((item, key) => {
                return (
                    <div key={ key } className="d-flex flex-column text-center">
                        <span className="fw-bold mb-1">{ item.name }</span>
                        <span className="mb-3">${ item.price }</span>
                        <span>{ item.details }</span>
                    </div>
                );
            }) }
        </div>
    );
}