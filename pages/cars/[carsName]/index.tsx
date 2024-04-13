import React from "react";
import { useRouter } from "next/router";

function CarsNam() {
  const router = useRouter();
  const { carsName } = router.query;
  return (
    <div>
      <h1>
        Here is the dynamic route now anything will be rendered here:-
        {carsName}
      </h1>
    </div>
  );
}

export default CarsNam;
