// import { Routes, Route } from "react-router";
import { Route,Routes } from "react-router-dom";
import { Home } from "../Components/Home/Home";
import { Section } from "../Components/Section/Section";
import { BookDetailsPage } from "../Components/BookDetailsPage/BookDetailsPage";
import { NotFound } from "../Components/NotFound/NotFound";
import { Navbar } from "../Components/Navbar/Navbar";

export const AllRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/:id" element={<BookDetailsPage></BookDetailsPage>}></Route>
        <Route exact path="/sections/:section" element={<Section></Section>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
        {/* <Route exact path=""></Route> */}
        {/* Create other routes here: Section, bookdetailspage and 404 */}
        {/*  */}
      </Routes>
    </>
  );
};
