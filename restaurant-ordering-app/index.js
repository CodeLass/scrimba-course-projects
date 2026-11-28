import menuArray from "./data.js";

const menu = document.getElementById('menu');

const htmlString = menuArray.map((item) => {
    return `    
        <div class="menu-item">
            <p class="menu-item-icon">${item.emoji}</p>
            <div class="menu-item-mid">
                <h2 class="menu-item-heading">${item.name}</h2>
                <p class="menu-item-desc">${item.ingredients.join(', ')}</p>
                <p class="menu-item-price">$${item.price}</p>
            </div>
            <button data-id=${item.id} class="add-btn">+</button>
        </div>
    `;
}).join('')

menu.innerHTML = htmlString;