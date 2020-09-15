import React, { Component } from "react";
import { Form, Tabs, Tab, Button, Modal } from "react-bootstrap";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      login: "",
      password: "",
      password2: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      login: this.state.login,
      password: this.state.password,
      password2: this.state.password2
    };

    console.log(userData);
  }

  render() {
    const { classes } = this.props;

    return (
      <div>

        <Form className="modal-body">
          <Form.Group className="md-form form-sm mb-4">
            <i className="fa fa-user prefix mr-2"></i>
            <Form.Label data-error="wrong" data-success="right">
              Your Name
            </Form.Label>

            {/* user input name */}
            <Form.Control
              type="email"
              placeholder="Enter email"
              className="form-control form-control-sm validate"
            />
          </Form.Group>

          {/* Email */}
          <Form.Group className="md-form form-sm mb-4">
            <i className="fa fa-envelope prefix mr-2"></i>
            <Form.Label data-error="wrong" data-success="right">
              Your Email
            </Form.Label>
            {/* user input email */}
            <Form.Control
              type="email"
              placeholder="Enter email"
              className="form-control form-control-sm validate"
            />
          </Form.Group>

          {/* Password */}
          <Form.Group className="md-form form-sm mb-4">
            <i className="fa fa-lock prefix mr-2"></i>
            <Form.Label data-error="wrong" data-success="right">
              Your Password
            </Form.Label>
            {/* user input pw */}
            <Form.Control
              type="password"
              placeholder="••••••"
              className="form-control form-control-sm validate"
            />
          </Form.Group>

          {/* Sign Up */}
          <div className="text-center form-sm mt-2">
            <Button className="modalSignin btn btn-primary">
              Sign up <i className="fa fa-sign-in ml-1"></i>
            </Button>
          </div>
        </Form>
      </div>
    );
  }
}

export default Signup;
