import { useRouter } from "next/router";
import React from "react";

function CustomReiview() {
  const router = useRouter(); // returns a object obsly...
  const carReview = router.query;
  console.log(carReview);
  return (
    <div>
      <h1>
        Hello world, the car is a great car BTW,{carReview.carsName} /{" "}
        {carReview.carReview}
      </h1>
    </div>
  );
}

export default CustomReiview;

// Use the useRouter hook to get the url using the .query method...
