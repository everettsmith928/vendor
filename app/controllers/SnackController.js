import { AppState } from "../AppState.js"
import { snackService } from "../services/SnackService.js"
import { setHTML, setText } from "../utils/Writer.js"

export class SnackController {

  constructor() {
    console.log('lets draw some snacks')
    this.drawSnacks()
    this.drawMoney()
    AppState.on('yourMoney', this.drawMoney)
    AppState.on('purchasedSnacks', this.drawSnacks)
  }


  drawSnacks() {
    const snacks = AppState.snacks
    let listContent = ''
    snacks.forEach(snack => { listContent += snack.snackListTemplate })
    const purchasedSnacks = AppState.purchasedSnacks
    console.log(purchasedSnacks)
    let purchasedContent = ''
    purchasedSnacks.forEach(snack => { purchasedContent += snack.purchasedSnackListTemplate })
    setHTML('vendor-items', listContent)
    setHTML('purchased-snacks', purchasedContent)
    console.log('Setting the Content')
  }

  drawMoney() {
    const money = AppState.yourMoney
    setText('your-money', money)
    setText('money-inserted', 'Money Inserted: ' + AppState.moneyInserted)
  }

  insertMoney() {
    snackService.insertMoney()

  }

  spendMoney(boughtSnack) {
    let selectedSnack = AppState.snacks.find(snack => snack.name == boughtSnack)
    if (AppState.moneyInserted >= selectedSnack.price) {
      selectedSnack.quantity--
      AppState.moneyInserted -= selectedSnack.price
      AppState.purchasedSnacks.push(selectedSnack)
      console.log(AppState.purchasedSnacks)
      // this.drawMoney()
      AppState.emit('yourMoney')
      AppState.emit('purchasedSnacks')

    } else {
      window.alert('You need to insert more money!')
    }
    // this.drawSnacks()

  }
}