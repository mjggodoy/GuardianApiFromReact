import React, { Fragment } from 'react';
import Header from './Components/Header';
import CategoryContextProvider from './Context/CategoryContext';
import EventContent from './Context/EventContent';
import EventList from './Components/EventList'
import Form from './Components/Form'

function App() {
    return (
      <Fragment>
        <Header
            title = "News from API"
        />
        <EventContent>
          <CategoryContextProvider>
            <div className="uk-container">
              <Form/>
              <EventList/>
            </div>
          </CategoryContextProvider>
        </EventContent>
      </Fragment>
    );
}

export default App;
