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
    childArray?:ChildThemeItem[];
}

type ChildThemeItem = {
    label: string ;
    childArray?:ChildThemeItem[] ;
}

export const animals: ChildThemeItem[] = [
    {
        label:"Bee keeping",
    
    },
   
    {
        label:"Bee keeping",
    },

    {
      label:"Bird Watching",
    },
    {
        label:"Farm animals ",
    },
    {
        label:"Pet walking",
    },
    {
        label:"Horseback riding class",
    },
    {
        label:"Horse/Camel riding tour",
    },
    {
        label:"Marine life",
    },
    {
        label:"Wild life",
    },
    {
        label:"Other animals experience",
    },


]

export const artDesign: ChildThemeItem[]= [

    {
        label:"Architecture tour",
    },

    {
        label:"Art class",
    },
    
    {
        label:"Architecture tour",
    },
    
    {
        label:"Art Museum tour",
    },
    
    {
        label:"Craft Class",
    },
    
    {
        label:"Fashion Class",
    },
    {
        label: "Photography class tour",
    },
    {
        label:"Photoshoot",
    },
    {
        label:"Fashion Class",
    },
    {
        label:"Street art tour",
    },
    {
        label:"Other art experience", 
    },
    

]


export const culturesSociety:ChildThemeItem[]=[
    {
        label: "Cultural dancing ",
    },

    {
        label: "Cultural festival",
    },

    {
        label: "Language class",
    },

    {
        label:  "Science tour",
    },

    {
        label: "Social case tour",
    },
    {
        label: "Volunteering",
    },
    {
        label: "Other Culture experience",
    },
 
   
   
    
    
]

export const cookingAndFoodMaking:ChildThemeItem[]=[
    {
        label: "Baking",
    },
    {
        label:
        "Cooking",
    },
    {
        label:"Making",
    },
   
    
    
]
export const foodAndMarketTour:ChildThemeItem[]=[
    {
        label:"Farm tour",
    },
    {
        label:"Street food tour ",
    },
    {
        label: "Food market tour",
    },
    
    
   
    
]
export const foodTasting:ChildThemeItem[]=[
    {
        label:"Cheese tasting",
    },
    {
        label:"fruit tasting",
    },
    {
        label:"Olive oil tasting",
    },

    
    
    
    
]
export const socialDining:ChildThemeItem[]=[
    {
        label:"BBQ party",
    },
    {
        label:"Lunch/dinner with family",
    },
    {
        label:"Picnic",
    },
    
    
    
    
]
export const food:ChildThemeItem[]=[
    {
        label: "Cooking and food making ",
    },
    {
        label: "Food and market tour",
    },
    {
        label: "Social dining",
    },
    {
        label: "Food tasting",
    },
   
]
export const entertaiment:ChildThemeItem[]=[
    {
        label:"Theater workshop",
    },
    {
        label:"Music workshop",
    },
    {
        label:"Dance class",
    
    },
    
    
    
]
export const history:ChildThemeItem[]=[
    {
        label:"Museum tour ",
    },
    {
        label:"History tour",
    },
    {
        label:"Literature tour",
    },
    {
        label:"Myth & Storytelling",
    },
    {
        label:"Writing class",
    },
    

    
    
    
    
    
    
]
export const sightseesShoppingAndTransportaion :ChildThemeItem[]=[
    {
        label:"Boat tour",
    },
    {
        label: "Car ride",
    },
    {
        label:"Cycling tour",
    },
    {
        label:"Helicopter tour",
    },
    {
        label:"Hot air balloon tour",
    },
    {
        label:"Scooter tour",
    },
    {
        label:"Shopping tour",
    },
    {
        label:"Sightseeing tour",
    },
    {
        label:
        "Train ride",
    },
    
]

export const welness:ChildThemeItem[]=[
    {
        label:"Astrology",
    },
    {
        label:"Beauty care",
    },
    {
        label:"Holistic health",
    },
    {
        label:"Spa",
    },
    {
        label:"Yoga",
    },
    
    
    
    
    
    

    
]

export const coffee:ChildThemeItem[]=[
    {
        label:   "Drink Coffee tour",
    },
    {
        label:  "Cofffee farm tour",
    },
    {
        label:    "Coffee making class",
    },
    {
        label:    "Coffeee tasting",
    },

    
]
export const tea:ChildThemeItem[]=[
    {
        label:    
        "Tea ceremony",
    },
    {
        label:    "Tea making class",
    },
    {
        label:    "Tea farm tour",
    },
    {
        label:    "Tea Tasting",
    },
    

    
]
export const wineAndBeer:ChildThemeItem[]=[
    {
        label:    "Drinking tour",
    },
    {
        label: "wine making class",
    },
    {
        label: "wine pairing",
    },
    {
        label:    

        "winery tour",
    },
    {
        label:    "wine tasting",
    },
    


    
]
export const drink:ChildThemeItem[]=[
    {
        label:    "Coffee",
    },
    {
        label:    "Tea",
    },
    {
        label:    "Wine & Beer",
    },
]
export const adrenalineSport:ChildThemeItem[]=[
    {
        label:    
    
    
        "Jetski",
    },
    {
        label:        "Parasailing",

    },
    {
        label: "Skydiving",
    },
    {
       label:   "Zip lining",
    },
    
    
    

  
    
]
export const outdoorSport:ChildThemeItem[]=[
    {
        label:    "Golf",
    },
    {
        label:    "Football",
    },
    {
        label:
        "Fishing",
    },
       {
        label:    "Hunting",
    },
  


    
]
export const waterSport:ChildThemeItem[]=[
    {
        label:    "Boating",
    },
    {
        label:    "Driving",
    

        
    },
    {
        label: "Kayaking",
    },
    {
        label:    "Paddleboarding",
    }, 
    {
        label:"Sailing",
    },
    {
        label:
        "Snorkeling",
    },
    {
        label: "Surfing",
        
    },
    {
        label:    "Swimming",
    
    },

   


]
export const sport:ChildThemeItem[]=[
    {
        label:"Adrenaline sport",
        
    },
    {
        label:"Fitness",

    },
    {
        label:"Mountain Sport",
    },
    {
        label:"Outdoor sport",
    },
    {
        label:"Water sport",
    },
   
    
]

export const naturesAndEcology:ChildThemeItem[]=[
    {
        label: "Bay tour",
    },
    {
        label:"Cave tour",
    },
    {
        label:
        "Countryside tour",
    },
    {
        label:    "Desert tour",

    },
    {
        label:    "Forest tour",

    },
    {
        label:    "Hot spring tour",

    },
    {
        label:    "Lake tour",

    },
    {
        label:    "Ocean tour",

    },
    {
        label:    "River tour",

    },
    
    

    
]
export const nightSky:ChildThemeItem[]=[
    {
        label:    "Astro photography",

    },
    {
        label:    "Astronomy",

    }, 
     {
        label:  " Stargazing",
    },
    
  
  
    
]
export const plantsAndAgriculure:ChildThemeItem[]=[
    {
        label:    "Farming",

    },
    {
        label:    "Gardening",
    },
    {
        label:    "Herbalism",
    },
 
   
    
]
export const naturesAndOutdoors:ChildThemeItem[]=[
    {
        label:    "Camping",
    },
    {
        label:    "Hiking",
    },
    {
        label:    "National park tour",
    },
    {
        label:    "Nature and ecology tour",
    },
    {
        label:
        "Night Sky",
    },
    {
        label:    "Plants and Agriculture",
    },
    





    
]

export const themesArray: Theme[] = [
    
    {
        label:"Animals",
        slug:"animals", 
        hasicon : true ,
        childArray:animals,

    },
    {
        label:"Art & Desin",
        slug:"art", 
        hasicon : true,
        childArray:artDesign, 
    },
    {
        label:"Culture & Society",
        slug:"culture", 
        hasicon : true ,
        childArray:culturesSociety,
    },
    {
        label:"Food",
        slug:"food", 
        hasicon : true ,
        childArray:food,
    },
    {
        label:"Drink",
        slug:"drink", 
        hasicon : true,
        childArray:drink, 
    },
    {
        label:"Entertainment",
        slug:"entertainment", 
        hasicon : true ,
        childArray:entertaiment,
    },
    {
        label:"History & Literatures",
        slug:"history", 
        hasicon : true ,
        childArray:history,
    },
    {
        label:"Nature & Out door",
        slug:"nature", 
        hasicon : true,
        childArray:naturesAndOutdoors, 
    },
    {
        label:"Sintsees, shopping & Transportation",
        slug:"shopping", 
        hasicon : true ,
        childArray:sightseesShoppingAndTransportaion,
    },
    {
        label:"Sports",
        slug:"sports", 
        hasicon : true ,
        childArray:sport,
    },
    {
        label:"Wellness",
        slug:"wellness", 
        hasicon : true , 
        childArray:welness,
    },

]





