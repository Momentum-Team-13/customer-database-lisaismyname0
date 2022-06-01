console.log(customers)

const customerList = document.querySelector("#customer-list")

for (let customer of customers) {
    let customerElement = document.createElement("div")
    customerElement.classList.add("customer")
    let contentElement = document.createElement("article")
    contentElement.classList.add("dark-gray", "black")

    let imageElement = document.createElement("img")
    imageElement.src = "http://placekitten.com/g/600/300"
    imageElement.alt = "image of kitten"
    imageElement.classList.add("photos")
    contentElement.appendChild(imageElement)
    customerElement.appendChild(contentElement)
    let infoElement = document.createElement("div")
    infoElement.classList.add("information")
    let cityElement = document.createElement("h1")
    cityElement.classList.add("cities")
    cityElement.innerText = `Location: ${customer.location}`
    contentElement.appendChild(cityElement)
    customerList.appendChild(customerElement)

}