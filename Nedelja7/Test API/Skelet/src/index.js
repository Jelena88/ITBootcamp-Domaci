  
import { Dashboard } from "./layout/dashboard";

const app = document.querySelector('#app');
let dashboard = new Dashboard();

app.appendChild(dashboard.getNode());

//U postojeci div (glavni sa id-em app) smo stavili ceo Dashboard koji ima u sebi content koji sadrzi sve ostalo 