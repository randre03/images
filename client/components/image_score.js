/**
 * Created by randre03 on 11/21/16.
 */
import React from 'react';

const ImageScore = (props) => {
    // props.ups => # of up votes
    // props.down => # of down votes

    // This is just destructuring the props object to get the ups and downs members
    // You can see these by inspecting the response from the API
    const { ups, downs} = props;

    const upsPercent = `${100 * (ups / (ups + downs))}%`;
    const downsPercent = `${100 * (downs / (ups + downs))}%`;

    return (
        <div>
            Ups/Downs
            <div className="progress">
                <div style={{ width: upsPercent }} className="progress-bar progress-bar-success progress-bar-striped"></div>
                <div style={{ width: downsPercent }} className="progress-bar progress-bar-danger progress-bar-striped"></div>
            </div>
        </div>
    )

};
