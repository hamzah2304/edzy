const { axios } = require('axios')

async function apiTest() {
  const response = await axios
    .get('https://livepeer.studio/api/asset/{id}', {
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.API_TOKEN,
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
