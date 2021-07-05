import { Express } from 'express';

export type NunjucksConfigurationOptions = {
  app: Express;
  isDev: boolean;
};
