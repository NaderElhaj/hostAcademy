import { ReactElement, ReactHTMLElement, ReactNode } from "react";
import ArtThemeIcon from "@/components/assets/ArtThemeIcon";
import AnimalThemeIcon from "@/components/assets/AnimalThemeIcon";
import CultureThemeIcon from "@/components/assets/CultureThemeIcon";
import DrinkThemeIcon from "@/components/assets/DrinkThemeIcon";
import EntertaimentThemeIcon from "@/components/assets/EntertaimentThemeIcon";
import FoodThemeIcon from "@/components/assets/FoodThemeIcon";
import HistoryThemeIcon from "@/components/assets/HistoryThemeIcon";
import NatureThemeIcon from "@/components/assets/NatureThemeIcon";
import ShoppingThemeIcon from "@/components/assets/ShoppingThemeIcon";
import SportsThemeIcon from "@/components/assets/SportsThemeIcon";
import WellnessThemeIcon from "@/components/assets/WellnessThemeIcon";
import { JsxElement } from "typescript";

export  type ThemeIconName= "animals" | "art" | "culture" | "food" | "drink"| "entertainment" | "history" | "nature" | "shopping" | "sports" | "wellness"

export interface  Theme {
   
    label: string ;
    slug : ThemeIconName
    hasicon?: boolean
}
export const themesArray: Theme[] = [
    {
        label:"Animals",
        slug:"animals", 
        hasicon : true 
    },
    {
        label:"Art & Desin",
        slug:"art", 
        hasicon : true 
    },
    {
        label:"Culture & Society",
        slug:"culture", 
        hasicon : true 
    },
    {
        label:"Food",
        slug:"food", 
        hasicon : true 
    },
    {
        label:"Drink",
        slug:"drink", 
        hasicon : true 
    },
    {
        label:"Entertainment",
        slug:"entertainment", 
        hasicon : true 
    },
    {
        label:"History & Literatures",
        slug:"history", 
        hasicon : true 
    },
    {
        label:"Nature & Out door",
        slug:"nature", 
        hasicon : true 
    },
    {
        label:"Sintsees, shopping & Transportation",
        slug:"shopping", 
        hasicon : true 
    },
    {
        label:"Sports",
        slug:"sports", 
        hasicon : true 
    },
    {
        label:"Wellness",
        slug:"wellness", 
        hasicon : true 
    },

]