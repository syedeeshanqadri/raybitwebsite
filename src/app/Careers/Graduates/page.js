// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { useState } from "react";
// import { Search, SlidersHorizontal } from "lucide-react";
// import { jobs } from "./dummyData";
// import CareerHero from "@/app/components/CareerHero";

// export default function Graduates() {
//   const [search, setSearch] = useState("");

//   const filteredJobs = jobs.filter((job) =>
//     job.title.toLowerCase().includes(search.toLowerCase())
//   );

//   const jobsPerPage = 4;
//   const [currentPage, setCurrentPage] = useState(1);

//   // Pagination logic
//   const indexOfLastJob = currentPage * jobsPerPage;
//   const indexOfFirstJob = indexOfLastJob - jobsPerPage;
//   const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);

//   const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

//   return (
//     <>
//       <CareerHero />

//       {/* jobs */}

//       <div className="mb-8">
//         <div className="pt-4 pb-4 px-6 md:px-20 lg:px-[95px] xl:container xl:mx-auto bg-[#F2F3F4] font-poppins mb-10">
//           <h1 className="text-[45px] font-semibold text-primary ">
//             Jobs in Graduates
//           </h1>
//         </div>

//         <div className="xl:px-[180px]">
//           {/* Description */}
//           <p className="mb-6 text-center text-[20px] text-[#5F5F5F]">
//             At Raybit Technologies, we believe innovation begins with
//             opportunity. We re passionate about welcoming fresh graduates who
//             are ready to learn, grow, and shape the future of technology with
//             us. Our workplace is built on collaboration, creativity, and
//             continuous learning—because your first step deserves the right
//             foundation.
//             <br />
//             <br />
//             Step into your future with Raybit—where fresh ideas are always
//             welcome.
//           </p>

//           {/* Search Bar */}
//           <div className="relative mb-6">
//             {/* Info line */}
//             <p className=" text-[16px] mb-3">
//               Showing {filteredJobs.length === 0 ? 0 : indexOfFirstJob + 1} to{" "}
//               {Math.min(indexOfLastJob, filteredJobs.length)} of{" "}
//               {filteredJobs.length} matching jobs
//             </p>
//             <div className="flex items-center border border-primary rounded-[15px] overflow-hidden bg-white">
//               {/* Search Icon */}
//               <div className="pl-4 pr-2 text-[#5F5F5F]">
//                 <Search className="w-7 h-7" />
//               </div>

//               {/* Input */}
//               <input
//                 type="text"
//                 placeholder="Search job"
//                 className="w-full py-4 px-2 outline-none bg-transparent placeholder:text-[#5F5F5F]"
//                 value={search}
//                 onChange={(e) => {
//                   setSearch(e.target.value);
//                   setCurrentPage(1); // reset to page 1 on new search
//                 }}
//               />

//               {/* Filter Icon */}
//               <button
//                 className="px-4 py-3 border-l border-primary hover:bg-green-100 transition"
//                 onClick={() => {
//                   console.log("Filtering with:", search);
//                 }}
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="30"
//                   height="30"
//                   viewBox="0 0 24 24"
//                   className="rotate-90"
//                 >
//                   <g
//                     fill="none"
//                     stroke="#5F5F5F"
//                     strokeLinecap="round"
//                     strokeWidth="1"
//                   >
//                     <path d="M5 12V4m14 16v-3M5 20v-4m14-3V4m-7 3V4m0 16v-9" />
//                     <circle cx="5" cy="14" r="2" />
//                     <circle cx="12" cy="9" r="2" />
//                     <circle cx="19" cy="15" r="2" />
//                   </g>
//                 </svg>
//               </button>
//             </div>
//           </div>

//           {/* Job Cards */}
//           <div className="space-y-5">
//             {currentJobs.map((job) => (
//               <Link
//                 href={`/Careers/Graduates/${job.id}`}
//                 key={job.id}
//                 className="block border border-[#D6D6D6] p-4 hover:shadow"
//               >
//                 <h2 className="text-primary font-medium text-[18px]">
//                   {job.title}
//                 </h2>
//                 <p className="text-[#212529] pb-3">{job.tags.join(" , ")}</p>
//               </Link>
//             ))}

//             {filteredJobs.length === 0 && (
//               <p className="text-gray-500 text-center">No jobs found.</p>
//             )}
//           </div>

//           {/* Pagination */}
//           {totalPages > 1 && (
//             <div className="flex justify-center items-center gap-3 mt-8">
//               {/* Previous */}
//               <button
//                 disabled={currentPage === 1}
//                 onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
//                 className={`w-9 h-9 rounded-full flex items-center justify-center border text-gray-600 hover:bg-gray-100 ${
//                   currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
//                 }`}
//               >
//                 &lt;
//               </button>

//               {/* Page Numbers */}
//               {Array.from({ length: totalPages }, (_, i) => i + 1).map(
//                 (page) => (
//                   <button
//                     key={page}
//                     onClick={() => setCurrentPage(page)}
//                     className={`w-9 h-9 rounded-full flex items-center justify-center border text-sm font-medium ${
//                       currentPage === page
//                         ? "bg-primary text-white"
//                         : "text-gray-600 hover:bg-gray-100"
//                     }`}
//                   >
//                     {String(page).padStart(2, "0")}
//                   </button>
//                 )
//               )}

//               {/* Next */}
//               <button
//                 disabled={currentPage === totalPages}
//                 onClick={() =>
//                   setCurrentPage((prev) => Math.min(prev + 1, totalPages))
//                 }
//                 className={`w-9 h-9 rounded-full flex items-center justify-center border text-gray-600 hover:bg-gray-100 ${
//                   currentPage === totalPages
//                     ? "opacity-50 cursor-not-allowed"
//                     : ""
//                 }`}
//               >
//                 &gt;
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </>
//   );
// }

// app/Careers/Graduates/page.js
import JobListPage from "@/app/components/JobListPage";
import CareerHero from "@/app/components/CareerHero";
import { jobs } from "./dummyData";

export default function Graduates() {
  return (
    <>
      <CareerHero />
      <JobListPage
        title="Jobs in Graduates"
        jobs={jobs}
        basePath="/Careers/Graduates"
      />
    </>
  );
}
