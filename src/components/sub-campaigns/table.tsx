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
import { useMemo } from "react";
import { ActionCampaign } from "../../hooks/useReducer";
import { Ad, SubCampaign } from "../../types/campaign-type";

interface Props {
  dispatch: React.Dispatch<ActionCampaign>;
  idCampSelect: number;
  campaigns: SubCampaign[];
  validate: boolean;
}

export default function TableCampaign({
  dispatch,
  idCampSelect,
  campaigns,
  validate,
}: Props) {
  const selectedCamp = useMemo(() => {
    return campaigns.find((e) => e.idCamp === idCampSelect);
  }, [campaigns, idCampSelect]);

  const handleAddAdvertising = (camp: SubCampaign | undefined) => {
    if (camp) {
      dispatch({ type: "add_advertising", payload: { idCamp: camp.idCamp } });
    }
  };

  const handleRemoveAd = (ad: Ad) => {
    if (selectedCamp) {
      dispatch({
        type: "remove_advertising",
        payload: {
          idCamp: selectedCamp.idCamp,
          idAd: ad.idAd,
        },
      });
    }
  };

  const updateNameAd =
    (ad: Ad) => (event: React.ChangeEvent<HTMLInputElement>) => {
      if (selectedCamp) {
        dispatch({
          type: "update_advertising",
          payload: {
            idCamp: selectedCamp.idCamp,
            idAd: ad.idAd,
            name: event.target.value,
            quantity: ad.quantity,
          },
        });
      }
    };

  const updateQuantityAd =
    (ad: Ad) => (event: React.ChangeEvent<HTMLInputElement>) => {
      if (selectedCamp) {
        dispatch({
          type: "update_advertising",
          payload: {
            idCamp: selectedCamp.idCamp,
            idAd: ad.idAd,
            name: ad.name,
            quantity: parseInt(event.target.value),
          },
        });
      }
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
                onClick={() => handleAddAdvertising(selectedCamp)}
                variant="outlined"
              >
                <PlusIcon fontSize="medium" sx={{ color: "blue" }} />
                <span>Them</span>
              </Button>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {selectedCamp?.ads.map((ad) => {
            console.log(ad);

            return (
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
                    error={validate && ad.name === ""}
                    onChange={updateNameAd(ad)}
                    sx={{ width: "100%" }}
                    required
                    id="standard-required"
                    variant="standard"
                    value={ad.name}
                  />
                </TableCell>
                <TableCell align="left">
                  <TextField
                    error={
                      validate &&
                      (ad.quantity === 0 || Number.isNaN(ad.quantity))
                    }
                    onChange={updateQuantityAd(ad)}
                    sx={{ width: "100%" }}
                    required
                    id="standard-required"
                    variant="standard"
                    type="number"
                    value={ad.quantity}
                  />
                </TableCell>
                <TableCell align="right">
                  <IconButton
                    onClick={() => handleRemoveAd(ad)}
                    aria-label="plus"
                    size="medium"
                  >
                    <DeleteIcon fontSize="small" sx={{ color: "grey" }} />
                  </IconButton>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
