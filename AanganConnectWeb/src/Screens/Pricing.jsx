import React from 'react'
import tick from '../assets/tick.png'
import blue from '../assets/blue.png'

const Pricing = () => {
  return (
    <div className="w-full">
    <div className='w-full p-3 pt-[6vw] px-[4vw]'>
        <div className="w-full flex-col flex items-center">
          <h1 className="text-[4vw] nico">
          <span>Pricing</span> Plans
          </h1>
          <p className="inria text-2xl w-[80%] text-center">
          At <span className='font-bold'>AanganConnec</span> we offer flexible pricing plans designed to fit societies of all sizes. Whether you’re managing a small residential building or a large gated community, our plans provide the tools you need to simplify operations, enhance security, and foster collaboration within your society.
          </p>
        </div>
        <div className='w-full flex gap-8 mt-8 justify-between'>
            <div className='w-[22vw] flex items-end pb-5'>
                <div className='w-full rounded-2xl shadow-xl border-2 flex flex-col items-center p-4'>
                    <h1 className='inria text-xl font-bold'>Basic PLan</h1>
                    <p className='text-[#585858] text-center font-normal'>Perfect for smaller communities looking for essential management tools.</p>
                    <img src="https://s3-alpha-sig.figma.com/img/0c2d/b086/8b20af11d66fb91c44c7fd67a10ef1da?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DGvReiq0men~qNbPCFf5yESREz~K9qv9RZER0xHNtPpANWbHpNik7gP~iAentIzRKkOALjy7e1GEK-sKBYRfmLJscjcfsG9C-N05p1zfrlv5CBq-443RbRINH6Ltj1neVQBl9M01xYwG0zbmrvfc2QJerxxwwKScbjJyZF0rJ7qBId7a4-7DAmXIJgZPAKNLaNnCnoIpzAl78Ods4AkKHNQO~GI-VS07zvL5M5wk7k6fzVutcgFlJTkgFxV-G0lQHK4x98AXFG8uDWGgl~DebIudzN5APG3StTHnQ2xG2WHxhvlJLj9O~fW3V0N4LNUQOIbmxuazLZtJIR14ovIULw__" alt="" />
                    <div className='flex gap-3 items-end'>
                      <h1 className='inria italic font-semibold text-2xl h-full'>Rs.</h1>
                      <h1 className='text-6xl inria font-bold'>3999</h1>
                      <h1 className='font-bold inria'>/mo</h1>
                    </div>
                    <p className='text-center inria mt-2'>per Agent <br /> billed annually</p>
                    <h1 className='inria mt-4'>or <b>Rs.4499</b> month-to-month</h1>
                    <img className='w-full mt-4' src={blue} alt="" />
                    <div className='w-full flex flex-col gap-y-3 mt-6'>
                    {
                      ["Visitor management with QR codes", "Real-time announcements", "Issue tracking and resolution", "Secure resident directory", "Basic customer support","Visitor management with QR codes", "Real-time announcements", "Issue tracking and resolution", "Secure resident directory", "Basic customer support"].map((item,index)=>{
                        return <div className='flex gap-3'>
                          <div className='w-[1.2vw] h-[1vw] overflow-hidden'>
                            <img className='w-full h-full' src={tick} alt="" />
                          </div>
                          <h1 className='inria'>{item}</h1>
                        </div>
                      })
                    }
                    </div>
                    <h1 className='w-full inria ml-[3vw] text-[#0086FF] mt-2'>see all features....</h1>
                </div>
            </div>
            <div className='w-[22vw] shadow-2xl rounded-xl flex flex-col items-center justify-between pb-3 shadow-[#3d3d3d] h-[155vh]'>
            <div className='w-full flex flex-col items-center rounded-xl p-4 bg-[#FFEA29]'>
            <h1 className='inria text-xl font-bold'>Standard PLan</h1>
                    <p className='text-[#585858] text-center font-normal'>Perfect for smaller communities looking for essential management tools.</p>
                    <img src="https://s3-alpha-sig.figma.com/img/0c2d/b086/8b20af11d66fb91c44c7fd67a10ef1da?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DGvReiq0men~qNbPCFf5yESREz~K9qv9RZER0xHNtPpANWbHpNik7gP~iAentIzRKkOALjy7e1GEK-sKBYRfmLJscjcfsG9C-N05p1zfrlv5CBq-443RbRINH6Ltj1neVQBl9M01xYwG0zbmrvfc2QJerxxwwKScbjJyZF0rJ7qBId7a4-7DAmXIJgZPAKNLaNnCnoIpzAl78Ods4AkKHNQO~GI-VS07zvL5M5wk7k6fzVutcgFlJTkgFxV-G0lQHK4x98AXFG8uDWGgl~DebIudzN5APG3StTHnQ2xG2WHxhvlJLj9O~fW3V0N4LNUQOIbmxuazLZtJIR14ovIULw__" alt="" />
                    <div className='flex gap-3 items-end'>
                      <h1 className='inria italic font-semibold text-2xl h-full'>Rs.</h1>
                      <h1 className='text-6xl inria font-bold'>3999</h1>
                      <h1 className='font-bold inria'>/mo</h1>
                    </div>
                    <p className='text-center inria mt-2'>per Agent <br /> billed annually</p>
                    <h1 className='inria mt-4'>or <b>Rs.4499</b> month-to-month</h1>
            </div>
                    <img className='w-full mt-4' src={blue} alt="" />
                    <div className='w-full flex flex-col gap-y-5 mt-6 p-4'>
                    {
                      ["Visitor management with QR codes", "Real-time announcements", "Issue tracking and resolution", "Secure resident directory", "Basic customer support","Visitor management with QR codes", "Real-time announcements", "Issue tracking and resolution", "Secure resident directory", "Basic customer support"].map((item,index)=>{
                        return <div className='flex gap-3'>
                          <div className='w-[1.2vw] h-[1vw] overflow-hidden'>
                            <img className='w-full h-full' src={tick} alt="" />
                          </div>
                          <h1 className='inria'>{item}</h1>
                        </div>
                      })
                    }
                    </div>
                    <h1 className='w-full inria ml-[3vw] text-[#0086FF]'>see all features....</h1>
            </div>
            <div className='w-[22vw] flex items-end pb-5'>
                <div className='w-full rounded-2xl shadow-xl border-2 flex flex-col items-center p-4'>
                    <h1 className='inria text-xl font-bold'>Premium PLan</h1>
                    <p className='text-[#585858] text-center font-normal'>Perfect for smaller communities looking for essential management tools.</p>
                    <img src="https://s3-alpha-sig.figma.com/img/0c2d/b086/8b20af11d66fb91c44c7fd67a10ef1da?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DGvReiq0men~qNbPCFf5yESREz~K9qv9RZER0xHNtPpANWbHpNik7gP~iAentIzRKkOALjy7e1GEK-sKBYRfmLJscjcfsG9C-N05p1zfrlv5CBq-443RbRINH6Ltj1neVQBl9M01xYwG0zbmrvfc2QJerxxwwKScbjJyZF0rJ7qBId7a4-7DAmXIJgZPAKNLaNnCnoIpzAl78Ods4AkKHNQO~GI-VS07zvL5M5wk7k6fzVutcgFlJTkgFxV-G0lQHK4x98AXFG8uDWGgl~DebIudzN5APG3StTHnQ2xG2WHxhvlJLj9O~fW3V0N4LNUQOIbmxuazLZtJIR14ovIULw__" alt="" />
                    <div className='flex gap-3 items-end'>
                      <h1 className='inria italic font-semibold text-2xl h-full'>Rs.</h1>
                      <h1 className='text-6xl inria font-bold'>7999</h1>
                      <h1 className='font-bold inria'>/mo</h1>
                    </div>
                    <p className='text-center inria mt-2'>per Agent <br /> billed annually</p>
                    <h1 className='inria mt-4'>or <b>Rs.4499</b> month-to-month</h1>
                    <img className='w-full mt-4' src={blue} alt="" />
                    <div className='w-full flex flex-col gap-y-3 mt-6'>
                    {
                      ["Visitor management with QR codes", "Real-time announcements", "Issue tracking and resolution", "Secure resident directory", "Basic customer support","Visitor management with QR codes", "Real-time announcements", "Issue tracking and resolution", "Secure resident directory", "Basic customer support"].map((item,index)=>{
                        return <div className='flex gap-3'>
                          <div className='w-[1.2vw] h-[1vw] overflow-hidden'>
                            <img className='w-full h-full' src={tick} alt="" />
                          </div>
                          <h1 className='inria'>{item}</h1>
                        </div>
                      })
                    }
                    </div>
                    <h1 className='w-full inria ml-[3vw] text-[#0086FF] mt-2'>see all features....</h1>
                </div>
            </div>
        </div>
    </div>
    <div className="w-full h-[30vh] inria bg-[#AE1D1D] px-[3vw] gap-y-4 mt-[4vw] flex flex-col justify-center">
        <h1 className="inria text-3xl text-white font-[700]">
          Ready to Get Started?
        </h1>
        <div className="flex justify-between items-start">
          <p className="w-[80%] text-2xl text-white font-[400] pl-6">
            Choose the plan that works for you and experience the ease of
            society management with AanganConnect. Contact us today for a demo
            or to discuss custom solutions!
          </p>
          <button className="bg-white py-2 px-6 cursor-pointer rounded-xl text-2xl font-bold text-[#AE1D1D]">
            Get Started
          </button>
        </div>
      </div>
    </div>
  )
}

export default Pricing