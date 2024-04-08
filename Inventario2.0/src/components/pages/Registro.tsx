import FormInput from "../atoms/Inputs/InputText";
import BtnAction from "../atoms/Buttons/Button";
import InputDoble from "../atoms/Inputs/InputCarac";
import { Form, Modal } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../axiosData.mts";

export default function Registro() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState<any>([]);
  const [dataRoles, setDataRoles] = useState<any>([]);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const DataRegister = {
        firstName: firstName,
        lastName: lastName,
        userName: username,
        email: email,
        password: password,
      };
      const send = await api.post("/usuarios/registro", DataRegister);
      const sendData = send.data;
      if (sendData.isSucceed) {
        setData([...data, sendData]);
        alert("El usuario ha sido registrado correctamente");
        navigate("/Inicio");
      } else {
        setError(sendData.message);
      }
    } catch (error) {
      setError("Error en el inicio de sesión");
      console.error(error);
    }
  };

  const GetRoles = async () => {
    const SendRoles = await api.post("/usuarios/seed-roles");
    setDataRoles([...dataRoles, SendRoles.data]);
    // console.log("Roles activados");
  };

  useEffect(() => {
    GetRoles();
  }, []);

  return (
    <div className="modal show login">
      <Modal.Dialog className="Login-Cont Register-Cont">
        <h1 id="Titulo-Login">Registrar usuario</h1>

        <Modal.Body>
          <Form className="Login-Form Register-Form">
            <InputDoble
              InputName="Nombre y apellido"
              FirstValue={firstName}
              FirstChange={(e) => setFirstName(e.target.value)}
              FirstType="text"
              FirstPlaceholder="Nombre"
              FirstName="firstName"
              SecondValue={lastName}
              SecondChange={(e) => setLastName(e.target.value)}
              SecondType="text"
              SecondPlaceholder="Apellido"
              SecondName="lastName"
            />
            <FormInput
              InputTitle="Nombre de usuario"
              InputType="text"
              InputName="userName"
              Inputvalue={username}
              InputChange={(e) => setUsername(e.target.value)}
            />
            <FormInput
              InputTitle="Correo Electrónico"
              InputType="email"
              InputName="email"
              Inputvalue={email}
              InputChange={(e) => setEmail(e.target.value)}
            />
            <FormInput
              InputTitle="Contraseña"
              InputType="password"
              InputName="password"
              Inputvalue={password}
              InputChange={(e) => setPassword(e.target.value)}
            />
            { error && <span style={{color: "red"}}>{error}</span> }
            <br />
            <div style={{ textAlign: "center" }} className="Btn-Login">
              <BtnAction
                btnlabel="Registrarse"
                btncolor="success"
                action={handleRegister}
              />
            </div>
          </Form>
        </Modal.Body>
      </Modal.Dialog>
    </div>
  );
}
