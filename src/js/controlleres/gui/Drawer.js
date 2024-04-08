import  mustache from "https://cdnjs.cloudflare.com/ajax/libs/mustache.js/4.2.0/mustache.min.js"

const form = {
    email: () => document.getElementById('email'),
    senha: () => document.getElementById('senha')
}


export class Drawer {

    btnToggleDrawerElm;
    drawerElm;

    drawerMnuItens = [
        {
            label : "Login",
            elmId : "drawerMnuItem_Login",
            action: "./../../../login.html"
        },        
        {
            label : "Cadastrar Aluno",
            elmId : "drawerMnuItem_cad_aluno",
            action: "open_view_cadastrar_aluno"
        },
        {
            label : "Cadastrar Carteirinha",
            elmId : "drawerMnuItem_cad_carteirinha",
            action: "open_view_cadastrar_carteirinha"
        },        
        {
            label : "Importar Cadastro de Alunos do Csv",
            elmId : "drawerMnuItem_import_csv_de_alunos",
            action: "open_view_importar_alunos"
        },
        {
            label : "Entregar Carteirinha (Associar Aluno X Carteirinha)",
            elmId : "drawerMnuItem_assoc_alun_carteirinha",
            action: "open_view_associar_alun_cart"
            
        },
        {   
            label : "Relatorios",
            elmId : "drawerMnuItem_relatorios",
            action: "open_view_relatorios"
        },
        {   
            label : "Relatorios",
            elmId : "drawerMnuItem_relatorios",
            action: "open_view_relatorios"
        }       
    ];


    constructor(drawerId, btnToggleId){
          this.drawerElm = document.getElementById(drawerId);
          this.drawerElm.style.display == "none";
          this.btnToggleDrawerElm = document.getElementById(btnToggleId);
          this.btnToggleDrawerElm.addEventListener("click",this.toggleDrawer.bind(this));
    }

    render(){
        const template = document.getElementById("DrawerMenuTmpl").innerHTML;
        const renderedMenu = mustache.render(template, { mnuItens: this.drawerMnuItens });
        this.drawerElm.innerHTML = renderedMenu; 
    }

    #openDrawer() {
        this.drawerElm.style.display = "block";
        return
    }

    #closeDrawer() {
        this.drawerElm.style.display = "none";
        return;
    }

    toggleDrawer() {
        if(this.drawerElm.style.display === "none"){
            this.#openDrawer();
        }else{this.#closeDrawer();}
        }


        
    }

