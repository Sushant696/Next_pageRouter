import { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
  age: number;
  email: string;
};

const myObj = <Data>{
  name: "sushant babu prasai",
  age: 19,
  email: "Sushantbabu2523@gmail.com",
};

export default function handleUserData(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json(myObj);
}
