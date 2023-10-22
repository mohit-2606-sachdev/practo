import React from "react";
import Comments from "./Comments";
import "../../Assets/Styles/Homepage.css";
import Article from "./Article";
import ListByProblem from "./ListByProblem";
import Poster from "./Poster";
import ListFeatures from "./ListFeatures";
import ListByDepartment from "./ListByDepartment";
import DownloadApp from "./DownloadApp";
import SearchDoctor from "../Common/SearchDoctor";

const HomePage = () => {
  return (
    <div>
      <SearchDoctor />
      <Poster />
      <ListFeatures />
      <ListByProblem />
      <ListByDepartment />
      <Article />
      <Comments />
      <DownloadApp />
    </div>
  );
};

export default HomePage;
