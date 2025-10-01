import EpisodeCard from '../components/EpisodeCard';
import './PodcastLibrary.css';

function PodcastLibrary() {
  const episodes = [
    {
      id: 1,
      title: "The Future of AI in Education",
      show: "Tech Talk Daily",
      duration: "42 min",
      date: "Jan 15, 2025",
      description: "Exploring how artificial intelligence is transforming classrooms and online learning platforms.",
      category: "Technology"
    },
    {
      id: 2,
      title: "Building Habits That Stick",
      show: "Mindful Living",
      duration: "28 min",
      date: "Jan 12, 2025",
      description: "Practical strategies for creating lasting positive changes in your daily routine.",
      category: "Self-Help"
    },
    {
      id: 3,
      title: "The Science of Sleep",
      show: "Health Matters",
      duration: "35 min",
      date: "Jan 10, 2025",
      description: "Understanding sleep cycles and how to optimize your rest for better health.",
      category: "Health"
    },
    {
      id: 4,
      title: "Startup Funding Strategies",
      show: "Entrepreneur's Edge",
      duration: "51 min",
      date: "Jan 8, 2025",
      description: "A founder shares lessons learned from raising a Series A round in 2024.",
      category: "Business"
    },
    {
      id: 5,
      title: "Climate Change Solutions",
      show: "Planet Forward",
      duration: "46 min",
      date: "Jan 5, 2025",
      description: "Innovative approaches to reducing carbon emissions and fighting climate change.",
      category: "Science"
    },
    {
      id: 6,
      title: "The History of Jazz",
      show: "Music Legends",
      duration: "39 min",
      date: "Jan 3, 2025",
      description: "Tracing the roots of jazz from New Orleans to its global influence today.",
      category: "Music"
    }
  ];

  return (
    <div className="library-page">
      <div className="library-container">
        <aside className="sidebar">
          <h2 className="sidebar-title">Categories</h2>
          <div className="category-list">
            <button className="category-button active">All Episodes</button>
            <button className="category-button">Technology</button>
            <button className="category-button">Business</button>
            <button className="category-button">Health</button>
            <button className="category-button">Science</button>
          </div>
          
          <div className="stats-box">
            <h3>Your Library</h3>
            <div className="stat-item">
              <span className="stat-number">{episodes.length}</span>
              <span className="stat-label">Episodes</span>
            </div>
          </div>
        </aside>

        <main className="episodes-content">
          <h1 className="page-title">Your Episodes</h1>
          <div className="episodes-grid">
            {episodes.map(episode => (
              <EpisodeCard key={episode.id} {...episode} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default PodcastLibrary;