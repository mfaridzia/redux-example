import React from "react";
import { connect } from "react-redux";
import uuidv1 from "uuid";
import { addArticle, foundBadWord, clearBadWord } from "./js/actions/index";

function mapDispatchToProps(dispatch) {
  return {
    addArticle: article => dispatch(addArticle(article)),
    foundBadWord: badword => dispatch(foundBadWord(badword)),
    clearBadWord: badword => dispatch(clearBadWord(badword))
  };
}

const mapStateToProps = state => {
  return {
    badWordNotif: state.badWordNotif
  };
};

class ConnectedForm extends React.Component {
  constructor() {
    super();

    this.state = {
      title: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.closeNotif = this.closeNotif.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { title } = this.state;
    const id = uuidv1();
    this.props.addArticle({ title, id });
    this.setState({ title: "" });
  }

  closeNotif(event) {
    event.preventDefault();
    this.props.clearBadWord();
  }

  render() {
    const { title } = this.state;
    const { badWordNotif } = this.props;
    return (
      <form onSubmit={this.handleSubmit}>
        <h2 onClick={this.closeNotif}> {badWordNotif} </h2>
        <div className="form-group">
          <label htmlFor="title" />
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={this.handleChange}
          />
        </div>
        <button type="submit" className="btn btn-success btn-lg">
          Save
        </button>
      </form>
    );
  }
}

const Form = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedForm);

export default Form;
