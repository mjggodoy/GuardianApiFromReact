import React from 'react';

const Event = ({event}) => {
    return (
        <div>
            <div className="uk-card uk-card-default">
                <div className="uk-card-header">    
                    <div className="uk-card-title">
                    <h4>{event.webTitle}</h4>
                    </div>
                </div>
                <div className="uk-card-body">
                    <a href={event.webUrl} target="_blank" rel="noopener noreferrer" className="uk-button uk-button-secondary">More Information</a>
                </div>
            </div>
        </div>
    );
};

export default Event;