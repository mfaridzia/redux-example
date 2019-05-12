import React from "react";
import { connect } from "react-redux";
import { getData } from "./js/actions/index";

export class Posts extends React.Component {
  componentDidMount() {
    this.props.getData();
  }

  render() {
    return (
      <ul>
        {this.props.articles.map(article => (
          <li key={article.id}>{article.title}</li>
        ))}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    articles: state.remoteArticles.slice(0, 10)
  };
}

export default connect(
  mapStateToProps,
  { getData }
)(Posts);
