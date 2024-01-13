import "./App.css";
import { logoimg } from "./components/imageexport.js";
import React, { useState } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import Switchtheme from "./components/Switchtheme.js";

const App = () => {
  const [mode, setMode] = useState('light');
  const [white,setWhite]= useState('white');
  const [black,setBlack]=useState('black');
  const [c1,setColor1]=useState('#1D2F3E');
  const [c2,setColor2]=useState('#0A1A26');
  // const [c3, setColor3]=useStae('');
  const pageSize = 12;
  const [country, setCountry]=useState('in');
  const apiKey = "789d955804524508b06509971cc43ad5";
  const [progress, setProgress] = useState(0);

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      setBlack('black');
      setWhite('white');
      setColor1('#1D2F3E');
      setColor2('#0A1A26');
      document.title = 'BuzzBulletin - Dark Mode';
    }
    else{
      setMode('light');
      setBlack('white');
      setWhite('black');
      setColor1('#e2d0c1');
      setColor2('#f5e5d9');
      document.title = 'BuzzBulletin - Light Mode';
    }
    console.log(white);
    console.log(black);
    console.log(c1);
    console.log(c2);
  }
  return (
    <div style={{backgroundColor:c2, height:'100vh'}}>
      <LoadingBar height={3} color="#f11946" progress={progress} />
      <div className="logo_image" style={{backgroundColor:c2,color:white, borderBottomColor:c1, borderBottomWidth:'20px',borderBottomStyle:'solid'}}>
      <img src={logoimg} style={{ height: "60px" }} alt="" />
      <div onClick={toggleMode} >
        <Switchtheme toggleMode={toggleMode} />
      </div> 
      </div>
      <Router>
        <div id="section" style={{backgroundColor:c2,color:white}}>
          <div className="leftside" style={{backgroundColor:c1, color:white}}>
          <NavBar black={black} white={white} color1={c1} color2={c2} />
          </div>
          <div className="middle" >
            {
              <div id="display_section">
                <Switch>
                  <Route exact path="/">
                    <News
                      setProgress={setProgress}
                      apiKey={apiKey}
                      key="general"
                      pageSize={pageSize}
                      country={country}
                      category="general"
                      black={black}
                      white={white}
                      color1={c1}
                      color2={c2}
                    />
                  </Route>
                  <Route exact path="/business">
                    <News
                      setProgress={setProgress}
                      apiKey={apiKey}
                      key="business"
                      pageSize={pageSize}
                      country={country}
                      category="business"
                      black={black}
                      white={white}
                      color1={c1}
                      color2={c2}
                    />
                  </Route>
                  <Route exact path="/entertainment">
                    <News
                      setProgress={setProgress}
                      apiKey={apiKey}
                      key="entertainment"
                      pageSize={pageSize}
                      country={country}
                      category="entertainment"
                      black={black}
                      white={white}
                      color1={c1}
                      color2={c2}
                    />
                  </Route>
                  <Route exact path="/general">
                    <News
                      setProgress={setProgress}
                      apiKey={apiKey}
                      key="general"
                      pageSize={pageSize}
                      country={country}
                      category="general"
                      black={black}
                      white={white}
                      color1={c1}
                      color2={c2}
                    />
                  </Route>
                  <Route exact path="/health">
                    <News
                      setProgress={setProgress}
                      apiKey={apiKey}
                      key="health"
                      pageSize={pageSize}
                      country={country}
                      category="health"
                      black={black}
                      white={white}
                      color1={c1}
                      color2={c2}
                    />
                  </Route>
                  <Route exact path="/science">
                    <News
                      setProgress={setProgress}
                      apiKey={apiKey}
                      key="science"
                      pageSize={pageSize}
                      country={country}
                      category="science"
                      black={black}
                      white={white}
                      color1={c1}
                      color2={c2}
                    />
                  </Route>
                  <Route exact path="/sports">
                    <News
                      setProgress={setProgress}
                      apiKey={apiKey}
                      key="sports"
                      pageSize={pageSize}
                      country={country}
                      black={black}
                      white={white}
                      color1={c1}
                      color2={c2}
                      category="sports"
                    />
                  </Route>
                  <Route exact path="/technology">
                    <News
                      setProgress={setProgress}
                      apiKey={apiKey}
                      key="technology"
                      pageSize={pageSize}
                      country={country}
                      category="technology"
                      black={black}
                      white={white}
                      color1={c1}
                      color2={c2}
                    />
                  </Route>
                </Switch>
              </div>
            }
          </div>
        </div>
      </Router>
    </div>
  );
};

export default App;
