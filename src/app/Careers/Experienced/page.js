import JobListPage from "@/app/components/JobListPage";
import CareerHero from "@/app/components/CareerHero";
import { jobs } from "./dummyData";

export default function Graduates() {
  return (
    <>
      <CareerHero />
      <JobListPage
        title="Jobs For Experienced"
        jobs={jobs}
        basePath="/Careers/Experienced"
      />
    </>
  );
}
