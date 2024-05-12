import { Ad, Information, SubCampaign } from "../types/campaign-type";

export type ActionInfo =
  | { type: "name"; payload: string }
  | { type: "desc"; payload: string };

export type ActionCampaign =
  | {
      type: "update_advertising";
      payload: { idCamp: number; idAd: number; name: string; quantity: number };
    }
  | { type: "add_advertising"; payload: { idCamp: number } }
  | { type: "remove_advertising"; payload: { idCamp: number; idAd: number } }
  | { type: "add_campaign" }
  | {
      type: "update_campaign";
      payload: { idCamp: number; name: string; status: boolean };
    }
  | {
      type: "remove_list_advertising";
      payload: { idCamp: number; list: number[] };
    };

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
    case "add_campaign": {
      const totalCampaign = state.length;
      const newAd: Ad = {
        name: "Quang cao 1",
        quantity: 0,
        idAd: Date.now(),
      };
      const newCampaign: SubCampaign = {
        name: `Chien dich con ${totalCampaign + 1}`,
        status: true,
        idCamp: totalCampaign,
        ads: [newAd],
      };
      return [...state, newCampaign];
    }

    case "add_advertising": {
      const newState = state.map((item) => {
        if (item.idCamp === action.payload.idCamp) {
          const ad: Ad = {
            name: `Quang cao ${item.ads.length + 1}`,
            quantity: 0,
            idAd: Date.now(),
          };
          return { ...item, ads: [...item.ads, ad] };
        } else return { ...item };
      });
      return [...newState];
    }

    case "update_campaign": {
      const newState = state.map((item) => {
        if (item.idCamp === action.payload.idCamp) {
          return {
            ...item,
            name: action.payload.name,
            status: action.payload.status,
          };
        } else return { ...item };
      });
      return [...newState];
    }
    case "remove_advertising": {
      const newState = state.map((item) => {
        if (item.idCamp === action.payload.idCamp) {
          return {
            ...item,
            ads: item.ads.filter((e) => e.idAd !== action.payload.idAd),
          };
        } else return { ...item };
      });
      return [...newState];
    }

    case "update_advertising": {
      const newState = state.map((item) => {
        if (item.idCamp === action.payload.idCamp) {
          return {
            ...item,
            ads: item.ads.map((ad) => {
              if (ad.idAd === action.payload.idAd) {
                return {
                  ...ad,
                  name: action.payload.name,
                  quantity: action.payload.quantity,
                };
              } else return { ...ad };
            }),
          };
        } else return { ...item };
      });
      return [...newState];
    }
    case "remove_list_advertising": {
      const newState = state.map((item) => {
        if (item.idCamp === action.payload.idCamp) {
          return {
            ...item,
            ads: item.ads.filter((e) => !action.payload.list.includes(e.idAd)),
          };
        } else return { ...item };
      });
      return [...newState];
    }
    default:
      return [...state];
  }
}
