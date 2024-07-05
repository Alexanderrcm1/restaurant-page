import Bolognese from "./images/bolognese.jpg";
import Burrata from "./images/burrata.jpg";
import Pizza from "./images/pizza.jpg";

const homePage = () => 
     `
    <h1 id="title">Little Italy</h1>
    <section class="description-container">
        <p id="description">
        Little Italy is a charming Italian restaurant that captures the essence of traditional Italian dining. Nestled in a cozy corner of town, Little Italy invites guests to savor authentic Italian flavors in a warm, inviting atmosphere. The menu features a delightful array of classic dishes, from rich, creamy pasta and wood-fired pizzas to succulent seafood and savory meats, all crafted with the freshest ingredients. With its rustic decor, friendly service, and a selection of fine wines, Little Italy offers a genuine taste of Italy, making every meal a memorable experience.
        </p>
        <img src="${Bolognese}" alt="Pasta Bolognese">
        <img src="${Pizza}" alt="Pizza">
        <img src="${Burrata}" alt="Burrata">
    </section>
        <div class="location-container">
            <h2 id="location">Folkungagatan 76,<br> 116 22 Stockholm</h2>
        </div>
    <div class="open-hours-container">
        <ul>
        <li>Sunday: 12:00 - 21:00</li>
        <li>Monday: 10:00 - 20:00</li>
        <li>Tuesday: 10:00 - 20:00</li>
        <li>Wednesday: 10:00 - 20:00</li>
        <li>Thursday: 10:00 - 20:00</li>
        <li>Friday: 10:00 - 23:00</li>
        <li>Saturday: 17:00 - 00:00</li>
        </ul>
    </div>
    `
export default homePage;