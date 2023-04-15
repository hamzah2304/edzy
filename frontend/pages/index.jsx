// This is the "Find a Tutor" page
import styles from '../styles/Find.module.css'
import FindTutor from '../components/FindTutor'
import TutorCard from '../components/TutorCard'
import CalendarModal from '../components/CalendarModal'


export default function Find() {
  return (
    <div>
      <main className={styles.main}>
        <br />
        <p className="text-5xl font-bold text-slate-900 text-transparent bg-clip-text bg-gradient-to-r from-[#F63E02] to-[#FCE762]">Find the perfect tutor</p>
        <br />
        <p className='font-semibold text-2xl'>
          Prove your credentials to find the right person for you
        </p>
        <br />
        <FindTutor></FindTutor>
        <br />
        <br />
        <p className='font-semibold text-2xl'>
          Or, explore some of our highly recommended tutors
        </p>
        <br />
        <TutorCard
          name='Mary Pavlenko'
          subject='English, Level 02 - 07'
          description='Tutor with 6 years of experience across a wide range of levels - loves skiing!'
          price='19'
        />
        <br />
        <TutorCard
          name='Hamzah Mahmood'
          subject='Physics, Level 05 - 09'
          price='25'
        />
        <br></br>
        <CalendarModal />
      </main>
    </div>
  )
}
