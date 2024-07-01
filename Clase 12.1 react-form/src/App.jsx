import { useState } from "react";
import Form from "./Form";

function App() {
  // const [form, setForm] = useState({});

  // function handleChange(evt) {
  //   const { name, value } = evt.target;

  //   setForm({ ...form, [name]: value });
  //   console.log(form);
  // }
  return (
    <>
      {/* <label htmlFor="nombre">Ingresa tu nombre</label>
      
      <input type="text" name="nombre" onChange={(evt) => handleChange(evt)} />

      <label htmlFor="nombre">Ingresa tu genero</label>
      <input type="text" name="genero" onChange={(evt) => handleChange(evt)} /> */}

      <Form />
    </>
  );
}

export default App;
