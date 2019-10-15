import React, { Component } from "react";
import { Button } from "./components/Button";
import { connect } from "react-redux";
import { setUserId } from "./store/global/actions";
class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test1: 0
    };
  }
  render() {
    const { test1 } = this.state;
    return (
      <div>
        <Button
          onClickHandler={() => {
            this.setState({ test1: test1 + 1 });
            this.props.setUserId("8888");
          }}
          name="Click"
          variant="text"
          color="primary"
        />
        <div>{test1}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("====================================");
  console.log(state);
  console.log("====================================");
  return {
    detailsReducer: state.detailsReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setUserId: id => dispatch(setUserId(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(componentName);
