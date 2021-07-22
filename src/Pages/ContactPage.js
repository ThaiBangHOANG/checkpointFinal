import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ContactItem from "../Components/ContactItem";
import phone from "../img/phone.svg";
import email from "../img/emailme.svg";
import location from "../img/location.svg";
import Title from "../Components/AboutContactTitle";
import Axios from "axios";

class ContactPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      disabled: false,
      emailSent: null,
    };
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    console.log(event.target);

    this.setState({
      disabled: true,
    });

    Axios.post("/api/email", this.state)
      .then((res) => {
        if (res.data.success) {
          this.setState({
            disabled: false,
            emailSent: true,
          });
        } else {
          this.setState({
            disabled: false,
            emailSent: false,
          });
        }
      })
      .catch((err) => {
        console.log(err);

        this.setState({
          disabled: false,
          emailSent: false,
        });
      });
  };

  render() {
    return (
      <div>
        <div className="title">
          <Title title={"Contact"} span={"Contact"} />
        </div>
        <div className="ContactPage">
          <div>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group>
                <Form.Label htmlFor="full-name">Full Name</Form.Label>
                <Form.Control
                  id="full-name"
                  name="name"
                  type="text"
                  value={this.state.name}
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label htmlFor="email">Email</Form.Label>
                <Form.Control
                  id="email"
                  name="email"
                  type="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label htmlFor="message">Message</Form.Label>
                <Form.Control
                  id="message"
                  name="message"
                  as="textarea"
                  rows="3"
                  value={this.state.message}
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Button
                className="d-inline-block"
                variant="primary"
                type="submit"
                disabled={this.state.disabled}
              >
                Send
              </Button>

              {this.state.emailSent === true && (
                <p className="d-inline success-msg">Email Sent</p>
              )}
              {this.state.emailSent === false && (
                <p className="d-inline err-msg">Email Not Sent</p>
              )}
            </Form>
          </div>
          <div className="contact-sect">
            <ContactItem
              icon={phone}
              text1={"Fixed: 03.76.05.84.87"}
              text2={"Mobil: 06.36.16.83.67"}
              title={"Phone"}
            />
            <a href="mailto: thaibang1983hn@gmail.com" className="gmail">
              <ContactItem
                icon={email}
                text1={"thaibang1983hn@gmail.com"}
                text2={""}
                title={"Email"}
              />
            </a>
            <ContactItem
              icon={location}
              text1={"59370, Mons en Baroeul,"}
              text2={"Hauts de France"}
              title={"Address"}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ContactPage;
