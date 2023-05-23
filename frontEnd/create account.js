//this will help us register and push the data to the database
const link = "http://localhost:3000/registerMember"

const createMember = (member) => {
    const memberData = JSON.stringify(member)
    fetch(link,{
        method: "POST",
        body: memberData,
        headers:{
            "Accept":"application/json",
            "Content-Type":"application/json"
        }
   }).then((res) => res.json())
    .then((data) => {
        console.log(data)
    }).catch((error)=> {
        console.log(error)

    })
    
}





const fullNamevalue = document.getElementById("fullName")
const emailvalue = document.getElementById("email")
const phoneNumbervalue = document.getElementById("phoneNumber")
const passwordvalue = document.getElementById("password")
const confirmPasswordvalue = document.getElementById("confirmPassword")
const promoCodevalue = document.getElementById("promoCode")
const saveBtn = document.getElementById("saveBtn")


const getElementValue = (element) => {
    return element.value
}



saveBtn.addEventListener("click", (event) => {
    event.preventDefault() //when click create account button it doesn't refresh to go to another page, remain static
     

    const fullNameInput = getElementValue(fullNamevalue)
    const emailInput = getElementValue(emailvalue)
    const phoneNumberInput = getElementValue(phoneNumbervalue)
    const passwordInput = getElementValue(passwordvalue)
    const confirmPasswordInput = getElementValue(confirmPasswordvalue)
    const promoCodeInput = getElementValue(promoCodevalue)


   const member = {fullName:fullNameInput, email:emailInput, phoneNumber:phoneNumberInput, password:passwordInput, confirmPassword:confirmPasswordInput, promoCode:promoCodeInput}
   createMember(member)
})
