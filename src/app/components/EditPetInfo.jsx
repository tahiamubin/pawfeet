"use client";

import { Envelope } from "@gravity-ui/icons";
import {
  FieldError,
  Input,
  Label,
  ListBox,
  TextField,
  Select,
  TextArea,
  Button,
  Modal,
  Surface,
  Form,
} from "@heroui/react";
import React from "react";
import { FaEdit } from "react-icons/fa";

const EditPetInfo = ({ pets }) => {
 
  const {
    _id,
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
  console.log("pet id" , _id)

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const info = Object.fromEntries(formData.entries());
    console.log(info);

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/all-pet/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(info),
    });
    const data = await res.json();
    console.log(data);
  };

  return (
    <Modal>
      <Button
        className="btn btn-sm flex-1 bg-[#3D6B4F] hover:bg-[#5A8F6E] text-white border-none rounded-xl gap-1"
        variant="secondary"
      >
        <FaEdit /> Edit
      </Button>

      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Heading>Edit Form</Modal.Heading>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form onSubmit={onSubmit} className="flex flex-col gap-4">
                  {/* pet name */}
                  <TextField
                    className="w-full"
                    name="petName"
                    type="text"
                    variant="secondary"
                  >
                    <Label>Pet name</Label>
                    <Input placeholder="Enter your name" />
                  </TextField>

                  {/* Breed */}
                  <TextField>
                    <Label>Breed</Label>
                    <Input name="breed" placeholder="Persian" />
                  </TextField>

                  {/* Species */}
                  <Select
                    name="species"
                    className="w-full"
                    placeholder="Select category"
                  >
                    <Label>Species</Label>
                    <Select.Trigger className="rounded-2xl">
                      <Select.Value />
                      <Select.Indicator />
                    </Select.Trigger>
                    <Select.Popover>
                      <ListBox>
                        <ListBox.Item id="Cat" textValue="Cat">
                          Cat
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item id="Dog" textValue="Dog">
                          Dog
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item id="Bird" textValue="Bird">
                          Bird
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item id="Rabbit" textValue="Rabbit">
                          Rabbit
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item id="Others" textValue="Others">
                          Others
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                      </ListBox>
                    </Select.Popover>
                  </Select>

                  {/* Gender */}
                  <TextField name="gender">
                    <Label>Gender</Label>
                    <Input
                      type="text"
                      placeholder="male"
                      className="rounded-2xl"
                    />
                    <FieldError />
                  </TextField>

                  {/* Age */}
                  <TextField name="age">
                    <Label>Age</Label>
                    <Input placeholder="3 years" className="rounded-2xl" />
                    <FieldError />
                  </TextField>
                  <Modal.Footer>
                    <Button slot="close" variant="secondary">
                      Cancel
                    </Button>
                    <Button type="submit"  slot="close" >
                      Edit now
                    </Button>
                  </Modal.Footer>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default EditPetInfo;
