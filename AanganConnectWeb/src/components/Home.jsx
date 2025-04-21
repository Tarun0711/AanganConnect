import React from "react";
import appStore from '../assets/appstore.png'
import playStore from '../assets/play.png'

const Home = () => {
  return (
    <>
    <div className="flex h-[150vh] flex-col">
      <div
        id="home"
        className="w-full p-3 md:h-screen h-screen relative  flex flex-col md:flex-row gap-4 overflow-hidden"
      >
        <div className="w-full h-[40vh] md:h-full md:w-[60%] py-5 md:ml-8 flex flex-col gap-y-3 md:gap-y-[1.5vw] items-center justify-end md:justify-center md:items-start">
          <h1 className="text-4xl md:text-7xl nico text-[#585858]">
            AANGAN <span>CONNECT</span>
          </h1>
          <p className="text-center md:text-left inria text-xl font-semibold md:w-[60%] md:text-2xl">
            <span>Empowering</span> Communities with Smart Society Management
            and <span>Real-Time Connectivity.</span>
          </p>
          <div className="flex gap-4 items-center">
            <button className=" font-bold bg-[#ae1d1d] text-white py-2 px-7 rounded-md">
              Learn More
            </button>
            <button className="text-[#ae1d1d] border-2 border-[#AE1D1D] bg-[#AE1D1D40] py-2 px-6 rounded-md font-bold">
              Schedule a free demo
            </button>
          </div>
        </div>
        <div className="h-full w-full md:w-1/2 flex items-end justify-center">
          <div className="w-full md:w-[40vw] md:h-[38vw] bg-[#FFFFFF87] flex flex-col gap-y-6 rounded-xl p-4 md:p-6">
            <h1 className="text-3xl md:text-4xl tracking-wide font-semibold">
              <span>Features</span> that Empower <br /> Community{" "}
              <span>Living</span>
            </h1>
            <div className="w-full flex gap-3 items-center">
              <div className="w-[6vw] h-[6vw] md:w-[2vw] md:h-[2vw] rounded-full bg-[#84FF5C57]">
                <img
                  className="w-full h-full object-cover object-bottom"
                  src="https://www.freeiconspng.com/thumbs/check-tick-icon/tick-icon-30.png"
                  alt=""
                />
              </div>
              <h1 className="w-full text-xl md:text-xl font-semibold tracking-wide">
                Advanced Role-Based Access and Announcement Management
              </h1>
            </div>
            <div className="w-full flex gap-3 items-center">
              <div className="w-[6vw] h-[6vw] md:w-[2vw] md:h-[2vw] rounded-full bg-[#84FF5C57]">
                <img
                  className="w-full h-full object-cover object-bottom"
                  src="https://www.freeiconspng.com/thumbs/check-tick-icon/tick-icon-30.png"
                  alt=""
                />
              </div>
              <h1 className="w-full text-xl md:text-xl font-semibold tracking-wide">
                Advanced Role-Based Access and Announcement Management
              </h1>
            </div>
            <div className="w-full flex gap-3 items-center">
              <div className="w-[6vw] h-[6vw] md:w-[2vw] md:h-[2vw] rounded-full bg-[#84FF5C57]">
                <img
                  className="w-full h-full object-cover object-bottom"
                  src="https://www.freeiconspng.com/thumbs/check-tick-icon/tick-icon-30.png"
                  alt=""
                />
              </div>
              <h1 className="w-full text-xl md:text-xl font-semibold tracking-wide">
                Advanced Role-Based Access and Announcement Management
              </h1>
            </div>
            <div className="w-full flex gap-3 items-center">
              <div className="w-[6vw] h-[6vw] md:w-[2vw] md:h-[2vw] rounded-full bg-[#84FF5C57]">
                <img
                  className="w-full h-full object-cover object-bottom"
                  src="https://www.freeiconspng.com/thumbs/check-tick-icon/tick-icon-30.png"
                  alt=""
                />
              </div>
              <h1 className="w-full text-xl md:text-xl font-semibold tracking-wide">
                Advanced Role-Based Access and Announcement Management
              </h1>
            </div>
            <div className="w-full flex gap-3 items-center">
              <div className="w-[6vw] h-[6vw] md:w-[2vw] md:h-[2vw] rounded-full bg-[#84FF5C57]">
                <img
                  className="w-full h-full object-cover object-bottom"
                  src="https://www.freeiconspng.com/thumbs/check-tick-icon/tick-icon-30.png"
                  alt=""
                />
              </div>
              <h1 className="w-full text-xl md:text-xl font-semibold tracking-wide">
                Advanced Role-Based Access and Announcement Management
              </h1>
            </div>
            <div className="w-full flex gap-3 items-center">
              <div className="w-[6vw] h-[6vw] md:w-[2vw] md:h-[2vw] rounded-full bg-[#84FF5C57]">
                <img
                  className="w-full h-full object-cover object-bottom"
                  src="https://www.freeiconspng.com/thumbs/check-tick-icon/tick-icon-30.png"
                  alt=""
                />
              </div>
              <h1 className="w-full text-xl md:text-xl font-semibold tracking-wide">
                Advanced Role-Based Access and Announcement Management
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[80vh] md:h-[50vh] flex flex-col md:flex-row p-3">
        <div className="md:w-1/3 w-full h-[60%] md:h-full flex gap-y-5 flex-col justify-center items-center">
        <svg
          width="74"
          height="74"
          viewBox="0 0 74 74"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M74 74H69.3389L64.75 38.8066C64.6777 38.1803 64.5573 37.554 64.3887 36.9277C64.2201 36.3014 63.8949 35.7474 63.4131 35.2656L47.2617 19.2227L48.4541 33.6035L51.6338 36.7832C52.6696 37.819 53.7295 38.8909 54.8135 39.999L51.5615 43.251L38.1924 29.918C37.5179 29.2435 36.7109 28.9062 35.7715 28.9062C35.3138 28.9062 34.8802 28.9906 34.4707 29.1592C34.0612 29.3278 33.6999 29.5807 33.3867 29.918C33.0736 30.2552 32.8327 30.6165 32.6641 31.002C32.4954 31.3874 32.3991 31.821 32.375 32.3027C32.375 33.2422 32.7122 34.0492 33.3867 34.7236L39.3125 40.6855V46.25C39.3125 47.8398 39.5895 49.3213 40.1436 50.6943C40.6976 52.0674 41.4805 53.2598 42.4922 54.2715C43.5039 55.2832 44.6842 56.1022 46.0332 56.7285C47.3822 57.3548 48.8516 57.7041 50.4414 57.7764V57.9932C50.4414 58.0654 50.4294 58.1377 50.4053 58.21C50.4053 58.5954 50.4294 59.0169 50.4775 59.4746C50.5257 59.9323 50.5739 60.39 50.6221 60.8477C50.6702 61.3053 50.7305 61.7751 50.8027 62.2568C50.875 62.7386 50.8991 63.1602 50.875 63.5215C50.875 64.3646 50.7184 65.1354 50.4053 65.834C50.0921 66.5326 49.6585 67.1468 49.1045 67.6768C48.5505 68.2067 47.9121 68.6162 47.1895 68.9053C46.4668 69.1943 45.6839 69.3509 44.8408 69.375H5.60059C4.82975 69.375 4.1071 69.2425 3.43262 68.9775C2.75814 68.7126 2.15592 68.3392 1.62598 67.8574C1.09603 67.3757 0.698568 66.8096 0.433594 66.1592C0.16862 65.5088 0.0240885 64.7741 0 63.9551V63.4854C0 63.3408 0.0240885 63.1842 0.0722656 63.0156L8.63574 7.94922C8.7321 7.39518 8.96094 6.91341 9.32227 6.50391C9.68359 6.0944 10.1051 5.75716 10.5869 5.49219C11.0687 5.22721 11.5986 5.01042 12.1768 4.8418C12.7549 4.67318 13.2848 4.60091 13.7666 4.625H41.4443C41.9261 4.625 42.444 4.68522 42.998 4.80566C43.5521 4.92611 44.07 5.13086 44.5518 5.41992C45.0335 5.70898 45.443 6.05827 45.7803 6.46777C46.1175 6.87728 46.3102 7.37109 46.3584 7.94922L46.6836 12.1045L66.6289 31.9775C67.4961 32.8447 68.1224 33.7962 68.5078 34.832C68.8932 35.8678 69.1702 37 69.3389 38.2285L74 74ZM43.3955 28.5449L41.8057 9.28613C41.7334 9.26204 41.613 9.25 41.4443 9.25H13.7666C13.6462 9.25 13.5378 9.26204 13.4414 9.28613C13.3451 9.31022 13.2246 9.33431 13.0801 9.3584L4.625 63.7383V63.9551C4.625 64.2201 4.72135 64.4128 4.91406 64.5332C5.10677 64.6536 5.33561 64.7259 5.60059 64.75H44.8408C45.1781 64.75 45.4912 64.6536 45.7803 64.4609C46.0693 64.2682 46.2259 63.9792 46.25 63.5938C46.25 63.2806 46.238 62.9674 46.2139 62.6543C46.1898 62.3411 46.1536 62.0159 46.1055 61.6787C44.8529 61.3174 43.6846 60.8115 42.6006 60.1611C41.5166 59.5107 40.5049 58.7399 39.5654 57.8486C38.626 56.9574 37.8311 55.9697 37.1807 54.8857C36.5303 53.8018 35.9762 52.6455 35.5186 51.417C35.1331 50.3089 34.9043 49.237 34.832 48.2012C34.7598 47.1654 34.7116 46.0934 34.6875 44.9854V42.5645L30.0986 38.0117C29.3278 37.2409 28.7497 36.3737 28.3643 35.4102C27.9788 34.4466 27.7741 33.4108 27.75 32.3027C27.75 31.1947 27.9548 30.1589 28.3643 29.1953C28.7738 28.2318 29.3519 27.3766 30.0986 26.6299C30.8454 25.8831 31.6885 25.3171 32.6279 24.9316C33.5674 24.5462 34.6152 24.3294 35.7715 24.2812C36.6628 24.2812 37.4456 24.3896 38.1201 24.6064C38.7946 24.8232 39.4329 25.1243 40.0352 25.5098C40.6374 25.8952 41.1914 26.3408 41.6973 26.8467C42.2031 27.3525 42.7692 27.9186 43.3955 28.5449ZM20.8125 60.125V55.5H30.0625V60.125H20.8125Z"
            fill="#AE1D1D"
          />
        </svg>
        <h1 className="inria tracking-wide font-semibold text-[#ae1d1d] text-2xl">Aangan Connect App</h1>
        </div>
        <div className="w-full h-full flex flex-col items-center md:flex-row ">
       <div>
       <h1 className="inria tracking-wide text-center font-semibold text-[#ae1d1d] text-xl md:text-[1.6vw] ">Download AanganConnect – Your Gateway to Smarter, Seamless Society Living!</h1>
       <p className="text-center md:text-left md:text-xl inria mt-3 px-3">AanganConnect is a cutting-edge society management app designed to simplify community living and enhance engagement. Whether you're a resident, society manager, or security personnel, AanganConnect provides advanced role-based access, real-time complaint tracking, event scheduling, and smart security management, all in one place.</p>
       </div>
       <div className="flex gap-5 w-full md:w-[40vw] justify-center mt-5 flex-row md:flex-col md:items-center">
       <img className="w-[40%] md:w-[80%]" src={appStore} alt="" />
       <img className="w-[40%] md:w-[80%]" src={playStore} alt="" />
       </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Home;
