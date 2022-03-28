import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <Link to={'/'}>
          <button className="home">Home</button>
        </Link>
        <Link to={'/sections/history'}>
          <button className="history">history</button>
        </Link>

        <Link to={'/sections/Mystery'}>
          <button className="Mystery">Mystery</button>
        </Link>
        
        <Link to={'/sections/Mythology'}>
          <button className="Mythology">Mythology</button>
        </Link>
        
        <Link to={'/sections/Technology'}>
          <button className="Technology">Technology</button>
        </Link>
        

        {/* Populate 5 buttons with EXACT same classnames as of their routes name */}
        {/* Example: 
            <button className="history"> Link to history here  </button>  */}
        {/* Home component will have `/` route and classname as `home`  */}
      </div>
    </>
  );
};
