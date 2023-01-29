import React, { useEffect, useState } from "react";
import axios from "axios";
import "./api.css";

function Api() {
  let [data, setData] = useState([]);

  useEffect(() => {
    async function rohit() {
      let vikas = await axios.get("https://dummyjson.com/products");
      console.log(vikas);
      setData(vikas.data.products);
    }

    // axios.get('https://dummyjson.com/products')
    // .then((responce) => { console.log(responce.data.products)
    //   setData(responce.data.products)
    // })
  }, []);
  return (
    <div className="items">
      {data.map((rohit) => {
        return (
          <div className="item">
            <h1>{rohit.title}</h1>
            <img src={rohit.thumbnail}></img>
            <p>{rohit.description}</p>
            <h4>Price:${rohit.price}</h4>
            <h2>{rohit.brand}</h2>
          </div>
        );
      })}
    </div>
  );
}

export default Api;
