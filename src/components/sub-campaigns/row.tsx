import DeleteIcon from "@mui/icons-material/Delete";
import { Checkbox, IconButton, TextField } from "@mui/material";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { Ad } from "../../types/campaign-type";
interface Props {
  ad: Ad;
  selectAds: number[];
  validate: boolean;
  updateSelectAd: (ad: Ad) => void;
  updateNameAd: (
    ad: Ad
  ) => (event: React.ChangeEvent<HTMLInputElement>) => void;
  updateQuantityAd: (
    ad: Ad
  ) => (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleRemoveAd: (ad: Ad) => void;
}

export default function RowCampain({
  ad,
  selectAds,
  validate,
  updateSelectAd,
  updateQuantityAd,
  updateNameAd,
  handleRemoveAd,
}: Props) {
  return (
    <TableRow
      key={ad.idAd}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell padding="checkbox">
        <Checkbox
          checked={selectAds.includes(ad.idAd)}
          onChange={() => updateSelectAd(ad)}
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
          error={validate && (ad.quantity === 0 || Number.isNaN(ad.quantity))}
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
}
