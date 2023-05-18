import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { validarCiudad, validarEstado, validarDireccion } from "./validacion";

const DatosEntrega = ({ updateStep }) => {

  const [direction, setDirection] = useState({ value: "", valid: null });
  const [city, setCity] = useState({ value: "", valid: null });
  const [province, setProvince] = useState({ value: "", valid: null });

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
        updateStep(3);
      }}
    >
      <TextField
        label="Dirección"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        required={true}
        value={direction.value}
        onChange={(input) => {
          const value = input.target.value;
          const valid = validarDireccion(value);
          setDirection({ value, valid });
        }}
        error={direction.valid === false}
        helperText={(direction.valid === false && "Ingresar una dirección correcta")}
      />
      <TextField
        label="Ciudad"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        required={true}
        value={city.value}
        onChange={(input) => {
          const value = input.target.value;
          const valid = validarCiudad(value);
          setCity({ value, valid });
        }}
        error={city.valid === false}
        helperText={(city.valid === false) && "Escribre una ciudad correcta"}
      />
      <TextField
        label="Estado/Provincia"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        required={true}
        value={province.value}
        onChange={(input) => {
          const value = input.target.value;
          const valid = validarEstado(value);
          setProvince({ value, valid });
        }}
        error={province.valid === false}
        helperText={(province.valid === false) && "Escribe una ciudad correcta"}
      />
      <Button variant="contained" type="submit">
        Crear cuenta
      </Button>
    </Box>
  );
};

export default DatosEntrega;
