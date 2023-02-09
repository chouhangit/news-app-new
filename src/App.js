import React from 'react'
import Navbar from './components/Navbar';
import { NewsProvider } from './context/NewsContext';
import Home from './pages/Home';
import Headline from "../src/components/Headline"
function App() {
  return (
    <NewsProvider>
      <>
        <Navbar />
        <Headline/>
        <Home />
      </>
    </NewsProvider>





  );
}

export default App
