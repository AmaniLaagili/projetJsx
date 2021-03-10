import React from "react";
import imageSrc from "../../photos/image1.jpg";
import imageSrc1 from "../../photos/image2.jpg";
import imageSrc2 from "../../photos/image3.jpg";
import imageSrc3 from "../../photos/image4.jpg";
import video from "../../video/myVideo.mp4";
import "./contenu.css";

function contenu() {
    return (
        <div>
            <div>
                <h1 className="titlered">Amani Laagili</h1>

                <br />
                <div className="imageA">
                    <img src={imageSrc} alt="this is img" />

                    <br />

                    <img src={imageSrc1} alt="this is img" />

                    <br />

                    <img src={imageSrc2} alt="this is img" />

                    <br />
                </div>
                <div className="imageB">
                    <img src={imageSrc3} alt="this is img" />
                    <br />

                    <img src="/images/image5.jpg" alt="this is img" />
                    <br />

                    <img src="/images/image6.jpg" alt="this is img" />
                </div>
            </div>
            <div id="video">
                <video width="320" height="240" controls>
                    <source src={video} type="video/mp4" />
                </video>
            </div>
        </div>
    );
}

export default contenu;
