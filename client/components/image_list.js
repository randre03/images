/**
 * Created by randre03 on 11/20/16.
 */

// 'Props" is any data passed from a parent to a child

// Import
import React from 'react';
import ImageDetail from './image_detail';

// Create Component
const ImageList = (props) => {
    {/* for each image in IMAGES, return <ImageDetail/>*/}
    {/* passing props 'image={image}' from ImageList to <ImageDetail/>*/}
    {/* see additional notes in <ImageDetail/>*/}
    const validImages = props.images.filter(image => !image.is_album);
    const RenderedImages = validImages.map(function(image) {
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