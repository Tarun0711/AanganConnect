import React from "react";
import line from '../assets/line.png'
const About = () => {
  const features = [
    {
      image: 'https://s3-alpha-sig.figma.com/img/9606/740a/5598f66ff3b9d840da519788dce6ceef?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LAlX1azJlf2nQjD-rsXxMHxzO~NqimYIf0meX1ac-uDuJkEGwlAsDqQQ9sXUP7DMa5ltDGnwW2fXzP8haMUpIwzZ8NhxDyj~xdV5mrl6WQbG0lXjZ3xlvVBV6B0E1yuQnCLtP76tKbyi~68YCMAWOTJAkieNnzNTsE0AM7c44kAwd0bEvMJrZIg1WtjPbl6OWLz6z8T3KDRuRkpsnD-7y3YD8Caci57YVDwvl-pQuNTwgPnRHC850OlPY9E5U67Lt6bjX4SpRr9rw-3466Hf0BB4kVfgAdbFBuempnSSEBPcrKRN6bExZYrC3tFNZodgtRQclBIn7Am8cDkVB5Tn7A__',
      title: 'All-in-One Solution',
      desc: 'AanganConnect offers a comprehensive platform where you can manage everything from visitor logs and security to payments and announcements, all in one place, reducing the need for multiple systems.',
      line_condition: true,
      opposite: true
    },
    {
      image: 'https://s3-alpha-sig.figma.com/img/21d5/9f9e/aa243468d1b1f1742bdb55d897e54c48?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XsMDf~lOlfHe9x-akAT~bRz~ReHecmP6OR-WsiwTKfTCIdqYHmmuwKAR3Q7zAuucc14CFHkaxkY29GgpF84qsI7nUKOF3EOrrNiidEjaVerzjLu-WN6ijHyR4uWVyBqRKEUKjF-3GqUiG~cb14me0L7FNKegB7Ms4E7HvXQgvfCddBQJ2LxyVfPH52qCRDtQxV4Jdy3D0CcS2INCgi27bW9-4uAw1w3~0qfThhOwgc7zKtgQJTZIHm-r5NnXR8WCiaDeSYeOExLs9c23zUS928u5LHOexIduiPgCGdMm0vlPcfjqxbj-6llSZze6G-1FivwPVbqVFJ~zhhdq6BM5CA__',
      title: 'User-Friendly Interface',
      desc: 'Our platform is designed with simplicity in mind, making it easy for both residents and society managers to navigate and manage tasks without any technical hassle.',
      line_condition: false,
      opposite: false
    },
    {
      image: 'https://s3-alpha-sig.figma.com/img/239c/abc8/13d1ebc447104c13071bd442bdee5742?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=px3f1JL19ipm3tfQJUP~jg-zMifWRKRI8TT1~A3FdwEQSYBw7a3Jf2oM3hBinnAzlbMB~9PeZvQrb~BwD~V-9-9CuwNBBZciDzAOKUhVYX1c3gzp9tV9vUE8q2ynL5GDtR2EXSkjV7E~cPP-JcnkqTbny1HvvVeAAA53ogMD3o-e0N8Vr~eoZXqVncRjMHNFrCmToE5X3sWn5LR46DVxmokDxaquYr93X~9g6bs6iwOZgQl~YyX3ynMN0QTKMKwONtK9qqz3yD4H3mV4oEhAI0auaQNCVl6nXYqsc62VGNB1PCrJum2waVsiG-GxQFIc8ZSv1~rOCLLW7BXs89MYcA__',
      title: 'Advanced Security Features',
      desc: 'With IoT-enabled gates, QR-based visitor passes, and real-time alerts, AanganConnect ensures that your society is always secure, providing peace of mind for residents and management alike.',
      line_condition: true,
      opposite: true
    },
    {
      image: 'https://s3-alpha-sig.figma.com/img/b545/0b4b/bb73d3ef5aadb10b82f33407e443be4f?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Vwmwgd12eV~ToQxDWG5jDz3DP5Suk1aQ2y~~EtsPf33HiW0QmU7FnYKDY3eo0j7T3dXeITitt8bW~KZk1QOY-rUbPnc7Bd35mdp81a9hCdXsBVfbgG9Ah7nsbM3IaIf5u~RXNs7mZuJBMekxAY9PIK5A8fOSkcCLUf8oDET-5eFo5z~cEcZmAP2PssC~-muPIEuLFRNKSoakigqXeac0Ieoj4gZGiRgniAqOohLnVOC3txVEbH0oDk7QVAB~pt9gM2sk9Wz7aUp7H03G4NEZ3wtMFRRs1MS41a5NRIRvsUvj6UMWrqdkZUDUKnGmoQTAvdANdEd1u1W9rMVLGgMmnA__',
      title: 'Real-Time Communication',
      desc: 'Stay connected with instant updates, announcements, and notifications. Whether it’s a society notice or an emergency alert, communication is fast and reliable, keeping everyone informed.',
      line_condition: false,
      opposite: false
    },
    {
      image: 'https://s3-alpha-sig.figma.com/img/b8c2/c730/1bff8ec2d4d89213a1a490f232edd0be?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MnWNQffKPqiM42w2fgg3qhNGH6v-e--hJvSGFWcP4hm95BhhjDhvm6n1b6MKYEI1nnCGHsjfOM1Zf7VHImms0mlzFdtmqCgQskN2OQ99jlgchLYsiOwJyMEZz5ND8PNvtIukuhsofDeSa14kM76DCzBvwkjK0P-uDTYTZnJ4GLog60nmE4rOvUnRYT4FxWE2Xb7WrhXkNlAzOsSCUtmJAp9~fGwTz9Ghi4p35zy2AZVwralGMRPxdwAD4xorIdeqpydu-KkjOnB-0UlU9MRi59NYVnxsewsoRx-1S648-EaxJGbcdS7IPc8NuOzULYVrWmroYs2ccf1K75-y75H9Sg__',
      title: 'Customizable for Your Needs',
      desc: 'Every society is unique, and so are its needs. AanganConnect offers customizable tools and features, allowing you to tailor the platform according to your society’s specific requirements for seamless management.',
      line_condition: true,
      opposite: true
    },
  ]

  return (
    <div className="w-full">
      <div className="w-full p-4 bg-[#FBFBFB] pt-[6vw] px-[4vw]">
        <div className="w-full flex-col flex items-end">
          <h1 className="text-[4vw] nico w-full">
            <span>About</span> Us
          </h1>
          <p className="inria text-2xl w-[97%]">
            Your Trusted Partner in Society Management –{" "}
            <span>AanganConnect</span>
          </p>
        </div>
        <div className="w-full p-[3vw] bg-white rounded-[50px] flex flex-col items-center">
          <h1 className="island text-[3.5vw] text-[#AE1D1D]">Aangan Connect</h1>
          <div className="flex flex-col items-end">
            <div className="border-[#40A4FF] border-l-[12px] w-full p-4">
              <h1 className="text-4xl font-[600] text-[#8B8B8B]">
                Your Trusted Partner in <br /> Society Management
              </h1>
            </div>
            <p className="w-full inria pl-[6vw] text-2xl">
              At AanganConnect, we are committed to revolutionizing society
              management by offering a seamless platform that brings together
              convenience, security, and community collaboration. Our mission is
              to empower societies with innovative solutions that make managing
              day-to-day operations effortless, while fostering a connected and
              secure living environment for all residents.
            </p>
          </div>
          <div className="flex flex-col items-end mt-[2vw]">
            <div className="w-full pl-[6vw]">
              <h1 className="text-4xl font-[600] text-[#8B8B8B]">
                Our Mission
              </h1>
            </div>
            <p className="w-[92%] pl-[2vw] py-5 text-[#585858] inria text-[1.9vw] font-medium mt-[1.5vw] border-l-[12px] border-l-[#AE1D1D]">
              To simplify society management through technology-driven solutions
              that enhance productivity, security, and collaboration in
              communities.
            </p>
          </div>
          <div className="flex flex-col items-end mt-[2vw]">
            <div className="w-full pl-[6vw]">
              <h1 className="text-4xl font-[600] text-[#8B8B8B]">Who We Are</h1>
            </div>
            <p className="w-[92%] pl-[2vw] py-5 text-[#585858] inria text-[1.9vw] font-medium mt-[1.5vw] border-l-[12px] border-l-[#CDB800]">
              A team of innovators and professionals dedicated to creating
              smart, user-friendly society management tools that address the
              needs of modern communities.
            </p>
          </div>
          <div className="flex flex-col items-end mt-[2vw]">
            <div className="w-full pl-[6vw]">
              <h1 className="text-4xl font-[600] text-[#8B8B8B]">
                What We Offer
              </h1>
            </div>
            <p className="w-[92%] pl-[2vw] py-5 text-[#585858] inria text-[1.9vw] font-medium mt-[1.5vw] border-l-[12px] border-l-[#228700]">
              An all-in-one platform that integrates essential features like
              visitor management, payment systems, security alerts, and
              real-time communication for residents and managers.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-[30vh] inria bg-[#40A4FF] px-[3vw] gap-y-4 mt-[4vw] flex flex-col justify-center">
        <h1 className="inria text-3xl text-white font-[700]">
          Ready to Get Started?
        </h1>
        <div className="flex justify-between items-start">
          <p className="w-[80%] text-2xl text-white font-[400] pl-6">
            Choose the plan that works for you and experience the ease of
            society management with AanganConnect. Contact us today for a demo
            or to discuss custom solutions!
          </p>
          <button className="bg-white py-2 px-6 cursor-pointer rounded-xl text-2xl font-bold text-[#40A4FF]">
            Get Started
          </button>
        </div>
      </div>
      <div className="w-full py-4 px-[4vw]">
        <div className="w-full flex-col flex items-center">
          <h1 className="text-[4vw] nico">
            <span>Why</span> Us
          </h1>
          <p className="inria text-2xl w-[70%] text-center">
            At AanganConnect, we pride ourselves on delivering an all-in-one,
            intuitive platform designed to simplify society management.
            <span>AanganConnec</span>
          </p>
        </div>
        <div className="mt-5">
        {
        features.map((item,index)=>{
        return <div>
        <div className={`w-full h-[35vh] p-4 flex gap-5 ${item.opposite ? 'flex-row' : 'flex-row-reverse'}`}>
          <div className="w-[20%] h-full">
            <img className="w-[100%] h-full object-cover" src={item.image} alt="" />
          </div>
          <div className="w-full h-full flex flex-col py-8 gap-y-5 items-end pl-[3vw]">
            <h1 className="inria text-3xl text-[#AE1D1D] font-semibold w-full">All-in-One Solution</h1>
            <p className=" inria text-xl px-[3vw]">AanganConnect offers a comprehensive platform where you can manage everything from visitor logs and security to payments and announcements, all in one place, reducing the need for multiple systems.</p>
          </div>
        </div>
        <div className="w-full flex justify-center">
        <div className="line w-[80%] ">
          <img className={`${index == 4 ? 'hidden': ''}`} src={line} alt=""  style={item.line_condition ? {} : { transform: 'scaleX(-1)' }}/>
        </div>
        </div>
        </div>
        })
        }
        </div>
      </div>
    </div>
  );
};

export default About;
