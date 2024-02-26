document.addEventListener('DOMContentLoaded', () => {
    const url = `https://wizard-world-api.herokuapp.com/Wizards/`

    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Erro ao receber os dados')
            }
            return response.json()
        })
        .then((data) => {
            renderizarPersonagens(data)
        })
        .catch((err) => console.log(err))
})
function renderizarPersonagens(items){
    const container = document.getElementById("personagem-container")
    items.forEach((item, index) => {
        const divPersonagens = document.createElement('div')
        divPersonagens.innerHTML=`
        <div class="personagem-caixa">
            <div> 
            <h3>${item.firstName} ${item.lastName}</h3>
            </div>
        </div>    
    `
        divPersonagens.classList.add('personagem')
        container.appendChild(divPersonagens)
    });
}