import React from 'react'
import { useState } from 'react'


export default function TextForm(props) {
    const [text,setText] = useState("");
    const handleOnChange = (event)=>{
        setText(event.target.value)
    }
    const handleUpClick = ()=>{
        setText(text.toUpperCase())
        props.showAlert('Text has been converted to Uppercase','success')
    }
    const handleULoClick = ()=>{
        setText(text.toLowerCase())
        props.showAlert('Text has been converted to Lowercase','success')
    }

    const handleClear = ()=>{
        setText("")
        props.showAlert('Text area has been cleared','success')
    }

    const handleCopy = ()=>{
        let text = document.getElementById("myBox");
        navigator.clipboard.writeText(text);
        props.showAlert('Text copied to clipboard','info')
    }
    
    return (
        <div>
            <div className="mb-3">
                <div className="container my-3">
                    <h3>Enter the text here</h3>
    
                    <textarea className="form-control" style={props.theme==='dark'?{backgroundColor:'rgb(24, 27, 31)',color:'white'}:{backgroundColor:'white'}} id="myBox" value={text} onChange={handleOnChange} rows="8"></textarea>
                    <button className='btn btn-primary my-3' onClick={handleUpClick}>Convert to Uppercase</button>
                    <button className='btn btn-primary my-3 mx-2' onClick={handleULoClick}>Convert to Lowercase</button>
                    <button className='btn btn-primary my-3 mx-2' onClick={handleClear}>Clear</button>
                    <button className='btn btn-primary my-3 mx-2' onClick={handleCopy}>Copy Text</button>

                    <h3>Text summary</h3>
                    <p><b>{text.split(" ").length-1}</b> words and <b>{text.length}</b> characters</p>
                    <p>{parseFloat(text.split(" ").length*3.8/500).toFixed(1)} mins reading time</p>
                </div>
            </div>
        </div>
    )
}
