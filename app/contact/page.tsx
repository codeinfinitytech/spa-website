import Button from "@/components/Button";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <section className="">
      <div className="">
        <div className="w-full h-[100%] bg-gray-20 py-24">
          {/* <h1 className='bold-32 md:bold-40 text-center py-12'>Reach out to us</h1> */}
          <h1 className="bold-32 md:bold-40 text-center py-12">Book Now</h1>
        </div>
        <div className="flex flex-col md:flex-row w-full flexCenter">
          <div className="bg-[#FBA88F] w-full md:max-w-[40%]">
            <div className="max-container padding-container py-2">
              <h2 className="bold-32 md:bold-40 py-10">
                We will take care of you!
              </h2>
              <p className="py-2">
                Our treatments are a form of relaxation and enjoyment for the
                body and soul. All services are completed with premium products
                by well-trained, service-oriented staff.
              </p>
              <h3 className="bold-20 md:bold-32 py-4">Get in Touch</h3>
              <p className="regular-16 py-2">
                KK 103 AV, Kimironko <br /> Kigali, Rwanda{" "}
              </p>
              <div className="py-4">
                <span>
                  <b>Phone number:</b> +250 793 901 537
                </span>
                <br />
                <span>
                  <b>Email:</b> cosmasmassagehouseltd@gmail.com
                </span>
              </div>
              <div className="flexEnd py-4">
                <Image
                  src={`/tools.png`}
                  alt="tools"
                  width={300}
                  height={300}
                  className="flexEnd"
                />
              </div>
            </div>
          </div>
          {/* Contact Form */}
          <div className="bg-black/70 text-white w-full md:max-w-[60%] ">
            <div className="max-container padding-container py-10">
              <form action="" method="post" className="">
                <div className="w-full py-2">
                  <label htmlFor="" className="py-2">
                    Name<sub>(required)</sub>
                  </label>
                  <div className="flex gap-4 w-full">
                    <div>
                       <span className="py-2">FirstName</span>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="input w-full"
                      />
                    </div>
                    <div>
                      <span className="py-4">LastName</span>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="input w-full"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label htmlFor="" className="py-2">
                    Email<sub>(required)</sub>
                  </label>
                  <input type="text" className="input" />
                </div>
                <div className="flex flex-col py-2">
                  <label htmlFor="" className="py-2">
                    Phone Number<sub>(required)</sub>
                  </label>
                  <input type="text" className="input" />
                </div>
                <div className="flex flex-col py-2">
                  <label htmlFor="" className="py-2">
                    Select Service<sub>(required)</sub>
                  </label>
                  <select name="" id="" className="input">
                    <option value="">Choose service</option>
                    <option value="">Geothermal Spa</option>
                    <option value="">Baths</option>
                    <option value="">Jacuvva</option>
                    <option value="">Reflexology</option>
                    <option value="">Zero Gravity</option>
                    <option value="">Hot Stone Spa</option>
                  </select>
                </div>
                <div className="flex flex-col py-2">
                  <label htmlFor="" className="py-2">
                    Date<sub>(required)</sub>
                  </label>
                  <input type="date" className="input" />
                </div>
                <div className="py-10">
                  <Button
                    type="submit"
                    title="Book Now"
                    variant="btn_dark_pink"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
