import { useState, useEffect } from "react";
import { copy, linkIcon, loader, tick } from "../assets";
import { useLazyGetSummaryQuery } from "../services/article";

const Demo = () => {
  const [article, setArticle] = useState({
    url: "",
    summary: "",
  });

  const [allArticles, setAllArticles] = useState([]);
  const [copied, setCopied] = useState("");
  const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();

  useEffect(() => {
    const articlesFromLocalStroage = JSON.parse(
      localStorage.getItem("articles")
    );
    if (articlesFromLocalStroage) {
      setAllArticles(articlesFromLocalStroage);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data } = await getSummary({ articleUrl: article.url });

    if (data?.summary) {
      const newArticle = { ...article, summary: data.summary };

      const updatedAllArticles = [newArticle, ...allArticles];
      setArticle(newArticle);
      setAllArticles(updatedAllArticles);

      localStorage.setItem("articles", JSON.stringify(updatedAllArticles));
    }
  };

  const handleCopy = (copyUrl) => {
    setCopied(copyUrl);
    navigator.clipboard.writeText(copyUrl);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleCopyArticle = () => {
    navigator.clipboard.writeText(article.summary);
  };

  return (
    <section className="mt-16 w-full max-w-xl">
      {/* Search */}
      <div className="flex flex-col w-full gap-2">
        <form
          className="relative flex justify-center items-center"
          onSubmit={handleSubmit}
        >
          <button
            type="submit"
            className="submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700"
          >
            <p>↵</p>
          </button>

          <input
            type="url"
            placeholder="لینک خود را اینجا وارد کنید..."
            value={article.url}
            onChange={(e) => setArticle({ ...article, url: e.target.value })}
            required
            className="url_input peer text_link_dir"
          />

          <img
            src={linkIcon}
            alt="link_icon"
            className="absolute left-0 my-2 ml-3 w-5"
          />
        </form>

        {/* Browse URL History */}
        <div className="flex flex-col gap-1 max-h-60 overflow-y-auto">
          {allArticles.map((item, index) => (
            <div
              key={`link-${index}`}
              onClick={() => setArticle(item)}
              className="link_card"
            >
              <p className="text_link_dir flex-1 text-blue-700 font-medium text-sm truncate">
                {item.url}
              </p>
              <div className="copy_btn" onClick={() => handleCopy(item.url)}>
                <img
                  src={copied === item.url ? tick : copy}
                  className="w-[40%] h-[40%] object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="my-10 max-w-full flex justify-center items-center">
        {isFetching ? (
          <img src={loader} alt="loader" className="w-20 h-20 object-contain" />
        ) : error ? (
          <p className="font-bold text-black text-center">
            متاسفم، من به یک مشکلی به برخوردم...
            <br />
            <span className="font-normal text-gray-700">
              {error?.data?.error}
            </span>
          </p>
        ) : (
          article.summary && (
            <div className="flex flex-col gap-3">
              <h2 className="font-bold text-gray-600 text-xl">
                خلاصه <span className="blue_gradient">مقاله شما</span>
              </h2>
              <div className="summary_box text_link_dir">
                <p className="font-medium text-sm text-gray-700">
                  {article.summary}
                </p>
                <button
                  className="bg-blue-600 p-[7px] px-[11px] mt-2 rounded-lg text-white hover:bg-blue-800 transition-all"
                  onClick={handleCopyArticle}
                >
                  Copy
                </button>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default Demo;
