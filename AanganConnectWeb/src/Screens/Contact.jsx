import React, { useEffect, useRef, useState } from "react";
import contact from "../assets/contact.png";
import bg from '../assets/bg.png'

const Contact = () => {
  const [currentIndiex, setcurrentIndiex] = useState(0)
  const slidesRef = useRef([])
  return (
    <div className="w-full overflow-hidden">
      <div className="w-full p-2 pt-[6vw] relative ">
        <div className="w-full h-full flex absolute z-[-1]">
          <svg
            width="925"
            height="875"
            viewBox="0 0 925 875"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.1" filter="url(#filter0_d_64_9)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4 0H921V867H4V0ZM5.43281 1.54821H117.192V122.309H5.43281V1.54821ZM120.058 1.54821H231.817V122.309H120.058V1.54821ZM346.442 1.54821H234.683V122.309H346.442V1.54821ZM349.308 1.54821H461.067V122.309H349.308V1.54821ZM575.692 1.54821H463.933V122.309H575.692V1.54821ZM578.558 1.54821H690.317V122.309H578.558V1.54821ZM804.942 1.54821H693.183V122.309H804.942V1.54821ZM117.192 125.405H5.43281V246.166H117.192V125.405ZM120.058 125.405H231.817V246.166H120.058V125.405ZM346.442 125.405H234.683V246.166H346.442V125.405ZM349.308 125.405H461.067V246.166H349.308V125.405ZM578.558 125.405H690.317V246.166H578.558V125.405ZM807.808 125.405H919.567V246.166H807.808V125.405ZM117.192 249.262H5.43281V370.023H117.192V249.262ZM346.442 249.262H234.683V370.023H346.442V249.262ZM349.308 249.262H461.067V370.023H349.308V249.262ZM575.692 249.262H463.933V370.023H575.692V249.262ZM578.558 249.262H690.317V370.023H578.558V249.262ZM346.442 373.12H234.683V493.88H346.442V373.12ZM349.308 373.12H461.067V493.88H349.308V373.12ZM578.558 373.12H690.317V493.88H578.558V373.12ZM804.942 373.12H693.183V493.88H804.942V373.12ZM807.808 373.12H919.567V493.88H807.808V373.12ZM117.192 496.977H5.43281V617.737H117.192V496.977ZM120.058 496.977H231.817V617.737H120.058V496.977ZM346.442 496.977H234.683V617.737H346.442V496.977ZM349.308 496.977H461.067V617.737H349.308V496.977ZM575.692 496.977H463.933V617.737H575.692V496.977ZM804.942 496.977H693.183V617.737H804.942V496.977ZM117.192 620.834H5.43281V741.595H117.192V620.834ZM120.058 620.834H231.817V741.595H120.058V620.834ZM349.308 620.834H461.067V741.595H349.308V620.834ZM575.692 620.834H463.933V741.595H575.692V620.834ZM578.558 620.834H690.317V741.595H578.558V620.834ZM804.942 620.834H693.183V741.595H804.942V620.834ZM807.808 620.834H919.567V741.595H807.808V620.834ZM120.058 744.691H231.817V865.452H120.058V744.691ZM346.442 744.691H234.683V865.452H346.442V744.691ZM575.692 744.691H463.933V865.452H575.692V744.691ZM578.558 744.691H690.317V865.452H578.558V744.691Z"
                fill="#FFEA29"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_64_9"
                x="0"
                y="0"
                width="925"
                height="875"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_64_9"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_64_9"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </div>

        {/* Contact Us Section */}
        <div className="w-full px-10 flex h-[85vh] items-center justify-center">
          <div className="w-[50%] h-[25vw] flex items-end flex-col justify-center px-8 rounded-l-3xl shadow-md bg-white">
            <div className="w-full flex gap-4 items-center">
              <img className="w-[10%]" src={contact} alt="Contact Icon" />
              <h1 className="text-5xl font-bold text-[#535353]">
                Talk To <span className="text-[#0086FF]">Us!</span>
              </h1>
            </div>
            <p className="w-[90%] pr-12 text-xl">
              At <span className="font-bold">AanganConnect</span>, we’re here to help. Reach out with your questions, and let us show you how we can enhance your society management experience.
            </p>
          </div>
          <div className="w-[35%] h-full rounded-3xl bg-white p-6 shadow-custom flex flex-col gap-y-[2vw] items-center">
            <div className="w-full">
              <div className="flex gap-4 border-[1px] w-[25vw] border-[#0086FF] items-center rounded-[10px]">
                <svg
                  width="65"
                  height="61"
                  viewBox="0 0 65 61"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 10C0 4.47716 4.47715 0 10 0H64.9078V60.9282H9.99999C4.47715 60.9282 0 56.451 0 50.9282V10Z"
                    fill="#40A4FF"
                  />
                  <path
                    d="M20.2837 16.5014C20.2837 22.7999 25.7441 27.9254 32.4539 27.9254C39.1638 27.9254 44.6242 22.7999 44.6242 16.5014C44.6242 10.203 39.1638 5.07739 32.4539 5.07739C25.7441 5.07739 20.2837 10.203 20.2837 16.5014ZM54.0899 53.3122H56.7944V50.7735C56.7944 40.9768 48.2996 33.0028 37.8629 33.0028H27.045C16.6056 33.0028 8.11353 40.9768 8.11353 50.7735V53.3122H54.0899Z"
                    fill="white"
                  />
                </svg>

                <input
                  className="outline-none text-xl inria"
                  type="text"
                  placeholder="Jhone Doe"
                />
              </div>
            </div>
            <div className="flex gap-4 border-[1px] w-[30vw] border-[#0086FF] items-center rounded-[10px]">
              <svg
                width="65"
                height="62"
                viewBox="0 0 65 62"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 10.0311C0 4.50828 4.47715 0.0311279 10 0.0311279H65V61.0311H10C4.47715 61.0311 0 56.554 0 51.0311V10.0311Z"
                  fill="#40A4FF"
                />
                <path
                  d="M53.75 15.82C53.5439 15.8027 53.3362 15.8027 53.1302 15.82H10.8012C10.5299 15.8234 10.2604 15.8567 10 15.9188L31.8448 33.6863L53.75 15.82Z"
                  fill="white"
                />
                <path
                  d="M56.0672 17.9104L33.8859 35.4469C33.3151 35.8974 32.5428 36.1503 31.7379 36.1503C30.9329 36.1503 30.1607 35.8974 29.5898 35.4469L7.60664 18.0434C7.53906 18.2406 7.50323 18.4438 7.5 18.6481V42.8364C7.5 43.4779 7.82101 44.0932 8.39241 44.5468C8.96381 45.0004 9.73879 45.2552 10.5469 45.2552H53.2031C54.0112 45.2552 54.7862 45.0004 55.3576 44.5468C55.929 44.0932 56.25 43.4779 56.25 42.8364V18.6481C56.2379 18.3962 56.1762 18.1472 56.0672 17.9104ZM12.634 42.8364H10.5164V41.1069L21.5918 32.3871L23.7398 34.0923L12.634 42.8364ZM53.1727 42.8364H51.0398L39.934 34.0923L42.082 32.3871L53.1574 41.1069L53.1727 42.8364Z"
                  fill="white"
                />
              </svg>

              <input
                className="outline-none text-xl inria"
                type="text"
                placeholder="abc9912@gmail.com"
              />
            </div>
            <div className="flex gap-4 border-[1px] w-[30vw] border-[#0086FF] items-center rounded-[10px]">
              <svg
                width="65"
                height="62"
                viewBox="0 0 65 62"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 10.031C0 4.50816 4.47715 0.0310059 10 0.0310059H65V61.031H10C4.47715 61.031 0 56.5539 0 51.031V10.031Z"
                  fill="#40A4FF"
                />
                <path
                  d="M22.0389 27.8134C24.8389 32.9394 29.35 37.1235 34.8528 39.7499L39.1306 35.765C39.6556 35.276 40.4333 35.113 41.1139 35.3303C43.2917 36.0005 45.6444 36.3628 48.0556 36.3628C49.125 36.3628 50 37.1779 50 38.1741V44.4955C50 45.4917 49.125 46.3068 48.0556 46.3068C29.7972 46.3068 15 32.5228 15 15.5147C15 14.5185 15.875 13.7034 16.9444 13.7034H23.75C24.8194 13.7034 25.6944 14.5185 25.6944 15.5147C25.6944 17.7788 26.0833 19.9524 26.8028 21.981C27.0167 22.615 26.8611 23.3214 26.3167 23.8286L22.0389 27.8134Z"
                  fill="white"
                />
              </svg>

              <input
                className="outline-none text-xl inria"
                type="text"
                placeholder="+91 - 9817761746"
              />
            </div>
            <div>
              <textarea
                className="w-[30vw] rounded-[10px] p-3 outline-none inria h-[10vw] border-[1px] border-[#0086FF]"
                name=""
                placeholder="Message"
                id=""
              ></textarea>
            </div>
            <button className="text-2xl flex gap-3 items-center bg-[#0086FF] inria text-white py-2 px-[4vw] rounded-xl">
              Submit{" "}
              <svg
                width="43"
                height="44"
                viewBox="0 0 43 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_0_423)">
                  <path
                    d="M30.6115 14.1734L9.23873 13.2359C8.39593 13.2004 7.55664 13.4206 6.83529 13.8665C6.11395 14.3124 5.54565 14.9622 5.20789 15.7274C4.87013 16.4926 4.77933 17.3359 4.94789 18.1423C5.11644 18.9488 5.53615 19.6791 6.14977 20.2338L12.0178 25.4989C12.1552 25.6282 12.2642 25.7835 12.3386 25.9558C12.4131 26.1282 12.4513 26.3141 12.4512 26.5027L12.26 34.3842C12.2447 35.0541 12.4007 35.7133 12.7136 36.302C13.0265 36.8907 13.4866 37.3902 14.0518 37.755C14.6171 38.1199 15.2697 38.3386 15.9504 38.3912C16.6311 38.4438 17.3182 38.3287 17.9493 38.0564C18.5379 37.7954 19.0624 37.4102 19.4844 36.9288L33.4572 20.729C33.952 20.1526 34.2766 19.4563 34.3947 18.7181C34.5127 17.9798 34.4196 17.2286 34.1258 16.5481C33.832 15.8676 33.349 15.2847 32.7307 14.8645C32.1123 14.4442 31.383 14.203 30.6241 14.1679L30.6115 14.1734ZM31.375 19.0285L17.4021 35.2283C17.2167 35.4365 16.972 35.5857 16.7007 35.6558C16.4294 35.7259 16.1446 35.7136 15.8844 35.6206C15.6242 35.5275 15.401 35.3581 15.2449 35.135C15.0888 34.912 15.0071 34.6461 15.0108 34.3728L15.1894 26.4967C15.1906 26.3921 15.1855 26.2876 15.1741 26.1838L23.8717 22.4282C24.2065 22.2836 24.4719 22.016 24.6095 21.6842C24.7471 21.3524 24.7456 20.9837 24.6055 20.659C24.4653 20.3344 24.1978 20.0804 23.862 19.9531C23.5261 19.8258 23.1493 19.8354 22.8146 19.98L14.117 23.7356C14.0492 23.6562 13.9767 23.5808 13.8997 23.5099L8.04435 18.2393C7.84289 18.0546 7.7053 17.8128 7.65003 17.5462C7.59476 17.2797 7.62445 17.0011 7.73511 16.7479C7.84578 16.4947 8.03213 16.2789 8.26918 16.1295C8.50623 15.9801 8.78265 15.9043 9.06138 15.9121L30.4341 16.8496C30.6853 16.863 30.9262 16.9442 31.1304 17.0841C31.3345 17.224 31.494 17.4172 31.5913 17.6425C31.6886 17.8678 31.7199 18.1164 31.6817 18.3609C31.6435 18.6055 31.5374 18.8365 31.375 19.0285Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_0_423">
                    <rect
                      width="33"
                      height="32"
                      fill="white"
                      transform="translate(0.00927734 13.8518) rotate(-23.3547)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="w-full h-[30vh] bg-[#40A4FF]  gap-4 mt-8 flex items-center px-12">
        <div>
          <h1 className="text-3xl inria  font-bold text-white">
            Stay Connected with AanganConnect!
          </h1>
          <p className="text-xl inria text-white font-lighter">
            Subscribe to our newsletter and be the first to know about the
            latest updates, features, and tips for simplifying your society
            management.
          </p>
        </div>
        <div className="flex gap-3 p-3 bg-white rounded-[17px]">
          <input
            className="text-sm outline-none w-[20vw] placeholder:text-[#8B8B8B]"
            type="text"
            placeholder="badgujjar9991@gmail.com"
          />
          <button className="bg-[#0086FF] text-white py-2 px-5 text-sm rounded-md">
            Subscribe
          </button>
        </div>
      </div>
      <div className="w-full h-screen flex flex-col justify-center items-center gap-y-8">
        <h1 className="lato font-bold text-5xl text-[#525252]">
          What Our Clients Say About Us
        </h1>
        <div className="flex gap-8">
          <div className="w-[25vw] scale-[.8] h-[28vw] px-3 bg-white rounded-xl shadow-2xl shadow-zinc-400 flex flex-col justify-center items-center">
            <div className="w-[90%] flex gap-3 justify-center items-center">
              <div className="w-[5vw] h-[5vw] rounded-full overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src="https://i.pinimg.com/736x/97/c2/cc/97c2cc6b1c28d098d196a67d15f98fe0.jpg"
                  alt="Testimonial"
                />
              </div>
              <div className="w-[70%] flex flex-col gap-y-1">
                <h1 className="lato font-bold text-2xl">Leo</h1>
                <div className="w-full flex justify-between">
                  <h1 className="lato">Lead Designer</h1>
                  <svg
                    width="126"
                    height="22"
                    viewBox="0 0 126 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M36.9999 1.83331L39.8324 7.57165L46.1666 8.49748L41.5833 12.9616L42.6649 19.2683L36.9999 16.2891L31.3349 19.2683L32.4166 12.9616L27.8333 8.49748L34.1674 7.57165L36.9999 1.83331Z"
                      fill="#FFA033"
                      stroke="#FFA033"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10.9999 1.83331L13.8324 7.57165L20.1666 8.49748L15.5833 12.9616L16.6649 19.2683L10.9999 16.2891L5.33492 19.2683L6.41659 12.9616L1.83325 8.49748L8.16742 7.57165L10.9999 1.83331Z"
                      fill="#FFA033"
                      stroke="#FFA033"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M62.9999 1.83331L65.8324 7.57165L72.1666 8.49748L67.5833 12.9616L68.6649 19.2683L62.9999 16.2891L57.3349 19.2683L58.4166 12.9616L53.8333 8.49748L60.1674 7.57165L62.9999 1.83331Z"
                      fill="#FFA033"
                      stroke="#FFA033"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M88.9999 1.83331L91.8324 7.57165L98.1666 8.49748L93.5833 12.9616L94.6649 19.2683L88.9999 16.2891L83.3349 19.2683L84.4166 12.9616L79.8333 8.49748L86.1674 7.57165L88.9999 1.83331Z"
                      fill="#FFA033"
                      stroke="#FFA033"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M115 1.83331L117.832 7.57165L124.167 8.49748L119.583 12.9616L120.665 19.2683L115 16.2891L109.335 19.2683L110.417 12.9616L105.833 8.49748L112.167 7.57165L115 1.83331Z"
                      stroke="#FFA033"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <h1 className="lato font-bold text-xl mt-5">
              It was a very good experience
            </h1>
            <p className="w-[95%] text-center mt-8 lato">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
              nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed
              magna eget nibh in turpis. Consequat duis diam lacus arcu.
              Faucibus venenatis felis id augue sit cursus pellentesque enim
              arcu. Elementum felis magna pretium in tincidunt. Suspendisse sed
              magna eget nibh in turpis. Consequat duis diam lacus arcu.
            </p>
          </div>
          <div className="w-[25vw] h-[28vw] px-3 bg-white rounded-xl shadow-2xl shadow-zinc-400 flex flex-col justify-center items-center">
            <div className="w-[90%] flex gap-3 justify-center items-center">
              <div className="w-[5vw] h-[5vw] rounded-full overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src="https://s3-alpha-sig.figma.com/img/7c6a/7590/5862c36ee00e6b33d1f80a861a554866?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cPgdHtEtsZA8hnfyGbUVpbOZhhryC4M9jsxyPuXxpTGv5CebqUMjKrsTARtXxsgO~LG8vt~NuDqucGCLy5kIFLpSVV1AxxukyDvwOU~VoPgh6gRUJGb8kWStgGWXLBWKAbR4jhs2cZi7NAYqZnYSaRod5aO87EZgAyrvn5AdWxH5pz5941jvYOT0PIQq07TIkcF8eF7qz3AkU-7xTnzhlDwBwf5W9TG~3OsbfdkePDj-G5LxzJWhBL4Vgj7mNh9LECzvhzYNFEnNrhPitc2-VPyhIlubT30opwpJYuN8SNqWWJDDkOQ4zRVkk-fZZYujugYtNVQQtiT-p7prKPUauQ__"
                  alt=""
                />
              </div>
              <div className="w-[70%] flex flex-col gap-y-1">
                <h1 className="lato font-bold text-2xl">Leo</h1>
                <div className="w-full flex justify-between">
                  <h1 className="lato">Lead Designer</h1>
                  <svg
                    width="126"
                    height="22"
                    viewBox="0 0 126 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M36.9999 1.83331L39.8324 7.57165L46.1666 8.49748L41.5833 12.9616L42.6649 19.2683L36.9999 16.2891L31.3349 19.2683L32.4166 12.9616L27.8333 8.49748L34.1674 7.57165L36.9999 1.83331Z"
                      fill="#FFA033"
                      stroke="#FFA033"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10.9999 1.83331L13.8324 7.57165L20.1666 8.49748L15.5833 12.9616L16.6649 19.2683L10.9999 16.2891L5.33492 19.2683L6.41659 12.9616L1.83325 8.49748L8.16742 7.57165L10.9999 1.83331Z"
                      fill="#FFA033"
                      stroke="#FFA033"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M62.9999 1.83331L65.8324 7.57165L72.1666 8.49748L67.5833 12.9616L68.6649 19.2683L62.9999 16.2891L57.3349 19.2683L58.4166 12.9616L53.8333 8.49748L60.1674 7.57165L62.9999 1.83331Z"
                      fill="#FFA033"
                      stroke="#FFA033"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M88.9999 1.83331L91.8324 7.57165L98.1666 8.49748L93.5833 12.9616L94.6649 19.2683L88.9999 16.2891L83.3349 19.2683L84.4166 12.9616L79.8333 8.49748L86.1674 7.57165L88.9999 1.83331Z"
                      fill="#FFA033"
                      stroke="#FFA033"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M115 1.83331L117.832 7.57165L124.167 8.49748L119.583 12.9616L120.665 19.2683L115 16.2891L109.335 19.2683L110.417 12.9616L105.833 8.49748L112.167 7.57165L115 1.83331Z"
                      stroke="#FFA033"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <h1 className="lato font-bold text-xl mt-5">
              It was a very good experience
            </h1>
            <p className="w-[95%] text-center mt-8 lato">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
              nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed
              magna eget nibh in turpis. Consequat duis diam lacus arcu.
              Faucibus venenatis felis id augue sit cursus pellentesque enim
              arcu. Elementum felis magna pretium in tincidunt. Suspendisse sed
              magna eget nibh in turpis. Consequat duis diam lacus arcu.
            </p>
          </div>
          <div className="w-[25vw] scale-[.8] h-[28vw] px-3 bg-white rounded-xl shadow-2xl shadow-zinc-400 flex flex-col justify-center items-center">
            <div className="w-[90%] flex gap-3 justify-center items-center">
              <div className="w-[5vw] h-[5vw] rounded-full overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src="https://s3-alpha-sig.figma.com/img/7c6a/7590/5862c36ee00e6b33d1f80a861a554866?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cPgdHtEtsZA8hnfyGbUVpbOZhhryC4M9jsxyPuXxpTGv5CebqUMjKrsTARtXxsgO~LG8vt~NuDqucGCLy5kIFLpSVV1AxxukyDvwOU~VoPgh6gRUJGb8kWStgGWXLBWKAbR4jhs2cZi7NAYqZnYSaRod5aO87EZgAyrvn5AdWxH5pz5941jvYOT0PIQq07TIkcF8eF7qz3AkU-7xTnzhlDwBwf5W9TG~3OsbfdkePDj-G5LxzJWhBL4Vgj7mNh9LECzvhzYNFEnNrhPitc2-VPyhIlubT30opwpJYuN8SNqWWJDDkOQ4zRVkk-fZZYujugYtNVQQtiT-p7prKPUauQ__"
                  alt=""
                />
              </div>
              <div className="w-[70%] flex flex-col gap-y-1">
                <h1 className="lato font-bold text-2xl">Leo</h1>
                <div className="w-full flex justify-between">
                  <h1 className="lato">Lead Designer</h1>
                  <svg
                    width="126"
                    height="22"
                    viewBox="0 0 126 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M36.9999 1.83331L39.8324 7.57165L46.1666 8.49748L41.5833 12.9616L42.6649 19.2683L36.9999 16.2891L31.3349 19.2683L32.4166 12.9616L27.8333 8.49748L34.1674 7.57165L36.9999 1.83331Z"
                      fill="#FFA033"
                      stroke="#FFA033"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10.9999 1.83331L13.8324 7.57165L20.1666 8.49748L15.5833 12.9616L16.6649 19.2683L10.9999 16.2891L5.33492 19.2683L6.41659 12.9616L1.83325 8.49748L8.16742 7.57165L10.9999 1.83331Z"
                      fill="#FFA033"
                      stroke="#FFA033"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M62.9999 1.83331L65.8324 7.57165L72.1666 8.49748L67.5833 12.9616L68.6649 19.2683L62.9999 16.2891L57.3349 19.2683L58.4166 12.9616L53.8333 8.49748L60.1674 7.57165L62.9999 1.83331Z"
                      fill="#FFA033"
                      stroke="#FFA033"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M88.9999 1.83331L91.8324 7.57165L98.1666 8.49748L93.5833 12.9616L94.6649 19.2683L88.9999 16.2891L83.3349 19.2683L84.4166 12.9616L79.8333 8.49748L86.1674 7.57165L88.9999 1.83331Z"
                      fill="#FFA033"
                      stroke="#FFA033"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M115 1.83331L117.832 7.57165L124.167 8.49748L119.583 12.9616L120.665 19.2683L115 16.2891L109.335 19.2683L110.417 12.9616L105.833 8.49748L112.167 7.57165L115 1.83331Z"
                      stroke="#FFA033"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <h1 className="lato font-bold text-xl mt-5">
              It was a very good experience
            </h1>
            <p className="w-[95%] text-center mt-8 lato">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
              nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed
              magna eget nibh in turpis. Consequat duis diam lacus arcu.
              Faucibus venenatis felis id augue sit cursus pellentesque enim
              arcu. Elementum felis magna pretium in tincidunt. Suspendisse sed
              magna eget nibh in turpis. Consequat duis diam lacus arcu.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
