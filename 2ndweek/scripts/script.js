function answer01(){
    alert("Essa é uma mensagem importante.")
}

function answer02(){
    const result = window.confirm("Direcionando para o site da Conta Zap")
    if (result){
        window.location.href="https://www.contazap.com.br/ "
    }
}

function answer03(){
    const firstName = prompt("Qual o seu nome?")
    alert(firstName)
}

function answer04(){
    const firstName = prompt("Qual o seu nome?")
    const idade = prompt("Qual sua idade?")
    const esporte = window.confirm("Você gosta de praticar algum esporte?")
    console.log(firstName, idade, esporte)
}

function answer05(){
    const lastName = prompt("Qual o seu sobrenome?")
    const firstName = prompt("Qual o seu nome?")
    const name = `${firstName} ${lastName}`
    alert(name)
}

function answer06(){
    const lastName = prompt("Qual o seu sobrenome?")
    const countLastName = lastName.length
    const response = `Olá, ${lastName}. Seu sobrenome contém ${countLastName} letras`
    alert(response)
}

function answer07(){
    const bornYear = parseInt(prompt("Em que ano você nasceu?"))
    const year = parseInt(prompt("Qual o ano atual?"))
    const ageWithBirthday = (year - bornYear)
    const ageWithoutBirthday = (year - bornYear) - 1
    const message =  `Sua idade é ${ageWithBirthday} ou ${ageWithoutBirthday}`
    alert(message)
}

function answer08(){
    const operator = prompt("Qual tipo de cálculo deseja fazer?")
    const firstValue = parseFloat(prompt("Qual o primeiro valor?"))
    const secondValue = parseFloat(prompt("Qual o segundo valor?"))
    let result = 0

    if(operator == "+"){
        result = firstValue + secondValue
        alert(`O resultado da soma entre ${firstValue} e ${secondValue} é ${result}`)
    }else if(operator == "-"){
        result = firstValue - secondValue
        alert(`O resultado da subtração entre ${firstValue} e ${secondValue} é ${result}`)
    }else if(operator == "*"){
        result = firstValue * secondValue
        alert(`O resultado da multiplicação entre ${firstValue} e ${secondValue} é ${result}`)
    }else if(operator == "/"){
        if (secondValue == 0){
            console.log("Não é possivel dividir por 0, tente novamente")
        }else{result = firstValue / secondValue
            alert(`O resultado da divisão entre ${firstValue} e ${secondValue} é ${result}`)
        }
    }else{
        alert("Algo deu errado, tente novamente!")
    }
}

function answer09(){
    now = new Date
}