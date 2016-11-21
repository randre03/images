/**
 * Created by randre03 on 11/20/16.
 */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ImageList from './components/image_list';


// Create component
class App extends Component {
    constructor(props) {
        super(props);

        // Initializes the 'state' object
        // Need to 'fill' the state object with some reasonable value
        // Since we expect that the call to get the image data will result in an array
        // This is a reasonable way to initialize the state object { images: [] }
        this.state = { images: [] };
    }

    componentWillMount() {
        // Great place to load data since any code will only be run once inside this method
        // Need state to re-render once data has been loaded/changed
        // modifying state is the ONLY way to re-render a component
        axios.get('https://api.imgur.com/3/gallery/hot/viral/0')
            .then(response => this.setState({ images: response.data.data }));
    }

    render() {
        return (
            <div>
                <ImageList/>
            </div>
        );
    }
};

// Render method needs to be inside Meteor.startup or else it is called BEFORE
// the DOM is fully rendered and it is unable to find '.container'
Meteor.startup(() => {
    ReactDOM.render(<App />, document.querySelector('.container'));
});
