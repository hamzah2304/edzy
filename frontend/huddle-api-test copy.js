const { axios } = require('axios')

async function apiTest() {
  const response = await axios
    .get('https://iriko.testing.huddle01.com/api/v1/meeting-details/{roomId}', {
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.REACT_APP_HUDDLE_API_KEY,
      },
    })
    .then((response) => {
      console.log(response.data)
      return response.data
    })
    .catch(function (error) {
      console.log(error)
    })
}

apiTest()
