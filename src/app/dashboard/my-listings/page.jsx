import AdoptRequest from "@/app/allpets/[id]/AdoptRequest";
import MyListings from "@/app/components/MyListings";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import React from "react";

const page = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = session?.user;
  const res = await fetch(
    `http://localhost:5000/listing/${encodeURIComponent(user?.email)}`,
  );
  const listings = await res.json();
  console.log(listings);

  return (
    <div className="container mx-auto ">
      <h1 className="text-5xl font-bold p-8 ">My Listings</h1>
      <div className="gap-4 pt-10 pb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {listings.map((listing) => (
          <MyListings listing={listing} key={listing._id}></MyListings>
        ))}
      </div>
    </div>
  );
};

export default page;
