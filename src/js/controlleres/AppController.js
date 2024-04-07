export class AppController{

    #guiController;

    setGuiController(controladorDeInterface){
        this.#guiController = controladorDeInterface;
        this.#guiController.buildGui();

    
    }
}