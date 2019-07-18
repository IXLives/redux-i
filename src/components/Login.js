import React from "react";
import login from "../actions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }

  handleChanges = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  };

  submit = e => {
    e.preventDefault();
    const { username, password } = this.state;
    this.props.login(username, password)
    .then(() => {
      this.props.history.push("/")
    })
    .catch((err) => {
        console.log(err)
    })
  };

  render() {
    const { username, password } = this.state;
    const { isLoading, errorMessage } = this.props;
    return (
      <div className="login-form">
        {errorMessage && <p className="errorMessage">{errorMessage}</p>}
        <h2>Login Form</h2>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={username}
          onChange={this.handleChanges}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={this.handleChanges}
        />
        {isLoading ? (
          <p>Logging in...</p>
        ) : (
          <button onClick={this.submit}>Login</button>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.isLoading,
  errorMessage: state.errorMessage
});

const mapDispatchToProps = {
  login
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Login)
);

{
  /* <p>Token in localStorage:</p>
        <p>
          {localStorage.getItem("userToken")
            ? "Token is in localStorage!"
            : "Nothing in localStorage yet"}
        </p> */
}
