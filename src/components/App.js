import React from 'react';
import Landing from './Landing'
import Slider from './Slider'
import Slide_01 from "./Slide_01";
import Slide_02 from "./Slide_02";
import Slide_03 from "./Slide_03";
import Slide_04 from "./Slide_04";
import Slide_05 from "./Slide_05";

function App() {
  return (
    <div className="App">
      {/*<Slider/>*/}
      <Landing/>
      <Slide_01/>
      <Slide_02/>
      <Slide_03/>
      <Slide_04/>
      <Slide_05/>
    </div>
  );
}

export default App;
