export type FundIdType = string;

export type FundType =
  'ADVISOR'
  | 'BROKER'
  | 'BROKERCLIENT'
  | 'CLIENT'
  | 'UNKNOWN';

export type ClientType =
'B2B'
| 'B2C'
| 'B2B2C'
| 'UNKNOWN';

export interface Fund {
  fundId: FundIdType;
  fundTypeName: FundType;
  approved: boolean;
  activated: boolean;
  lastUpdate: string;
  relatedFunds?: Fund[];
  traderEmail?: string;
  traderName: string;
  updateWorkItemId: string;
  hasCash: boolean;
  clientType: ClientType;
}

export interface FundServer {
  FundId: FundIdType;
  FundTypeName: FundType;
  Approved: boolean;
  Activated: boolean;
  LastUpdate: string;
  RelatedFunds: FundServer[];
  Trader: TraderServer;
  UpdateWorkItemId: string;
  ProfitabilityUseCash: boolean;
  ClientType: ClientType;
}

export interface TraderServer {
  TraderName: string;
  TraderEmail: string;
  TraderID?: number;
  TraderTypeID?: number;
}

export const getEmptyFund = (): Fund => ({
  fundId: '0',
  fundTypeName: 'CLIENT',
  approved: false,
  activated: false,
  lastUpdate: '',
  traderName: '',
  updateWorkItemId: '',
  hasCash: false,
  clientType: 'UNKNOWN'
});

export const getEmptyTrader = (): TraderServer => ({
  TraderName: '',
  TraderEmail: '',
  TraderID: 0,
  TraderTypeID: 0
});

export const fromServer = (fundServer: FundServer): Fund => ({
  activated: fundServer.Activated,
  approved: fundServer.Approved,
  fundId: fundServer.FundId.toString(),
  fundTypeName: fundServer.FundTypeName,
  lastUpdate: fundServer.LastUpdate,
  relatedFunds: fundServer.RelatedFunds ? fundServer.RelatedFunds.map(fromServer) : [],
  traderName: fundServer.Trader && fundServer.Trader.TraderName,
  traderEmail: fundServer.Trader && fundServer.Trader.TraderEmail,
  updateWorkItemId: fundServer.UpdateWorkItemId,
  hasCash: fundServer.ProfitabilityUseCash,
  clientType: fundServer.ClientType
});

export const toServer = (fundServer: Fund): FundServer => ({
  Activated: fundServer.activated,
  Approved: fundServer.approved,
  FundId: fundServer.fundId.toString(),
  FundTypeName: fundServer.fundTypeName,
  LastUpdate: fundServer.lastUpdate,
  RelatedFunds: fundServer.relatedFunds ? fundServer.relatedFunds.map(toServer) : [],
  Trader: {
    TraderName: fundServer.traderName,
    TraderEmail: fundServer.traderEmail
  },
  UpdateWorkItemId: fundServer.updateWorkItemId,
  ProfitabilityUseCash: fundServer.hasCash,
  ClientType: fundServer.clientType
});
