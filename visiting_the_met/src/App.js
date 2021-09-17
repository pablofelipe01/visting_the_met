import './App.css';
import React, { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import data from './data.json'
import CarouselContainer from './CarouselContainer';
import Navigation from './Navigation'
import Gallery from './Gallery';
import Search from './Search';
function App() {
  const [searchOptions, setSearchOptions] = useState({
    url: 'https://collectionapi.metmuseum.org/public/collection/v1/objects',
    numberOfResults: 5,
  });
  const [galleryImages, setGalleryImages] = useState(data);
  return (
    <>
    <Navigation />
    <main>
      <Switch>
        <Route 
        exact
        path='/home'
        render={() => <CarouselContainer data={data} />}
        />
        <Route
        exact
        path='/gallery'
        render={() => <Gallery galleryImages={galleryImages}/>}
        
        />
        <Route
        exact
        path='/themet'
        render={() => <Search searchOptions={searchOptions}/>}
        
        />
        <Redirect path='*' to='/>home' />
      </Switch>
    </main>
    </>
  );

}

export default App;
