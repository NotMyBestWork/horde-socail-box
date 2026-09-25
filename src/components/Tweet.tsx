import type { FC } from 'react';
import type { TweetData } from '@/types/tweet';

interface TweetProps {
  tweet: TweetData;
  onLike?: (id: string) => void;
  onRetweet?: (id: string) => void;
  onReply?: (id: string) => void;
}

export const Tweet: FC<TweetProps> = ({
  tweet,
  onLike,
  onRetweet,
  onReply,
}) => {
  return (
    <article className="tweet">
      <img
        className="tweet-avatar"
        src={tweet.author.avatarUrl}
        alt={tweet.author.name}
      />
      <div className="tweet-content">
        <div className="tweet-header">
          <span className="name">{tweet.author.name}</span>
          <span className="handle">@{tweet.author.handle}</span>
        </div>
        <p className="tweet-text">{tweet.text}</p>
        <div className="tweet-actions">
          <button className="tweet-action reply-action" onClick={() => onReply?.(tweet.id)}>
            <span aria-hidden="true">↶</span> Reply ({tweet.replies})
          </button>
          <button
            className={`tweet-action rally-action${tweet.retweetedByMe ? ' is-active' : ''}`}
            onClick={() => onRetweet?.(tweet.id)}
            aria-pressed={!!tweet.retweetedByMe}
          >
            <span aria-hidden="true">⚑</span> {tweet.retweetedByMe ? 'Rallied' : 'Rally'} ({tweet.retweets})
          </button>
          <button
            className={`tweet-action like-action${tweet.likedByMe ? ' is-active' : ''}`}
            onClick={() => onLike?.(tweet.id)}
            aria-pressed={!!tweet.likedByMe}
          >
            <span aria-hidden="true">♥</span> {tweet.likedByMe ? 'Liked' : 'Like'} ({tweet.likes})
          </button>
        </div>
      </div>
    </article>
  );
};

export default Tweet;
