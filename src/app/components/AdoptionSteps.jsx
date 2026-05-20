import React from "react";

const AdoptionSteps = () => {
  return (
    <div>
      <section className="py-20 px-6" style={{ backgroundColor: "#FBF8F3" }}>
        <div className="max-w-5xl mx-auto text-center">
          <span
            className="border rounded-full px-4 py-1 text-xs font-semibold tracking-widest uppercase"
            style={{ borderColor: "#5A8F6E", color: "#5A8F6E" }}
          >
            Simple Process
          </span>

          <h2
            className="text-5xl font-bold mt-6 mb-4"
            style={{ color: "#1A1A1A" }}
          >
            Adopt in{" "}
            <span className="italic font-serif" style={{ color: "#3D6B4F" }}>
              4 easy steps
            </span>
          </h2>

          <p
            className="mb-16 text-base max-w-xl mx-auto"
            style={{ color: "#5A8F6E" }}
          >
            From browsing to bringing them home — we guide you every step of the
            way.
          </p>

          {/* Steps Row */}
          <div className="grid grid-cols-4 gap-0 items-start relative">
            {/* Step 1 */}
            <div className="flex flex-col items-center relative">
              <div className="flex items-center w-full">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold mx-auto z-10"
                  style={{ backgroundColor: "#3D6B4F", color: "#FBF8F3" }}
                >
                  1
                </div>
                <div
                  className="flex-1 border-t-2 border-dashed"
                  style={{ borderColor: "#5A8F6E" }}
                ></div>
              </div>
              <h3
                className="font-bold text-base mt-5 mb-2"
                style={{ color: "#1A1A1A" }}
              >
                Browse & Filter
              </h3>
              <p className="text-sm" style={{ color: "#5A8F6E" }}>
                Search by species, age, size, and temperament to find pets that
                match your lifestyle.
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center relative">
              <div className="flex items-center w-full">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold mx-auto z-10"
                  style={{ backgroundColor: "#3D6B4F", color: "#FBF8F3" }}
                >
                  2
                </div>
                <div
                  className="flex-1 border-t-2 border-dashed"
                  style={{ borderColor: "#5A8F6E" }}
                ></div>
              </div>
              <h3
                className="font-bold text-base mt-5 mb-2"
                style={{ color: "#1A1A1A" }}
              >
                Submit Request
              </h3>
              <p className="text-sm" style={{ color: "#5A8F6E" }}>
                Fill out your adoption profile once and apply to any pet with a
                single click.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center relative">
              <div className="flex items-center w-full">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold mx-auto z-10"
                  style={{ backgroundColor: "#3D6B4F", color: "#FBF8F3" }}
                >
                  3
                </div>
                <div
                  className="flex-1 border-t-2 border-dashed"
                  style={{ borderColor: "#5A8F6E" }}
                ></div>
              </div>
              <h3
                className="font-bold text-base mt-5 mb-2"
                style={{ color: "#1A1A1A" }}
              >
                Meet the Pet
              </h3>
              <p className="text-sm" style={{ color: "#5A8F6E" }}>
                Schedule a visit at the shelter or arrange a virtual
                introduction with the caretaker.
              </p>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col items-center relative">
              <div className="flex items-center w-full">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold mx-auto z-10"
                  style={{ backgroundColor: "#3D6B4F", color: "#FBF8F3" }}
                >
                  4
                </div>
              </div>
              <h3
                className="font-bold text-base mt-5 mb-2"
                style={{ color: "#1A1A1A" }}
              >
                Bring Home
              </h3>
              <p className="text-sm" style={{ color: "#5A8F6E" }}>
                Complete paperwork digitally and take your new companion home
                with a welcome kit.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdoptionSteps;
