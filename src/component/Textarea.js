import React, { useState } from 'react'

const Textarea = (props) => {

    // convert LowerCase Into UpperCase
    const handleUp = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.alert("Convert To UpperCase", "success")
    }

    const handlechange = (e) => {
        setText(e.target.value)
    }

    // convert UpperCase Into LowerCase
    const handleLow = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.alert("Convert To LowerCase", "success")
    }

    // Clean All Text
    const handleclean = () => {
        let newText = ""
        setText(newText)
        props.alert("Successfully clean ", "success")
    }
    // Copy All Text For Clipboard
    const handlecopy = () => {
        navigator.clipboard.writeText(text);
        props.alert("Copy to Text", "success")
    }

    const capitalizeWords = () => {
        let newText = text.split(' ').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
        props.alert("First Capital Letter has been Successfully Change","dark")
        return setText(newText);
    };
    const handleremove = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        props.alert("Remove Extra Spaces", "success")
        // let newText = text.split(/[ ]+/)
        // if(newText===text.split(/[ ]+/))
        // {
        // setText(newText.join(" "))
        // props.alert("Remove Extra Spaces", "success")
        // }
        // else{
        //     props.alert("No Extra Space","warning")
        // }

    }
    const [text, setText] = useState("")
    return (
        <div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h2>{props.heading}</h2>
                <textarea className="form-control" value={text} onChange={handlechange} placeholder="Leave a text here" style={{ backgroundColor: props.mode === "dark" ? '#13466e' : 'white', color: props.mode === "dark" ? "white" : "042743" }} rows="8"></textarea>
                <button className='btn btn-primary mx-2 my-3' disabled={text.length === 0} onClick={handleUp}>Convert to UpperCase</button>
                <button className='btn btn-dark mx-2 my-3' disabled={text.length === 0} onClick={capitalizeWords}>Convert To First Letter Capital</button>
                <button className='btn btn-secondary mx-2 my-3' disabled={text.length === 0} onClick={handleLow}>Convert to LowerCase</button>

                <button className='btn btn-success mx-2 my-3' disabled={text.length === 0} onClick={handlecopy}>Copy Text</button>
                <button className='btn btn-danger mx-2 my-3' disabled={text.length === 0} onClick={handleremove}>Remove Space</button>
                <button className='btn btn-danger mx-2 my-3' disabled={text.length === 0} onClick={handleclean}>Clean</button>
            </div>

            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h3>Your Text Summary</h3>
                <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} and {text.length} character </p>
                <p>{0.008 * text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} Minutes Read</p>
                <h3>Preview</h3>
                <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
            </div>
        </div>
    )
}

export default Textarea
