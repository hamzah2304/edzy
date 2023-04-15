import { REACT_LOADABLE_MANIFEST } from 'next/dist/shared/lib/constants'
import axios from 'axios'

export default function CreateMeeting() {
  const handleStartClick = async function () {
    await axios
      .post(
        'https://iriko.testing.huddle01.com/api/v1/create-iframe-room',
        {
          title: 'edzy Demo',
          hostWallets: ['0xD26a77BE873CDc25F0238634326f85986E6cBd1F'],
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'x-api-key': 'VwTZ4AGTxme9snANex9tep3NwvVMGfYd',
          },
        },
      )
      .then((response) => {
        console.log(response.data)
        return response.data
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  const handleDetailClick = async function () {
    await axios
      .get(
        'https://iriko.testing.huddle01.com/api/v1/meeting-details/gjn-xqky-gmm',
        {
          headers: {
            'Content-Type': 'application/json',
            'x-api-key': 'VwTZ4AGTxme9snANex9tep3NwvVMGfYd',
          },
        },
      )
      .then((response) => {
        console.log(response.data)
        return response.data
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  return (
    <div>
      <button
        type='button'
        onClick={async () => await handleStartClick()}
        className='w-full mt-3 py-3 px-4 inline-flex justify-center items-center gap-2  border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800'
      >
        Create meeting
      </button>
      <br />
      <button
        type='button'
        onClick={async () => await handleDetailClick()}
        className='w-full mt-3 py-3 px-4 inline-flex justify-center items-center gap-2  border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800'
      >
        Meeting details
      </button>
    </div>
  )
}
