import Image from "next/image";
import image1 from "../../image/Image.png";
import image2 from "../../image/Play button.png";
import weather from "../../image/Group 48.png";
import plane from "../../image/Group 51.png";
import mic from "../../image/Group 50.png";
import setting from "../../image/Group 49.png";
import group4 from "../../image/Group 4.png";
import group5 from "../../image/Group 5.png";
import group14 from "../../image/Rectangle 14 (1).png";
import group13 from "../../image/Rectangle 15.jpg";
import group15 from "../../image/Rectangle 14.png";
import nav from "../../image/navigation 1.png";
import decore from "../../image/Decore (1).png";
import group7 from "../../image/Group 7.png";
import group12 from "../../image/Group 12.png";
import group11 from "../../image/Group 11.png";
import rectangle from "../../image/Rectangle 17.jpg";
import leaf from "../../image/LEAF.png";
import map from "../../image/map icon.png";
import send from "../../image/send.png";
import group from "../../image/Group.png";
import hart from "../../image/hart.png";
import pic1 from "../../image/image 27.png";
import pic2 from "../../image/image 28.png";
import pic3 from "../../image/image 29.png";
import pic4 from "../../image/image 30.png";
import pic5 from "../../image/image 31.png";
import mail from "../../image/Group 46.png";
import sendpic from "../../image/Group 77.png";
import mask1 from "../../image/Mask Group.png";
import mask2 from "../../image/Mask Group (1).png";
import logo2 from "../../image/Jadoo..png";
import facebook from "../../image/Social (1).png";
import insta from "../../image/Social.png";
import twitter from "../../image/Social2.png";
import googleplay from "../../image/Google Play.png";
import appstore from "../../image/Play Store.png";


export default function Home() {
  return (
    <main>
      <div className="w-[86%] mx-auto flex justify-between mt-10">
        <div className="w-[660px]">
          <div className="uppercase font-semibold text-red-500 text-2xl">
            Best Destinations around the world
          </div>
          <h1 className="text-7xl font-bold">
            Travel, enjoy <br /> and live a new <br /> and full life
          </h1>
          <div className="mt-10 text-2xl text-gray-500">
            Built Wicket longer admire do barton vanity itself do in it.
            Preferred to sportsmen it engrossed listening. Park gate sell they
            west hard for the.
          </div>
          <div className="mt-6 flex gap-6 items-center">
            <button className="p-3 rounded-lg bg-[#F1A501] text-white">
              Find out more
            </button>
            <div className="flex items-center">
              <Image
                src={image2}
                alt="polygon"
                width={50}
                className="mt-[10px]"
              ></Image>
              Play demo
            </div>
          </div>
        </div>

        {/* picture portion */}
        <div>
          <Image
            src={image1}
            alt="main image"
            width={700}
            className="mt-[-40px]"
          ></Image>
        </div>
      </div>

      <div className="w-[85%] mx-auto mt-[100px]">
        <Image
          src={group4}
          alt="group4"
          width={130}
          className="float-end"
        ></Image>
        <div className="text-gray-500 uppercase font-bold text-center">
          Category
        </div>
        <div className="text-5xl font-bold text-center">
          We Offer Best Services
        </div>

        <div className="flex gap-20 justify-center mt-20">
          <div className="w-[210px] p-5 hover:shadow-lg cursor-pointer rounded-xl">
            <Image
              src={weather}
              alt="weather"
              className="mr-auto ml-auto "
            ></Image>
            <div className="text-[19px] font-semibold mt-3 text-center">
              Calculated Weather
            </div>
            <div className="w-[145px] text-center mx-auto mt-3 text-[14px]">
              Built Wicket longer admire do barton vanity itself do in it.
            </div>
          </div>
          <div className="w-[210px] p-5 hover:shadow-lg cursor-pointer rounded-xl">
            <Image
              src={plane}
              alt="weather"
              className="mr-auto ml-auto "
            ></Image>
            <div className="text-[19px] font-semibold mt-3 text-center">
              Best Flights
            </div>
            <div className="w-[145px] text-center mx-auto mt-3 text-[14px]">
              Engrossed listening. Park gate sell they west hard for the.
            </div>
          </div>
          <div className="w-[210px] p-5 hover:shadow-lg cursor-pointer rounded-xl">
            <Image src={mic} alt="weather" className="mr-auto ml-auto "></Image>
            <div className="text-[19px] font-semibold mt-3 text-center">
              Local Events
            </div>
            <div className="w-[145px] text-center mx-auto mt-3 text-[14px]">
              Barton vanity itself do in it. Preferd to men it engrossed
              listening.{" "}
            </div>
          </div>
          <div className="w-[210px] p-5 hover:shadow-lg cursor-pointer rounded-xl">
            <Image
              src={setting}
              alt="weather"
              className="mr-auto ml-auto "
            ></Image>
            <div className="text-[19px] font-semibold mt-3 text-center">
              Customization
            </div>
            <div className="w-[160px] text-center mx-auto mt-3 text-[14px]">
              We deliver outsourced aviation services for military customers
            </div>
          </div>
        </div>
      </div>

      <div className="w-[85%] mx-auto mt-[100px]">
        <div className="text-gray-500 uppercase font-bold text-center">
          Top Selling
        </div>
        <div className="text-5xl font-bold text-center">Top Destination</div>

        <div className="flex justify-center mt-20">
          <div>
            <Image src={group14} alt="tourist" width={400}></Image>
            <div className="w-[266px] absolute z-10 ml-[67px] h-[100px] mt-[-250px] bg-white rounded-b-2xl p-3">
              <div className="flex justify-between ">
                <div>Rome,Italy</div>
                <div>$5,42k</div>
              </div>

              <div className="flex mt-1">
                <Image src={nav} alt="nav" height={5} width={20}></Image>
                <div>10 Days Trip</div>
              </div>
            </div>
          </div>

          <div>
            <Image src={group13} alt="tourist" width={400}></Image>
            <div className="w-[266px] absolute z-10 ml-[67px] h-[100px] mt-[-250px] bg-white rounded-b-2xl p-3">
              <div className="flex justify-between ">
                <div>London,UK</div>
                <div>$4.2k</div>
              </div>

              <div className="flex mt-1">
                <Image src={nav} alt="nav" height={5} width={20}></Image>
                <div>12 Days Trip</div>
              </div>
            </div>
          </div>

          <div>
            <Image src={group15} alt="tourist" width={400}></Image>
            <div className="w-[266px] absolute z-10 ml-[67px] h-[100px] mt-[-250px] bg-white rounded-b-2xl p-3">
              <div className="flex justify-between ">
                <div>Full Europe</div>
                <div>$15k</div>
              </div>

              <div className="flex mt-1">
                <Image src={nav} alt="nav" height={5} width={20}></Image>
                <div>28 Days Trip</div>
              </div>
            </div>
            <Image
              src={decore}
              alt="decore"
              className="absolute -z-30 mt-[-440px] ml-[300px]"
            ></Image>
          </div>
        </div>
      </div>

      <div className="w-[85%] mx-auto mt-[50px] flex justify-around">
        {/* left side */}
        <div>
          <div className="font-semibold text-gray-500 text-2xl">
            Easy And Fast
          </div>
          <div className="text-6xl font-bold">
            Book Your Next Trip <br /> In 3 Easy Steps
          </div>

          <div className="flex m-2 mt-10">
            <Image src={group7} alt="group7" width={70}></Image>
            <div className="ml-4">
              <div className="text-base font-bold text-gray-600">
                Choose Destination
              </div>
              <div className="text-gray-500">
                Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.
                Urna, tortor tempus.{" "}
              </div>
            </div>
          </div>

          <div className="flex m-2 mt-10">
            <Image src={group12} alt="group7" width={70}></Image>
            <div className="ml-4">
              <div className="text-base font-bold text-gray-600">
                Make Payment
              </div>
              <div className="text-gray-500">
                Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.
                Urna, tortor tempus.{" "}
              </div>
            </div>
          </div>

          <div className="flex m-2 mt-10">
            <Image src={group11} alt="group7" width={70}></Image>
            <div className="ml-4">
              <div className="text-base font-bold text-gray-600">
                Reach Airport on Selected Date
              </div>
              <div className="text-gray-500">
                Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.
                Urna, tortor tempus.{" "}
              </div>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="p-14 w-[430px] h-[420px] rounded-[60px] shadow-lg">
          <div>
            <Image src={rectangle} alt="picture"></Image>
            <div className="font-semibold mt-[10px]">Trip To Greece</div>
            <div className="text-gray-500 font-semibold mt-[10px]">
              14-29 June | by Robbin Joseph
            </div>
          </div>

          <div className="flex gap-3 mt-[10px]">
            <Image src={leaf} alt="leaf"></Image>
            <Image src={map} alt="map"></Image>
            <Image src={send} alt="send"></Image>
          </div>

          <div className="flex justify-between mt-[20px]">
            <div className="flex">
              <Image src={group} alt="send"></Image>
              <div className="ml-3">24 peaple going</div>
            </div>
            <Image src={hart} alt="hart" width={22}></Image>
          </div>
        </div>
      </div>

      <div className="w-[85%] mx-auto mt-[100px] flex items-center gap-10 justify-center">
        <div className="px-14 py-5 hover:rounded-xl hover:cursor-pointer hover:shadow-lg">
          <Image src={pic1} alt="pics" width={130}></Image>
        </div>
        <div className="px-14 py-5 hover:rounded-xl hover:cursor-pointer hover:shadow-lg">
          <Image src={pic2} alt="pics" width={130}></Image>
        </div>
        <div className="px-14 py-5 hover:rounded-xl hover:cursor-pointer hover:shadow-lg">
          <Image src={pic3} alt="pics" width={130}></Image>
        </div>
        <div className="px-14 py-5 hover:rounded-xl hover:cursor-pointer hover:shadow-lg">
          <Image src={pic4} alt="pics" width={130}></Image>
        </div>
        <div className="px-14 py-5 hover:rounded-xl hover:cursor-pointer hover:shadow-lg">
          <Image src={pic5} alt="pics" width={130}></Image>
        </div>
      </div>

      <div className="w-[85%] mx-auto mt-[100px]">
        <div className="w-[1170px] mx-auto bg-[#dfd7f966] py-[90px] px-[100px] myborder">
          <Image
            src={sendpic}
            alt="sendpic"
            className=" mt-[-100px] ml-[1015px]"
          ></Image>
          <Image
            src={mask1}
            alt="mask1"
            className="absolute mt-[-60px] ml-[805px]"
          ></Image>
          <Image
            src={mask2}
            alt="mask2"
            className="absolute mt-[-50px] ml-[-190px]"
          ></Image>

          <div className="text-center text-[33px] font-semibold text-[#5E6282]">
            Subscribe to get information, latest news and other <br />
            interesting offers about Jadoo
          </div>

          <div className="flex gap-4 mt-[70px] justify-center">
            <div className="w-[400px]">
              <label className="relative block">
                <span className="sr-only">Search</span>
                <span className="absolute inset-y-0 left-0 flex items-center pl-6">
                  <Image src={mail} alt="mail"></Image>
                </span>
                <input
                  className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-4 pl-14 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                  placeholder="Your Email"
                  type="text"
                  name="search"
                />
              </label>
            </div>
            <div className="bg-[#FF7D68] w-[150px] py-3 text-center text-white rounded-md">
              Subscribe
            </div>
          </div>
        </div>
        <Image
          src={group5}
          alt="group5"
          className="float-end mr-[-35px] mt-[-100px]"
        ></Image>
      </div>

      <div className="w-[80%] mx-auto mt-[100px] flex gap-24">
        {/* 1 */}
        <div className="w-[240px]">
          <Image src={logo2} alt="logo2"></Image>
          <div className="text-[18px] text-gray-500 mt-3 font-semibold">Book your trip in minute, get full Control for much longer.</div>
        </div>

        {/* 2 */}
        <div className="">
          <div className="text-[25px] font-bold">Company</div>
          <div className="text-[18px] text-gray-500 mt-3 font-semibold">About</div>
          <div className="text-[18px] text-gray-500 font-semibold">Careers</div>
          <div className="text-[18px] text-gray-500 font-semibold">Mobile</div>
        </div>

        {/* 3 */}
        <div>
        <div className="text-[25px] font-bold">Contact</div>
        <div className="text-[18px] text-gray-500 mt-3 font-semibold">Help/FAQ</div>
        <div className="text-[18px] text-gray-500 font-semibold">Press</div>
        <div className="text-[18px] text-gray-500 font-semibold">Affilates</div>
        </div>

        {/* 4 */}
        <div>
        <div className="text-[25px] font-bold">More</div>
        <div className="text-[18px] text-gray-500 font-semibold mt-3">Airlinefees</div>
        <div className="text-[18px] text-gray-500 font-semibold">Airline</div>
        <div className="text-[18px] text-gray-500 font-semibold">Low fare tips</div>
        </div>

        {/* 5 */}
        <div>
          <div className="flex">
            <Image src={facebook} alt="facebook"></Image>
            <Image src={insta} alt="insta"></Image>
            <Image src={twitter} alt="twitter"></Image>
          </div>
          <div className="text-[18px] text-gray-500 font-semibold m-3">Discover our app</div>
          <div className="flex gap-2 ml-3">
            <Image src={googleplay} alt="googleplay"></Image>
            <Image src={appstore} alt="appstore"></Image>
          </div>
        </div>
      </div>

      <div className="text-center m-20 text-gray-500">All rights reserved@jadoo.co</div>
    </main>
  );
}
