import { useState, useEffect } from 'react';
import { articles, type ArticleNumber } from '../data/articles';
import { ChevronDown, ChevronUp, ArrowLeft, Loader2 } from 'lucide-react';

interface ArticleViewerProps {
  articleNumber: ArticleNumber;
  onArticleChange: (article: ArticleNumber, fromNavBar?: boolean) => void;
  onGoBack: () => void;
  canGoBack: boolean;
}

export function ArticleViewer({ articleNumber, onArticleChange, onGoBack, canGoBack }: ArticleViewerProps) {
  const [showNarrative, setShowNarrative] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const article = articles[articleNumber];

  useEffect(() => {
    setShowNarrative(false);
    setIsLoading(false);
  }, [articleNumber]);

  const handleGenerateNarrative = () => {
    if (showNarrative) {
      setShowNarrative(false);
      setIsLoading(false);
    } else {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setShowNarrative(true);
      }, 1500);
    }
  };

  const renderContentWithCrossReferences = (content: string) => {
    const regex = /\{\{Article (\d+)\}\}/g;
    const parts: Array<{ text: string; isReference: boolean; articleNum?: number }> = [];
    let lastIndex = 0;
    let match;

    while ((match = regex.exec(content)) !== null) {
      if (match.index > lastIndex) {
        parts.push({ text: content.slice(lastIndex, match.index), isReference: false });
      }
      parts.push({
        text: `Article ${match[1]}`,
        isReference: true,
        articleNum: parseInt(match[1])
      });
      lastIndex = regex.lastIndex;
    }

    if (lastIndex < content.length) {
      parts.push({ text: content.slice(lastIndex), isReference: false });
    }

    return parts.map((part, index) => {
      if (part.isReference && part.articleNum) {
        const isAvailable = part.articleNum in articles;
        return (
          <button
            key={index}
            onClick={() => {
              if (isAvailable) {
                onArticleChange(part.articleNum as ArticleNumber, false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            className={`${
              isAvailable
                ? 'text-blue-600 hover:underline cursor-pointer'
                : 'text-gray-400 cursor-not-allowed'
            }`}
            disabled={!isAvailable}
            title={isAvailable ? `Navigate to Article ${part.articleNum}` : 'Article not available'}
          >
            {part.text}
          </button>
        );
      }
      return <span key={index}>{part.text}</span>;
    });
  };

  const formatContent = (content: string) => {
    const paragraphs = content.split('\n\n');
    return paragraphs.map((paragraph, index) => {
      const isNumbered = /^(\d+)\.\s/.test(paragraph);
      const isLettered = /^\([a-z]\)\s/.test(paragraph);

      return (
        <div
          key={index}
          className={`mb-4 leading-7 text-gray-800 ${
            isNumbered ? 'mt-6' : isLettered ? 'ml-8 text-sm' : ''
          }`}
        >
          {renderContentWithCrossReferences(paragraph)}
        </div>
      );
    });
  };

  return (
    <div className="bg-white">
      <div className="max-w-4xl mx-auto px-6 py-8">
        {canGoBack && (
          <button
            onClick={onGoBack}
            className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>
        )}
        <div className="mb-6">
          <p className="text-xs text-gray-500 mb-2">Requirements for High-Risk AI Systems</p>
          <h2 className="text-2xl mb-1">Article {article.number}</h2>
          <h3 className="text-xl text-gray-700">{article.title}</h3>
        </div>

        <div className="space-y-4 text-sm">
          {formatContent(article.content)}
        </div>

        {article.narrative && (
          <div className="mt-8">
            <button
              onClick={handleGenerateNarrative}
              disabled={isLoading}
              className="px-6 py-2.5 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700 transition-colors flex items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Generating narrative...
                </>
              ) : (
                <>
                  Generate narrative
                  {showNarrative ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </>
              )}
            </button>

            {showNarrative && !isLoading && (
              <div className="mt-6 p-6 bg-blue-50 rounded-lg border border-blue-100">
                <h4 className="text-sm mb-4">Narrative explanation</h4>
                <p className="text-sm leading-7 text-gray-800">
                  {article.narrative}
                </p>
              </div>
            )}
          </div>
        )}

        {article.crossReferences.length > 0 && (
          <div className="mt-8 pt-6 border-t border-gray-200">
            <h4 className="text-sm mb-3 text-gray-700">Referenced in this article:</h4>
            <div className="flex flex-wrap gap-2">
              {article.crossReferences.map((refNum) => {
                const isAvailable = refNum in articles;
                return (
                  <button
                    key={refNum}
                    onClick={() => {
                      if (isAvailable) {
                        onArticleChange(refNum as ArticleNumber, false);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }
                    }}
                    className={`px-3 py-1.5 rounded text-xs border ${
                      isAvailable
                        ? 'bg-white border-gray-300 text-blue-600 hover:bg-blue-50 cursor-pointer'
                        : 'bg-gray-100 border-gray-200 text-gray-400 cursor-not-allowed'
                    }`}
                    disabled={!isAvailable}
                    title={isAvailable ? `Navigate to Article ${refNum}` : 'Article not available'}
                  >
                    Article {refNum}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
