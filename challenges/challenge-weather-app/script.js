const thumbnails = document.getElementById("thumbs");
const searchField = document.getElementById("search-tf");
const searchBtn = document.getElementById("search__btn");

let currentImgIndex;
let searchValue;

searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    thumbnails.innerHTML = ""
    searchValue = searchField.value;
    fetchWeatherApp(searchValue);
    searchValue = "";
    searchField.value = ""
    photo.innerHTML = ""
})

const fetchUnsplashImg = async (search) => {
    try {
        const res = await fetch(`https://api.unsplash.com/search/photos?query=${search}&client_id=41MYPTSVNJ_aSQCVN-LFc8wXZdy06hsIfGVBT_Ub5cM`);

        if (!res.ok) {
            console.log("Error fetching data");
        }

        const data = await res.json();

        const imageResults = data.results;

        imageResults.forEach((image) => {
            return thumbnails.innerHTML += `<img src=${image.urls.regular} id="thumbnail__image">`;
        });

        const thumbnailImages = document.querySelectorAll("#thumbnail__image")

        thumbnailImages.forEach((img, index) => {
            img.addEventListener("click", () => {
                let imgSrc = img.getAttribute("src");
                photo.innerHTML = `<img src=${imgSrc}>`;
                
                if (thumbnailImages[index] === currentImgIndex) {
                    img.style.border = "4px solid red";
                    currentImgIndex = thumbnailImages[index]
                } 
                currentImgIndex = index;

               console.log(index, currentImgIndex)
 
            })
        })

    } catch (err) {
        console.log(err);
    }
}

const fetchWeatherApp = async (city) => {
    try {
        const res = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=6794f8834b95f6634ebd2af340aad488`);

        if (!res.ok) {
            console.log("Error fetching data");
            return thumbnails.innerHTML += `<p style="color: red;">City does not exist... Try again.</p>`
        }

        const data = await res.json();

        const weatherDescription = data.weather[0].description;

        return await fetchUnsplashImg(weatherDescription);

    } catch (err) {
        console.log(err);
    }
}