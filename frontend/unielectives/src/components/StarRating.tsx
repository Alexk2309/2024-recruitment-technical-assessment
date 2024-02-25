import '../styles/StarRating.css';

function StarRating({ rating }: { rating: number }) {
    const fullStars = Math.floor(rating);
    const partialStar = rating - fullStars;
    const emptyStars = 5 - Math.ceil(rating);

    const renderStars = () => {
        const stars = [];
        // Full stars
        for (let i = 0; i < fullStars; i++) {
        stars.push(<span key={i} className="star full-star">&#9733;</span>);
        }

        // Partial star
        if (partialStar > 0) {
            const partialStarStyle = {
                '--partial-star-percent': `${partialStar * 100}%`,
                background: `linear-gradient(90deg, #B789E5 0%, #B789E5 var(--partial-star-percent), #DDDDDD var(--partial-star-percent), #DDDDDD 100%)`,
                WebkitBackgroundClip: 'text',
                MozBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
                display: 'inline-block',
            };
        stars.push(<span key="partial" className="star" style={partialStarStyle}>&#9733;</span>);
        }

        // Empty stars
        for (let i = 0; i < emptyStars; i++) {
            stars.push(<span key={`empty-${i}`} className="star empty-star">&#9733;</span>);
        }

        return stars;
    };

    return <div>{renderStars()}</div>;
}

export default StarRating;