// extracting price from costForTwo string example-> "₹400 for two" will get 400
export function extractPriceFromString(inputString) {
  // Remove non-numeric characters using a regular expression
  const priceString = inputString.replace(/[^0-9]/g, "");

  const price = parseInt(priceString, 10); // Convert the priceString to an integer
  return price;
}

//
export function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "INR",
  }).format(value);
}

export function formatDate({ time }) {
  const currentDate = new Date(time);

  const hours = currentDate.getHours().toString().padStart(2, "0");
  const minutes = currentDate.getMinutes().toString().padStart(2, "0");
  const seconds = currentDate.getSeconds().toString().padStart(2, "0");

  const formattedTime = `${hours}:${minutes}:${seconds}`;
  return formattedTime;
}

export function calcMinutesLeft(dateStr) {
  const d1 = new Date().getTime();
  const d2 = new Date(dateStr).getTime();
  return Math.round((d2 - d1) / 60000);
}
