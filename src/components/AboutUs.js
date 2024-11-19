import React, { useState } from "react";

function StarRating({ rating, onRating }) {
  return (
    <div className="star-rating">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={star <= rating ? "star filled" : "star"}
          onClick={() => onRating(star)}
        >
          ★
        </span>
      ))}
    </div>
  );
}

function AboutUs() {
  const [reviews, setReviews] = useState([
    { name: "Person 1", rating: 4, date: "2024-10-03" },
    { name: "Person 2", rating: 3, date: "2024-09-30" },
    { name: "Person 3", rating: 2, date: "2024-09-28" },
  ]);

  // Function to handle rating selection
  const handleRating = (index, newRating) => {
    const updatedReviews = reviews.map((review, i) =>
      i === index ? { ...review, rating: newRating } : review
    );
    setReviews(updatedReviews); // Update state with new ratings
  };

  return (
    <section id="about" className="section">
      <h3>About Us...</h3>
      <p>
        Artisan's Oven is your destination for delightful treats baked fresh
        daily. We pride ourselves in creating the best cakes, pastries, and
        breads using only the finest ingredients.
      </p>
      <table>
        <thead>
          <tr>
            <th>Customer Name</th>
            <th>Ratings</th>
            <th>Date of Review</th>
          </tr>
        </thead>
        <tbody>
          {reviews.map((review, index) => (
            <tr key={index}>
              <td>{review.name}</td>
              <td>
                <StarRating
                  rating={review.rating}
                  onRating={(newRating) => handleRating(index, newRating)}
                />
              </td>
              <td>{review.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default AboutUs;


