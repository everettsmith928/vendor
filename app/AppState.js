import { Snack } from "./models/Snacks.js"
import { Value } from "./models/Value.js"
import { EventEmitter } from "./utils/EventEmitter.js"
import { isValidProp } from "./utils/isValidProp.js"
import { loadState } from "./utils/Store.js"
class ObservableAppState extends EventEmitter {
  snacks = [
    new Snack({ name: 'Chips', price: 1.50, image: '' }),
    new Snack({ name: 'Trail Mix', price: 2.50, image: '' }),
    new Snack({ name: 'Ramen', price: 1.00, image: '' }),
    new Snack({ name: 'Cheese Bag', price: 3.00, image: '' }),
    new Snack({ name: 'Burger', price: 5.50, image: '' }),
    new Snack({ name: 'Fries', price: 3.50, image: '' })
  ]
  //** @type {Snack[]} */
  purchasedSnacks = []
  yourMoney = 100

  moneyInserted = 0


  page = ''

  /** @type {import('./models/Value.js').Value[]} */
  values = loadState('values', [Value])

  // NOTE Used to load initial data
  init() {

  }

}

export const AppState = new Proxy(new ObservableAppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
