export interface Price {
  min: number;
  max: number;
}

export interface Race {
  id: string;
  name: string;
  description: string;
}

export interface Faction {
  id: string;
  name: string;
  description: string;
  race: Race;
}

export interface Ware {
  id: string;
  name: string;
  description: string;
  volume: number;
  price: Price;
  illegalIn: Faction[];
}

export interface Workforce {
  max: number;
  current: number;
}

export interface ProductionCycle {
  cycleLengthSeconds: number;
  productionAmount: number;
  productionOutput?: Ware;
  productionInput: Ware[];
}
