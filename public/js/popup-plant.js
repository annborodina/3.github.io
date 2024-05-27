const plantsCards = document.querySelectorAll(
    '.plants .plant',
)
const plantsPopup = document.querySelector('.popup.popup-plants')
const plantsPopupData = plantsPopup.querySelector('.plant-wrapper')

const priceSaleElement  = document.querySelector('.popup.popup-plants .price-sale')
const plantImage = document.querySelector('.popup.popup-plants .image')
const plantName = document.querySelector('.popup.popup-plants .name')
const priceNumber  = document.querySelector('.popup.popup-plants .number')
const priceSale = document.querySelector('.popup.popup-plants .sale')
const plantDescription = document.querySelector('.popup.popup-plants .description')

const plants = {
  barberton_daisy: {
    image: './public/image/plants/plant-1.png',
    name: 'Barberton Daisy',
    price_sale: '48% OFF',
    number: '119.00',
    sale: '$299.00',
    description: 'The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground.',
  },
  angel_wing_begonia: {
    image: './public/image/plants/plant-2.png',
    name: 'Angel Wing Begonia',
    price_sale: '36% OFF',
    number: '169.00',
    sale: '$299.00',
    description: 'The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. ',
  },
  african_violet: {
    image: './public/image/plants/plant-3.png',
    name: 'African Violet',
    price_sale: '13% OFF',
    number: '199.00',
    sale: '$299.00',
    description: 'The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. ',
  },
  beach_spider_lily: {
    image: './public/image/plants/plant-4.png',
    name: 'Beach Spider Lily',
    price_sale: '',
    number: '129.00',
    sale: '',
    description: 'The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. ',
  },
  blushing_bromeliad: {
    image: './public/image/plants/plant-5.png',
    name: 'Blushing Bromeliad',
    price_sale: '',
    number: '139.00',
    sale: '',
    description: 'The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. ',
  },
  aluminum_plant: {
    image: './public/image/plants/plant-6.png',
    name: 'Aluminum Plant',
    price_sale: '',
    number: '179.00',
    sale: '',
    description: 'The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. ',
  },
  white_plant: {
    image: './public/image/plants/plant-7.png',
    name: 'White Plant',
    price_sale: '',
    number: '179.00',
    sale: '',
    description: 'The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. ',
  },
  brown_plant: {
    image: './public/image/plants/plant-8.png',
    name: 'Brown Plant',
    price_sale: '',
    number: '249.00',
    sale: '',
    description: 'The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. ',
  },
  circle_plant: {
    image: './public/image/plants/plant-9.png',
    name: 'Circle Plant',
    price_sale: '',
    number: '219.00',
    sale: '',
    description: 'The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. ',
  },
}

const popups = document.querySelectorAll('.popup')
popups.forEach((popup) => {
  const closeButtons = popup.querySelectorAll('.close-button')
  closeButtons.forEach((button) =>
    button.addEventListener('click', () => closePopup(popup)),
  )
})
function closePopup(popup) {
  popup.classList.remove('active')
}

plantsCards.forEach((card) => {
  card.addEventListener('click', () => openBuyPopup(card))
})

function openBuyPopup(el) {
  const plantId = el.id
  const plantDetails = plants[plantId]

  if (plantDetails) {
    console.log(plantDetails.price_sale)
    if(plantDetails.price_sale != '') {
      priceSaleElement.textContent = plantDetails.price_sale
      priceSaleElement.classList.remove('hide')
    } else {
      priceSaleElement.textContent = ''
      priceSaleElement.classList.add('hide')
    }
    plantImage.src = plantDetails.image
    plantName.textContent = plantDetails.name
    priceNumber.textContent = plantDetails.number
    if(plantDetails.sale != '') {
      priceSale.textContent = plantDetails.sale
      priceSale.classList.remove('hide')
    } else {
      priceSale.textContent = ''
      priceSale.classList.add('hide')
    }
    plantDescription.textContent = plantDetails.description

    plantsPopup.classList.add('active')
  }
}