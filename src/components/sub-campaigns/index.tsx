import { Stack } from "@mui/material";
import Container from "@mui/material/Container";
import { useReducer } from "react";
import { reducerCampaign } from "../../hooks/useReducer";
import { SubCampaign } from "../../types/campaign-type";
import Campaign from "./campaign";
import DataTable from "./table";

function createInitialState(): SubCampaign[] {
  return [
    {
      name: "Chiến dịch con 1",
      status: true,
      ads: [
        {
          name: "Quang cao 1",
          quantity: 0,
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
  return (
    <Container>
      <Campaign campaigns={campaigns} dispatch={dispatch} />
      <Stack py={1}>
        <h2>DANH SACH QUANG CAO</h2>
        <DataTable />
      </Stack>
    </Container>
  );
};

export default SubCampaingns;
