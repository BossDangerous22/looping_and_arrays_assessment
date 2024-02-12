// Log every even number from 1000 down to 0
for (let i = 1000; i >= 0; i -= 2) {
    console.log(i);
  }
  
  // Alert messages for loop
  for (let i = 0; i <= 10000; i++) {
    if (i === 2500) {
      alert("A quarter of the way there!");
    } else if (i === 5000) {
      alert("Halfway there!");
    } else if (i === 10000) {
      alert("The loop is done!");
    }
  }
  
  // Top 5 favorite TV shows
  const favoriteTVShows = ["The Kitchen", "Love on the Spectrum", "Insecure", "Dumb Money", "Dead to Me"];
  
  // Loop through array of log messages
  for (let i = 0; i < favoriteTVShows.length; i++) {
    console.log(`My #${i + 1} favorite TV show is ${favoriteTVShows[i]}`);
  }
  