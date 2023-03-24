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

  const renderErrorMessage = () => {
    if (errorMessage !== '') {
      return <p>{errorMessage}</p>;
    }
  };
  const renderSelectTitle = () => {
    if (titleChecked === 'yes') {
      return (
        <select name="titles" id="titles" onChange={handleTitles}>
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
          <label htmlFor="title">Add title</label>
          <input
            type="checkbox"
            id="title"
            name="title"
            value="title"
            onChange={handleCheckbox}
          />
          {renderSelectTitle()}
          <input
            type="text"
            placeholder="Name *"
            name="name"
            onChange={handleInput}
            value={dataFromForm.name}
          />
          <input
            type="text"
            placeholder="Email *"
            name="email"
            onChange={handleInput}
            value={dataFromForm.email}
          />
          <input
            type="tel"
            placeholder="phone"
            name="phone"
            onChange={handleInput}
            value={dataFromForm.phone}
          />
          <input
            type="text"
            placeholder="Message *"
            name="message"
            onChange={handleInput}
            value={dataFromForm.message}
          />
          <input type="submit" value="Submit" />
        </form>
        {renderErrorMessage()}
      </main>
      <footer>
        <nav>
          <ul>
            <li>
              <a href="https://www.facebook.com/mediasmartmb/">
                <i className="fa-brands fa-square-facebook"></i>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/mediasmart-mobile/">
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/mediasmartio">
                <i className="fa-brands fa-square-twitter"></i>
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/channel/UCMkb1sSXEaxpzJ4fqmJMHQg">
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
