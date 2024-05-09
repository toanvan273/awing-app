import { Ad, Information, SubCampaign } from "../types/campaign-type";

type ActionInfo =
  | { type: "name"; payload: string }
  | { type: "desc"; payload: string };

export type ActionCampaign =
  | { type: "update_advertising" }
  | { type: "add_advertising"; payload: { idCamp: number } }
  | { type: "add_campaign" };

export function reducerInfo(state: Information, action: ActionInfo) {
  switch (action.type) {
    case "name":
      return { ...state, name: action.payload };
    case "desc":
      return { ...state, describe: action.payload };
    default:
      return state;
  }
}

export function reducerCampaign(state: SubCampaign[], action: ActionCampaign) {
  switch (action.type) {
    case "add_campaign":
      const numberCampaign = state.length;
      const newAd: Ad = {
        name: "Quang cao 1",
        quantity: 0,
        idAd: Date.now(),
      };
      const newCampaign: SubCampaign = {
        name: `Chien dich con ${numberCampaign + 1}`,
        status: true,
        idCamp: numberCampaign,
        ads: [newAd],
      };
      return [...state, newCampaign];

    case "add_advertising":
      const campaign = state.find(
        (camp) => camp.idCamp === action.payload.idCamp
      );
      // console.log("check--campaign 1:", campaign);
      if (campaign) {
        const ad: Ad = {
          name: `Quang cao ${campaign.ads.length + 1}`,
          quantity: 0,
          idAd: Date.now(),
        };
        // console.log("AD--check:", ad);

        const newCampaign = { ...campaign, ads: [...campaign.ads, ad] };
        // console.log("check--campaign 2:", newCampaign);

        return state.map((camp) => {
          if (camp.idCamp === action.payload.idCamp) {
            return newCampaign;
          } else {
            return camp;
          }
        });
      }
      return [...state];
    default:
      return state;
  }
}
