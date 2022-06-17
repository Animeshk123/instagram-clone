import React, { useState } from 'react'
import Home from './pages/Home';
import Info from './pages/Info';
import { Routes, Route } from 'react-router-dom';
import Navbar from './comps/Navbar';
import LoadingBar from 'react-top-loading-bar';
import Error from './pages/Error';
import ErrorPage from './comps/Error';

const App = () => {
  const [progress, setProgress] = useState(0)
  return (
    <>
      <LoadingBar
        color='red'
        height={4}
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home load={setProgress} />} />
        <Route exact path='/post/info/:id' element={<Info load={setProgress} />} />
        <Route path='/*' element={<Error />} />
      </Routes>
    </>
  )
}

export default App;