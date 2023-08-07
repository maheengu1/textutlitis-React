import React,{useState}  from 'react'

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to Upper Case", "success")
  }

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra Spaces have been removed", "success")
  }

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to Lower Case", "success")
  }
  const handleOnChange = (event) =>{
    setText(event.target.value)
  }
  const handleCapitalize = () => {
    let words = text.split(' ');
    let capitalizedWords = [];
    for (let i = 0; i < words.length; i++) {
      capitalizedWords.push(
        words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase()
      );
    }
    setText(capitalizedWords.join(' '));
    props.showAlert("Each word is capitalized", "success")
  }
  const [text, setText] = useState('');
  let textWithoutSpaces = text.replace(/\s/g, '');
  let words = text.trim() 
  let word_length; 
  words.length === 0 ? word_length = 0 : word_length = words.split(" ").length

  return (
    <>
    <div className='container'>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value = {text} id="myBox" rows="5"  onChange={handleOnChange}></textarea>
        </div>
        <button className="btn btn-success my-2 mx-2" onClick={handleUpClick} >Convert to Uppercase</button> 
        <button className="btn btn-success my-2 mx-2" onClick={handleLoClick} >Convert to Lowercase</button> 
        <button className="btn btn-success my-2 mx-2" onClick={handleCapitalize} >Capitalize each word</button>
        <button className="btn btn-success my-2 mx-2" onClick={handleExtraSpaces} >Remove Extra Spaces</button> 
    </div>
    <div className="container my-2">
      <h1>Your text Summary</h1>
      <p>{word_length} words, {textWithoutSpaces.length} characters</p>
      <p>{0.008* text.split(" ").length} Minutes read</p>
      <h3>Preview</h3>
      <p>{text.length>0? text : "Enter something in the textbox above to preview here"}</p>
    </div>
    </>
  )
}