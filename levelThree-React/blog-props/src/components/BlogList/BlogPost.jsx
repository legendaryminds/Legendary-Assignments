import React from "react";

export default function BlogPost(props) {
    return (
        <div className="data">
            <h1>{props.title}</h1>
            <h2>{props.subTitle}</h2>
            <p>Posted by {props.author} on {props.date}</p>
            <hr />
        </div>
    )
}
