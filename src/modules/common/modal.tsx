import React from 'react';
import ReactDOM from 'react-dom';

export const Modal: React.FC<React.PropsWithChildren<any>> = ({ children }) => {
    const element = document.querySelector('#modal');

    if (!element) {
        return null;
    }

    return ReactDOM.createPortal(
        (<div className="ui dimmer modals visible active">
            <div className="ui standard modal visible active">
                {children}
            </div>
        </div>),
        element
    );
};