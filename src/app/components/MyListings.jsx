"use client";

import React from "react";

import { GrFormView } from "react-icons/gr";
import DeleteAlertModal from "./DeleteAlertModal";
import RequestCheck from "./RequestCheck";
import Image from "next/image";
import { authClient } from "@/lib/auth-client";
import EditPetInfo from "./EditPetInfo";
import { useRouter } from "next/navigation";
import { Router } from "next/router";
import Link from "next/link";

const MyListings = ({ pets }) => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const {
    _id: petId,
    petName,
    breed,
    species,
    gender,
    age,
    health,
    fee,
    location,
    imageUrl,
    vaccine,
    description,
  } = pets;

  const handleListings = async () => {
    const UserListData = {
      userName: user?.name,
      userEmail: user?.email,
      userImage: user?.image,
      petId,
      petName,
      breed,
      species,
      gender,
      age,
      health,
      fee,
      location,
      imageUrl,
      vaccine,
      description,
      // pickupDate,
      requestDate: new Date().toISOString(),
    };
  };

  return (
    <div className="card bg-white w-80 shadow-lg rounded-2xl overflow-hidden border border-[#3D6B4F]">
      <figure className="relative">
        <figure className="relative h-48 w-full">
          <Image
            src={imageUrl}
            alt={breed}
            fill
            className="object-cover"
          />{" "}
        </figure>
        <span className="absolute top-3 right-3 bg-[#3D6B4F] text-white text-xs font-semibold px-3 py-1 rounded-full">
          Available
        </span>
      </figure>

      <div className="card-body p-4">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="card-title text-[#1A1A1A] text-lg font-bold">
              {petName}
            </h2>
            <p className="text-[#5C5C5C] text-xs mt-0.5">
              {species} • {breed}
            </p>{" "}
            {/* ✅ */}
          </div>
          <div className="text-right">
            <p className="text-[#C8714A] font-bold text-base">{fee}</p>{" "}
            {/* ✅ */}
            <p className="text-[#5C5C5C] text-xs">1 requests</p>
          </div>
        </div>

        <div className="card-actions mt-4 flex flex-col gap-2">
          <div className="flex gap-2 w-full">
            <Link href={`http://localhost:3000/allpets/${petId}`}>
              <button className="btn btn-sm flex-1 bg-[#3D6B4F] hover:bg-[#5A8F6E] text-white border-[#3a3a3a] rounded-xl gap-1">
                <GrFormView />
                View
              </button>
            </Link>
          </div>

          <div className="flex gap-2 w-full">
            <div>
              <RequestCheck />
            </div>
            <div>
              <EditPetInfo pets={pets}></EditPetInfo>
            </div>
            <div>
              <DeleteAlertModal pets={pets} />{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyListings;
