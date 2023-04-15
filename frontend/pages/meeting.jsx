// This page will display the video conference/live stream
import styles from '../styles/Meeting.module.css'
import Frame from '../components/Frame'

const ROOM_URL = 'https://iframe.huddle01.com/123'

export default function Meeting() {
  return (
    <div>
      <main className={styles.main}>
        <br />
        <p className='font-bold text-5xl'>Your tutorial is now taking place</p>
        <br />
        <Frame roomUrl={ROOM_URL} />
      </main>
    </div>
  )
}
