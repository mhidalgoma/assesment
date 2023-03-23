import '../styles/App.scss';
import { useState } from 'react';

const App = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleName = (ev) => {
    setName(ev.target.value);
  };
  const handleEmail = (ev) => {
    setEmail(ev.target.value);
  };
  const handlePhone = (ev) => {
    setPhone(ev.target.value);
  };
  const handleMessage = (ev) => {
    setMessage(ev.target.value);
  };
  const handleSubmit = (ev) => {
    // Aquí detenemos el envío del formulario
    ev.preventDefault();
    // Aquí enviamos los datos al servidor con un fetch o lo que sea
  };
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
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Complete Name"
            name="name"
            onChange={handleName}
            value={name}
          />
          <input
            type="text"
            placeholder="Email"
            name="email"
            onChange={handleEmail}
            value={email}
          />
          <input
            type="tel"
            placeholder="phone"
            name="phone"
            onChange={handlePhone}
            value={phone}
          />
          <input
            type="text"
            placeholder="Message"
            name="message"
            onChange={handleMessage}
            value={message}
          />
          <input type="submit" value="Submit" />
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
};

export default App;
