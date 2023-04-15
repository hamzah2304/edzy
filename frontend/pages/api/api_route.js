export default async function handler(req, res) {
  const token = req.headers.authorization?.split(' ')[1]

  if (token !== 'xyz123qop') {
    res.status(401).json({ message: 'Invalid token' })
    return
  }

  const { body } = req

  // Do something with the webhook data
  console.log({ body })

  res.status(200).json({ message: 'OK' })
}

// type webhookData = {
//   event: 'meeting-ended';
//   payload: {
//     id: string;
//     roomId: string;
//     duration: number;
//     startTime: string;
//     endTime: string;
//     totalPeers: number;
//   };
// };
