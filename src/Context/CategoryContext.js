import React, { Component } from 'react';
import axios from 'axios';

const CategoryContext = React.createContext();
export const CategoryConsumer = CategoryContext.Consumer;

class CategoryContextProvider extends Component {
    token = '';
    componentDidMount() {
        this.getCategory();
    }
    state = {
        categories: []
    }

    getCategory = async () => {
      let url = "https://content.guardianapis.com/sections?api-key="+this.token;
      let categories = await axios.get(url);
      this.setState({
        categories: categories.data.response.results
      })
    }
    render () {
      return (
        <CategoryContext.Provider
           value = {{categories : this.state.categories}}
        >
            {this.props.children}
       </CategoryContext.Provider>
      );
    }
  }
  
  export default CategoryContextProvider;