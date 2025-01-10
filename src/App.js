import logo from "./logo.svg";
import "./App.css";
import data from "./data.json";
import { useEffect, useState } from "react";
import { Card } from "@mui/material";
import { ImgMediaCard } from "./card";

import { CardMedia } from "@mui/material";
import { Grid1 } from "./grid";
import { Grid2 } from "@mui/material";
import { Videocard } from "./videocard";
import { A } from "./Liftingstate/A";
import { B } from "./Liftingstate/B";
import { Debounce } from "./Debouncing/debounce";
import { Errorhandling } from "./errorhandling";

function App() {
  // **********imagecard************
  // const [datas, setdatas] = useState(data.videos);
  // console.log(datas);
  // ***********************************************

  // *************Videocard****************
  // const [videodata, setvideodata] = useState([]);
  // const fetchdata = async () => {
  //   const res = await fetch(
  //     `https://content-xflix-backend.azurewebsites.net/v1/videos`
  //   );
  //   const resdata = await res.json();
  //   console.log(resdata.videos);
  //   setvideodata(resdata.videos);
  // };
  // useEffect(() => {
  //   fetchdata();
  // }, []);

  // **************Lifting state Up****************
  // const [val, setval] = useState("");
  // const handlechange = (newval) => {
  //   console.log(newval);
  //   setval(newval);
  // };

  // **********************Debouncing**********************************
  // const [val, setval] = useState("");
  // const [videodata, setvideodata] = useState([]);
  // const fetchdata = async (title) => {
  //   try {
  //     let res;
  //     if (title) {
  //       res = await fetch(
  //         `https://content-xflix-backend.azurewebsites.net/v1/videos?title=${title}`
  //       );
  //     } else {
  //       res = await fetch(
  //         `https://content-xflix-backend.azurewebsites.net/v1/videos`
  //       );
  //     }
  //     const resdata = await res.json();
  //     console.log(resdata.videos);
  //     setvideodata(resdata.videos);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  // useEffect(() => {
  //   fetchdata(val);
  // }, [val]);
  // const handlechange = (e) => {
  //   setval(e.target.value);
  // };

  return (
    <div className="App">
      <h1>Welcome</h1>
      {/* **************imagecard and all 1st basc1******************* */}
      {/* {datas.map((item, index) => (
        <ImgMediaCard
          video={item}
          key={item.id}
          hasbutton={index % 2 === 0 ? true : false}
        />
      ))} */}

      {/* *******************basic1 over************** */}
      {/* ******************Grid********** */}
      {/* <Grid1 /> */}

      {/* *************Videocard************** */}
      {/* <Grid2 container spacing={2}>
        {videodata.map((item) => (
          <Grid2 size={{ sm: 6, md: 4, lg: 3 }}>
            <Videocard carddata={item} key={item.id} />
          </Grid2>
        ))}
      </Grid2> */}

      {/* *******************Lifting state******************* */}
      {/* <A handlechange={handlechange} />
      <B val={val} /> */}

      {/* *******************Debouncing************************* */}
      {/* <input placeholder="enter to search videos" onChange={handlechange} />
      <br />
      <Grid2 container spacing={2}>
        {videodata.map((item) => (
          <Grid2 size={{ sm: 6, md: 4, lg: 3 }}>
            <Videocard carddata={item} key={item.id} />
          </Grid2>
        ))}
      </Grid2> */}

      {/* *******************Debounce2************************** */}
      {/* <Debounce /> */}
      {/* *********************Error handling************ */}
      <Errorhandling />
    </div>
  );
}

export default App;
