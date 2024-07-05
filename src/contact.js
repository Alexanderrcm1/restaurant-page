const contactPage = () => `
<div class="contact-wrapper>
    <div class="form-container>
        <h1 class="contact-title">Contact</h1>
        <form>
            <div class="message-container">
                <label for="message">Your Message: </label>
                <input type="text" id="message" name="message" required>
            </div>
            <div class="name-container>
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
        </form>
    </div>
</div>
`
export default contactPage;