import React from 'react';
import Sides from './components/Sides';
import Extras from './components/Extras';
import Drinks from './components/Drinks';
import Combos from './components/Combos';

export default function Menu() {
    const paddingTop = window.innerHeight * .12;

    return (
        <div className="container-fluid text-center pb-5" style={ { backgroundColor: 'rgba(255, 255, 255, .95)', paddingTop } }>
            <div className="container">
                {/* COMBOS */ }
                <div className="row">
                    <Combos />
                </div>

                {/* SIDES */ }
                <Sides />

                {/* DRINKS & EXTRAS */ }
                <div className="row mb-5">
                    <Drinks />
                    <Extras />
                </div>
            </div>

        </div>
    );
}