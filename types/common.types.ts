import firebase from "firebase/app";

export interface IPollOption {
  name: string;
  votes: number;
}

export interface IPoll {
  name: string;
  options: Array<IPollOption>;
  id: string;
}

export type DocumentData = firebase.firestore.DocumentData;
