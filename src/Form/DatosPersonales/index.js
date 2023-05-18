import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { validarNombre, validarApellido, validarTelefono } from "./validaciones";

const DatosPersonales = ({ updateStep }) => {

  const [name, setName] = useState({ value: "", valid: null });
  const [lastName, setLastName] = useState({ value: "", valid: null });
  const [phone, setPhone] = useState({ value: "", valid: null });

  return (
    <Box
      component="form"
      autoComplete="off"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}

      onSubmit={(e) => {
        e.preventDefault();
        updateStep(2);
      }}
    >
      <TextField
        label="Nombre"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        required={true}
        value={name.value}
        onChange={(input) => {
          const value = input.target.value;
          const valid = validarNombre(value);
          setName({ value, valid });
        }}
        error={name.valid === false}
        helperText={name.valid === false && "Ingresa un nombre válido"}
      />
      <TextField
        label="Apellidos"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        required={true}
        value={lastName.value}
        onChange={(input) => {
          const value = input.target.value;
          const valid = validarApellido(value);
          setLastName({ value, valid });
        }}
        error={lastName.valid === false}
        helperText={lastName.valid === false && "Ingresa un apellido válido"}
      />
      <TextField
        label="Número telefónico"
        variant="outlined"
        fullWidth
        margin="dense"
        type="number"
        inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
        required={true}
        value={phone.value}
        onChange={(input) => {
          const value = input.target.value;
          const valid = validarTelefono(value);
          setPhone({ value, valid });
        }}
        error={phone.valid === false}
        helperText={phone.valid === false && "Ingresa un teléfono válido"}
      />
      <Button variant="contained" type="submit">
        Siguiente
      </Button>
    </Box >
  );
};

export default DatosPersonales;
