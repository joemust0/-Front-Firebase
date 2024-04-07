export class GuiController{

    #btnToggleDrawer;
    #menuDrawer;

    constructor(){
        this.#btnToggleDrawer = document.getElementById("btnToggleDrawer");
        this.#menuDrawer = document.getElementById("drawerMenu");
        
        
        this.#btnToggleDrawer.addEventListener(
            "click",
            () => {
                if(this.#menuDrawer = document.getElementById("drawerMenu").style.display == ""){
                    document.getElementById("drawerMenu").style.display = "block";
                    return;
                }

                if(this.#menuDrawer = document.getElementById("drawerMenu").style.display == "none"){
                    document.getElementById("drawerMenu").style.display = "block";
                }else{
                    document.getElementById("drawerMenu").style.display = "none";
                }

                 });
    }

}