import {
  Button,
  FieldError,
  Input,
  Label,
  TextField,
  Select,
  ListBox,
  TextArea,
} from "@heroui/react";
import React from "react";
import { FaGem, FaLocationDot } from "react-icons/fa6";
import { MdHealthAndSafety } from "react-icons/md";
import { PiGenderMaleFill } from "react-icons/pi";
import { TbCoinTakaFilled, TbVaccine } from "react-icons/tb";

const PetDetailsPage = async ({ params }) => {
  const { id } = await params;
  const res = await fetch(`http://localhost:5000/all-pet/${_id}`)
 

  return (
    <div>
      <div className="container mx-auto mt-20 mb-10 grid sm:grid-cols-1 lg:grid-cols-2">
        {/* Left */}
        <div className="card  w-96 shadow-xl border-[#3D6B4F] border-2 w-full">
          {/* <Image src={imageUrl}
             alt="breed"
             width={500}
             height={500}>
             </Image> */}
          <div className="card-body">
            <h2 className="card-title text-xl font-bold">Name</h2>
            <div className="text-gray-500 flex ">
              <p>breed</p>
              <p className="items-center flex">age</p>
              <p className="items-center flex">gender</p>
            </div>
            {/* species and breed */}
            <div className="flex gap-2 ">
              <div className=" bg-[#EBF3EE] shadow-sm p-2 rounded-2xl w-full">
                <h2 className="text-gray-500">Species</h2>
                <p className="text-xl font-bold">Dog</p>
              </div>
              <div className=" bg-[#EBF3EE] shadow-sm p-2 rounded-2xl w-full">
                <h2 className="text-gray-500">Breed</h2>
                <p className="text-xl font-bold">Husky</p>
              </div>
            </div>
            {/* age and gender */}
            <div className="flex gap-2 ">
              <div className=" bg-[#EBF3EE] shadow-sm p-2 rounded-2xl w-full">
                <h2 className="text-gray-500">Age</h2>
                <p className="text-xl font-bold">7 months</p>
              </div>
              <div className=" bg-[#EBF3EE] shadow-sm p-2 rounded-2xl w-full">
                <h2 className="text-gray-500 flex items-center gap-1">
                  <PiGenderMaleFill />
                  Gender
                </h2>
                <p className="text-xl font-bold flex items-center gap-1">
                  <FaGem />
                  male
                </p>
              </div>
            </div>
            {/* location and fee */}
            <div className="flex gap-2 ">
              <div className=" bg-[#EBF3EE] shadow-sm p-2 rounded-2xl w-full">
                <h2 className="text-gray-500 flex items-center gap-1">
                  <FaLocationDot />
                  Location
                </h2>
                <p className="text-xl font-bold">Dhaka</p>
              </div>
              <div className=" bg-[#EBF3EE] shadow-sm p-2 rounded-2xl w-full">
                <h2 className="text-gray-500 flex items-center gap-1">
                  <TbCoinTakaFilled />
                  Adoption fee
                </h2>
                <p className="text-xl font-bold">30000</p>
              </div>
            </div>
            {/* health and vaccine */}
            <div className="flex gap-2 ">
              <div className=" bg-[#EBF3EE] shadow-sm p-2 rounded-2xl w-full">
                <h2 className="text-gray-500 flex items-center gap-1">
                  <MdHealthAndSafety />
                  Health status
                </h2>
                <p className="text-xl font-bold">Good</p>
              </div>
              <div className=" bg-[#EBF3EE] shadow-sm p-2 rounded-2xl w-full">
                <h2 className="text-gray-500 flex items-center gap-1">
                  <TbVaccine />
                  Vaccine
                </h2>
                <p className="text-xl font-bold">vaccinated</p>
              </div>
            </div>
          </div>
        </div>

        <form className="p-10 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* pet Name */}
            <div className="md:col-span-2">
              <TextField name="petName" isRequired>
                <Label>Pet Name</Label>
                <Input
                  placeholder="petName"
                  className="rounded-2xl bg-gray-100 cursor-default"
                  readOnly
                />
                <FieldError />
              </TextField>
            </div>
            {/* your name */}
           <div className="md:col-span-2">
              <TextField name="Name" isRequired>
                <Label>Your Name</Label>
                <Input
                  placeholder="Name"
                  className="rounded-2xl bg-gray-100 cursor-default"
                  readOnly
                />
                <FieldError />
              </TextField>
            </div>
            {/* email */}
            <div className="md:col-span-2">
              <TextField name="email" type="email" isRequired>
                <Label>Email</Label>
                <Input
                  placeholder="admin12@gmail.com"
                  className="rounded-2xl"
                />
                <FieldError />
              </TextField>
            </div>
            {/* pickup Date */}
            <div className="md:col-span-2">
              <TextField name="Pickup-date" type="date" isRequired>
                <Label>Preferred Pickup Date</Label>
                <Input type="date" className="rounded-2xl" />
                <FieldError />
              </TextField>
            </div>

            {/* Description */}
            <div className="md:col-span-2">
              <TextField name="description" isRequired>
                <Label>Description</Label>
                <TextArea
                  placeholder="Describe ...."
                  className="rounded-3xl"
                />
                <FieldError />
              </TextField>
            </div>
          </div>

          {/* Buttons */}

          <Button className={"bg-[#3D6B4F] w-full shadow-sm"}>Adopt Now</Button>
        </form>
      </div>
    </div>
  );
};

export default PetDetailsPage;
