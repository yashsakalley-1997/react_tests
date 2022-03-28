import axios from "axios";
import { useParams } from "react-router";
import { useEffect,useState } from "react";

export const BookDetailsPage = () => {
  const { id } = useParams();
  
  const [product,setData] = useState({});

  useEffect(()=>{
    axios.get(`http://localhost:8080/books/${id}`).then((res)=>{
      setData(res.data)
    })
  },[])
  return (
    <>
      <div className="bookContainer">
        <h2 className="title">{product['title']}</h2>
        <img className="image" src={product['imageUrl']} alt="#" />
        <div className="author">{product['author']}</div>
        <div className="description">{product['description']}</div>
        <div className="price">{product['price']}</div>
        <div className="section">{product['section']}</div>
        <div className="isbnNumber">{product['isbnNumber']}</div>
        <ul className="reviews">
          {/* Reviews will be an array, iterate over them and create a new <li> for every review */}
        </ul>
      </div>
    </>
  );
};
