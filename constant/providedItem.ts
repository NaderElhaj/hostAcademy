 export  type ProvidedIconName= "food" | "drink" | "tickets" | "transportation" | "equipments"
export interface  Provided {
   
    label: string ;
    slug? : ProvidedIconName
    hasicon?: boolean
    childArray?:string[];
}
export const  providedArray : Provided[] = [
    {
        label : "Food",
        slug : "food",
        hasicon : true , 
        childArray :  ["Snack" , "Appertizers" , "Breakfast" , "Lunch" , "Dinner" , "Dessert" , "Tasting menu"]
    } , 
    {
        label : "Drink",
        slug : "drink",
        hasicon : true , 
        childArray :  ["Aperitif" , "Cocktail" , "Cofee" , "Juice" , "Soft drinks" , "Tea" , "Water","Wine"]
    } , 
    {
        label : "Tickets",
        slug : "tickets",
        hasicon : true , 
        childArray :  ["Event tickets","Show tickets","Entrace fee"]
    } , 
    {
        label : "Transportation",
        slug : "transportation",
        hasicon : true , 
        childArray :  ["Bus" , "Train" , "Car" , "Bycicle" , "Motorcycle" , "Camel ride" , "Horse ride","Boat","Ferry","Hot air balloon","Plane"]
    } , 
    {
        label : "Equipments",
        slug : "equipments",
        hasicon : true , 
        childArray : ["Sports equipment","Outdoor gear","Safety equipments","Creative supplies","Camera","Photography"]
    } , 

]