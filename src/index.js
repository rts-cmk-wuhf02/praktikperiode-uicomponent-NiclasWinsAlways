import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Components
import Maladives from './assets/components/maldives/app';
import Outdoor from './assets/components/outdoor/app';
import Parcelbox from './assets/components/parcelbox/app';
/* import Ontime from './assets/components/on-time/app'; */


import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Maladives/>
    <Outdoor/>
    <Parcelbox/>
 {/*    <Ontime/> */}
    {/*

    */}
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
