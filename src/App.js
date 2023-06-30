import logo from './logo.svg';
import './App.css';
import ScreenOne from './components/ScreenOne';
import ImageMerger from './components/ImageMerger';
import React, { useState } from "react"

function App() {
  const [file_1, setFile_1] = useState();
  const [file_2, setFile_2] = useState();
  const [imageMerge, setMergeImage] = useState(false)
  function handleChange(e) {
    console.log(e.target.files);
    setFile_1(URL.createObjectURL(e.target.files[0]));
  }
  function handleChange_2(e) {
    console.log(e.target.files);
    setFile_2(URL.createObjectURL(e.target.files[0]));
  }
  function onSubmit(value) {
    setMergeImage(true)
    console.log("value", value)
  }

  const image1 = '../profile1.jpg';
  const image2 = '../profile3.webp';
  return (
    <div className="App">
      {/* <ScreenOne firstName="Priyanka" lastName="Shelke" image="../profile1.jpg"/>
     <ScreenOne firstName="Sheetal" lastName="Shelke" image="../profile3.webp"/> */}
      <div>
        <input type="file" onChange={handleChange} />
        <img src={file_1} />
      </div>
      <div>
        <input type="file" onChange={handleChange_2} />
        <img src={file_2} />
      </div>
      <div>
        <button type="button" onClick={() => onSubmit("value")} >Image Merge</button>
        {imageMerge && (
          <ImageMerger image1={file_1} image2={file_2} />)}
      </div>
    </div>
  );
}

export default App;
