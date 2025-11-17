
const translations = {
  en: { title: "Interest Calculator (30/360)", amount: "Principal Amount:", from: "From Date:", to:"To Date:", rate:"Rate (per 100 per month):" },
  te: { title: "వడ్డీ కాలిక్యులేటర్ (30/360)", amount: "మొత్తం:", from: "తేదీ నుండి:", to:"తేదీ వరకు:", rate:"రేటు (100కు నెలకు):" },
  hi: { title: "ब्याज कैलकुलेटर (30/360)", amount: "राशि:", from: "से तारीख:", to:"तक तारीख:", rate:"दर (100 प्रति माह):" },
  ta: { title: "வட்டி கணக்கீடு (30/360)", amount: "தொகை:", from: "இருந்து தேதி:", to:"வரை தேதி:", rate:"விகிதம் (100க்கு மாதம்):"},
  kn: { title: "ವಡ್ಡಿ ಕ್ಯಾಲ್ಕ್ಯುಲೇಟರ್ (30/360)", amount: "ಮೊತ್ತ:", from: "ದಿನಾಂಕದಿಂದ:", to:"ದಿನಾಂಕವರೆಗೆ:", rate:"ದರ (100 ಪ್ರತಿ ತಿಂಗಳು):"},
  ml: { title: "പലിശ കാൽക്കുലേറ്റർ (30/360)", amount: "തുക:", from: "തീയതി മുതൽ:", to:"തീയതി വരെ:", rate:"നിരക്ക് (100 ന് പ്രതി മാസം):"}
};

function changeLanguage() {
  let lang = document.getElementById("language").value;
  document.getElementById("title").innerText = translations[lang].title;
  document.getElementById("amountLabel").innerText = translations[lang].amount;
  document.getElementById("fromLabel").innerText = translations[lang].from;
  document.getElementById("toLabel").innerText = translations[lang].to;
  document.getElementById("rateLabel").innerText = translations[lang].rate;
}

function calculate() {
  let amount = parseFloat(document.getElementById("amount").value);
  let rate = parseFloat(document.getElementById("rate").value);
  let from = new Date(document.getElementById("fromDate").value);
  let to = new Date(document.getElementById("toDate").value);

  let days = ((to - from) / (1000 * 60 * 60 * 24));
  let months = Math.floor(days / 30);

  let interest = (amount / 100) * rate * months;
  document.getElementById("result").innerText = "Interest: ₹" + interest.toFixed(2);
}

