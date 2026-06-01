"use client"

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

  return (
    <div className="overflow-x-auto rounded-xl bg-[#FBF8F3]">
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
              <div className="badge badge-soft badge-success">Success</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default RequestSec;
