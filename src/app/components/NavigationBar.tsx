interface NavigationBarProps {
  activeArticle: number;
  onArticleChange: (article: number, fromNavBar?: boolean) => void;
}

export function NavigationBar({ activeArticle, onArticleChange }: NavigationBarProps) {
  const articles = [9, 10, 11, 14];

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex gap-8">
          {articles.map((article) => (
            <button
              key={article}
              onClick={() => onArticleChange(article, true)}
              className={`px-4 py-3 text-sm border-b-2 transition-colors ${
                activeArticle === article
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              Article {article}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
