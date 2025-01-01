import { cards } from './cards.js';
console.log(cards);

const cardsContainer = document.querySelector('.cards-container');

cardsContainer.addEventListener('click', (e) => flipCard(e));

function generateCards()
{
    cards.forEach((card) =>
    {
        // Use += to append cards instead of overwriting
        cardsContainer.innerHTML += `
        <div class="card memory-card">
            <div class="memory-card-inner">
                <div class="memory-card-front">
                  ${card.cardFront}
                </div>
                
                <div class="memory-card-back">
                    <img src=${card.cardBack} alt="">
                </div>
            </div>
        </div>
        `;
    });
}

for(let i = 0; i<2; i++)
{
    generateCards();
}

function flipCard(e)
{
    // Traverse the DOM to find the closest card
    const memoryCard = e.target.closest('.memory-card');
    if (memoryCard)
    {
        // Toggle the class on the "memory-card-inner"
        const memoryCardInner = memoryCard.querySelector('.memory-card-inner');
        memoryCardInner.classList.toggle('selected');
        console.log('Card flipped:', memoryCardInner);
    }
}
