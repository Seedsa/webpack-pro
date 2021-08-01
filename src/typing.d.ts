declare module "*.less";
declare module "*.jpg";

declare module FileServeModule {
  export interface IConfig {
    maxClients: number;
  }
}
