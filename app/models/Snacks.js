export class Snack {
  constructor(data) {
    this.name = data.name
    this.price = data.price
    this.image = data.image
    this.quantity = 10
  }

  get snackListTemplate() {
    return `<div onclick="app.SnackController.spendMoney('${this.name}')" type="button"class="col-4 btn"><h1>${this.name}</h1><p>${this.price}</p><p>${this.quantity} Available</p>
    </div>`
  }

  get purchasedSnackListTemplate() {
    return `<div class="col-2 border"><h1>${this.name}</h1><p>Eat ME!</p>
    </div>`
  }
}