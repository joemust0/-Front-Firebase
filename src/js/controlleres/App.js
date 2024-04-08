import { AppController } from "./AppController.js";
import { GuiController } from "./GuiController.js";
import { AuthController } from "./AuthController.js";

const appInstance = new AppController();
appInstance.setGuiController(new GuiController());


export { appInstance }

