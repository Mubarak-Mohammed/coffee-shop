let navbar = document.getElementById("navbar");
let menuBar = document.getElementById("menuBars");
let searchBtn= document.getElementById("search-btn");
let shopinCard = document.getElementById("shopin-card");
let searchForm = document.getElementById("searchForm");
let cardsContainer = document.getElementById("cardsContainer");


menuBar.onclick = () => {
    navbar.classList.toggle('active');
    cardsContainer.classList.remove("active");
    searchForm.classList.remove("active");
}
shopinCard.onclick = () => {
  cardsContainer.classList.toggle("active");
  navbar.classList.remove("active");
  searchForm.classList.remove("active");
};
searchBtn.onclick = () => {
    searchForm.classList.toggle("active");
    navbar.classList.remove("active");
    cardsContainer.classList.remove("active"); 
}

window.onscroll = () => {
      navbar.classList.remove("active");
      cardsContainer.classList.remove("active");
      searchForm.classList.remove("active");
}


