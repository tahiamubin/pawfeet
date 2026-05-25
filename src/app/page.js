import Image from "next/image";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import { ToastContainer, toast } from "react-toastify";
import { Suspense } from "react";

export default function Home() {
  return (
    <div>
      <Suspense
        fallback={
          <div className="flex justify-center items-center w-full py-10">
            <span className="loading loading-spinner loading-md"></span>
          </div>
        }
      >
        <Banner></Banner>
        <ToastContainer />
      </Suspense>
    </div>
  );
}
