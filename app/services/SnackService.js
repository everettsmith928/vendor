import { AppState } from "../AppState.js"



class SnackService {
  constructor() {

  }
  insertMoney() {
    AppState.yourMoney -= .25
    AppState.moneyInserted += .25
  }

}
export const snackService = new SnackService