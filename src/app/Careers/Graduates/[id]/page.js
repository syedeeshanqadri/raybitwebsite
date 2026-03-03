// "use client";

// import { useParams } from "next/navigation";
// import Link from "next/link";
// import CareerHero from "@/app/components/CareerHero";
// import Image from "next/image";

// import { jobs } from "../dummyData";

// export default function JobDetails() {
//   const params = useParams();
//   const id = params.id;

//   const job = jobs.find((j) => j.id === parseInt(id));

//   return (
//     <>
//       <CareerHero />

//       <div className="pt-4 pb-4 px-6 md:px-20 lg:px-[95px] xl:container xl:mx-auto bg-[#F2F3F4] font-poppins mb-10 flex justify-between">
//         <h1 className="text-[45px] font-semibold text-primary">{job.title}</h1>

//         <button className="bg-primary text-white md:px-9 px-3 md:py-3 py-1 rounded-md flex items-center  my-3">
//           Apply Now
//         </button>
//       </div>
//       <div className="pt-4 pb-10 px-6 md:px-20 lg:px-[95px] xl:container xl:mx-auto font-poppins text-[#2B2B2B]">
//         {/* Job Details & Description */}
//         <div className="flex flex-col md:flex-row mb-10">
//           {/* LEFT: Job Details */}
//           <div className="md:w-[40%] w-full">
//             <h3 className="font-[400] text-[24px] mb-4">Job details</h3>
//             <div className="space-y-4 text-[16px]">
//               <p className="text-[#5F5F5F] text-[20px] pb-4">
//                 <span className="font-[400] text-[#2B2B2B] text-[24px]">
//                   Work Location
//                 </span>
//                 <br />
//                 {job.location}
//               </p>
//               <p className="text-[#5F5F5F] text-[20px] pb-4">
//                 <span className="font-[400] text-[#2B2B2B] text-[24px]">
//                   State / Region
//                 </span>
//                 <br />
//                 {job.region}
//               </p>
//               <p className="text-[#5F5F5F] text-[20px] pb-4">
//                 <span className="font-[400] text-[#2B2B2B] text-[24px] pb-1">
//                   Country
//                 </span>
//                 <br />
//                 {job.country}
//               </p>
//               <p className="text-[#5F5F5F] text-[20px]">
//                 <span className="font-[400] text-[#2B2B2B] text-[24px] ">
//                   Company
//                 </span>
//                 <br />
//                 {job.company}
//               </p>
//             </div>
//           </div>

//           {/* RIGHT: Job Description + Skills + Attributes + Button */}
//           <div className=" w-full md:w-[60%]">
//             {/* Job Description */}
//             <h3 className="font-[400] text-[24px] mb-4">Job description</h3>
//             <p className="mb-6 text-[#5F5F5F]">Role — {job.title}</p>
//             <p className="mb-6 text-[#5F5F5F]">
//               Technology — {job.tags.join(" , ")}
//             </p>
//             <p className="mb-6 text-[#5F5F5F]">{job.description}</p>

//             <h4 className="font-[400] text-[24px] mb-2">Your Role</h4>
//             <p className="mb-6 text-[#5F5F5F]">{job.role}</p>

//             {/* Required Skills */}
//             <h3 className="font-[500] text-[24px] mb-4">Required Skills</h3>
//             <ul className="list-disc ml-6 text-[15px] leading-7 text-[#5F5F5F] mb-8">
//               {job.skills.map((skill, idx) => (
//                 <li key={idx}>{skill}</li>
//               ))}
//             </ul>

//             {/* Personal Attributes */}
//             <h3 className="font-[500] text-[24px] mb-4">Personal Attributes</h3>
//             <ul className="list-disc ml-6 text-[15px] leading-7 text-[#5F5F5F] mb-8">
//               {job.attributes.map((attr, idx) => (
//                 <li key={idx}>{attr}</li>
//               ))}
//             </ul>

//             {/* Apply Now Button */}
//             {/* <button className="bg-primary text-white font-medium px-6 py-3 rounded-md hover:bg-green-700 transition">
//               Apply Now
//             </button> */}
//             <Link
//               href={{
//                 pathname: `/Careers/Graduates/${job.id}/privacy`,
//                 query: { title: job.title },
//               }}
//             >
//               <button className="bg-primary text-white font-medium px-6 py-3 rounded-md hover:bg-green-700 transition">
//                 Apply Now
//               </button>
//             </Link>

//             {/* Similar Jobs (Full Width Below) */}
//             <div className="mt-12">
//               <h3 className="font-[500] text-[24px] mb-4">Similar jobs</h3>
//               <div className="space-y-3">
//                 {jobs
//                   .filter((j) => j.id !== job.id)
//                   .map((j) => (
//                     <Link
//                       href={`/Careers/Graduates/${j.id}`}
//                       key={j.id}
//                       className="block border border-gray-200 rounded-md p-4 hover:shadow transition"
//                     >
//                       <h4 className="text-green-600 font-semibold text-[16px]">
//                         {j.title}
//                       </h4>
//                       <p className="text-gray-600">{j.tags?.join(" , ")}</p>
//                     </Link>
//                   ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

"use client";

import { useParams } from "next/navigation";
import CareerHero from "@/app/components/CareerHero";
import JobDetails from "@/app/components/JobDetails";
import { jobs } from "../dummyData";

export default function GraduateJobPage() {
  const params = useParams();
  const id = params.id;

  const job = jobs.find((j) => j.id === parseInt(id));

  return (
    <>
      <CareerHero />
      <JobDetails job={job} jobs={jobs} type="Graduates" />
    </>
  );
}
