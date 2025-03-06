const numberInput = document.getElementById("numberInput");
const fact = document.getElementById("factGenerated")

const fetchNumberData = async () => {
    try {
        const res = await fetch(`http://numbersapi.com/${numberInput.value}`);
        
        if (!res.ok) {
            console.log("Error fetching data");
        }
        
        const data = await res.text()
        
        numberInput.value === "" ? factGenerated.innerHTML = "" : factGenerated.innerHTML = data;
    }
    catch (err) {
        console.log(err)
    }
}

numberInput.addEventListener("input", fetchNumberData);