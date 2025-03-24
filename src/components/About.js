import React, { useState } from "react";

function About(props) {
    const [showMore, setShowMore] = useState(false);

    return (
        <section id="about">
            <h2>About me</h2>
            <p>{props.summary}</p>

            {showMore && <p>{props.detail}</p>}

            <button onClick={() => setShowMore(!showMore)}>
                {showMore ? "간단히 보기" : "자세히 보기"}
            </button>
        </section>
    )
}

export default About;
