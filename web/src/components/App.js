import '../styles/App.scss';
import { useState } from 'react';
import apiData from '../services/api-data';

const App = () => {
  const [dataFromForm, setDataFromForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    title: 'none',
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [titleChecked, setTitleChecked] = useState('no');

  const handleInput = (ev) => {
    const inputValue = ev.target.value;
    const inputName = ev.target.name;
    setDataFromForm({ ...dataFromForm, [inputName]: inputValue });
    setErrorMessage('');
  };
  const handleCheckbox = (ev) => {
    if (ev.target.checked) {
      setTitleChecked('yes');
      setDataFromForm({ ...dataFromForm, title: 'Mr.' });
    } else {
      setTitleChecked('no');
      setDataFromForm({ ...dataFromForm, title: 'none' });
    }
  };

  const renderSelectTitle = () => {
    if (titleChecked === 'yes') {
      return (
        <select
          className="form__first--title"
          name="titles"
          id="titles"
          onChange={handleTitles}
        >
          <option value="Mr.">Mr.</option>
          <option value="Mrs.">Mrs.</option>
        </select>
      );
    }
  };
  const handleTitles = (ev) => {
    setDataFromForm({ ...dataFromForm, title: ev.target.value });
  };
  const sendDataToApi = (data) => {
    apiData.sendDataToApi(data).then((response) => {
      if (response) {
        console.log('Data brought from API successfully!');
        console.log(response);
      } else {
        console.log("We couldn't get data from API");
      }
    });
  };
  const handleSubmit = (ev) => {
    ev.preventDefault();
    const regExEmail = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    const regExPhone = /[6-9]{1}[0-9]{8}/;
    if (dataFromForm.name.length < 4) {
      setErrorMessage('Must enter a valid name (more than three characters).');
    } else if (
      dataFromForm.email === '' ||
      !regExEmail.test(dataFromForm.email)
    ) {
      setErrorMessage('Must enter a valid email.');
    } else if (!regExPhone.test(dataFromForm.phone)) {
      setErrorMessage('Must enter a valid phone.');
    } else if (dataFromForm.message.length < 11) {
      setErrorMessage(
        'You need to write a valid message (more than three characters).'
      );
    } else {
      setErrorMessage('Submitted!');
      sendDataToApi(dataFromForm);
    }
  };
  return (
    <div>
      <header className="header">
        <img
          className="header__logo"
          src="./mediasmart_logo.png"
          alt="Mediasmart logo"
        />
        <nav className="header__nav">
          <ul className="header__menu">
            <li className="header__menu--regular">SOLUTIONS</li>
            <li className="header__menu--regular">RESOURCES</li>
            <li className="header__menu--regular">ABOUT US</li>
            <li className="header__menu--border">LOG IN</li>
            <li className="header__menu--border">SIGN UP</li>
          </ul>
        </nav>
      </header>
      <main className="main">
        <h1 className="main__title">Get in touch</h1>
        <div className="main__line1"></div>
        <div className="main__line2"></div>
        <form className="form" id="form" onSubmit={handleSubmit}>
          <div className="form__first">
            <div className="form__first--check">
              <label className="form__first--check-label" htmlFor="title">
                Add title
              </label>
              <input
                className="form__first--check-box"
                type="checkbox"
                id="title"
                name="title"
                value="title"
                onChange={handleCheckbox}
              />
            </div>
            {renderSelectTitle()}
            <input
              className="form__first--name"
              type="text"
              placeholder="Name*"
              name="name"
              onChange={handleInput}
              value={dataFromForm.name}
            />
          </div>
          <div className="form__second">
            <input
              className="form__second--email"
              type="text"
              placeholder="Email*"
              name="email"
              onChange={handleInput}
              value={dataFromForm.email}
            />
            <input
              className="form__second--phone"
              type="tel"
              placeholder="Phone number"
              name="phone"
              onChange={handleInput}
              value={dataFromForm.phone}
            />
          </div>
          <textarea
            className="form__third"
            type="text"
            placeholder="Message*"
            name="message"
            onChange={handleInput}
            value={dataFromForm.message}
          />
          <div className="form__fourth">
            <p className="error-msg">{errorMessage}</p>
            <input className="form__fourth--btn" type="submit" value="Submit" />
          </div>
        </form>
      </main>
      <footer className="footer">
        <nav className="footer__nav">
          <ul className="footer__nav--media">
            <li>
              <a
                href="https://www.facebook.com/mediasmartmb/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-square-facebook"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/mediasmart-mobile/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/mediasmartio"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-square-twitter"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/channel/UCMkb1sSXEaxpzJ4fqmJMHQg"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-square-youtube"></i>
              </a>
            </li>
          </ul>
        </nav>
      </footer>
    </div>
  );
};

export default App;
