import { AboutController } from "./controllers/AboutController.js";
import { HomeController } from "./controllers/HomeController.js";
import { SnackController } from "./controllers/SnackController.js";
import { ValuesController } from "./controllers/ValuesController.js";
import { AboutView } from "./views/AboutView.js";


export const router = [
  {
    path: '',
    controller: [HomeController, SnackController],
    view: /*html*/`
    <div class="container-fluid">
    <section class="row" id="vendor-items">
    <div>Something</div>
    </section>
    <section class="row">
    <button class="btn" onclick="app.SnackController.insertMoney()"><h3>Insert Money</h3></button>
    </section>
    </div>
    `
  },
  {
    path: '#/about',
    controller: [AboutController, ValuesController],
    view: AboutView
  }
]