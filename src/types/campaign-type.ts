export interface Information {
  name: string;
  describe?: string;
}

export interface Ad {
  name: string;
  quantity: number;
  idAd: number;
}

export interface SubCampaign {
  name: string;
  status: boolean;
  idCamp: number;
  ads: Ad[];
}

// export interface Campaign {
//   information: Information;
//   subCampaigns: SubCampaign[];
// }
