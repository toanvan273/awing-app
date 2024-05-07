import { Box, TextField } from "@mui/material";
import { useReducer } from "react";
import { reducerInfo } from "../../hooks/useReducer";

const InfomationForm = () => {
  const [state, dispatch] = useReducer(reducerInfo, { name: "", describe: "" });

  const handleChange =
    (text: "name" | "desc") => (event: React.ChangeEvent<HTMLInputElement>) => {
      dispatch({ type: text, payload: event.target.value });
    };

  console.log("state:", state);

  return (
    <Box component="form" noValidate autoComplete="off">
      <div>
        <div>
          <TextField
            onChange={handleChange("name")}
            sx={{ width: "100%" }}
            required
            id="standard-required"
            label="Tên chiến dịch"
            variant="standard"
          />
        </div>
        <div>
          <TextField
            onChange={handleChange("desc")}
            sx={{ width: "100%" }}
            id="standard-required"
            label="Mô tả"
            variant="standard"
          />
        </div>
      </div>
    </Box>
  );
};

export default InfomationForm;
