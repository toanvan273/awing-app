import { Stack } from "@mui/material";
import Container from "@mui/material/Container";
import Campaign from "./campaign";
import DataTable from "./table";

const SubCampaingns = () => {
  return (
    <Container>
      <Campaign />
      <Stack>
        <h2>DANH SACH QUANG CAO</h2>
        <DataTable />
      </Stack>
    </Container>
  );
};

export default SubCampaingns;
