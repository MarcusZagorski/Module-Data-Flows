const dogBtn = document.getElementById("generate-dog-btn");
const dogImgContainer = document.getElementById("dog-img-container");

const fetchDogImg = async () => {
    try {
        const res = await fetch("https://dog.ceo/api/breeds/image/random");

        if (!res.ok) {
            console.log("Error fetching dog image");
        } 

        const data = res.json();

        console.log(data);
    }

    catch (err) {
        console.log(err);
    }
}

dogBtn.addEventListener("click", fetchDogImg);