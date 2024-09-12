import React, { useState } from "react";

export default function TextForm(props) {


    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    };


    const handleOnChange = (event) => {
        console.log("update settext")
        setText(event.target.value);
    };

    const [text, setText] = useState();

    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea
                    value={text}
                    onChange={handleOnChange}
                    className="form-control"
                    id="myBox"
                    rows="9"
                ></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>
                Convert To Upprecase
            </button>
        </div>
    );
}
