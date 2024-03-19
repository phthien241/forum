import React, {Suspense, lazy} from 'react';
import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./screen/Home/Home'));
const Forum = lazy(() => import('./screen/Forum/Forum'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/forum' element={<Forum />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
