import { useEffect, useState } from "react";
import axios from "axios";

// **************Error handling using fetch******************

export function Errorhandling() {
  const [error, seterror] = useState("");
  const [datas, setdatas] = [];
  const figures = {
    username: "ashish",
    password: "bhattarai",
  };
  const fetchdata = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify(figures),
      });
      console.log(res);
      if (!res.ok) {
        throw Error("server is unable to fetch data");
      }
      const data = res.json();

      setdatas(data);
    } catch (err) {
      seterror(err.message);
      console.log(err);
    }
  };
  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div>
      {error && <p>{error}</p>}
      {/* {datas.map((item) => (     //we are posting data and not getting
        <p>item.title</p>
      ))} */}
    </div>
  );
}

// ********************Error handling using axios***************

// export function Errorhandling() {
//   const [error, seterror] = useState("");
//   const [datas, setdatas] = [];
//   const figures = {
//     username: "ashish",
//     password: "bhattarai",
//   };
//   const fetchdata = async () => {
//     try {
//       const res = await axios.post(
//         "https://jsonplaceholder.typicode.com/postss",
//         figures
//       );
//       console.log(res);
//     } catch (err) {
//       // seterror(err.response.data.message)// this is actual message from server
//       if (err.response.status === 404) {
//         seterror("invalid");
//       }
//       console.log(err);
//     }
//   };
//   useEffect(() => {
//     fetchdata();
//   }, []);

//   return (
//     <div>
//       {error && <p>{error}</p>}
//       {/* {datas.map((item) => (
//           <p>item.title</p>
//         ))} */}
//     </div>
//   );
// }
