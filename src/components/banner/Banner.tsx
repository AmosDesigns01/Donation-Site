import Image from 'next/image'
import React from 'react'
import styles from './page.module.css'

const Banner = () => {
  return (
    <section className={styles.container}>
        <div className={styles.left}>
            <h1>University of Ibadan 75th Anniversary Crowdfunding Barometer</h1>
            <p>Lorem ipsum dolor sit amet consectetur. Sed nunc laoreet nec fames pretium lacinia. Id ac pretium lacus in facilisis justo tristique tristique in. Molestie et venenatis adipiscing malesuada eget tempor ut. Gravida lacus</p>
            <button>Donate</button>
        </div>
        <div className={styles.right}>
          <Image src='/money.png' alt='money' width={450} height={500}/>
        </div>
    </section>
  )
}

export default Banner