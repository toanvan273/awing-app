import PlusIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button, IconButton } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useEffect, useMemo, useState } from "react";
import { ActionCampaign } from "../../hooks/useReducer";
import { Ad, SubCampaign } from "../../types/campaign-type";
import RowCampain from "./row";

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
  const [selectAds, setSelectAds] = useState<number[]>([]);

  const selectedCamp = useMemo(() => {
    return campaigns.find((e) => e.idCamp === idCampSelect);
  }, [campaigns, idCampSelect]);

  useEffect(() => {
    if (idCampSelect) {
      setSelectAds([]);
    }
  }, [idCampSelect]);
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

  const updateSelectAd = (ad: Ad) => {
    if (selectAds.includes(ad.idAd)) {
      setSelectAds(selectAds.filter((e) => e !== ad.idAd));
    } else {
      setSelectAds([...selectAds, ad.idAd]);
    }
  };

  const removeListAd = () => {
    if (selectedCamp && selectAds.length > 0) {
      dispatch({
        type: "remove_list_advertising",
        payload: {
          idCamp: selectedCamp.idCamp,
          list: selectAds,
        },
      });
    }
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            {selectAds.length > 0 ? (
              <>
                <TableCell></TableCell>
                <TableCell colSpan={2}>
                  <IconButton
                    onClick={removeListAd}
                    aria-label="plus"
                    size="medium"
                  >
                    <DeleteIcon fontSize="small" sx={{ color: "grey" }} />
                  </IconButton>
                </TableCell>
              </>
            ) : (
              <>
                <TableCell></TableCell>
                <TableCell align="left">Tên quảng cáo</TableCell>
                <TableCell align="left">Số lượng</TableCell>
              </>
            )}

            <TableCell align="right">
              <Button
                onClick={() => handleAddAdvertising(selectedCamp)}
                variant="outlined"
              >
                <PlusIcon fontSize="medium" sx={{ color: "blue" }} />
                <span>Thêm</span>
              </Button>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {selectedCamp?.ads.map((ad) => {
            return (
              <RowCampain
                key={ad.idAd}
                ad={ad}
                selectAds={selectAds}
                validate={validate}
                updateSelectAd={updateSelectAd}
                updateNameAd={updateNameAd}
                handleRemoveAd={handleRemoveAd}
                updateQuantityAd={updateQuantityAd}
              />
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
