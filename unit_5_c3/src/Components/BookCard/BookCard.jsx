import { Link } from "react-router-dom";
import styled from "styled-components";

export const BookCard = ({ object }) => {
  console.log("inside book card function")
  return (
    <Link to={`/${object['id']}`}>
    <div className="bookCard" key={object['id']}>
          <img src={object['imageUrl']} alt=""/>
          <p>{object['title']}</p>
          <p>{object['price']}</p>
        </div>
    </Link>
  )
  // Bookcard is a card looking component, that is also a 'Link' for react-router
  //  it's basically shows one books information.
  // You can style custom tags with styled components in following way:
  // styled(Link)`
  //   color: xyz;
  // `
  //  now this container is a link that is also a card.
  //  card will have following 'children':
  //  div with className 'bookCard'
  //  Image of the book
  //  title of the book. h2 with classname 'title'
  //  price of book with class 'price'
  //
  // rough example:
  // <YourStyledLink to={}>
  //    title, image price etc here
  // </YourStyledLink>
};
