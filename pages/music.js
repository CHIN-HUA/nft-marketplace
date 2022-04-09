import React from "react";

const music = ({ musicsrc }) => {
 
    if(musicsrc === null)
    return (
        <></>
    );
    return (
        <audio
        controls
        src={musicsrc}>
            Your browser does not support the
            <code>audio</code> element.
        </audio>
    );
};
export default music;