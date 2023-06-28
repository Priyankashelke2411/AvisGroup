import logo from './logo.svg';
import './App.css';
import ScreenOne from './components/ScreenOne';
import ImageMerger from './components/ImageMerger';

function App() {
  const image1 = '../profile1.jpg';
  const image2 = '../profile3.webp';
  return (
    <div className="App">
     <ScreenOne firstName="Priyanka" lastName="Shelke" image="../profile1.jpg"/>
     <ScreenOne firstName="Sheetal" lastName="Shelke" image="../profile3.webp"/>
     <ImageMerger image1={image1} image2={image2} />
    </div>
  );
}

export default App;
