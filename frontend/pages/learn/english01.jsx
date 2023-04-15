// This page displays the Engglish 01 demo course

import styles from '../../styles/Find.module.css'
import FindLesson from '../../components/FindLesson'
import LessonCard from '../../components/LessonCard'
//import CompleteEng from '../../components/CompleteEngOld'
import CompleteEng from '../../components/CompleteEng'
import NftMinter from '../../components/NftMinter'
import English01ABI from '../../contracts_abi/English01ABI.json'

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
        <NftMinter
          contractAddress='0x938EADDF2d8c7903616E4Bd5aaed948D13f36b22'
          tokenUri='https://ipfs.filebase.io/ipfs/QmcZMwBfYwRfysPyLaJzMk5RwsgXnVz7JDkbh6eRbAfSjJ/QmdeEmVuLKxhy63CfLkt193sYTRHLLCH6qzyghBS27k7uJ'
          abi={English01ABI}
        />
      </main>
    </div>
  )
}
