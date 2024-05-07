import { Ad, Information, SubCampaign } from "../types/campaign-type";

type ActionInfo =
  | { type: "name"; payload: string }
  | { type: "desc"; payload: string };

export type ActionCampaign = { type: "add_campaign" };

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
      const numberCampaign = state.length + 1;
      const newAd: Ad = {
        name: "Quang cao 1",
        quantity: 0,
        idAd: Date.now(),
      };
      const newCampaign: SubCampaign = {
        name: `Chien dich con ${numberCampaign}`,
        status: true,
        idCamp: numberCampaign,
        ads: [newAd],
      };
      return [...state, newCampaign];
    default:
      return state;
  }
}
