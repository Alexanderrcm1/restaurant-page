const contactPage = () => `
    <h1 class="contact-title">Contact</h1>
    <form>
        <div class="name-container">
            <label for="name">Your Name: </label>
            <input type="text" id="name" name="name" required>
        </div>
        <div class="phone-container">
            <label for="phone">Your Phone Number: </label>
            <input type="number" id="phone" name="phone" required>
        </div>
        <div class="mail-container">
            <label for="mail">Your E-mail: </label>
            <input type="email" id="mail" name="mail">
        </div>
        <div class="message-container">
            <label for="message">Your Message: </label>
            <textarea id="message" name="message"></textarea>
        </div>
        <button>Submit</button>
    </form>

    <h4 id="location">Folkungagatan 76,<br> 116 22 Stockholm</h4>
    <ul>
        <li>Sunday: 12:00 - 21:00</li>
        <li>Monday: 10:00 - 20:00</li>
        <li>Tuesday: 10:00 - 20:00</li>
        <li>Wednesday: 10:00 - 20:00</li>
        <li>Thursday: 10:00 - 20:00</li>
        <li>Friday: 10:00 - 23:00</li>
        <li>Saturday: 17:00 - 00:00</li>
    </ul>
`
export default contactPage;