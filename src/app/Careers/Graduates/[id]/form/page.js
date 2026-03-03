// "use client";
// import { useSearchParams } from "next/navigation";

// import React from "react";
// import CareerHero from "@/app/components/CareerHero";
// export default function CareerForm() {
//   const searchParams = useSearchParams();
//   const jobTitle = searchParams.get("title");
//   return (
//     <>
//       <CareerHero />

//       <div className="pt-5 pb-7 px-6 md:px-20 lg:px-[95px] xl:container xl:mx-auto bg-[#F2F3F4] font-poppins mb-1">
//         <h1 className="text-[24px] md:text-[32px] lg:text-[48px] font-[300] text-primary mb-2">
//           Applying For
//         </h1>

//         <h2 className="text-[20px] lg:text-[48px] font-semibold text-primary ">
//           {jobTitle}
//         </h2>
//       </div>

//       {/* form */}

//       <div className=" flex items-center justify-center -mt-7  mb-12 flex-col ">
//         <div className="w-full max-w-xl bg-[#FAFAFC] p-8 rounded-md ">
//           <h2 className="text-2xl font-semibold text-[#32264D] mb-6">
//             Please fill in the information below
//           </h2>

//           <form className="space-y-4 font-poppins">
//             {/* Upload Updated Resume */}
//             <div className="pb-3">
//               <label className="block text-[18px] font-[400] mb-2">
//                 Upload Updated Resume
//               </label>
//               <input
//                 type="file"
//                 className="w-full border border-[#D6D6D6] p-3 font-[300] rounded
//     file:mr-4 file:py-0 file:px-2
//     file:rounded file:border-[1px] file:border-primary
//      file:text-[12px] file:bg-[#D6D6D6] file:font-[300]"
//               />
//             </div>

//             {/* Import Profile */}
//             <div className="pb-3">
//               <label className="block text-[18px] font-[400] mb-2">
//                 Import Profile
//               </label>
//               <a
//                 href="https://www.linkedin.com/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-full inline-block text-primary border border-[#D6D6D6] px-4 py-3 rounded text-left text-[13px]"
//               >
//                 Import LinkedIn Profile
//               </a>
//             </div>

//             {/* First Name */}
//             <div className="pb-3">
//               <label className="block text-[18px] font-[400]  mb-2">
//                 First Name
//               </label>
//               <input
//                 type="text"
//                 placeholder="First Name"
//                 className="w-full border border-[#D6D6D6]  p-3 rounded bg-transparent"
//               />
//             </div>

//             {/* Last Name */}
//             <div className="pb-3">
//               <label className="block text-[18px] font-[400] mb-2">
//                 Last Name
//               </label>
//               <input
//                 type="text"
//                 placeholder="Last Name"
//                 className="w-full border border-[#D6D6D6]  p-3 rounded bg-transparent"
//               />
//             </div>

//             {/* Email Address */}
//             <div className="pb-3">
//               <label className="block text-[18px] font-[400]  mb-2">
//                 Email address*
//               </label>
//               <input
//                 type="email"
//                 placeholder="Email"
//                 className="w-full border border-[#D6D6D6]  p-3 rounded bg-transparent"
//                 required
//               />
//             </div>

//             {/* Phone Number */}
//             <div className="pb-3">
//               <label className="block text-[18px] font-[400]  mb-2">
//                 Phone Number
//               </label>
//               <input
//                 type="tel"
//                 placeholder="Phone Number"
//                 className="w-full border border-[#D6D6D6]  p-3 rounded bg-transparent"
//               />
//             </div>

//             {/* Address */}
//             <div className="pb-3">
//               <label className="block text-[18px] font-[400]  mb-2">
//                 Address
//               </label>
//               <input
//                 type="text"
//                 placeholder="Address"
//                 className="w-full border border-[#D6D6D6]  p-3 rounded bg-transparent"
//                 defaultValue="Srinagar"
//               />
//             </div>
//           </form>
//         </div>
//         {/* Submit Button */}
//         <div className="bg-[#F0F0F4] py-8 px-4 w-full max-w-xl border-t-[#D6D6D6] border-t rounded-b-md">
//           <button
//             type="submit"
//             className="w-full bg-primary text-white py-3 rounded "
//           >
//             Submit
//           </button>
//         </div>
//       </div>
//     </>
//   );
// }

import CareerForm from "@/app/components/CareerForm";

export default function GraduateFormPage() {
  return <CareerForm />;
}
