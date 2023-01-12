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
  [key: string]: { name: string; description: string; image: string; url: string };
}

export const PROJECTS_DETAILS: IProjectKeys = {
  "Crypto Pay": {
    name: "Crypto Pay",
    description: "Test",
    image: "https://portfolio-bucket-kn.s3.amazonaws.com/crypto-pay.png",
    url: "https://crypto-pay.netlify.app/",
  },
  Hattori: {
    name: "Hattori Clothing",
    description: "Test",
    image: "https://portfolio-bucket-kn.s3.amazonaws.com/hattori-clothing.png",
    url: "https://hattori-clothing.netlify.app/",
  },
  "Smart Brain": {
    name: "Smart Brain",
    description: "Smart Brain is a web app that uses the Clarifai API to locate a face in a picture. This API built with Node.js, Express.js, as well as a PosrtgreSQL is in charge of user signin/registration as well as keeping track of the number of entries for each user.",
    image: "https://portfolio-bucket-kn.s3.amazonaws.com/smart-brain.jpg",
    url: "https://smart-br4in.netlify.app/",
  },
};
