import React, { useState, useContext } from "react";
import { TextField, Button, Box } from "@mui/material";
import { CounterContext } from "../../Context";

const Step = ({ data, step }) => {

  const { inputs, buttonTxt, onSubmit } = data;

  const CounterData = useContext(CounterContext);

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
      onSubmit={onSubmit}
    >
      <strong>El valor del contador es {CounterData.count}</strong>
      {inputs.map((input, i) => {
        const {
          label, type, value, valid, onChange, helperTxt, validator } = input;

        return (
          <TextField
            key={i}
            label={label}
            variant="outlined"
            fullWidth
            margin="dense"
            type={type}
            error={valid === false}
            helperText={valid === false && { helperTxt }}
            value={value}
            onChange={(e) => onChange(e, i, step, validator)}
          />
        )
      })
      }
      <Button variant="contained" type="submit">
        {buttonTxt}
      </Button>
    </Box >
  );
}


export default Step;
