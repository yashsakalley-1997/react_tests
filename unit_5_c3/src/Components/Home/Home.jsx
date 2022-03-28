import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { BookCard } from "../BookCard/BookCard";
import { SortAndFilterButtons } from "../SortAndFilterButtons/SortAndFilterButtons";

import { Link } from "react-router-dom";
import styledComponents from "styled-components";

export const Home = () => {
  const [data,setData] = useState([]);
  const [sort_value,setSort] = useState("");

  useEffect(()=>{
    axios.get("http://localhost:8080/books").then((res)=>{
      setData(res.data)
    })
  },[])
  // get all books when user lands on the page
  // populate them as mentioned below

  function sort(value)
  {
    setSort(value.target.id)
    sortData(value.target.id)
  }

  function sortData(value){
    if(value == "asc_price"){
      data.sort(function(a,b){
        return a['price']-b['price']
      })
      setData(data)
    }
    else if(value == "desc_price"){
      data.sort(function(a,b){
        return b['price']-a['price']
      })
      setData(data)
    }
    else if(value == "asc_title"){
      data.sort(function(a,b){
        if(a.title < b.title) { return -1; }
        if(a.title > b.title) { return 1; }
      })
      setData(data)
    }
    else if(value == "desc_title"){
      data.sort(function(a,b){
        if(a.title < b.title) { return 1; }
        if(a.title > b.title) { return -1; }
      })
      setData(data)
    }
    
  }


  return (
    <div className="homeContainer">
      <h2 style={{ textAlign: "center" }}>Home</h2>
      <SortAndFilterButtons handleSort={sort}/>
      {data.map((e)=>(
        <BookCard key={e['id']} object={e} >
        </BookCard>
      ))}

        {/* 
            Iterate over books that you get from network
            populate a <BookCard /> component
            pass down books id, imageUrl, title, price and anything else that you want to 
            show in books Card.
        */}
      
    </div>
  );
};
