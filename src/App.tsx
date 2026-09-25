import { useState } from 'react';
import { Tweet } from './components/Tweet';
import { sampleTweets } from '@/data/tweets';

function App() {
  const [tweets, setTweets] = useState(sampleTweets);

  const toggleLike = (id: string) => {
    setTweets((prev) =>
      prev.map((tweet) =>
        tweet.id === id
          ? {
              ...tweet,
              likedByMe: !tweet.likedByMe,
              likes: tweet.likes + (tweet.likedByMe ? -1 : 1),
            }
          : tweet,
      ),
    );
  };

  const toggleRetweet = (id: string) => {
    setTweets((prev) =>
      prev.map((tweet) =>
        tweet.id === id
          ? {
              ...tweet,
              retweetedByMe: !tweet.retweetedByMe,
              retweets: tweet.retweets + (tweet.retweetedByMe ? -1 : 1),
            }
          : tweet,
      ),
    );
  };

  return (
    <div className="app-shell">
      <header className="app-header">
        <div className="brand-lockup">
          <span className="brand-mark" aria-hidden="true">⚔</span>
          <div>
            <p className="eyebrow">ASHEN HOLLOW · WAR ROOM</p>
            <h1>Horde Feed</h1>
          </div>
        </div>
        <span className="feed-status"><span aria-hidden="true" />Warband awake</span>
      </header>

      <main className="feed-panel" aria-label="Horde feed">
        <div className="feed-heading">
          <div>
            <p className="eyebrow">MESSENGER'S BOARD</p>
            <h2>From the warband</h2>
          </div>
          <span className="dispatch-label">Latest dispatches</span>
        </div>
        <section className="tweet-list" aria-label="Latest warband dispatches">
          {tweets.map((tweet) => (
            <Tweet
              key={tweet.id}
              tweet={tweet}
              onLike={toggleLike}
              onRetweet={toggleRetweet}
            />
          ))}
        </section>
      </main>
    </div>
  );
}

export default App;
