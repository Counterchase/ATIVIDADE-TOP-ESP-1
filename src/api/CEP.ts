
// //metodo de referencia passo a passo:
// const usersList = 'https://randomuser.me/api/?results=10&nat=br'  //linsk de busca
// export async function getUsers(){  //adicionar a palavra async pra funcionar as promieses
//     try {
//         let response = await fetch(usersList); //passo 1: receber uma promisse
//         let dados = await response.json() //pass 2 : receber os dados da promisse
//         //pode ser encaddeado tbm:  let data = (await fetch(usersList).json())
//         return dados; //retornar os dados
//
//     }catch (error) {
//         console.log(`os dados nao vieramm.  requisição falhou:  ${error}`)
//     }
//     //tratar caso der erro: use try catch
// }
//


//metodo de referencia encadeado:


export async function getCEP(CEP){

    try{
        return (await fetch('https://viacep.com.br/ws/'+{CEP}+'/json')).json()
    }catch (error){
        return []
    }
}