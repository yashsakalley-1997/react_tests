import { useParams } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
import { BookCard } from "../BookCard/BookCard";
import { SortAndFilterButtons } from "../SortAndFilterButtons/SortAndFilterButtons";
import styled from "styled-components";

export const Section = () => {

  const { section } = useParams();
  const [data,setData] = useState([]);
  const [sort_value,setSort] = useState("");

  useEffect(()=>{
    axios.get(`http://localhost:8080/books/?q=${section}`).then((res)=>{
      setData(res.data)
    })
  },[section])

  function sort(value)
  { 
    setSort(value.target.id)
    sortData(value.target.id)
  }

  function sortData(value){
    console.log("sectionsss",value)
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
  const Main = styled.div`
    /* Same as Homepage */
  `;

  
  return (
    <>
      <h2 style={{ textAlign: "center" }}>
        {section}
      </h2>
      <SortAndFilterButtons handleSort={sort} />

      <Main className="sectionContainer">
        {/* SHow same BookCard component here, just like homepage but with books only belong to this Section */}
        {data.map((e)=>(
        <BookCard object={e} >
        </BookCard>
      ))}
      </Main>
    </>
  );
};
