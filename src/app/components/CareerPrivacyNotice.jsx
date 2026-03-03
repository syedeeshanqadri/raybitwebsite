"use client";

import { useSearchParams, useRouter, useParams } from "next/navigation";
import CareerHero from "@/app/components/CareerHero";

export default function CareerPrivacyNotice({ pathPrefix }) {
  const searchParams = useSearchParams();
  const jobTitle = searchParams.get("title");
  const router = useRouter();
  const { id } = useParams();

  return (
    <>
      <CareerHero />
      <div>
        <div className="pt-4 pb-4 px-6 md:px-20 lg:px-[95px] xl:container xl:mx-auto bg-[#F2F3F4] font-poppins mb-10">
          <h1 className="text-[24px] md:text-[32px] lg:text-[48px] font-[300] text-primary mb-2">
            Applying For
          </h1>

          <h2 className="text-[20px] lg:text-[48px] font-semibold text-primary ">
            {jobTitle}
          </h2>
        </div>

        <div className="pt-4 pb-4 px-6 md:px-20 lg:px-[95px] xl:container xl:mx-auto font-poppins mb-10">
          <h3 className="text-[18px] font-semibold mb-4 text-center">
            Privacy Notice
          </h3>

          <div className="bg-white shadow-lg max-w-3xl mx-auto p-6 overflow-y-auto max-h-[300px] font-[500] text-[#6B6B6B] text-[11px] leading-6 custom-scroll">
            <p>
              Raybit Technologies Privacy Notice
              <br />
              Effective Date: 28th November 2024
              <br />
              Raybit Technologies, its subsidiaries, associates, and affiliated
              companies (collectively referred to as “Raybit”, “us”, “we”) are
              committed to handling your Personal Data in accordance with the
              applicable data privacy laws of your jurisdiction. <br />
              We collect and process your Personal Data when it is required to
              fulfill a contract to which you are a party, or to take necessary
              steps at your request prior to entering a contract, or based on
              your consent where required by data protection laws. If you choose
              not to provide the necessary Personal Data, we may be unable to
              deliver certain services to you.
              <br />
              We process your information in the following scenarios:
              <br />
              • To facilitate recruitment, selection, and related processes.
              <br />
              • To carry out onboarding and other employment-related activities
              if selected.
              <br />
              • To perform background verification.
              <br />
              • To ensure compliance with applicable labor and regulatory laws.
              <br />
              • To contact you for future opportunities that match your profile.
              Available on this site does not mean that the information
              contained in such document has not been modified or superseded by
              events or by a subsequent document or filing. We have no duty or
              policy to update any information or statements contained on this
              site and, therefore, such information or statements should not be
              relied upon as being current as of the date you access this site.
              <br />
              <br />
              <strong>What Personal Information Do We Collect?</strong>
              <br />
              We collect only the data required for our stated purposes.
              Wherever possible, this data is collected directly from you.
            </p>
          </div>

          <div className="flex justify-center">
            <button
              onClick={() =>
                router.push(
                  `/Careers/${pathPrefix}/${id}/form?title=${jobTitle}`
                )
              }
              className="mt-6 bg-primary text-white px-6 py-2 rounded-md transition"
            >
              Proceed
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
