import React, { useState, useContext } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import UserContext from "../../context/UserContext";
const Login = () => {
  const [userState, setUserState] = useState(true);
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const { list, handleActive, handleListUser } = useContext(UserContext);
  const [nuevoUsuario, setNuevoUsuario] = useState({});

  const handleUserName = ({ value }) => {
    setUser(value);
  };

  const handlePass = ({ value }) => {
    setPass(value);
  };

  const handleUser = async (event) => {
    event.preventDefault();
    let inListUser = list.some(
      (item) => item.email === user && item.password === pass,
    );

    if (inListUser) {
      var objectListUser = list.find(
        (item) => item.email === user && item.password === pass,
      );
      handleActive(inListUser, objectListUser.nivel);
    }
  };

  const handleNewName = ({ value }) => {
    setNuevoUsuario({ ...nuevoUsuario, nombre: value });
    console.log(value);
  };
  const handleNewLastName = ({ value }) => {
    setNuevoUsuario({ ...nuevoUsuario, apellido: value });
  };
  const handleNewUser = ({ value }) => {
    setNuevoUsuario({ ...nuevoUsuario, usuario: value });
  };
  const handleNewPass = ({ value }) => {
    setNuevoUsuario({ ...nuevoUsuario, password: value, nivel: 0 });
  };
  const handleNewEmail = ({ value }) => {
    setNuevoUsuario({ ...nuevoUsuario, email: value });
  };
  const handleNewAdd = ({ value }) => {
    setNuevoUsuario({ ...nuevoUsuario, direccion: value });
  };

  const handleAddNewUser = (event) => {
    event.preventDefault();
    handleListUser(nuevoUsuario);
  };

  return (
    <div className="container-contact-form">
      {userState ? (
        <React.Fragment>
          <h1>Log In</h1>
          <Form onSubmit={(event) => handleUser(event)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={({ target }) => handleUserName(target)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={({ target }) => handlePass(target)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              {/* <Form.Check type="checkbox" label="view password" /> */}
            </Form.Group>
            <div className="container-buttons-login">
              <Button variant="primary" type="submit">
                Sig In
              </Button>
              <Button
                onClick={() => setUserState(!userState)}
                variant="primary"
                // onChange={({ target }) => handleUserName(target)}
                type="submit"
              >
                Register
              </Button>
            </div>
          </Form>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <h1>Register</h1>
          <Form onSubmit={(event) => handleAddNewUser(event)}>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridName">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Juanito"
                  onChange={({ target }) => handleNewName(target)}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridLastName">
                <Form.Label>Apellido</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Rodriguez "
                  onChange={({ target }) => handleNewLastName(target)}
                />
              </Form.Group>
            </Row>
            <Form.Group className="mb-3" controlId="formGridUser">
              <Form.Label>Usuario</Form.Label>
              <Form.Control
                placeholder="usuario"
                onChange={({ target }) => handleNewUser(target)}
              />
            </Form.Group>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="example@example.com"
                  onChange={({ target }) => handleNewEmail(target)}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={({ target }) => handleNewPass(target)}
                />
              </Form.Group>
            </Row>
            <Form.Group className="mb-3" controlId="formGridAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control
                placeholder="1234 Main St"
                onChange={({ target }) => handleNewAdd(target)}
              />
            </Form.Group>

            <div className="container-buttons-login">
              <Button variant="primary" type="submit">
                Register
              </Button>{" "}
              <Button
                onClick={() => setUserState(!userState)}
                variant="primary"
                type="submit"
              >
                Sig In
              </Button>
            </div>
          </Form>
        </React.Fragment>
      )}
    </div>
  );
};

export default Login;
