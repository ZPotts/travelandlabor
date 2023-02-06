import styles from '@/styles/modules/Home.module.css';

import ArticleCollection from '@/components/home/articleCollection';

function Home() {
  return (
    <div className="layoutContainer testingBorder">
      <main>
        <ArticleCollection />
      </main>
    </div>
  )
}

export default Home;