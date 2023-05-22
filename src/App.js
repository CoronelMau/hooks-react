import { useContext } from "react";
import { MainSpace, ImageSpace, FormSpace } from "./styles";
import { Button } from "@mui/material";
import Form from "./Form";
import { CounterContext } from "./Context";

function App() {
  const counterData = useContext(CounterContext);

  return (
    <MainSpace>
      <ImageSpace />
      <FormSpace>
        <Form />
        <div>
          <Button variant="contained" onClick={() => counterData.resta()}> - </Button>
          <Button variant="contained" onClick={() => counterData.suma()}> + </Button>
        </div>
      </FormSpace>
    </MainSpace>
  );
}

export default App;
