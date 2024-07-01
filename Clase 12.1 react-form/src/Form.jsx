import React from "react";
import { useForm } from "react-hook-form";

export default function Form() {
  const { register, handleSubmit, formState, watch } = useForm();

  console.log(watch("nombre"));
  const functionHandleSubmit = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(functionHandleSubmit)}>
      <label htmlFor="nombre">Ingresa tu nombre</label>
      <input
        type="text"
        name="nombre"
        {...register("nombre", {
          required: {
            value: true,
            message: "Error este campo es requerido ",
          },
          validate: (value) => {
            if (value === "Harvey") {
              return true;
            } else {
              return "No tienes permisos";
            }
          },
        })}
      />

      {formState.errors.nombre && formState.errors.nombre.message}
      <br />
      <br />
      <label htmlFor="nombre">Ingresa tu correo</label>
      <input type="text" name="email" {...register("correo")} />

      <br />
      <br />
      <label htmlFor="nombre">Ingresa tu contraseña</label>
      <input type="text" name="contrasena" {...register("contrasena")} />

      <br />
      <br />
      <input type="submit" value="Enviar formulario" />
    </form>
  );
}
