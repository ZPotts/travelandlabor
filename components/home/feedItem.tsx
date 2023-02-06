import Image from 'next/image';

import styles from '@/styles/modules/Home.module.css';

function feedItem(){
    return(
        <div className={styles.feedItem} data-testid="feedItem">
            <Image 
                fill
                alt="Test Image"
                src="/img/article/test.webp" 
                className="feedItemImg"
            />
            <div className="headline">Title</div>
            <div className="description">Description</div>
            <div className="byline">ByLine</div>
        </div>
    )
}

export default feedItem;