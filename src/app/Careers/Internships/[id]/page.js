"use client";

import { useParams } from "next/navigation";
import CareerHero from "@/app/components/CareerHero";
import JobDetails from "@/app/components/JobDetails";
import { jobs } from "../dummyData";

export default function InternshipJobPage() {
  const params = useParams();
  const id = params.id;

  const job = jobs.find((j) => j.id === parseInt(id));

  return (
    <>
      <CareerHero />
      <JobDetails job={job} jobs={jobs} type="Internships" />
    </>
  );
}
