import styles from '@/styles/modules/Home.module.css';

import FeedItem from './feedItem';

function articleCollection() {
    return(
        <div className={styles.articleGrid} data-testid="article-grid">
            <FeedItem /> 
            <FeedItem /> 
            <FeedItem /> 
            <FeedItem /> 
            <FeedItem /> 
            <FeedItem /> 
            <FeedItem /> 
            <FeedItem /> 
        </div>
    )
}

export default articleCollection;