import { atom } from "nanostores";

export enum PortoflioStoreValues { projects = 'projects', skills = 'skills' };

/* Projects is the default option */
export const portfolioStore = atom<PortfolioStore>("projects");