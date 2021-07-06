import React from 'react';
import classes from './BackgroundVideo.css';

const BackgroundVideo = () => {
    const videoSrc = './zombies/z1'

        return (
            <div className={classes.Container}>
                <video autoPlay="autoplay" loop="loop" muted className={classes.Video}
                style={{
                    position: "fixed",
                    width: "100%",
                    left: 0,
                    top: 0,
                    opacity: 0.5
                }}>
                    <source src={videoSrc} type="video/mp4" />
                    Your browser does not suppoer the video tag
                    </video>
            </div>
        )
    };

    export default BackgroundVideo