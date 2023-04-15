// This page is the home page for the asynchronous learning platform demo

import styles from '../../styles/Find.module.css'
import FindLesson from '../../components/FindLesson'
import LessonCard from '../../components/LessonCard'

export default function Learn() {

    return (
        <div>
          <main className={styles.main}>
            <br />
            <p className='font-bold text-5xl'>Find a lesson</p>
            <br />
            <br />
            <FindLesson></FindLesson>
            <br />
            <br />
            <p className='font-semibold text-2xl'>
              Or, explore lessons tailored to you 
            </p>
            <br />
            <LessonCard
              subject='English, Level 02'
              description='For beginners who have completed levels 0 and 1.'
              completion='50%'
            />
            <br />
            <LessonCard
              subject='Physics, Level 05'
              description='For intermediate learners who have completed levels 0-4.'
              completion = '0%'
            />
            <br></br>
          </main>
        </div>
      )

}

