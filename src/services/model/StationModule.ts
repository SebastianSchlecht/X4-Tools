import { Faction, ProductionCycle, Race, Workforce } from "./Common";

export interface StationModule {
  id: string;
  name: string;
  description: string;
  hullPoints: number;
  producingRace: Race;
  producingFactions: Faction[];
  productionCycle: ProductionCycle;
  workForce: Workforce;
}
