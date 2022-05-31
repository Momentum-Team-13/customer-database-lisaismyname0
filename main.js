console.log(customers)

const containerElement = document.querySelector("#page")

for (let customer of customers) {
    let cardElement = document.createElement("div")
    cardElement.classList.add("card")

    let contentElement = document.createElement("div");
    contentElement.classList.add(".square");
    cardElement.appendChild(contentElement);

    let imageElement = document.createElement("img");
    // imageElement.src = "http://placekitten.com";
    imageElement.alt = "placeholder image of kitten";
    imageElement.classList.add("photos");
    contentElement.appendChild(imageElement);

    let customerElement = document.createElement("h1");
    customerElement.classList.add("customer")
    customerElement.innerText = `Customer Name: ${customer.name}`
    contentElement.appendChild(customerElement);
    console.log(`Customer Name:
    ${customer.name.title} ${customer.name.first} ${customer.name.last}`)

    let emailElement = document.createElement("h3")
    emailElement.classList.add("emails");
    emailElement.innerText = `Email Address: ${customer.email}`
    contentElement.appendChild(emailElement);
    console.log(`Email Address: ${customer.email}`)

    let addressElement = document.createElement("p")
    addressElement.classList.add("towns")
    addressElement.innerText = `Location: ${customer.location}`
    contentElement.appendChild(addressElement)
    console.log(`Address: ${customer.location.street.number} ${customer.location.street.name} ${customer.location.city} ${customer.location.state} ${customer.location.country} ${customer.location.postcode}`)

    let dobElement = document.createElement("p");
    dobElement.classList.add("dates");
    dobElement.innerText = `DOB: ${customer.dob}`;
    contentElement.appendChild(dobElement)
    console.log(`Customer's Birthday is: ${customer.dob.date} and they are ${customer.dob.age}`)

    let registeredElement = document.createElement("p");
    registeredElement.classList.add("registration");
    registeredElement.innerText = `Date Registered: ${customer.registered}`;
    console.log(`Customer Registered on: ${customer.registered.date} at ${customer.registered.age} years old`)

    contentElement.appendChild(registeredElement);
    console.log(registeredElement)

    cardElement.appendChild(containerElement)
}









// {/* <body>
//     <div id="container">
//         <div id="row">
//             <div class="square">1</div>
//             <div class="square">2</div>
//             <div class="square">3</div>
//             <div class="square">4</div>
//         </div>
//         <div id="row">
//             <div class="square">5</div>
//             <div class="square">6</div>
//             <div class="square">7</div>
//             <div class="square">8</div>
//         </div>
//         <div id="row">
//             <div class="square">9</div>
//             <div class="square">10</div>
//             <div class="square">11</div>
//             <div class="square">12</div>
//         </div>
//     </div>

// </body> */}
