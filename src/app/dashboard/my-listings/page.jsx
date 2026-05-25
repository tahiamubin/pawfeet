// app/dashboard/my-listings/page.jsx
import MyListings from "@/app/components/MyListings";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import React from "react";

const page = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const userEmail = session?.user?.email;

   const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/all-pet?email=${userEmail}`, {
    cache: "no-store", 
    headers: {
      authorization: `Bearer ${token}`
    }
  });
  const pets = await res.json();

  return (
    <div className="container mx-auto">
      <h1 className="text-5xl font-bold p-8">My Listings</h1>
      {pets.length === 0 ? (
        <p>You have no listings yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-8">
          {pets.map((pet) => (
            <MyListings pets={pet} key={pet._id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default page;
