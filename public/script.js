
function GetNews(){
    try{

    const input = document.getElementById("header_find_input")

    input.addEventListener('keydown', (e) => {
        if(e.key === "Enter"){
            console.log(e.target.value);
            window.location.href = "index2.html"
        }
    })

    }catch(e){
        console.log("Erro inesperado no GetNews");
        throw new Error(e)
    }
}

GetNews()