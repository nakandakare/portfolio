export const TABS_NAME = {
  WORK: "WORK",
  PROJECTS: "PROJECTS",
  ABOUT: "ABOUT",
  CONTACTS: "CONTACTS"
};
export const HOME_TABS = [
  TABS_NAME.WORK,
  TABS_NAME.PROJECTS,
  TABS_NAME.ABOUT,
  TABS_NAME.CONTACTS,
];

export const PROJECTS_NAME = ["Crypto Pay", "Hattori", "Smart Brain"];

interface IProjectKeys {
  [key: string]: { name: string; description: string; image: string };
}

export const PROJECTS_DETAILS: IProjectKeys = {
  "Crypto Pay": {
    name: "Crpto Pay",
    description: "Test",
    image: "https://fondosmil.com/fondo/29366.jpg",
  },
  Hattori: {
    name: "Hattori Clothing",
    description: "Test",
    image: "https://fondosmil.com/fondo/29366.jpg",
  },
  "Smart Brain": {
    name: "Smart Brain",
    description: "Test",
    image: "https://fondosmil.com/fondo/29366.jpg",
  },
};
