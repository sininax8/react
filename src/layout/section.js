import React from "react";
import { imagePath } from 'images/imagePath';

const icon = "LOGO";

function Section(){
    return(
        <section>
            <div>section Test</div>
            <div>
                <Image source={imagePath.icon} />;
            </div>
        </section>
    );
}

export default Section;