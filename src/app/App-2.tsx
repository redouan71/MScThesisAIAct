import { useState } from 'react';
import { ArticleViewer } from './components/ArticleViewer';
import { NavigationBar } from './components/NavigationBar';
import { Header } from './components/Header';
import type { ArticleNumber } from './data/articles';

export default function App() {
  const [activeArticle, setActiveArticle] = useState<ArticleNumber>(9);
  const [history, setHistory] = useState<Array<ArticleNumber>>([]);

  const handleArticleChange = (article: ArticleNumber, fromNavBar: boolean = false) => {
    if (fromNavBar) {
      // When navigating from the nav bar, clear history
      setHistory([]);
    } else {
      // When navigating from cross-reference, add to history
      setHistory(prev => [...prev, activeArticle]);
    }
    setActiveArticle(article);
  };

  const handleGoBack = () => {
    if (history.length > 0) {
      const newHistory = [...history];
      const previousArticle = newHistory.pop()!;
      setHistory(newHistory);
      setActiveArticle(previousArticle);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <NavigationBar activeArticle={activeArticle} onArticleChange={handleArticleChange} />
      <ArticleViewer
        articleNumber={activeArticle}
        onArticleChange={handleArticleChange}
        onGoBack={handleGoBack}
        canGoBack={history.length > 0}
      />
    </div>
  );
}