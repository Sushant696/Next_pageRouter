import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div>
      <ul>
        <li>
          <Link href={{
            pathname:"/about",
            // query: {
            //   name :"sushant babu prasai.",
            //   age : '222322'
            // }

          }}>cars</Link>
        </li>
        <li>
          <Link href={"/cars/lambo"}>about</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
  