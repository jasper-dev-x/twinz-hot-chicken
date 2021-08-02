import React from 'react';

export default function NotFound() {

    return (
        <div className="d-flex flex-fill centered">
            <h1 className="display-1 text-danger text-center" style={ { backgroundColor: 'rgba(255, 255, 255, .9)', borderRadius: 30 } }>404 ERROR: Page Not Found</h1>
        </div>
    );
}