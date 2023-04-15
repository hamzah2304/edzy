// This page displays the Engglish 01 demo course

import styles from '../../styles/Find.module.css'
import FindLesson from '../../components/FindLesson'
import LessonCard from '../../components/LessonCard'
//import CompleteEng from '../../components/CompleteEngOld'
import CompleteEng from '../../components/CompleteEng'


export default function English() {

    return (
        <div>
          <main className={styles.main}>
            <br />
            <p className='font-bold text-5xl'>English 01</p>
            <br />
            <br />
            <p className='font-semibold text-2xl'>
              Choose the correct answer to complete the course.
            </p>
            <br />
            <CompleteEng></CompleteEng>
            <br />
            <br></br>
          </main>
        </div>
      )

}
