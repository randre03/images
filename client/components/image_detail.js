/**
 * Created by randre03 on 11/20/16.
 */

// Notice how to reference props...
// Child component takes 'props' as the function arguments
// Use {} since referencing a JavaScript variable
// Format of that variable is:
// props.variable-name-as-called-in-parent.property-name
// So... in Image-List we passed in a variable called 'image'
// And we want to access the 'title' as well as the 'link'
// so we call {props.image.title} and {props.image.link}

import React from 'react';
import ImageScore from './image_score';

const ImageDetail = (props) => {
    // props.image is the 'image' object

    return (
        <li className="media list-group-item">
            <div className="media-left">
                <img src={props.image.link} />
            </div>
            <div className="media-body">
                <h4 className="media-heading">
                    {props.image.title}
                </h4>
                <p>{props.image.description}</p>
            </div>
        </li>
    );
};

export default ImageDetail;