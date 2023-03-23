const sendDataToApi = (data) => {
  return fetch('http://localhost:4000/submit', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((dataObject) => {
      return dataObject;
    });
};

const objToExport = {
  sendDataToApi: sendDataToApi,
};

export default objToExport;
