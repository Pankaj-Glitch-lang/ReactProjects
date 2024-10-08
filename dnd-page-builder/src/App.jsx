import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LayoutBuilder from './component/LayoutBuilder';
import PublishPage from './component/PublishPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LayoutBuilder/>} />
        <Route path="/publish" element={<PublishPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
