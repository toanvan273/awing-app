import PlusIcon from "@mui/icons-material/Add";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Box, Checkbox, Stack, TextField } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { useMemo } from "react";
import { ActionCampaign } from "../../hooks/useReducer";
import { SubCampaign } from "../../types/campaign-type";

interface Props {
  campaigns: SubCampaign[];
  dispatch: React.Dispatch<ActionCampaign>;
  idCampSelect: number;
  setIdCampSelect: React.Dispatch<React.SetStateAction<number>>;
}
const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function Campaign({
  campaigns,
  dispatch,
  idCampSelect,
  setIdCampSelect,
}: Props) {
  const selectedCamp = useMemo(() => {
    return campaigns.find((e) => e.idCamp === idCampSelect);
  }, [campaigns, idCampSelect]);

  const handleAddCampaign = () => {
    dispatch({ type: "add_campaign" });
  };

  const handleSelectCampaign = (camp: SubCampaign) => {
    setIdCampSelect(camp.idCamp);
  };

  const handleChangeNameCampaign = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (selectedCamp) {
      dispatch({
        type: "update_campaign",
        payload: {
          idCamp: idCampSelect,
          name: event.target.value,
          status: selectedCamp.status,
        },
      });
    }
  };

  const handleChangeStatusCampaign = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (selectedCamp) {
      dispatch({
        type: "update_campaign",
        payload: {
          idCamp: idCampSelect,
          name: selectedCamp.name,
          status: !selectedCamp.status,
        },
      });
    }
  };
  // console.log("idCampSelect:", idCampSelect);
  // console.log("selectedCamp:", selectedCamp);
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
          {campaigns.length > 0 &&
            campaigns.map((camp, index) => {
              return (
                <Box
                  onClick={() => handleSelectCampaign(camp)}
                  key={index}
                  sx={{
                    p: 2,
                    width: 210,
                    height: 120,
                    border:
                      camp.idCamp === idCampSelect
                        ? "2px solid blue"
                        : "2px solid #0000000a",
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
                      sx={{
                        color: camp.status ? "green" : "grey",
                        marginLeft: 1,
                      }}
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
      {selectedCamp && (
        <Stack marginTop={2} direction={"row"} alignItems={"center"}>
          <Box flex={1}>
            <TextField
              onChange={handleChangeNameCampaign}
              sx={{ width: "100%" }}
              required
              id="standard-required"
              label="Tên chiến dịch con"
              variant="standard"
              value={selectedCamp.name}
            />
          </Box>
          <Box>
            <Checkbox
              onChange={handleChangeStatusCampaign}
              {...label}
              size="small"
              checked={selectedCamp.status}
            />
            <span>Dang hoat dong</span>
          </Box>
        </Stack>
      )}
    </div>
  );
}
