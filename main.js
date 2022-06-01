const containerElement = document.querySelector("#container")

for (let customer of customers) {
    // the following chunk of code is a (longwinded) way of formatting the customer names
    const firstTitle = customer.name.title.charAt(0);
    const upperTitle = firstTitle.toUpperCase()
    const titleRemain = customer.name.title.slice(1);
    const title = `${upperTitle}${titleRemain}`
    const firstFirst = customer.name.first.charAt(0);
    const upperFirst = firstFirst.toUpperCase()
    const firstRemain = customer.name.first.slice(1);
    const firstName = `${upperFirst}${firstRemain}`;
    const firstLast = customer.name.last.charAt(0);
    const upperLast = firstLast.toUpperCase()
    const lastRemain = customer.name.last.slice(1);
    const lastName = `${upperLast}${lastRemain}`
    const fullName = `${title} ${firstName} ${lastName}`
    // now I begin to create my elemements
    let cardElement = document.createElement("article")
    cardElement.classList.add("card")

    let imageElement = document.createElement("img")
    imageElement.src = customer.picture.large;
    imageElement.alt = "images of customers in the database"
    imageElement.classList.add("photos")
    cardElement.appendChild(imageElement)

    let customerElement = document.createElement("p")
    customerElement.classList.add("customer")
    customerElement.innerText = `${fullName}`
    cardElement.appendChild(customerElement)

    let emailElement = document.createElement("span")
    emailElement.classList.add("emails")
    emailElement.innerText = `${customer.email}`
    cardElement.appendChild(emailElement)

    let addressElement = document.createElement("span")
    addressElement.classList.add("towns")
    const state = nameToAbbr(customer.location.state)
    addressElement.innerText = `\n ${customer.location.street.number} ${customer.location.street.name} \n${customer.location.city} ${state} ${customer.location.postcode} `
    cardElement.appendChild(addressElement)

    let dobElement = document.createElement("span")
    dobElement.classList.add("dates")
    let dobFormat = moment(customer.dob.date).format("MMM DD YYYY");
    dobElement.innerText = `DOB: ${dobFormat}`
    cardElement.appendChild(dobElement)

    let registeredElement = document.createElement("span")
    registeredElement.classList.add("registration")
    let registeredFormat = moment(customer.registered.date).format("MMM DD YYYY")
    registeredElement.innerText = `Customer since: ${registeredFormat}`
    cardElement.appendChild(registeredElement)

    containerElement.appendChild(cardElement)

    // console log checks
    // console.log(customers)
    // console.log(`Customer Name:
    // ${customer.name.title} ${customer.name.first} ${customer.name.last}`);
    // console.log(`Email Address: ${customer.email}`);
    // console.log(`Customer's Birthday is: ${customer.dob.date} and they are ${customer.dob.age}`);
    // console.log(`Address: ${customer.location.street.number} ${customer.location.street.name} ${customer.location.city} ${customer.location.state} ${customer.location.postcode}`);
    // console.log(`Customer Registered on: ${customer.registered.date} at ${customer.registered.age} years old`)
}