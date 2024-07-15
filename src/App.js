import './App.css';
import Header from '../src/Header/Header';
// import CV from '../src/CV/CV';
import Graphics from './Graphics/Graphics';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact'
import {Routes, Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Header/>
      <div className="lower-content">

      <Routes>
        {/* <Route path="/cv" element={<CV />}></Route> */}
        <Route path="/" element={<Projects />}></Route>
        <Route path="/graphics" element={<Graphics />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      </div>
    </div>
  );
}

export default App;
