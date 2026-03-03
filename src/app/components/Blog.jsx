import Image from "next/image";

export default function BlogCard({ blog, expanded, onExpand, onCollapse }) {
  return (
    <div
      className={`rounded-[8px] flex flex-col h-full 
    ${expanded ? "bg-transparent py-0 md:py-0" : "bg-[#F2F3F4] py-4 md:py-6"} 
    px-4 md:px-6`}
    >
      {" "}
      <Image
        src={blog.image}
        alt={blog.title}
        width={800}
        height={400}
        className="w-full h-auto rounded-xl"
      />
      <div className="mt-4 flex flex-col justify-between flex-1">
        <div className="space-y-3">
          <div className="flex items-center md:gap-6 gap-[2px] text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#00B470"
                  d="M10.5 7.25a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zm-1 5.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0 3.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0m2.5-2.5a1 1 0 1 0 0-2a1 1 0 0 0 0 2m1 2.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0m2.5-2.5a1 1 0 1 0 0-2a1 1 0 0 0 0 2"
                />
                <path
                  fill="#00B470"
                  fillRule="evenodd"
                  d="M8 3.5a.5.5 0 0 1 .5.5v1h7V4a.5.5 0 0 1 1 0v1.003q.367.003.654.026c.365.03.685.093.981.243a2.5 2.5 0 0 1 1.092 1.093c.151.296.214.616.244.98c.029.355.029.792.029 1.334v7.642c0 .542 0 .98-.029 1.333c-.03.365-.093.685-.244.981a2.5 2.5 0 0 1-1.092 1.092c-.296.151-.616.214-.98.244c-.355.029-.792.029-1.333.029H8.179c-.542 0-.98 0-1.333-.029c-.365-.03-.685-.093-.981-.244a2.5 2.5 0 0 1-1.093-1.092c-.15-.296-.213-.616-.243-.98C4.5 17.3 4.5 16.862 4.5 16.32V8.68c0-.475 0-.868.02-1.197l.009-.136c.03-.365.093-.685.243-.981a2.5 2.5 0 0 1 1.093-1.093c.296-.15.616-.213.98-.243q.289-.023.655-.026V4a.5.5 0 0 1 .5-.5m-.5 3v-.497a9 9 0 0 0-.573.023c-.302.024-.476.07-.608.137a1.5 1.5 0 0 0-.656.656c-.067.132-.113.306-.137.608C5.5 7.736 5.5 8.132 5.5 8.7v.55h13V8.7c0-.568 0-.964-.026-1.273c-.024-.302-.07-.476-.137-.608a1.5 1.5 0 0 0-.656-.656c-.132-.067-.306-.113-.608-.137a9 9 0 0 0-.573-.023V6.5a.5.5 0 0 1-1 0V6h-7v.5a.5.5 0 0 1-1 0m11 3.75h-13v6.05c0 .568 0 .965.026 1.273c.024.302.07.476.137.608a1.5 1.5 0 0 0 .656.656c.132.067.306.113.608.137C7.236 19 7.632 19 8.2 19h7.6c.568 0 .965 0 1.273-.026c.302-.024.476-.07.608-.137a1.5 1.5 0 0 0 .656-.656c.067-.132.113-.306.137-.608c.026-.308.026-.705.026-1.273z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-[12px] font-poppins text-[#5F5F5F]">
                {blog.date}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
              >
                <g fill="none" stroke="#00B470" strokeWidth="1.5">
                  <path
                    strokeLinejoin="round"
                    d="M4 18a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z"
                  />
                  <circle cx="12" cy="7" r="3" />
                </g>
              </svg>
              <span className="text-[12px] font-poppins text-[#5F5F5F]">
                {blog.author}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 1024 1024"
              >
                <path
                  fill="#00B470"
                  d="M573 421c-23.1 0-41 17.9-41 40s17.9 40 41 40c21.1 0 39-17.9 39-40s-17.9-40-39-40m-280 0c-23.1 0-41 17.9-41 40s17.9 40 41 40c21.1 0 39-17.9 39-40s-17.9-40-39-40"
                />
                <path
                  fill="#00B470"
                  d="M894 345c-48.1-66-115.3-110.1-189-130v.1c-17.1-19-36.4-36.5-58-52.1c-163.7-119-393.5-82.7-513 81c-96.3 133-92.2 311.9 6 439l.8 132.6c0 3.2.5 6.4 1.5 9.4c5.3 16.9 23.3 26.2 40.1 20.9L309 806c33.5 11.9 68.1 18.7 102.5 20.6l-.5.4c89.1 64.9 205.9 84.4 313 49l127.1 41.4c3.2 1 6.5 1.6 9.9 1.6c17.7 0 32-14.3 32-32V753c88.1-119.6 90.4-284.9 1-408M323 735l-12-5l-99 31l-1-104l-8-9c-84.6-103.2-90.2-251.9-11-361c96.4-132.2 281.2-161.4 413-66c132.2 96.1 161.5 280.6 66 412c-80.1 109.9-223.5 150.5-348 102m505-17l-8 10l1 104l-98-33l-12 5c-56 20.8-115.7 22.5-171 7l-.2-.1C613.7 788.2 680.7 742.2 729 676c76.4-105.3 88.8-237.6 44.4-350.4l.6.4c23 16.5 44.1 37.1 62 62c72.6 99.6 68.5 235.2-8 330"
                />
                <path
                  fill="#00B470"
                  d="M433 421c-23.1 0-41 17.9-41 40s17.9 40 41 40c21.1 0 39-17.9 39-40s-17.9-40-39-40"
                />
              </svg>
              <span className="text-[#5F5F5F] text-[12px] font-poppins font-[400]">
                Comments ({blog.comments || 0})
              </span>
            </div>
          </div>
          {!expanded && (
            <h2 className="text-2xl font-bold text-gray-800 mt-3 ">
              {blog.title}
            </h2>
          )}
          <p
            className={`text-gray-600 text-[12px]  pt-3  ${
              expanded ? "" : "line-clamp-3"
            }`}
          >
            {blog.para}
          </p>
        </div>
        {!expanded ? (
          <button
            className="text-primary font-medium flex items-center gap-2 hover:underline mt-4"
            onClick={onExpand}
          >
            Read More <span>&#187;</span>
          </button>
        ) : (
          <div className="mt-6">
            <div className="bg-white p-6 rounded-lg shadow border mb-6 ">
              <div className="flex items-start gap-4">
                {/* Quote Icon */}
                <div className="bg-primary w-16 h-16 p-2 rounded-full flex flex-shrink-0 items-center justify-center">
                  <Image
                    src="/images/Group 121.svg"
                    alt="comma"
                    width={40}
                    height={20}
                    className="object-contain"
                  />
                </div>

                <div className="flex flex-col">
                  {/* Testimonial Content */}
                  <p className=" text-[18px] leading-relaxed font-poppins font-[500] ">
                    We develop long-term IT strategies that align with business,
                    ensuring scalability, agility, and future-readiness.
                  </p>
                  {/* Author Info */}
                  <div className="mt-4">
                    <h4 className="text-green-600 font-semibold">
                      {" "}
                      {blog.author}
                    </h4>
                    <p className="text-gray-600 text-sm">Top Author</p>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-[30px] font-poppins font-[600] mb-6">
              Leave a Reply
            </h3>
            {/* Contact Form */}
            <form className="space-y-4 bg-white p-4 rounded-lg shadow py-12 px-8">
              {/* Message Field */}
              <div className="flex flex-col space-y-1">
                <label
                  htmlFor="message"
                  className="font-poppins font-[400] mb-2"
                >
                  Write Your Message here
                </label>
                <textarea
                  id="message"
                  className="w-full border border-[#D6D6D6] p-2 rounded"
                  rows={3}
                  required
                />
              </div>

              {/* Name Field */}
              <div className="flex flex-col space-y-1">
                <label htmlFor="name" className="font-poppins font-[400] mb-2">
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  className="w-full border border-[#D6D6D6] p-2 rounded"
                  required
                />
              </div>

              {/* Email Field */}
              <div className="flex flex-col space-y-1">
                <label htmlFor="email" className="font-poppins font-[400] mb-2">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full border border-[#D6D6D6] p-2 rounded"
                  required
                />
              </div>

              {/*phone */}
              <div className="flex flex-col space-y-1">
                <label
                  htmlFor="number"
                  className="font-poppins font-[400] mb-2"
                >
                  Phone Number
                </label>
                <input
                  id="number"
                  type="tel"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  className="w-full border border-[#D6D6D6] p-2 rounded"
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="mt-10 pt-16">
                <button
                  type="submit"
                  disabled
                  className="bg-primary text-white px-4 py-2 rounded-[8px] w-full cursor-not-allowed "
                >
                  Send Message
                </button>
              </div>
            </form>

            <button
              className="mt-4 text-primary underline"
              onClick={onCollapse}
            >
              Back to Blogs
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
