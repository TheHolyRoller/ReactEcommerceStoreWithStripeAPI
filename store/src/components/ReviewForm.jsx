/** 


Okay so it's giving some errors that I don't know how to fix. 

So I think the main proirity it to get the old chat app 

that I made a while back and get that working. 


Then once that is working I can improve the GUI and user input form. 

Then I can add in extra functionality and I can also add in the example features. 

Then that's most of the work done. 








*/






// Import React, firebase and bootstrap
import React, { useState, useEffect } from "react";
import firebase from "firebase/app";
import "firebase/database";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Form, Button } from "react-bootstrap";

// Initialize firebase with your project and database details
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  databaseURL: "https://cloud-messaging.firebaseio.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

firebase.initializeApp(firebaseConfig);

// Create a component for the review form
const ReviewForm = () => {
  // Use state hooks to store the input values
  const [name, setName] = useState("");
  const [rating, setRating] = useState(1);
  const [comment, setComment] = useState("");

  // Handle the form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default behavior of reloading the page
    // Create a reference to the database
    const db = firebase.database();
    // Push a new object to the reviews node with the input values
    db.ref("reviews").push({
      name: name,
      rating: rating,
      comment: comment,
    });
    // Clear the input fields
    setName("");
    setRating(1);
    setComment("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Rating</Form.Label>
        <Form.Control
          as="select"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          required
        >
          <option value={1}>1 star</option>
          <option value={2}>2 stars</option>
          <option value={3}>3 stars</option>
          <option value={4}>4 stars</option>
          <option value={5}>5 stars</option>
        </Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Label>Comment</Form.Label>
        <Form.Control
          as="textarea"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
        />
      </Form.Group>
      <Button type="submit">Submit</Button>
    </Form>
  );
};

// Create a component for the review card
const ReviewCard = ({ review }) => {
  // Destructure the review object into its properties
  const { name, rating, comment } = review;
  // Return a card element with the review data
  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle>{rating} stars</Card.Subtitle>
        <Card.Text>{comment}</Card.Text>
      </Card.Body>
    </Card>
  );
};

// Create a component for the main app
const App = () => {
  // Use state hooks to store the reviews array
  const [reviews, setReviews] = useState([]);

  // Use effect hooks to fetch the reviews from the database once the component mounts
  useEffect(() => {
    // Create a reference to the database
    const db = firebase.database();
    // Listen for changes in the reviews node and update the state accordingly
    db.ref("reviews").on("value", (snapshot) => {
      // Convert the snapshot into an array of objects
      const reviewsArray = [];
      snapshot.forEach((childSnapshot) => {
        reviewsArray.push(childSnapshot.val());
      });
      // Set the state with the new array
      setReviews(reviewsArray);
    });
  }, []);

  return (
    <div className="container">
      <h1>Customer Feedback Review Program</h1>
      <ReviewForm />
      <h2>Reviews</h2>
      {reviews.length > 0 ? (
        reviews.map((review, index) => (
          <ReviewCard key={index} review={review} />
        ))
      ) : (
        <p>No reviews yet.</p>
      )}
    </div>
  );
};

export default App;
