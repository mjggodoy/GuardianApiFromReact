import React, { Component } from 'react'
import axios from 'axios';

const EventContentGuardian = React.createContext();
export const EventContentConsumer = EventContentGuardian.Consumer;

class EventContent extends Component {
    token = '';
    state = {
        events: []
    }
    getQuery = async (response) => {
        let url = `https://content.guardianapis.com/search?api-key=${this.token}&q=${response.name}&sectionId=${response.category}`;
        let responseGuardianApi = await axios.get(url);
        this.setState({
            events: responseGuardianApi.data.response.results
        })
    }
    render () {
        return (
            <EventContentGuardian.Provider
                value = {{
                    events : this.state.events,
                    query: this.getQuery
                }}
            >
                {this.props.children}
            </EventContentGuardian.Provider>
        );
    }
}

export default EventContent;