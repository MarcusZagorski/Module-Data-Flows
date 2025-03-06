const imageElement = document.getElementById("imageElement")

const fetchImage = async () => {
    try {
        const res = await fetch("https://xkcd.vercel.app/?comic=latest");

        if (!res.ok) {
            console.log("Error fetching data")
        }

        const data = await res.json();

        imageElement.setAttribute("src", data.img)
    }
    catch (err) {
        console.log(err)
    }
}

fetchImage()