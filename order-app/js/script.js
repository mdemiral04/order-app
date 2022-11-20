const searchForm = document.querySelector(".search-form");
const cartItems = document.querySelector(".cart-items-container");


//!search buttons
const searchBtn = document.querySelector(" #search-btn");
const cartBtn = document.querySelector(" #cart-btn");


searchBtn.addEventListener("click", function() {
    searchForm.classList.toggle("active");
    document.addEventListener("click", function(e) {
        if( 
            !e.composedPath().includes(searchBtn) &&
            !e.composedPath().includes(searchForm)
        ) {
            searchForm.classList.remove("active");
    }
});   
});

cartBtn.addEventListener("click", function() {
    cartItems.classList.toggle("active");
    document.addEventListener("click", function(e) {
        if( 
            !e.composedPath().includes(cartBtn) &&
            !e.composedPath().includes(cartItems)
        ) {
            cartItems.classList.remove("active");
    }
});   
});