import { ReactNode } from "react";

export interface IAccRoutes {
  name?: string;
  path: string;
  element: ReactNode;
  children?: IAccRoutes[];
}
export interface IAccRoutesMenuItem {
  key: string;
  label: ReactNode | string;
  children?: IAccRoutesMenuItem[] ;
}