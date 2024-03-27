import React, {Suspense, lazy} from 'react';
import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports';
const Home = lazy(() => import('./screen/Home/Home'));
const Forum = lazy(() => import('./screen/Forum/Forum'));
const ThreadPage = lazy(() => import('./screen/ThreadPage/ThreadPage'));
const Login = lazy(() => import('./screen/Login/Login'));

Amplify.configure(awsconfig);

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/forum/*' element={<Forum />} />
          <Route path="/thread/:slug/:threadId" element={<ThreadPage />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
