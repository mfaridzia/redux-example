import React from "react";
import { connect } from "react-redux";

// menghubungkan state di redux dengan props react component
const mapStateToProps = state => {
  return {
    articles: state.articles
  };
};

const ConnectedList = ({ articles }) => (
  <ul className="list-group list-group-flush">
    {articles.map(el => (
      <li className="list-group-item" key={el.id}>
        {el.title}
      </li>
    ))}
  </ul>
);

// connect untuk menghubungkan redux store dengan react components
const List = connect(mapStateToProps)(ConnectedList);

export default List;
