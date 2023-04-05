document.addEventListener('DOMContentLoaded',()=>{
    return fetch(`http://localhost:3000/pups`)
    .then(res=>res.json())
    .then(data=>renderData(data))
})
// let dogObject = {}
function renderData(dogs){
    const dogSummary = document.getElementById('dog-summary-container')
    const dogsFilter = document.getElementById('dog-bar')
    dogs.forEach(dog=>{
        let dogDiv = document.createElement('div')
        let dogImage = document.createElement('img')
        dogImage.src = dog.image
        let dogBehavior = document.createElement('p')
        dogBehavior.textContent = dog.isGoodDog
        let dogName = document.createElement('h3')
        dogName.textContent = dog.name
        dogDiv.append(dogImage,dogBehavior,dogName)
        dogSummary.append(dogDiv)  
        let dogFilter = document.createElement('span')
        dogFilter.setAttribute('id',dog.id)
        dogFilter.textContent = dog.name
        dogFilter.className = 'good-dog-filter'
        dogsFilter.append(dogFilter)
        dogFilter.addEventListener('click',()=>{
            handleFilter(dog)
        })
        // dogObject[dog.name] = dog.id
    })
}
// let dogArray = Object.values(dogObject)

function handleFilter(dog){
    fetch(`http://localhost:3000/pups/${dog.id}`)
    .then(res=>res.json())
    .then(data=>{
        const dogSummary = document.getElementById('dog-summary-container')
        dogSummary.innerHTML = ''
        let dogDiv = document.createElement('div')
        let dogImage = document.createElement('img')
        dogImage.src = data.image
        let dogBehavior = document.createElement('p')
        dogBehavior.textContent = data.isGoodDog
        let dogName = document.createElement('h3')
        dogName.textContent = data.name
        dogDiv.append(dogImage,dogBehavior,dogName)
        dogSummary.append(dogDiv)
    })
    
}