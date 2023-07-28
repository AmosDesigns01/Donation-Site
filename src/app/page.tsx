import Image from 'next/image'
import styles from './page.module.css'
import Banner from '@/components/banner/Banner'
import BarChart from '@/components/bar_chart/BarChart'
import ProgressBar from '@/components/progress_bar/ProgressBar'

export default function Home() {
  return (
    <main className={styles.main}>
      <Banner />
      <section className={`${styles.section} ${styles.charts}`}>
        <h1>Progress made so far</h1>
        <BarChart />
        <ProgressBar />
      </section>
    </main>
  )
}
