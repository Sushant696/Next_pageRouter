import React from "react";
import { useRouter } from "next/router";

function Review() {
  const router = useRouter(); // what does the useRouter returns ??
  const review = router.query;
  console.log(router.query.carReview);
  return (
    <div>
      <h1>
        This is the review component you are in
        {router.query.carReview}
        {/* <span className="font-bold">{review}</span> */}
      </h1>
    </div>
  );
}

export default Review;
