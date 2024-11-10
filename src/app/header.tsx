import Image from "next/image";
import logo from "../../image/Logo.png"
import down from "../../image/Vector 1.png"
import image1 from "../../image/Decore.png"

export default function Home() {
  return (
    <main>
        <div className="float-end "><Image src={image1} alt="main" width={555} className="float-end -z-10 absolute ml-[-555px] mt-[-26px]"></Image></div>
      <div className="flex items-center justify-between mt-[25px] mx-24">
        <Image src={logo} alt="Logo" width={100}></Image>
        <div className="flex gap-8">
            <div className="hover:border-2 p-2 cursor-pointer font-semibold rounded-md">Destination</div>
            <div className="hover:border-2 p-2 cursor-pointer font-semibold rounded-md">Hotels</div>
            <div className="hover:border-2 p-2 cursor-pointer font-semibold rounded-md">Flights</div>
            <div className="hover:border-2 p-2 cursor-pointer font-semibold rounded-md">Bookinga</div>
            <div className="hover:border-2 p-2 cursor-pointer font-semibold rounded-md">Login</div>
            <div className="hover:border-2 p-2 cursor-pointer font-semibold rounded-md">Sign up</div>
            <div className="flex items-center hover:border-2 p-2 cursor-pointer font-semibold rounded-md">En <Image src={down} alt="down arrow"></Image></div>
        </div>
      </div>
    </main>  
  );
}