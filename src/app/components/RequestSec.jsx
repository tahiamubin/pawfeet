"use client"

import toast from "react-hot-toast";

const RequestSec = ({ listing }) => {
   
    
  const {
    imageUrl,
    petName,
    breed,
    species,
    age,
    fee,
    _id,
    requestDate,
    pickupDate,
    status,
  } = listing;
  const handleDelete = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/listing/${_id}`, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
    });
    const data = await res.json();
    console.log(data);
    toast.error("Your request has been deleted");
  };


  return (
    <div className="overflow-x-auto rounded-xl bg-[#FBF8F3] pb-2">
      <table className="table w-full text-white">
        {/* Static column labels in thead */}
        <thead>
          <tr className="text-[#5C5C5C] text-sm font-semibold">
            <th className="bg-[#FBF8F3] text-[#5C5C5C]">Pet Name</th>
            <th className="bg-[#FBF8F3] text-[#5C5C5C]">Request Date</th>
            <th className="bg-[#FBF8F3] text-[#5C5C5C]">Pickup Date</th>
            <th className="bg-[#FBF8F3] text-[#5C5C5C]">Status</th>
            {/* <th className="bg-[#FBF8F3] text-[#5C5C5C] text-right">Action</th> */}
          </tr>
        </thead>

        {/*  Actual data in tbody */}
        <tbody>
          <tr>
            <td className="text-[#5C5C5C]">{petName}</td>
            <td className="text-[#5C5C5C]">
              {requestDate ? new Date(requestDate).toLocaleDateString() : "N/A"}
            </td>
            <td className="text-[#5C5C5C]">
              {pickupDate
                ? new Date(pickupDate).toLocaleDateString()
                : "Not set"}
            </td>
            <td className="text-[#5C5C5C]">{status ?? "Pending"}</td>
            <td className="text-right">
              <div onClick={handleDelete} className="badge badge-soft badge-error">Cancel</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default RequestSec;
