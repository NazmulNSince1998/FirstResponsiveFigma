import React from "react";
import Hero from "../assets/hero.png";
import Section3 from "../assets/section3.png";
import USD from "../assets/usd.png";
import Partner1 from "../assets/partner1.png";
import Partner2 from "../assets/partner2.png";
import Partner3 from "../assets/partner3.png";
import Partner4 from "../assets/partner4.png";
import Section5 from "../assets/section5.png";
import Section6 from "../assets/section6.png";
import Section7 from "../assets/section7.png";
import Section8 from "../assets/section8.png";
import Section9 from "../assets/section9.png";
import Section8_1 from "../assets/section8-1.png";
import Section8_2 from "../assets/section8-2.png";
import RightIcon from "../assets/rightIcon.png";
import Arrow from "../assets/arrow.png";
import Circle from "../assets/circle.png";
import IconUp from "../assets/IconUp.png";
import Icon from "../assets/Icon.png";
import Logo from "../assets/logo.svg";

const Home = () => {
  return (
    <main className=" w-full">
      <div className="lg:px-16  px-10 py-16 xl:px-[100px] bg-primaryGradient bg-opacity-5 md:grid md:grid-cols-2 ">
        <div className="text-center md:text-left md:flex md:flex-col  md:justify-center px-8 py-4">
          <p className="text-sm lg:text-lg text-primaryGradient uppercase font-semibold">
            sign up today
          </p>
          <h1 className="text-[25px] md:text-[40px] lg:text-[50px] xl:text-6xl font-bold text-dark">
            The World’s <br />
            <span className="text-primaryGradient capitalize">
              Fastest Growing
            </span>{" "}
            <br />
            Crypto Web App
          </h1>
          <p className="mt-4 lg:text-lg text-gray hidden md:block">
            Buy and sell 200+ cryptocurrencies with 20+ flat currencies using
            bank transfers or your credit/debit card.
          </p>
          <div className="md:flex md:flex-row md:items-center flex flex-col mt-6">
            <button className="md:min-w-[110px] md:min-h-[45px] xl:w-[150px] xl:h-[50px] md:mr-2 md:px-6 md:py-2 h-[55px] bg-[#3984F4] rounded-[40px] font-medium text-white capitalize">
              get started
            </button>
            <button className="md:w-[140px] md:min-h-[45px] xl:w-[150px] xl:h-[50px] h-[55px]  font-medium border border-[#3984F4] rounded-[40px] text-[#3984F4] capitalize lg:mx-3 my-2">
              download app
            </button>
          </div>
        </div>
        <div className="hidden md:block">
          <img src={Hero} alt="" />
        </div>
      </div>

      {/* section 2 */}
      <section className="w-full min-h-[40vh] md:min-h-[40vh] lg:px-6  px-4  xl:px-[60px]">
        <div className="bg-white rounded-[40px] shadow-xl -mt-10 md:min-h-[300px] min-h-[500px] w-full md:grid md:grid-cols-3 px-4 py-4">
          <div className="mt-4">
            <div className="flex items-center justify-between px-2 py-2">
              <h3 className="text-lg font-medium text-black text-left capitalize">
                🔥 Trending
              </h3>
              <span className="text-primaryGradient text-[15px] font-medium cursor-pointer capitalize text-right">
                more
              </span>
            </div>
            <div className="grid grid-cols-3 mt-4 ">
              <div className="">
                <h4 className="font-normal text-[15px] text-gray capitalize">
                  name
                </h4>
                <ul>
                  <li className="text-black font-normal text-sm capitalize">
                    Bitcoin
                  </li>
                  <li className="text-black font-normal text-sm capitalize">
                    Ethereum
                  </li>
                  <li className="text-black font-normal text-sm capitalize">
                    Solana
                  </li>
                  <li className="text-black font-normal text-sm capitalize">
                    Dogecoin
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-normal text-[15px] text-gray capitalize">
                  price
                </h4>
                <ul>
                  <li className="text-[#222222] font-normal text-sm capitalize">
                    <span className="text-green">+</span> $43,180.13
                  </li>
                  <li className="text-[#222222] font-normal text-sm capitalize">
                    <span className="text-green">+</span> $43,180.13
                  </li>
                  <li className="text-[#222222] font-normal text-sm capitalize">
                    <span className="text-green">+</span> $43,180.13
                  </li>
                  <li className="text-[#222222] font-normal text-sm capitalize">
                    <span className="text-green">+</span> $43,180.13
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-normal text-[15px] text-gray capitalize">
                  chart
                </h4>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex items-center justify-between px-2 py-2">
              <h3 className="text-lg font-medium text-black text-left capitalize">
                🚀 Top Gainers
              </h3>
              <span className="text-primaryGradient text-[15px] font-medium cursor-pointer capitalize text-right">
                more
              </span>
            </div>
            <div className="grid grid-cols-3 mt-4">
              <div>
                <h4 className="font-normal text-[15px] text-gray capitalize">
                  name
                </h4>
                <ul>
                  <li className="text-black font-normal text-sm capitalize">
                    Bitcoin
                  </li>
                  <li className="text-black font-normal text-sm capitalize">
                    Ethereum
                  </li>
                  <li className="text-black font-normal text-sm capitalize">
                    Solana
                  </li>
                  <li className="text-black font-normal text-sm capitalize">
                    Dogecoin
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-normal text-[15px] text-gray capitalize">
                  price
                </h4>
                <ul>
                  <li className="text-[#222222] font-normal text-sm capitalize">
                    <span className="text-green">+</span> $43,180.13
                  </li>
                  <li className="text-[#222222] font-normal text-sm capitalize">
                    <span className="text-green">+</span> $43,180.13
                  </li>
                  <li className="text-[#222222] font-normal text-sm capitalize">
                    <span className="text-green">+</span> $43,180.13
                  </li>
                  <li className="text-[#222222] font-normal text-sm capitalize">
                    <span className="text-green">+</span> $43,180.13
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-normal text-[15px] text-gray capitalize">
                  chart
                </h4>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex items-center justify-between px-2 py-2">
              <h3 className="text-lg font-medium text-black text-left capitalize">
                💎 Recently Added
              </h3>
              <span className="text-primaryGradient text-[15px] font-medium cursor-pointer capitalize text-right">
                more
              </span>
            </div>
            <div className="grid grid-cols-3 mt-4">
              <div>
                <h4 className="font-normal text-[15px] text-gray capitalize">
                  name
                </h4>
                <ul>
                  <li className="text-black font-normal text-sm capitalize">
                    Bitcoin
                  </li>
                  <li className="text-black font-normal text-sm capitalize">
                    Ethereum
                  </li>
                  <li className="text-black font-normal text-sm capitalize">
                    Solana
                  </li>
                  <li className="text-black font-normal text-sm capitalize">
                    Dogecoin
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-normal text-[15px] text-gray capitalize">
                  price
                </h4>
                <ul>
                  <li className="text-[#222222] font-normal text-sm capitalize">
                    <span className="text-green">+</span> $43,180.13
                  </li>
                  <li className="text-[#222222] font-normal text-sm capitalize">
                    <span className="text-green">+</span> $43,180.13
                  </li>
                  <li className="text-[#222222] font-normal text-sm capitalize">
                    <span className="text-green">+</span> $43,180.13
                  </li>
                  <li className="text-[#222222] font-normal text-sm capitalize">
                    <span className="text-green">+</span> $43,180.13
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-normal text-[15px] text-gray capitalize">
                  chart
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* section 3 */}
      <section className="w-full  lg:px-10 lg:py-10  px-10 py-[20px] xl:px-[130px] xl:py-[10px]">
        <div className="flex flex-col-reverse lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center mt-6">
            <h1 className="md:text-4xl text-xl mb-4  font-semibold text-[24px] text-dark">
              Buy & trade on the <br /> original crypto exchange.
            </h1>
            <p className="text-gray font-normal md:text-lg text-sm">
              Buy now and get 40% extra bonus Minimum pre-sale amount <br /> 25
              Crypto Coin. We accept BTC crypto-currency
            </p>
            <div className="flex mt-8">
              <div className="relative ">
                <input
                  type="number"
                  value=""
                  className="md:w-[250px] md:h-[60px] h-[50px] w-[200px] xl:w-[290px] xl:h-[80px] border border-[#3984F4] md:rounded-[22px] rounded-[15px]"
                />
                <span className="text-primaryGradient text-sm font-medium absolute top-3  left-2 md:top-5 md:left-1 xl:left-2 xl:top-7">
                  Amount
                </span>
                <div className="absolute w-[1px] xl:h-[70px] bg-primaryGradient xl:top-1 xl:left-20 md:h-[50px] md:top-1 md:left-16 top-1 left-[70px] h-[40px]"></div>
              </div>
              <div className="">
                <select
                  name=""
                  id=""
                  className="border border-[#3984F4] md:rounded-[22px] rounded-[15px] md:h-[60px] h-[50px] xl:h-[80px] xl:w-[150px] xl:ml-2 md:w-[130px] md:ml-6 w-[100px] ml-2"
                >
                  <option value="">
                    <img src={USD} alt="" /> USD
                  </option>
                </select>
              </div>
            </div>
            <div className="flex mt-8">
              <div className="relative ">
                <input
                  type="number"
                  value=""
                  className="md:w-[250px] md:h-[60px] h-[50px] w-[200px] xl:w-[290px] xl:h-[80px] border border-[#3984F4] md:rounded-[22px] rounded-[15px]"
                />
                <span className="text-primaryGradient text-sm font-medium absolute top-3  left-2 md:top-5 md:left-1 xl:left-2 xl:top-7">
                  Get
                </span>
                <div className="absolute w-[1px] xl:h-[70px] bg-primaryGradient xl:top-1 xl:left-20 md:h-[50px] md:top-1 md:left-16 top-1 left-[70px] h-[40px]"></div>
              </div>
              <div className="">
                <select
                  name=""
                  id=""
                  className="border border-[#3984F4] md:rounded-[22px] rounded-[15px] md:h-[60px] h-[50px] xl:h-[80px] xl:w-[150px] xl:ml-2 md:w-[130px] md:ml-6 w-[100px] ml-2"
                >
                  <option value="">
                    <img src={USD} alt="" /> BTC
                  </option>
                </select>
              </div>
            </div>
            <button className="w-[310px] md:w-[400px] xl:w-[450px] h-[58px] bg-primaryGradient text-[15px] font-medium rounded-[40px] mt-6">
              Buy Now
            </button>
          </div>
          <div className="px-10 py-4">
            <img src={Section3} alt="" />
          </div>
        </div>
      </section>

      {/* section 4 */}
      <section className="w-full mt-5 lg:px-10 lg:py-10  px-10 py-[20px] xl:px-[130px] xl:py-[20px] text-center">
        <h2 className="font-medium text-lg md:text-2xl text-dark">
          Trusted Partners Worldwide
        </h2>
        <p className="text-gray font-normal text-sm md:text-lg">
          We're partners with countless major organisations around the globe
        </p>
        <div className="flex flex-wrap justify-center items-center">
          <img src={Partner1} alt="" />
          <img src={Partner2} alt="" />
          <img src={Partner3} alt="" />
          <img src={Partner4} alt="" />
        </div>
      </section>

      {/* section 5 */}
      <section className="w-full mt-5 lg:px-10 lg:py-10  px-10 py-[20px] xl:px-[130px] xl:py-[20px] flex flex-wrap md:justify-between items-center">
        <div>
          <img src={Section5} alt="" />
        </div>
        <div>
          <h2 className="font-semibold text-dark text-2xl md:text-4xl my-4">
            Introducing the <span className="text-primaryGradient">NEFA</span>{" "}
            Credit Card
          </h2>
          <p className="font-normal text-sm md:text-[15px] text-gray my-4">
            Subject to cardholder and rewards terms which will be available at
            application.
          </p>
          <p className="font-normal text-sm md:text-lg text-gray flex items-center gap-2 my-4">
            <span className="">
              <img src={RightIcon} alt="" />
            </span>{" "}
            Up to 3% back on purchases
          </p>
          <p className="font-normal text-sm md:text-lg text-gray flex items-center gap-2 my-4">
            <span className="">
              <img src={RightIcon} alt="" />
            </span>{" "}
            Earn rewards in bitcoin or any crypto on NEFA
          </p>
          <p className="font-normal text-sm md:text-lg text-gray flex items-center gap-2 my-4">
            <span className="">
              <img src={RightIcon} alt="" />
            </span>{" "}
            No annual fee
          </p>

          <button className="border border-primaryGradient w-[300px] h-[50px] rounded-[22px] mt-4 text-primaryGradient text-[15px] md:text-lg font-medium">
            Join the waitlist
          </button>
        </div>
      </section>

      {/* section 6 */}
      <section className="flex md:items-center md:flex-row md:justify-between flex-col-reverse lg:px-10 lg:py-10  px-10 py-[20px] xl:px-[130px] xl:py-[20px]">
        <div className="md:w-[50%]">
          <h2 className="text-2xl md:text-4xl font-semibold text-dark my-6">
            Advanced Trading <span className="text-primaryGradient">Tools</span>
          </h2>
          <p className="text-[16px] md:text-lg font-medium text-dark mb-4">
            Professional Access, Non-stop Availability
          </p>
          <p className="text-sm text-gray font-normal md:text-[16px]">
            We provide premium access to crypto trading for both individuals and
            institutions through high liquidity, reliable order execution and
            constant uptime.
          </p>
          <p className="text-[16px] md:text-lg font-medium text-dark my-4">
            A Range of Powerful Apis
          </p>
          <p className="text-sm text-gray font-normal md:text-[16px]">
            Set up your own trading interface or deploy your algorithmic
            strategy with our high-performance FIX and HTTP APIs. Connect to our
            WebSocket for real-time data streaming.
          </p>
          <p className="text-[16px] md:text-lg font-medium text-dark my-4">
            Customer Support
          </p>
          <p className="text-sm text-gray font-normal md:text-[16px]">
            Premium 24/7 support available to all customers worldwide by phone
            or email. Dedicated account managers for partners.
          </p>
          <div className="flex flex-col items-center justify-center md:justify-start md:flex-row mt-6 text-center">
            <button className="border border-primaryGradient w-[300px] h-[50px] rounded-[22px] mt-4 text-primaryGradient text-[15px] md:text-lg font-medium">
              Get Started
            </button>
            <button className="text-primaryGradient text-[15px] ml-10 underline mt-4">
              Learn More
            </button>
          </div>
        </div>
        <div className="md:w-[50%]">
          <img src={Section6} alt="" />
        </div>
      </section>

      {/* section 7 */}
      <section className="w-full mt-5 lg:px-10 lg:py-10  px-10 py-[20px] xl:px-[130px] xl:py-[20px] flex flex-col md:flex-row md:justify-between items-center">
        <div className="md:w-[50%]">
          <img src={Section7} alt="" />
        </div>
        <div className="md:w-[50%]">
          <h2 className="font-semibold text-dark text-2xl md:text-4xl my-4">
            Industry-leading security from day one
          </h2>

          <p className="font-normal text-sm md:text-lg text-dark flex items-center gap-2 my-4">
            <span className="">
              <img src={RightIcon} alt="" />
            </span>{" "}
            Safety, security and compliance
          </p>
          <p className="text-sm font-normal text-gray md:text-[16px] my-2">
            NEFA is a licensed New York trust company that undergoes regular
            bank exams and is subject to the cybersecurity audits conducted by
            the New York Department of Financial Services. Learn more about our
            commitment to security.
          </p>
          <p className="font-normal text-sm md:text-lg text-dark flex items-center gap-2 my-4">
            <span className="">
              <img src={RightIcon} alt="" />
            </span>{" "}
            Hardware security keys
          </p>
          <p className="text-sm font-normal text-gray md:text-[16px] my-2">
            With NEFA you can secure your account with a hardware security key
            via WebAuthn.
          </p>
          <p className="font-normal text-sm md:text-lg text-dark flex items-center gap-2 my-4">
            <span className="">
              <img src={RightIcon} alt="" />
            </span>{" "}
            SOC Certifications
          </p>
          <p className="text-sm font-normal text-gray md:text-[16px] my-2">
            NEFA is SOC 1 Type 2 and SOC 2 Type 2 compliant. We are the world’s
            first cryptocurrency exchange and custodian to complete these exams.
          </p>
        </div>
      </section>

      {/* section 8 */}
      <section className="w-full mt-[60px] lg:px-10 lg:py-10  px-10 py-[20px] xl:px-[130px] xl:py-[20px] text-center">
        <h2 className="font-semibold text-[20px] md:text-3xl text-dark">
          Get started in just a few minutes
        </h2>
        <p className="text-gray font-normal text-sm md:text-lg"></p>
        <div className="flex flex-col lg:flex-row items-center justify-evenly  mt-6">
          <div className="flex flex-col items-center mx-6">
            <div className="flex items-center justify-center lg:mr-[-4.5rem] xl:mr-[-6.5rem] 2xl:mr-[-12.5rem]">
              <img src={Section8} alt="" />
              <div className="lg:flex hidden items-center justify-center ">
                <img src={Circle} alt="" />
                <img src={Arrow} alt="" />
              </div>
            </div>
            <span className="text-[20px] font-medium text-dark md:text-[25px] mt-4">
              Sign Up
            </span>
            <p className="text-sm font-normal text-gray md:text-[17px] mt-4">
              Buy Bitcoin or Ethereum, then securely store it in your Wallet or
              send it on easily to friends
            </p>
          </div>
          <div className="flex flex-col items-center mx-6">
            <div className="flex items-center justify-center lg:mr-[-4.5rem] xl:mr-[-6.5rem] 2xl:mr-[-12.5rem]">
              <img src={Section8_1} alt="" />
              <div className="lg:flex hidden items-center justify-center ">
                <img src={Circle} alt="" />
                <img src={Arrow} alt="" />
              </div>
            </div>
            <span className="text-[20px] font-medium text-dark md:text-[25px] mt-4">
              Fund
            </span>
            <p className="text-sm font-normal text-gray md:text-[17px] mt-4">
              Choose your preferred payment method such as bank transfer or
              credit card to top up your NEFA Wallet
            </p>
          </div>
          <div className="flex flex-col items-center mx-6">
            <img src={Section8_2} alt="" />
            <span className="text-[20px] font-medium text-dark md:text-[25px] mt-4">
              Buy Crypto
            </span>
            <p className="text-sm font-normal text-gray md:text-[17px] mt-4">
              Sign up for your free NEFA Wallet on web, iOS or Android and
              follow our easy process to set up your profile
            </p>
          </div>
        </div>
      </section>

      {/* section 9 */}
      <section className="w-full mt-5 lg:px-10 lg:py-10  px-10 py-[20px] xl:px-[130px] xl:py-[20px] flex flex-col md:flex-row md:justify-between items-center">
        <div className="md:w-[50%]">
          <img src={Section9} alt="" />
        </div>
        <div className="md:w-[50%]">
          <h2 className="font-semibold text-dark text-[22px] md:text-4xl my-4">
            Frequently asked questions
          </h2>

          <p className="font-normal text-[16px] md:text-lg text-black flex items-center gap-2 my-4">
            Why should I choose NEFA?
          </p>
          <p className="text-sm font-normal text-gray md:text-lg my-2">
            We're industry pioneers, having been in the cryptocurrency industry
            since 2016. We've facilitated more than 21 billion USD worth of
            transactions on our exchange for customers in over 40 countries.
            Today, we're trusted by over 8 million customers around the world
            and have received praise for our easy-to-use app, secure wallet, and
            range of features.
          </p>
          <div className="mt-6">
            <div className="w-full h-[1px] bg-[#cccccc]"></div>
            <p className="font-normal text-[16px] md:text-lg text-black flex items-center gap-2 my-4">
              How secure is NEFA?
            </p>
          </div>

          <div className="mt-6">
            <div className="w-full h-[1px] bg-[#cccccc]"></div>
            <p className="font-normal text-[16px] md:text-lg text-black flex items-center gap-2 my-4">
              Do I have to buy a whole Bitcoin?
            </p>
          </div>
          <div className="mt-6">
            <div className="w-full h-[1px] bg-[#cccccc]"></div>
            <p className="font-normal text-[16px] md:text-lg text-black flex items-center gap-2 my-4">
              How do I actually buy Bitcoin?
            </p>
            <div className="w-full h-[1px] bg-[#cccccc]"></div>
          </div>
        </div>
      </section>

      {/* back to top */}
      <div className="flex justify-center items-center my-[50px]">
        <button className="text-sm md:text-[16px] font-normal text-gray border-2 border-[#dddddd] flex items-center gap-5 px-8 py-4 rounded-[12px]">
          Back to Top
          <img src={IconUp} alt="" />
        </button>
      </div>

      {/* footer */}

      <footer className="w-full mt-8 lg:px-10 lg:py-10  px-10 py-[20px] xl:px-[130px] xl:py-[20px]">
        <div className="w-full h-[1px] bg-[#dddddd]"></div>
        <div className="flex flex-col lg:flex-row">
          <div className="w-full h-[1px] bg-[#dddddd] lg:hidden"></div>
          <div className="my-6 md:w-[20%]">
            <img src={Logo} alt="" />
          </div>

          <div className="my-6 ml-6 xl:ml-16 md:w-[15%]">
            <h4 className="text-[15px] md:text-[16px] font-medium text-gray py-2 pr-4">
              Buy Crypto
            </h4>
            <h4 className="text-[15px] md:text-[16px] font-medium text-gray py-2 pr-4">
              Exchanges
            </h4>
            <h4 className="text-[15px] md:text-[16px] font-medium text-gray py-2 pr-4">
              Watchlist
            </h4>
            <h4 className="text-[15px] md:text-[16px] font-medium text-gray py-2 pr-4">
              Portfolio
            </h4>
            <h4 className="text-[15px] md:text-[16px] font-medium text-gray py-2 pr-4">
              NFT
            </h4>
          </div>
          <div className="hidden lg:block w-[1px] h-[250px] bg-[#dddddd]"></div>
          <div className="w-full h-[1px] bg-[#dddddd] lg:hidden"></div>
          <div className="my-6 ml-6 xl:ml-16 md:w-[15%]">
            <h4 className="text-[15px] md:text-[16px] font-medium text-gray py-2 pr-4">
              Products
            </h4>
            <h4 className="text-[15px] md:text-[16px] font-medium text-gray py-2 pr-4">
              Abous Us
            </h4>
            <h4 className="text-[15px] md:text-[16px] font-medium text-gray py-2 pr-4">
              Careers
            </h4>
            <h4 className="text-[15px] md:text-[16px] font-medium text-gray py-2 pr-4">
              Blog
            </h4>
            <h4 className="text-[15px] md:text-[16px] font-medium text-gray py-2 pr-4">
              Security
            </h4>
          </div>
          <div className="hidden lg:block w-[1px] h-[250px] bg-[#dddddd]"></div>
          <div className="w-full h-[1px] bg-[#dddddd] lg:hidden"></div>
          <div className="my-6 ml-6 xl:ml-16  md:w-[15%]">
            <h4 className="text-[15px] md:text-[16px] font-medium text-gray py-2 pr-4">
              Help Center
            </h4>
            <h4 className="text-[15px] md:text-[16px] font-medium text-gray py-2 pr-4">
              Contact Us
            </h4>
            <h4 className="text-[15px] md:text-[16px] font-medium text-gray py-2 pr-4">
              System Status
            </h4>
            <h4 className="text-[15px] md:text-[16px] font-medium text-gray py-2 pr-4">
              Area of Avaibility
            </h4>
            <h4 className="text-[15px] md:text-[16px] font-medium text-gray py-2 pr-4">
              Privacy Policy
            </h4>
          </div>
          <div className="hidden lg:block w-[1px] h-[250px] bg-[#dddddd]"></div>
          <div className="w-full h-[1px] bg-[#dddddd] lg:hidden"></div>
          <div className="my-6  ml-6 xl:ml-16  md:w-[30%]">
            <h4 className="text-[15px] font-medium md:text-[16px] text-gray my-6">
              Newsletter
            </h4>
            <p className="text-[13px] font-normal md:text-sm text-gray">
              Never miss anything crypto when you're on the go
            </p>
            <div className="flex mt-6">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="border border-gray rounded-[12px] h-[55px] w-[200px] mr-4 px-4"
              />
              <button className="w-[55px] h-[55px] bg-primaryGradient rounded-[12px] flex items-center justify-center">
                <img src={Icon} alt="" />
              </button>
            </div>
          </div>
          <div className="w-full h-[1px] bg-[#dddddd] lg:hidden"></div>
        </div>
        <div className="w-full h-[1px] bg-[#dddddd]"></div>
        <div className="text-center text-[12px] md:text-[16px] font-normal text-gray my-4">
          {" "}
          © Copyright 2022 NEFA LLC. All rights reserved
        </div>
      </footer>
    </main>
  );
};

export default Home;
