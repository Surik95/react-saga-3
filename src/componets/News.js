import moment from "moment/";
import "moment/locale/ru";

export default function News({ news }) {
  return (
    <div className="news-containier">
      <div className="news-date">
        {moment(news.date).locale("ru").format(`DDD MMM в HH:mm`)}
      </div>
      <div className="news-text">{news.text}</div>
      <div className="news-reactions">
        <div className="reactions-item">
          <span className="material-icons">favorite</span>{" "}
          <span>{news.likes.count}</span>
        </div>
        <div className="reactions-item">
          <span className="material-icons">reply</span>{" "}
          <span>{news.reposts.count}</span>
        </div>
        <div className="reactions-item">
          <span className="material-icons">visibility</span>
          <span>{news.views.count}</span>
        </div>
      </div>
    </div>
  );
}
