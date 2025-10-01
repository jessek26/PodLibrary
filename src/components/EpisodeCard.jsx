import './EpisodeCard.css';

function EpisodeCard({ title, show, duration, date, description, category }) {
  return (
    <div className="episode-card">
      <div className="episode-image">
        <div className="play-icon">▶</div>
      </div>
      <div className="episode-info">
        <span className="category-tag">{category}</span>
        <h3 className="episode-title">{title}</h3>
        <p className="show-name">{show}</p>
        <div className="episode-meta">
          <span>📅 {date}</span>
          <span>⏱️ {duration}</span>
        </div>
        <p className="episode-description">{description}</p>
      </div>
    </div>
  );
}

export default EpisodeCard;