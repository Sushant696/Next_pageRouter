import React from "react";
import { useRouter } from "next/router";
import Couter from "@/components/counter";

function CarsNam() {
  const router = useRouter(); // This is used to get the query params
  const { carsName } = router.query; // from the query we destructured the carsName the folder name or the dymanic routes thing and used down in component..
  return (
    <div>
      <h1>
        Here is the dynamic route now anything will be rendered here:-
        {carsName}
      </h1>
      <Couter />
    </div>
  );
}

export default CarsNam;
