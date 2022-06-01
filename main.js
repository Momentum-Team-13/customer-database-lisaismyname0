console.log(customers)

const containerElement = document.querySelector("#container")

for (let customer of customers) {

    let cardElement = document.createElement("div")
    cardElement.classList.add("card")

    let contentElement = document.createElement("div")
    contentElement.classList.add("square")
    contentElement.appendChild(cardElement)

    let imageElement = document.createElement("img")
    imageElement.src = customer.picture.large;
    imageElement.alt = "placeholder image of kitten"
    imageElement.classList.add("photos")
    cardElement.appendChild(imageElement)

    let customerElement = document.createElement("h2")
    customerElement.classList.add("customer")
    customerElement.innerText = `Customer Name: ${customer.name.title} ${customer.name.first} ${customer.name.last}`
    cardElement.appendChild(customerElement)
    console.log(`Customer Name:
    ${customer.name.title} ${customer.name.first} ${customer.name.last}`)

    let emailElement = document.createElement("h3")
    emailElement.classList.add("emails")
    emailElement.innerText = `Email Address: ${customer.email}`
    cardElement.appendChild(emailElement)
    console.log(`Email Address: ${customer.email}`)

    let addressElement = document.createElement("p")
    addressElement.classList.add("towns")
    addressElement.innerText = `Location: ${customer.location.street.number} ${customer.location.street.name} ${customer.location.city} ${customer.location.state} ${customer.location.country} ${customer.location.postcode}`
    cardElement.appendChild(addressElement)
    console.log(`Address: ${customer.location.street.number} ${customer.location.street.name} ${customer.location.city} ${customer.location.state} ${customer.location.country} ${customer.location.postcode}`)

    let dobElement = document.createElement("p")
    dobElement.classList.add("dates")
    dobElement.innerText = `DOB: ${customer.dob.date} Age: ${customer.dob.age}`
    cardElement.appendChild(dobElement)
    console.log(`Customer's Birthday is: ${customer.dob.date} and they are ${customer.dob.age}`)

    let registeredElement = document.createElement("p")
    registeredElement.classList.add("registration")
    registeredElement.innerText = `Date Registered: ${customer.registered.date} Registered at Age: ${customer.registered.age}`
    console.log(`Customer Registered on: ${customer.registered.date} at ${customer.registered.age} years old`)
    cardElement.appendChild(registeredElement)
    console.log(registeredElement)

    containerElement.appendChild(cardElement)

}
for (let customer of customers) {
    const first = customer.name.title.charAt(0)
    console.log(first)

    const upper = first.toUpperCase
    console.log(upper)

    // let remain = 

    // const combined = upper + remain;

    // console.log(combined)

}

