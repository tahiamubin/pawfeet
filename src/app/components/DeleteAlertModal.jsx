"use client";
import { Sparkles } from "@gravity-ui/icons";
import { AlertDialog, Button, Modal } from "@heroui/react";
import React from "react";
import toast from "react-hot-toast";
import { RiDeleteBin6Line } from "react-icons/ri";

const DeleteAlertModal = ({ pets }) => {
  //console.log("Deleting ID:", pets);
  const { _id, petName } = pets;
  const handleDelete = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/all-pet/${_id}`, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
    });
    const data = await res.json();
    console.log(data);
    toast.error("Your pet list has been deleted");
  };
  return (
    <div>
      <AlertDialog>
        <AlertDialog.Trigger>
          <button className="btn btn-sm bg-[#3D6B4F] hover:bg-[#5A8F6E] rounded-xl px-4 text-white">
            <RiDeleteBin6Line />
          </button>
        </AlertDialog.Trigger>
        <AlertDialog.Backdrop>
          <AlertDialog.Container>
            <AlertDialog.Dialog className="sm:max-w-[400px]">
              <AlertDialog.CloseTrigger />
              <AlertDialog.Header>
                <AlertDialog.Icon status="danger" />
                <AlertDialog.Heading>
                  Delete this permanently?
                </AlertDialog.Heading>
              </AlertDialog.Header>
              <AlertDialog.Body>
                <p>
                  This will permanently delete <strong>this pet</strong> and all
                  of its data. This action cannot be undone.
                </p>
              </AlertDialog.Body>
              <AlertDialog.Footer>
                <Button slot="close" variant="tertiary">
                  Cancel
                </Button>
                <Button onClick={handleDelete} slot="close" variant="danger">
                  Delete
                </Button>
              </AlertDialog.Footer>
            </AlertDialog.Dialog>
          </AlertDialog.Container>
        </AlertDialog.Backdrop>
      </AlertDialog>
    </div>
  );
};

export default DeleteAlertModal;
