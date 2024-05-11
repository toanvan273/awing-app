import { Box, TextField } from "@mui/material";
import { ActionInfo } from "../../hooks/useReducer";
import { Information } from "../../types/campaign-type";

interface PropsInfo {
  state: Information;
  dispatch: React.Dispatch<ActionInfo>;
  validate: boolean;
}

const InfomationForm = ({ state, dispatch, validate }: PropsInfo) => {
  const handleChange =
    (text: "name" | "desc") => (event: React.ChangeEvent<HTMLInputElement>) => {
      dispatch({ type: text, payload: event.target.value });
    };

  return (
    <Box component="form" noValidate autoComplete="off">
      <div>
        <div>
          <TextField
            error={validate && state.name === ""}
            onChange={handleChange("name")}
            sx={{ width: "100%" }}
            required
            id="standard-required"
            label="Tên chiến dịch"
            variant="standard"
            value={state.name}
            helperText={
              validate && state.name === "" ? "Dữ liệu không hợp lệ." : ""
            }
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
