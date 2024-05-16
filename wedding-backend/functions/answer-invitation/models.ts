export enum FoodPreference {
  VEGAN = "Vegan",
  VEGETARIAN = "Vegetarisch",
  MEAT = "Fleischesser",
}

export enum Drink {
  ALLES = "Alles geht",
  WODKA = "Wodka",
  WHISKY = "Whisky",
  RUM = "Rum",
  GIN = "Gin",
  TEQUILA = "Tequila",
  BRANDY = "Brandy",
  WERMUT = "Wermut",
  BOURBON = "Bourbon",
  SCOTCH = "Scotch",
  WACHOLDERGEIST = "Wacholdergeist",
}

export interface ParticipationAnswer {
  confirmation: boolean;
  firstname: string;
  lastname: string;
  email?: string;
  phone?: string;
  foodPreference?: FoodPreference;
  favoriteDrink?: Drink;
  playlistMusthave?: string;
  miscellaneous?: string;
}
