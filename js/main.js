import { cards } from './cards.js'

const cardsContainer = document.querySelector('.cards-container')

// This will store the generated card elements
let cardsArray = []

window.addEventListener('load', () =>
{
    duplicateCards()
    randomizeBoard()
})

cardsContainer.addEventListener('click', (e) => flipCard(e))

// Generate Cards
function generateCards(cardsData)
{
    const cardElements = []
    cardsData.forEach((card) =>
    {
        const cardElement = `
        <div class="card memory-card">
            <div class="memory-card-inner">
                <div class="memory-card-front">
                    ${card.cardFront}
                </div>
                
                <div class="memory-card-back">
                    <img src="${card.cardBack}" alt="">
                </div>
            </div>
        </div>`
        cardElements.push(cardElement)
    })
    return cardElements // Return generated elements
}

// Duplicate cards and generate two rows of cards
function duplicateCards()
{
    const cardRows = [...cards, ...cards] // Duplicate the array
    cardsArray = generateCards(cardRows) // Store generated card elements in cardsArray
}

// Flip card
function flipCard(e)
{
    const memoryCard = e.target.closest('.memory-card')
    if (memoryCard)
    {
        const memoryCardInner = memoryCard.querySelector('.memory-card-inner')
        memoryCardInner.classList.toggle('selected')
    }
}

// Randomize cards and render them
function randomizeBoard()
{
    // Fisher-Yates Shuffle on cardsArray
    for (let i = cardsArray.length - 1; i > 0; i--)
    {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        [cardsArray[i], cardsArray[randomIndex]] = [cardsArray[randomIndex], cardsArray[i]]
    }

    // Clear the container and append shuffled cards
    cardsContainer.innerHTML = '' // Clear previous cards
    cardsArray.forEach((cardElement) =>
    {
        cardsContainer.innerHTML += cardElement // Append each shuffled card
    })
}
