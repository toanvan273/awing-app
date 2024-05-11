import { Box, TextField } from "@mui/material";
import { ActionInfo } from "../../hooks/useReducer";
import { Information } from "../../types/campaign-type";

interface PropsInfo {
  state: Information;
  dispatch: React.Dispatch<ActionInfo>;
}

const InfomationForm = ({ state, dispatch }: PropsInfo) => {
  const handleChange =
    (text: "name" | "desc") => (event: React.ChangeEvent<HTMLInputElement>) => {
      dispatch({ type: text, payload: event.target.value });
    };

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
            value={state.name}
          />
        </div>
        <div>
          <TextField
            onChange={handleChange("desc")}
            sx={{ width: "100%" }}
            id="standard-required"
            label="Mô tả"
            variant="standard"
            value={state.describe}
          />
        </div>
      </div>
    </Box>
  );
};

export default InfomationForm;
