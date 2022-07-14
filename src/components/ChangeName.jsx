import { useState } from "react";
import { changeQuantity } from "../utils/wallet";

export default function ChangeQuantity(props) {
  const [quantity, setQuantity] = useState("");

  return (
    <div>
    <div>
    <center>
    <font 
      color="white"
    >
    Goddezz Batch Mint
    <br />
    <img
      src="https://s3.us-west-2.amazonaws.com/henftz.xyz/goddezz/goddezz_transparent-534.webp"
    />
    </font>
    </center>
    </div>
    <div className="flex">  
    <center>
    <input
        type="text"
        name="name"
        placeholder="Number of Mints"
        onChange={(e) => {
          setQuantity(e.target.value);
        }}
        value={quantity}
      />
      <button
        onClick={() => {
          changeQuantity(quantity);
        }}
        className="bg-red-500 px-6 py-3 rounded-sm text-xs font-semibold uppercase text-white cursor-pointer"
      >
        Batch Buy
      </button>
    </center>
    </div>
    </div>
  );
}
