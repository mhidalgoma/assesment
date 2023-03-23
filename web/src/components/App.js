import '../styles/App.scss';

function App() {
  return (
    <div>
      <header>
        <img src="./mediasmart_logo.png" alt="Mediasmart logo" />
        <nav>
          <ul>
            <li>SOLUTIONS</li>
            <li>RESOURCES</li>
            <li>ABOUT US</li>
            <li>LOG IN</li>
            <li>SIGN UP</li>
          </ul>
        </nav>
      </header>
      <main>
        <h1>Get in touch</h1>
        <div></div>
        <div></div>
        <form>
          <input type="text" placeholder="Complete Name" name="name" />
          <input type="text" placeholder="Email" name="email" />
          <input type="tel" placeholder="phone" name="phone" />
          <input type="text" placeholder="Message" name="message" />
          <button type="submit">Submit</button>
        </form>
      </main>
      <footer>
        <nav>
          <ul>
            <li>
              <a href="https://www.facebook.com/mediasmartmb/">
                <i class="fa-brands fa-square-facebook"></i>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/mediasmart-mobile/">
                <i class="fa-brands fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/mediasmartio">
                <i class="fa-brands fa-square-twitter"></i>
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/channel/UCMkb1sSXEaxpzJ4fqmJMHQg">
                <i class="fa-brands fa-square-youtube"></i>
              </a>
            </li>
          </ul>
        </nav>
      </footer>
    </div>
  );
}

export default App;
