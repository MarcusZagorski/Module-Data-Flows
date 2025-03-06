const dogBtn = document.getElementById("generate-dog-btn");
const dogImgContainer = document.getElementById("dog-img-container");
const image = document.createElement("img");

const fetchDogImg = async () => {
    try {
        const res = await fetch("https://dog.ceo/api/breeds/image/random");
        
        if (!res.ok) {
            console.log("Error fetching dog image");
        } 
        
        const data = await res.json();
        
        image.setAttribute("src", data.message);
        image.classList.add("image");
        dogImgContainer.appendChild(image);
    }

    catch (err) {
        console.log(err);
    }
}

const updateImg = () => {
    document.startViewTransition(() => fetchDogImg());
}

dogBtn.addEventListener("click", updateImg);