import React from 'react';
import Navbar from './components/navbar/navbar';
import Banner from './components/Header/Header';
import Body from './components/body/body';
import FeaturedCard from './components/featured Component/featuredCard';
import Services from './components/services/services';







const App = () => {
  return (
    <>
    <Navbar/>
    <Banner/>
    <Body/>  
    <FeaturedCard/>
    <Services/>
  </>
  );
}

export default App;
