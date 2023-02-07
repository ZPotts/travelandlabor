import Image from 'next/image';

import styles from '@/styles/modules/Home.module.css';

function feedItem(){
    return(
        <div className={styles.feedItem} data-testid="feedItem">
            {/* 
            <Image 
                fill
                alt="Test Image"
                src="/img/article/test.webp" 
                className={styles.feedItemImg}
            />s
            */}
            <img src="/img/article/test.webp"
                className={styles.feedItemImg}
            />
            <div className={styles.feedItemCategory}>Category</div>
            <div className={styles.feedItemHeadline}>Hrere is the title, and I hope that you like it. </div>
            <div className={styles.feedItemDescription}>Hrere is the scription, and I hope that you like it. Let's make it even longer and see how we feel about that. How about this for a description blurby.</div>
        </div>
    )
}

export default feedItem;