import React, { useEffect, useState } from "react";

type DataTypes = {
  name: string;
  age: number;
  email: string;
};

function User() {
  const [data, setdata] = useState<DataTypes>();
  useEffect(() => {
    fetch("http://localhost:3000/api/users")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setdata(data);
      });
  }, []);

  return (
    <div>
      <h1>{data?.age}</h1>
    </div>
  );
}

export default User;
