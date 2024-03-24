import React, {Suspense, lazy} from 'react';
import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./screen/Home/Home'));
const Forum = lazy(() => import('./screen/Forum/Forum'));
const ThreadPage = lazy(() => import('./screen/ThreadPage/ThreadPage'));
// const Thread = lazy(() => import('./components/Thread/Thread'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/forum/*' element={<Forum />} />
          <Route path="/thread/*" element={<ThreadPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
