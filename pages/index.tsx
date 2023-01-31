import styles from '@/styles/modules/Home.module.css';

export default function Home() {
  return (
    <div className="layoutContainer testingBorder">
      <main>
        <div className={styles.homeGrid}>
          <div className={styles.homePromoBlock}>Block 1</div>
          <div className={styles.homePromoBlock}>Block 2</div>
          <div className={styles.homePromoBlock}>Block 3</div>
          <div className={styles.homePromoBlock}>Block 1</div>
          <div className={styles.homePromoBlock}>Block 2</div>
          <div className={styles.homePromoBlock}>Block 3</div>
        </div>
      </main>
    </div>
  )
}
