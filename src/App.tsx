import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { useReducer, useState } from "react";
import InfomationForm from "./components/information";
import SubCampaingns from "./components/sub-campaigns";
import { reducerCampaign, reducerInfo } from "./hooks/useReducer";
import { SubCampaign } from "./types/campaign-type";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomBox(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box
          sx={{
            marginTop: 2,
            marginBottom: 2,
            p: 2,
            border: "1px solid #dadada",
            borderRadius: 2,
          }}
        >
          <Box>{children}</Box>
        </Box>
      )}
    </div>
  );
}

function createInitialState(): SubCampaign[] {
  return [
    {
      name: "Chiến dịch con 1",
      status: true,
      idCamp: 0,
      ads: [
        {
          name: "Quảng cáo 1",
          quantity: 0,
          idAd: Date.now(),
        },
      ],
    },
  ];
}

export default function App() {
  const [value, setValue] = useState(0);
  const [validate, setValidate] = useState(false);
  const [stateInfo, dispatchInfo] = useReducer(reducerInfo, {
    name: "",
    describe: "",
  });
  const [stateCampaigns, dispatchCamp] = useReducer(
    reducerCampaign,
    createInitialState()
  );

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const validateCampaign = (camps: SubCampaign[]) => {
    return camps.every(
      (camp) =>
        camp.name !== "" &&
        camp.ads.length > 0 &&
        camp.ads.every(
          (ad) =>
            ad.name !== "" && ad.quantity !== 0 && Number.isInteger(ad.quantity)
        )
    );
  };

  const handleSubmit = () => {
    const validateCamp = validateCampaign(stateCampaigns);
    if (stateInfo.name !== "" && validateCamp) {
      const data = {
        campaign: stateInfo,
        subCampaingns: stateCampaigns.map((camp) => ({
          name: camp.name,
          status: camp.status,
          ads: camp.ads.map((ad) => ({
            name: ad.name,
            quantity: ad.quantity,
          })),
        })),
      };
      window.alert(`Thêm thành công chiến dịch ${JSON.stringify(data)}`);
    } else {
      window.alert(`Vui lòng điền đúng và đầy đủ thông tin`);
      setValidate(true);
    }
  };

  return (
    <div>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Container>
          <Stack py={1} direction="row" justifyContent={"end"}>
            <Button onClick={() => handleSubmit()} variant="contained">
              Submit
            </Button>
          </Stack>
        </Container>
      </Box>
      <Container>
        <Stack>
          <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab label="THÔNG TIN" value={0} />
                <Tab label="CHIẾN DỊCH CON" value={1} />
              </Tabs>
            </Box>
            <CustomBox value={value} index={0}>
              <InfomationForm
                validate={validate}
                state={stateInfo}
                dispatch={dispatchInfo}
              />
            </CustomBox>
            <CustomBox value={value} index={1}>
              <SubCampaingns
                validate={validate}
                campaigns={stateCampaigns}
                dispatch={dispatchCamp}
              />
            </CustomBox>
          </Box>
        </Stack>
      </Container>
    </div>
  );
}
