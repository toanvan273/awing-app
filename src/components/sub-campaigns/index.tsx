import { Stack } from "@mui/material";
import Container from "@mui/material/Container";
import { useState } from "react";
import { ActionCampaign } from "../../hooks/useReducer";
import { SubCampaign } from "../../types/campaign-type";
import Campaign from "./campaign";
import DataTable from "./table";

interface PropsSubCamp {
  campaigns: SubCampaign[];
  dispatch: React.Dispatch<ActionCampaign>;
}

const SubCampaingns = ({ campaigns, dispatch }: PropsSubCamp) => {
  const [idCampSelect, setIdCampSelect] = useState(campaigns[0]?.idCamp || 0);
  return (
    <Container>
      <Campaign
        campaigns={campaigns}
        dispatch={dispatch}
        idCampSelect={idCampSelect}
        setIdCampSelect={setIdCampSelect}
      />
      <Stack py={1}>
        <h2>DANH SACH QUANG CAO</h2>
        <DataTable
          dispatch={dispatch}
          idCampSelect={idCampSelect}
          campaigns={campaigns}
        />
      </Stack>
    </Container>
  );
};

export default SubCampaingns;
