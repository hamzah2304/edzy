// This is the "Find a Tutor" page
import styles from '../styles/Find.module.css'
import FindTutor from '../components/FindTutor'
import TutorCard from '../components/TutorCard'

export default function Find() {
  return (
    <div>
      <main className={styles.main}>
        <br />
        <p className='font-bold text-5xl'>Find the perfect tutor</p>
        <br />
        <p className='font-semibold text-2xl'>
          Prove your credentials to find the right person for you
        </p>
        <br />
        <FindTutor></FindTutor>
        <br />
        <br />
        <TutorCard name='Mary Pavlenko' subject='English 02-07' />
        <br />
        <TutorCard name='Hamzah Mahmood' subject='Physics 05-09' />
      </main>
    </div>
  )
}
