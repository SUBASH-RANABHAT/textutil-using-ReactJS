import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("")

    const handleUpClick = () =>{
      let newText = text.toUpperCase();
       setText(newText);
    }

    const handleClear = () =>{
      let newText = ("");
       setText(newText);
    }

    const handleLoClick = () =>{
      let newText = text.toLowerCase();
       setText(newText);
    } 

    const handleCopy= () =>{
      let txt = document.getElementById('myBox');
      txt.select();
      navigator.clipboard.writeText(txt.value);
    }

    const handleOnChange = (event) =>{
        setText(event.target.value)
            }

          
    const handleExtraSpace = () =>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "))
          }  

  return (<div>
<div className="container mb-3" style={{color: props.mode === 'dark'?'white':'#042743'}}>
    <h1>{props.heading}</h1>
      <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} placeholder="Enter Your Text" style={{backgroundColor: props.mode === 'dark'?'#13466e':'white', color: props.mode === 'dark'?'white':'#042743'}}></textarea>
</div>
<button className="btn btn-primary" onClick={handleUpClick}>Convert to Upper Case</button>
<button className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert to Lower Case</button>
<button className="btn btn-primary mx-2 my-2" onClick={handleClear}>Clear Text</button>
<button className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button>
<button className="btn btn-primary mx-2 my-2" onClick={handleExtraSpace}>Remove Extra Space</button>
<div className="container my-3" style={{color: props.mode === 'dark'?'white':'#042743'}}>
<h2><u>Your Text Summary</u></h2>
<p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and  {text.length} characters</p>
<h3><u>Live Preview</u></h3>
<p>{text}</p>
</div>
</div>
  )
}
