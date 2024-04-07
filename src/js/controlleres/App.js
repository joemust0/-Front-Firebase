import { AppController } from "./AppController.js";
import { GuiController } from "./GuiController.js";


let appInstance = new AppController();

appInstance.setGuiController(new GuiController());

//const appInstance = new AppController();
//appInstance.setGuiController(new GuiController());
//appInstance.setAuthController(new AuthController());
export { appInstance }