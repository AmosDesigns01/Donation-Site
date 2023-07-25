import Image from 'next/image'
import styles from './page.module.css'
import Banner from '@/components/banner/Banner'

export default function Home() {
  return (
    <main className={styles.main}>
      <Banner />
    </main>
  )
}
