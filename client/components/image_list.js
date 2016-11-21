/**
 * Created by randre03 on 11/20/16.
 */

// 'Props" is any data passed from a parent to a child

// Import
import React from 'react';
import ImageDetail from './image_detail';

const IMAGES = [
    {title: 'Pen',       link: 'https://dummyimage.com/600x400'},
    {title: 'Pine Tree', link: 'https://dummyimage.com/600x400'},
    {title: 'Mug',       link: 'https://dummyimage.com/600x400'},
];

// Create Component
const ImageList = () => {
    {/* for each image in IMAGES, return <ImageDetail/>*/}
    {/* passing props 'image={image}' from ImageList to <ImageDetail/>*/}
    {/* see additional notes in <ImageDetail/>*/}
    const RenderedImages = IMAGES.map(function(image) {
        return <ImageDetail key={image.title} image={image}/>
    });

    return (
        <ul className="media-list list-group">
            {/*Notice we use {} instead off < /> to reference a JAVASCRIPT variable*/}
            {RenderedImages}
        </ul>
    );
};

// Export Component
export default ImageList;