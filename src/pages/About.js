import React from 'react';

export default function About() {
    const paddingTop = window.innerHeight * .1;

    return (
        <div className="d-flex flex-fill flex-column align-items-center" style={ { backgroundColor: 'rgba(255, 255, 255, .95)', paddingTop } }>
            <div className="d-flex flex-fill flex-column justify-content-around px-3">
                <div className="d-flex flex-column align-items-center">
                    <h1 className="txtTwinz">Hours</h1>
                    <span className="txtBox mb-3">Sun - Sat <br /> 11AM – 9PM</span>
                </div>
                <div className="d-flex flex-column align-items-center">
                    <h1 className="txtTwinz">Location</h1>
                    <span className="txtBox mb-3">2828 John F. Kennedy Blvd, Jersey City, NJ 07306</span>

                </div>
                <div className="d-flex flex-column align-items-center">
                    <h1 className="txtTwinz">Phone</h1>
                    <span className="txtBox mb-3">(201) 402-2510</span>
                </div>
            </div>
        </div>
    );
}