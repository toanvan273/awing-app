import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const InfomationForm = () => {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <div>
          <TextField
            sx={{ width: "100%" }}
            required
            id="standard-required"
            label="Tên chiến dịch"
            variant="standard"
          />
        </div>
        <div>
          <TextField
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
