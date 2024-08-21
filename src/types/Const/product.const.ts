export const allCategoryArray = [
  "Tents & Shelters",
  "Sleeping Gear",
  "Camp Furniture",
  "Cooking Equipment",
  "Backpacks & Bags",
  "Lighting & Lanterns",
  "First Aid & Survival",
  "Clothing & Apparel",
  "Footwear",
  "Navigation & Tech",
];
export const productTypesArray = ["Featured", "New Arrival"];

import { IconType } from "react-icons";
import {
  FaBed,
  FaChair,
  FaUtensils,
  FaLightbulb,
  FaMedkit,
  FaTshirt,
  FaShoePrints,
  FaMap,
} from "react-icons/fa";
import { FaTent } from "react-icons/fa6";
import { GiBackpack } from "react-icons/gi";

export type TCategoryWithIcon = {
  icon: IconType;
  name: string;
};

export const allCategoryArrayWithIcon: TCategoryWithIcon[] = [
  { icon: FaTent, name: "Tents & Shelters" },
  { icon: FaBed, name: "Sleeping Gear" },
  { icon: FaChair, name: "Camp Furniture" },
  { icon: FaUtensils, name: "Cooking Equipment" },
  { icon: GiBackpack, name: "Backpacks & Bags" },
  { icon: FaLightbulb, name: "Lighting & Lanterns" },
  { icon: FaMedkit, name: "First Aid & Survival" },
  { icon: FaTshirt, name: "Clothing & Apparel" },
  { icon: FaShoePrints, name: "Footwear" },
  { icon: FaMap, name: "Navigation & Tech" },
];
