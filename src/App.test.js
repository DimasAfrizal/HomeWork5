import { render, screen } from '@testing-library/react';  
import Home from './HomeWork7/Pages/Auth';
import {Provider} from 'react-redux';
import store from './HomeWork7/reduxThing/store';
import React from 'react';
import Search from './HomeWork7/Pages/Search';
import Tracks from './HomeWork7/Component/Tracks/container';
import Playlist from './HomeWork7/Component/Tracks/index';

test('Home Page Checker', () => {
  render(
    <Provider store={store}>
      <Home />
    </Provider>
  );
  const loginTes = screen.getByTestId('loginBtn'); 
  expect(loginTes).toBeInTheDocument();
});

test('Create Playlist Page Checker', () => {
  render(
    <Provider store={store}>
      <Search/>
    </Provider>
  );
  const profileTes = screen.getByTestId('profileChecker');
  const createListTes = screen.getByTestId('createListChecker');
  const searchBarTes = screen.getByTestId('searchBarChecker'); 
  const playlistTes = screen.getByTestId('playlistChecker'); 

  expect(profileTes).toBeInTheDocument();
  expect(createListTes).toBeInTheDocument();
  expect(searchBarTes).toBeInTheDocument();
  expect(playlistTes).toBeInTheDocument();
});

// test('Playlist Component Checker', () => {
//   render(
//     <Provider store={store}>
//       <Playlist combinedTracks={combinedTracks} handleSelectedTrack={handleSelectedTrack} />
//     </Provider>
//   );
//   const trackChecker = screen.getByTestId("trackChecker");

//   expect(trackChecker).toBeInTheDocument();
// });

// test('Track Component Checker', () => {
//   const { album, name: songName, isSelected, uri} =track;
//   render(
//     <Provider store={store}>
//       <Tracks  key={uri} track={item} handleSelectedTrack={handleSelectedTrack}/>
//     </Provider>
//   );
//   const imgTrackChecker = screen.getByTestId("imgTrackChecker");
//   const titleTrackChecker = screen.getByTestId('titleTrackChecker');
//   const artisTrackChecker = screen.getByTestId('artisTrackChecker'); 
//   const selectBtn = screen.getByTestId('selectBtn'); 

//   expect(imgTrackChecker).toBeInTheDocument();
//   expect(titleTrackChecker).toBeInTheDocument();
//   expect(artisTrackChecker).toBeInTheDocument();
//   expect(selectBtn).toBeInTheDocument();
// });