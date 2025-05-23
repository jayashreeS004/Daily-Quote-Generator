// List of motivational quotes
const quotes = [
    "Believe you can and you're halfway there. – Theodore Roosevelt",
    "Push yourself, because no one else is going to do it for you.",
    "Success doesn’t just find you. You have to go out and get it.",
    "Great things never come from comfort zones.",
    "Dream it. Wish it. Do it.",
    "Stay focused and never give up.",
    "The harder you work for something, the greater you’ll feel when you achieve it.",
    "Don’t stop when you’re tired. Stop when you’re done.",
    "Wake up with determination. Go to bed with satisfaction.",
    "Do something today that your future self will thank you for."
  ];
  
  // Select DOM elements
  const quoteEl = document.getElementById('quote');
  const nextBtn = document.getElementById('next-quote');
  
  // Function to get random quote
  const getRandomQuote = () => {
    const index = Math.floor(Math.random() * quotes.length);
    return quotes[index];
  };
  
  // Function to change quote with fade effect
  const changeQuote = () => {
    quoteEl.classList.remove('fade-in');
    quoteEl.classList.add('fade-out');
  
    // Wait for fade-out before changing text
    setTimeout(() => {
      quoteEl.textContent = getRandomQuote();
      quoteEl.classList.remove('fade-out');
      quoteEl.classList.add('fade-in');
    }, 300);
  };
  
  // Event listener for button
  nextBtn.addEventListener('click', changeQuote);
  
  // Show a quote on page load
  window.onload = () => {
    quoteEl.textContent = getRandomQuote();
  };
  
