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

    const handleDoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);

    };

    const clear = () => {
        setText(" ");
    }

    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const reomveSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    const handleOriginal = () => {
        let x = "";
        let n = text.length;
        for (let i = n - 1; i >= 0; i--) {
            x += (text[i]);

        }
        setText(x);


    };

    const Default = () => {

    }

    const [text, setText] = useState(" ");

    return (
        <>
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
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>
                    Convert To Upprecase
                </button>
                <button className="btn btn-primary mx-2" onClick={handleDoClick}>
                    Convert To Lowercase
                </button>
                <button className="btn btn-primary mx-2 " onClick={handleOriginal}>Reverse text</button>
                <button className="btn btn-primary mx-2 " onClick={Default}>Default</button>
                <button className="btn btn-primary mx-2 " onClick={clear}>Clear</button>
                <button className="btn btn-primary mx-2 " onClick={handleCopy}>Copy</button>
                <button className="btn btn-primary mx-2 " onClick={reomveSpace}>Remove Extra Space</button>

            </div>
            <div className="container my-3">
                <h2>Your Text Summary</h2>
                <p>words : {text.split(" ").length} characters {text.length} </p>
                <p>time to read : {text.split(" ").length * 0.008} Minutes read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    );
}
