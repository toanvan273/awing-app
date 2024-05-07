import PlusIcon from "@mui/icons-material/Add";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Box, Checkbox, Stack, TextField } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { ActionCampaign } from "../../hooks/useReducer";
import { SubCampaign } from "../../types/campaign-type";

interface Props {
  campaigns: SubCampaign[];
  dispatch: React.Dispatch<ActionCampaign>;
  campaignSelected: SubCampaign;
}
const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function Campaign({
  campaigns,
  dispatch,
  campaignSelected,
}: Props) {
  const handleAddCampaign = () => {
    dispatch({ type: "add_campaign" });
  };

  return (
    <div>
      <Stack direction="row" alignItems="start" overflow={"auto"}>
        <IconButton
          onClick={handleAddCampaign}
          sx={{ background: "#0000000a" }}
          aria-label="plus"
          size="medium"
        >
          <PlusIcon fontSize="medium" sx={{ color: "red" }} />
        </IconButton>
        <Stack marginLeft={1} direction={"row"}>
          {campaigns.map((camp, index) => {
            // console.log("camp", camp);

            return (
              <Box
                key={index}
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
                  <h3>{camp.name}</h3>
                  <CheckCircleIcon
                    fontSize="small"
                    sx={{ color: "green", marginLeft: 1 }}
                  />
                </Stack>
                <Stack textAlign={"center"} fontSize={24} marginTop={0}>
                  <b>0</b>
                </Stack>
              </Box>
            );
          })}
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
            defaultValue={campaignSelected.name}
          />
        </Box>
        <Box>
          <Checkbox
            {...label}
            size="small"
            defaultChecked={campaignSelected.status}
          />
          <span>Dang hoat dong</span>
        </Box>
      </Stack>
    </div>
  );
}
