import React from "react";
import { FaEdit } from "react-icons/fa";
import { GrFormView } from "react-icons/gr";
import { RiDeleteBin6Line } from "react-icons/ri";
import DeleteAlertModal from "./DeleteAlertModal";
import RequestCheck from "./RequestCheck";

import EditPetInfo from "./EditPetInfo";
import Image from "next/image";
// "_id": "6a0c0f4a27970a1b25e967e4",
// "userName": "Tahia Mubin",
// "userEmail": "tahiamubin07@gmail.com",
// "userImage": "https://lh3.googleusercontent.com/a/ACg8ocLNw9Dfg8qzWgG-SrqxxNM7OuQU2UiJRbej5ka7tI3PpQSKuBj4=s96-c",
// "petName": "Bubby",
// "breed": "Golden Retriever",
// "species": "Dog",
// "gender": "Male",
// "age": "2 years",
// "health": "good",
// "fee": "150",
// "location": "Dhaka",
// "imageUrl": "https://cdn.pixabay.com/photo/2018/03/31/06/31/dog-3277416_960_720.jpg",
// "vaccine": "vaccinated",
// "description": "Buddy is a friendly and energetic Golden

const MyListings = ({ listing }) => {
  const { imageUrl, petName, breed, species, age, fee, _id } = listing;
  return (
    <div className="card  bg-white w-80 shadow-lg rounded-2xl overflow-hidden border border-[#3D6B4F]">
      <figure className="relative">
        <figure className="relative h-48 w-full">
          <Image src={imageUrl} alt={breed} fill className="object-cover" />
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
            </p>
          </div>
          <div className="text-right">
            <p className="text-[#C8714A] font-bold text-base">{fee}</p>
            <p className="text-[#5C5C5C] text-xs">1 requests</p>
          </div>
        </div>

        <div className="card-actions mt-4 flex flex-col gap-2">
          <div className="flex gap-2 w-full">
            <button className="btn btn-sm flex-1 bg-[#3D6B4F] hover:bg-[#5A8F6E] text-white border-[#3a3a3a] rounded-xl gap-1">
              <GrFormView />
              View
            </button>

            {/* edit Information */}

            <button className="btn btn-sm flex-1 bg-[#3D6B4F] hover:bg-[#5A8F6E] text-white border-none rounded-xl gap-1">
              <FaEdit /> Edit
            </button>
            {/* <EditPetInfo></EditPetInfo> */}
          </div>

          <div className="flex gap-2 w-full">
            <div>
              <RequestCheck></RequestCheck>
            </div>
            {/* <button className="btn btn-sm flex-1 bg-[#3D6B4F] hover:bg-[#5A8F6E] text-white  rounded-xl gap-1">
             <RequestCheck></RequestCheck>
            </button> */}

            {/* delete button */}
            <div>
              <DeleteAlertModal listingId={_id}></DeleteAlertModal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyListings;
