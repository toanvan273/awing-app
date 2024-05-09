import PlusIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button, Checkbox, IconButton, TextField } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { ActionCampaign } from "../../hooks/useReducer";
import { SubCampaign } from "../../types/campaign-type";

interface Props {
  campaignSelected: SubCampaign | undefined;
  dispatch: React.Dispatch<ActionCampaign>;
  idCampSelect: number;
}

export default function DenseTable({
  campaignSelected,
  dispatch,
  idCampSelect,
}: Props) {
  const handleAddAdvertising = (idCamp: number | undefined) => {
    if(idCamp)
    dispatch({ type: "add_advertising", payload: { idCamp } });
  };
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell align="left">Ten quang cao</TableCell>
            <TableCell align="left">So luong</TableCell>
            <TableCell align="right">
              <Button
                onClick={() => handleAddAdvertising(campaignSelected?.idCamp)}
                variant="outlined"
              >
                <PlusIcon fontSize="medium" sx={{ color: "blue" }} />
                <span>Them</span>
              </Button>
            </TableCell>
            {/* <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {campaignSelected?.ads.map((ad) => (
            <TableRow
              key={ad.idAd}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell padding="checkbox">
                <Checkbox
                  color="primary"
                  inputProps={{
                    "aria-label": "select all desserts",
                  }}
                />
              </TableCell>
              <TableCell align="left">
                <TextField
                  sx={{ width: "100%" }}
                  required
                  id="standard-required"
                  variant="standard"
                  value={ad.name}
                />
              </TableCell>
              <TableCell align="left">
                <TextField
                  sx={{ width: "100%" }}
                  required
                  id="standard-required"
                  variant="standard"
                  type="number"
                  value={ad.quantity}
                />
              </TableCell>
              <TableCell align="right">
                <IconButton aria-label="plus" size="medium">
                  <DeleteIcon fontSize="small" sx={{ color: "grey" }} />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
