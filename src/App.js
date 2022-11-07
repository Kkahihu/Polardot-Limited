import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import 'glightbox';
import 'aos-animations/dist/animations.min.css';
import 'aos-animations/dist/animations.min.js';

function App() {
  return (
      <>
        <Router>
          <Routes>
            <Route path='/' element={<Home/>} />
          </Routes>

        </Router>
      </>
  );
}

export default App;
