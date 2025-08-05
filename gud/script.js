// LOGIN PAGE - form redirect
function handleLogin(event) {
  event.preventDefault(); // prevent refresh
  window.location.href = "home.html"; // go to home
}

// HOME PAGE - search filter
function filterCards() {
  let input = document.getElementById('searchBox').value.toLowerCase();
  let cards = document.getElementsByClassName('card');

  for (let card of cards) {
    let content = card.innerText.toLowerCase();
    card.style.display = content.includes(input) ? 'block' : 'none';
  }
}
