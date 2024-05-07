import { Stack } from "@mui/material";
import Container from "@mui/material/Container";
import { useReducer, useState } from "react";
import { reducerCampaign } from "../../hooks/useReducer";
import { SubCampaign } from "../../types/campaign-type";
import Campaign from "./campaign";
import DataTable from "./table";

function createInitialState(): SubCampaign[] {
  return [
    {
      name: "Chiến dịch con 1",
      status: true,
      idCamp: 0,
      ads: [
        {
          name: "Quang cao 1",
          quantity: 0,
          idAd: Date.now(),
        },
      ],
    },
  ];
}

const SubCampaingns = () => {
  const [campaigns, dispatch] = useReducer(
    reducerCampaign,
    createInitialState()
  );

  const [campaignSelected, setCampaignSelected] = useState(campaigns[0]);
  console.log("campaignSelected", campaignSelected);

  return (
    <Container>
      <Campaign
        campaigns={campaigns}
        dispatch={dispatch}
        campaignSelected={campaignSelected}
        setCampaignSelected={setCampaignSelected}
      />
      <Stack py={1}>
        <h2>DANH SACH QUANG CAO</h2>
        <DataTable campaignSelected={campaignSelected} />
      </Stack>
    </Container>
  );
};

export default SubCampaingns;
