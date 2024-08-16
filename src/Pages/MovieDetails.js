import React, { useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import './MovieDetails.css';

function MovieDetails() {
  const { title } = useParams();
  const location = useLocation();
  const { movie } = location.state || {};

  const [review, setReview] = useState('');
  const [rating, setRating] = useState(0);
  const [reviews, setReviews] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  if (!movie) {
    return <div>Movie not found</div>;
  }

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (review.trim() && rating > 0) {
      const newReview = { text: review, rating: rating };
      if (editingIndex !== null) {
        const updatedReviews = [...reviews];
        updatedReviews[editingIndex] = newReview;
        setReviews(updatedReviews);
        setEditingIndex(null);
      } else {
        setReviews([...reviews, newReview]);
      }
      setReview('');
      setRating(0);
    } else {
      alert('Please provide a rating/Review before submitting your review.');
    }
  };

  const handleEdit = (index) => {
    setReview(reviews[index].text);
    setRating(reviews[index].rating);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    setReviews(reviews.filter((_, i) => i !== index));
  };

  const renderStars = (selectedRating, onClick) => {
    return (
      <div className="star-rating">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={star <= selectedRating ? 'star selected' : 'star'}
            onClick={() => onClick(star)}
          >
            ★
          </span>
        ))}
      </div>
    );
  };

  return (
    <div className="movie-details">
      <img src={movie.Poster} alt={movie.Title} />
      <div className="movie-info">
        <h2>{movie.Title}</h2>
        <p>{movie.Description}</p>

        <div className="review-container">
          <h3>Leave a Review:</h3>
          <form onSubmit={handleReviewSubmit}>
            <textarea
              className="review"
              value={review}
              onChange={(e) => setReview(e.target.value)}
              placeholder="Write your review here"
            />
            {renderStars(rating, setRating)}
            <button type="submit">
              {editingIndex !== null ? 'Update Review' : 'Submit Review'}
            </button>
          </form>
        </div>

        <div className="view-review">
          <h3>Reviews:</h3>
          <ul>
            {reviews.map((r, index) => (
              <li key={index}>
                <div className="review-text">{r.text}</div>
                <div className="review-rating">
                  {renderStars(r.rating, () => {})}
                </div>
                <div className="buttons1">
                  <button onClick={() => handleEdit(index)}>Edit</button>
                  <button onClick={() => handleDelete(index)}>Delete</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
