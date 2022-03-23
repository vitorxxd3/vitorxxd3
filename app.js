const {produtos} = require("./model/dados")
const moment = require("moment")
const data = moment().format("DD/MM/YYYY hh:mm")
console.log("--------------- progamador "  + data +  " ----------------")
for(let i = 0 ; i < produtos.length; i++){
    if(produtos[i].preco > 10){
        console.log(" Produto " , produtos[i].pdt , " Nome " , produtos[i].nomecliente , "Você pode compra")

    } else {
        console.log(" Produto " , produtos[i].pdt , " Nome " , produtos[i].nomecliente , "Você não pode compra")
    }
}