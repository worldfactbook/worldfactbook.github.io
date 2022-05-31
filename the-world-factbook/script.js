console.log("ready")

  function displayData(data) {
    const rdata = data;
    const cocktailDiv = document.getElementById("WHATISNEW");
    const cocktailName = rdata.new;
    const heading = document.createElement("p");
    heading.innerHTML = cocktailName;
    cocktailDiv.appendChild(heading);
    //
    const cocktailDivv = document.getElementById("EDITION");
    const cocktailNamee = rdata.edition;
    const headingg = document.createElement("label");
    headingg.innerHTML = cocktailNamee;
    cocktailDivv.appendChild(headingg);
  }   
  
  fetch("https://fbhandler.russiandev.repl.co")
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("NETWORK RESPONSE ERROR");
      }
    })
    .then(data => {
      console.log(data);
      displayData(data)
    })
    .catch((error) => console.error("FETCH ERROR:", error));