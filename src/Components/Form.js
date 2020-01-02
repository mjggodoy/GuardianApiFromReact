import React, { Component } from 'react'
import {CategoryConsumer} from '../Context/CategoryContext'
import {EventContentConsumer} from '../Context/EventContent'


class Form extends Component {
    textInput = React.createRef();
    textInputCategory = React.createRef();

    state = {
        name: "",
        category: ""
    }

    updateInputValue = e => {
        e.preventDefault();
        let name = e.target.name;
        let value = e.target.value;
        let state = this.state;
        state[name] = value;
        this.setState({state});
    }

    render(){
        return (
            <EventContentConsumer>
                {(value) => {
                    return (
                    <form
                    onSubmit = {(e) =>{
                        e.preventDefault();
                        value.query(this.state);
                    }}
                    >
                    <fieldset className="uk-fieldset uk-margin">
                        <legend className="uk-legend uk-text-center">
                            Look for your event or category
                        </legend>
                    </fieldset>
                    <div className="uk-column-1-3 uk-margin">
                        <div className="uk-margin" uk-margin="true">
                            <input name="name" 
                            className="uk-input" 
                            type="text" 
                            placeholder="Name of the event or city"
                            value={this.state['name']} onChange={this.updateInputValue}/>
                        </div> 
                    <div className="uk-margin" uk-margin="true"> 

                        <select className="uk-select" name="category" value={this.state['category']} onChange={this.updateInputValue}>
                        <CategoryConsumer>
                            {(value) => {
                                return(value.categories.map((category) => {
                                    return(<option key={category.id} value={category.webTitle} data-uk-form-select>{category.webTitle}</option>);
                                }))}}
                        </CategoryConsumer>
                        </select>
                    </div>
                    <div>
                        <input type="submit" className="uk-button uk-button-danger" value="Look for events" />
                    </div>
                    </div>
                </form>)}}
            </EventContentConsumer>
        );
    }
}
export default Form;