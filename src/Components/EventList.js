import React from 'react';
import {EventContentConsumer} from '../Context/EventContent';
import Event from '../Components/Event'

const EventList = () => {
    return (
    <div>
        <div className="uk-child-width-1-3" uk-grid="true">
            <EventContentConsumer>
                {(value) => {
                    return(
                        value.events.map(item => {
                            return(
                            <Event
                                key = {item.id}
                                event = {item}
                            />
                            );
                        }
                    )
                )}}
            </EventContentConsumer>
        </div>
    </div>
    );
};

export default EventList;