import React from 'react';
import { sections, items } from './components/data';

export default function Menu() {
    const paddingTop = window.innerHeight * .12;

    return (
        <div className="d-flex flex-fill flex-column" style={ { backgroundColor: 'rgba(255, 255, 255, .95)', paddingTop } }>
            { sections.map((item, key) =>
                <div key={ key } className="d-flex flex-column w-100 centered mb-5">
                    <h1 className="txtTwinz display-2">{ item.slice(0, 1).toUpperCase() + item.slice(1) }</h1>
                    { items.filter((x) => x.section === item).map((item, key) => {
                        return (
                            <div key={ key } className="d-flex flex-column centered my-3 text-center px-2">
                                <span className="lead fw-bold">{ item.section === 'combos' ? `#${key + 1} ` : '' }{ item.name }</span>
                                <span className="fw-bold">${ item.price }</span>
                                <span>{ item.details }</span>
                            </div>
                        );
                    }) }
                </div>
            ) }
        </div>
    );
}