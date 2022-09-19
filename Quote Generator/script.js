const quoteText = document.querySelector(".quote"),
  quoteBtn = document.querySelector(".button"),
  authorName = document.querySelector(".name"),
  speechBtn = document.querySelector(".speech"),
  copyBtn = document.querySelector(".copy"),
  twitterBtn = document.querySelector(".twitter"),
  synth = speechSynthesis;
  

function randomQuote() {
  quoteBtn.classList.add("loading");
  quoteBtn.innerText = "Loading Quote...";
  fetch("https://type.fit/api/quotes")
    .then((response) => response.json())
    .then((result) => {
      let randomNumber = Math.floor(Math.random() * 50);
      quoteText.innerText = `${result[randomNumber].text}`;
      authorName.innerText = `${result[randomNumber].author}`;
      quoteBtn.classList.remove("loading");
      quoteBtn.innerText = "New Quote";
    });
}

speechBtn.addEventListener("click", () => {
  if (!quoteBtn.classList.contains("loading")) {
    let utterance = new SpeechSynthesisUtterance(
      `${quoteText.innerText} by ${authorName.innerText}`
    );
    synth.speak(utterance);
    setInterval(() => {
      !synth.speaking
        ? speechBtn.classList.remove("active")
        : speechBtn.classList.add("active");
    }, 10);
  }
});

randomQuote();

copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(`${quoteText.innerText} by ${authorName.innerText}`);
});

twitterBtn.addEventListener("click", () => {
  let tweetUrl = `https://twitter.com/intent/tweet?url=${quoteText.innerText} by ${authorName.innerText}`;
  window.open(tweetUrl, "_blank");
});

quoteBtn.addEventListener("click", randomQuote);
