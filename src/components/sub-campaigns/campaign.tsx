import PlusIcon from "@mui/icons-material/Add";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Box, Checkbox, Stack, TextField } from "@mui/material";
import IconButton from "@mui/material/IconButton";

const label = { inputProps: { "aria-label": "Checkbox demo" } };
export default function Campaign() {
  return (
    <div>
      <Stack direction="row" alignItems="start" overflow={"auto"}>
        <IconButton
          sx={{ background: "#0000000a" }}
          aria-label="plus"
          size="medium"
        >
          <PlusIcon fontSize="medium" sx={{ color: "red" }} />
        </IconButton>
        <Stack marginLeft={1} direction={"row"}>
          <Box
            sx={{
              p: 2,
              width: 210,
              height: 120,
              // border: "1px solid #0000000a",
              border: "2px solid blue",
              borderRadius: 2,
              marginRight: 2,
            }}
          >
            <Stack
              direction="row"
              alignItems={"center"}
              justifyContent={"center"}
            >
              <h3>Chien dich con 1</h3>
              <CheckCircleIcon
                fontSize="small"
                sx={{ color: "green", marginLeft: 1 }}
              />
            </Stack>
            <Stack textAlign={"center"} fontSize={24} marginTop={0}>
              <b>0</b>
            </Stack>
          </Box>
          <Box
            sx={{
              p: 2,
              width: 210,
              height: 120,
              // border: "1px solid #0000000a",
              border: "2px solid blue",
              borderRadius: 2,
            }}
          >
            <Stack
              direction="row"
              alignItems={"center"}
              justifyContent={"center"}
            >
              <h3>Chien dich con 1</h3>
              <CheckCircleIcon
                fontSize="small"
                sx={{ color: "green", marginLeft: 1 }}
              />
            </Stack>
            <Stack textAlign={"center"} fontSize={24} marginTop={0}>
              <b>0</b>
            </Stack>
          </Box>
        </Stack>
      </Stack>
      <Stack marginTop={2} direction={"row"} alignItems={"center"}>
        <Box flex={1}>
          <TextField
            sx={{ width: "100%" }}
            required
            id="standard-required"
            label="Tên chiến dịch con"
            variant="standard"
          />
        </Box>
        <Box>
          <Checkbox {...label} size="small" />
          <span>Dang hoat dong</span>
        </Box>
      </Stack>
    </div>
  );
}
