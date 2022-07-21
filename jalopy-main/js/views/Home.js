// import {showNotification} from "../messaging.js";
// import {getUser} from "../auth.js";
//
// const BASE_URI = `${BACKEND_HOST}/api/s3/download`;

// export default function Home(props) {
//     return `
//         <header>
//             <h1 class="lol">Hello Jalopy!</h1>
//         </header>
//         <main>
//             <div>
//             <img  id="time" src="${INTELLIJ_PROJECT_PATH} ">
//                 <p>
//                    Welcome to my Jalopy application!
//                 </p>
//                 <button id="img-button">Click</button>
//             </div>
//         </main>
//     `;
// }
//
// export function HomeEvents() {
//     document.querySelector("#img-button").addEventListener("click",function (e) {
// let images = document.querySelector("#time")
//         console.log(images.src);
//
//                 //// using if statements
//
//             if (images.src ==="http://localhost:9000/assets/jalopy1.jpeg") {
//                 images.src = "http://localhost:9000/assets/jalopy2.jpeg";
//
//             } else if(images.src ==="http://localhost:9000/assets/jalopy2.jpeg") {
//                 images.src = "http://localhost:9000/assets/jalopy3.jpeg";
//             } else {
//                 images.src = "http://localhost:9000/assets/jalopy1.jpeg";
//             }
//
//     })
// }

//doc Rob's example
const imagePaths = [
    "assets/jalopy1.jpeg",
    "assets/jalopy2.jpeg",
    "assets/jalopy3.jpeg"
]
let currentImageIndex = 1;

export default function Home(props) {
    return `
        <header>
            <h1 class="home-title">Hello Jalopy!</h1>
        </header>
        <main>
            <div>
                <img id="time" src="assets/jalopy1.jpeg">
                <p>
                    Welcome to my Jalopy application!
                </p>
                
                <button id="img-button">Click this</button>    
            </div>
            
        </main>
    `;
}

export function HomeEvents() {
    const button = document.querySelector("#img-button");
    button.addEventListener("click", function(event) {
        const img = document.querySelector("#time");
        img.setAttribute("src", imagePaths[currentImageIndex]);
        currentImageIndex++;
        if(currentImageIndex === 3) {
            currentImageIndex = 0;
        }
    });
}
