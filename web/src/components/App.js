import '../styles/App.scss';
import { useState } from 'react';
import apiData from '../services/api-data';

const App = () => {
  const [dataFromForm, setDataFromForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [errorMessage, setErrorMessage] = useState('');

  const handleInput = (ev) => {
    const inputValue = ev.target.value;
    const inputName = ev.target.name;

    // if (inputName === 'phone') {
    //   const regExPhone = /[6-9]{1}[0-9]{8}/; //Se añade una comprobación para que vea si el valor del teléfono cumple con la expresión regular dada
    //   if (regExPhone.test(inputValue) || inputValue === '') {
    //     setErrorPhone(false);
    //   } else {
    //     //Si el valor no cumple con la expresión regular es visible el siguiente mensaje
    //     setErrorPhone(true);
    //   }
    // } else if (inputName === 'email') {
    //   const regExEmail = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/; //Se añade una comprobación para que vea si el valor del teléfono cumple con la expresión regular dada
    //   if (regExEmail.test(inputValue) || inputValue === '') {
    //     setErrorEmail(false);
    //   } else {
    //     //Si el valor no cumple con la expresión regular es visible el siguiente mensaje
    //     setErrorEmail(true);
    //   }
    // }
    setDataFromForm({ ...dataFromForm, [inputName]: inputValue });
    setErrorMessage('');
  };

  const renderErrorMessage = () => {
    if (errorMessage !== '') {
      return <p>{errorMessage}</p>;
    }
  };

  const sendDataToApi = (data) => {
    apiData.sendDataToApi(data).then((response) => {
      if (response) {
        console.log('Success!');
        console.log(response);

        //setApiMessage('Data brought from API successfully');
      } else {
        //setApiMessage("We couldn't get data from API ");
        console.log('Failure');
      }
    });
  };
  const handleSubmit = (ev) => {
    // Aquí detenemos el envío del formulario
    ev.preventDefault();
    // Aquí enviamos los datos al servidor con un fetch o lo que sea
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
