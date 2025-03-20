import React, { useEffect, useRef, useState } from 'react';
import bgImg from "./Assests/bg-home.png";
import brand from "./Assests/Brand.png";
import { FaceSmileIcon, ShieldCheckIcon, FingerPrintIcon, TruckIcon } from "@heroicons/react/24/outline";
import CEO from "./Assests/CEO.jpg";
import XFounder from "./Assests/XFoundex.jpg";
import Developer from "./Assests/Developer.jpg";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import VideoEditing from "./Assests/vid1.png";
import GraphiDesiging from "./Assests/gra.png";
import SoftwareDevelopemt from "./Assests/sof.png";
import DigitalMarketing from "./Assests/dig.png";
import SocialMedia from "./Assests/soc.png";
import CIRCLE from "./Assests/CIRCLE.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import brandLogo from "./Assests/brandLogo.png";
import client1 from "./Assests/clients/a1.png";
import client2 from "./Assests/clients/a2.png";
import client3 from "./Assests/clients/a3.png";
import client4 from "./Assests/clients/a4.png";
import client5 from "./Assests/clients/a5.png";
import client6 from "./Assests/clients/a6.png";
import client7 from "./Assests/clients/a7.png";
import client9 from "./Assests/clients/a9.png";
import client10 from "./Assests/clients/pakoda.png";
import client11 from "./Assests/clients/a11.png";
import client12 from "./Assests/clients/a12.png";
import brand1 from "./Assests/clients/yasho.png";
import brand2 from "./Assests/clients/liza.png";
import brand3 from "./Assests/clients/encoded.png";
import brand4 from "./Assests/clients/outbox.png";
import brand5 from "./Assests/clients/butterfly.png";
import brand6 from "./Assests/clients/taamaraa.png";
import brand7 from "./Assests/clients/Senthur Event.png";

import emailjs from 'emailjs-com';
import clsx from 'clsx';

const App: React.FC = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration in milliseconds
    });
  }, []);


  const [formData, setFormData] = useState({
    from_name: '',
    phone_number: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  // Adjust this regex based on your expected phone number format
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    // Validate all fields including email and phone number
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+?\d{10,15}$/;
    const isValid =
      formData.from_name.trim() !== '' &&
      emailRegex.test(formData.from_name) &&
      phoneRegex.test(formData.phone_number) &&
      formData.message.trim() !== '';

    setIsFormValid(isValid);
  }, [formData]);
  const [status, setStatus] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();
    if (formRef.current) {
      emailjs.sendForm(
        'service_4yg12dp',           // Your service ID
        'template_436e9dr',          // Your template ID
        formRef.current,             // The HTML form element, guaranteed to be non-null
        'K-8uwDqXUVmsdV_m9'          // Your public key
      )
        .then((result) => {
          setStatus('Email sent successfully!');
          setLoading(false);
          if (formRef.current) {
            formRef.current.reset();
          }
        })
        .catch((error) => {
          setStatus('Failed to send email.');
          setLoading(false);
          if (formRef.current) {
            formRef.current.reset();
          }
        });
    } else {
      setStatus('Form reference is null.');
      setLoading(false);
    }
  };

  const clients = [
    { img: client1, name: "Nila Kutty Channel" },
    { img: client2, name: "Vickys3vlogs" },
    { img: client10, name: "Pakoda Boyz" },
    { img: client4, name: "Shaggis_vlogs" },
    { img: client5, name: "Kiruthis_vlogs" },
    { img: client3, name: "Smart_salem" },
    { img: client7, name: "Madras__foodie" },
    // { img: client8, name: "ExploreWithDeeps" },
    { img: client9, name: "Abi tamil youtuber" },
    { img: client11, name: "Rams.review" },
    { img: client6, name: "Walkwithjai" },

  ];
  const clients1 = [
    { img: brand7, name: "Senthur Events" },
    { img: brand1, name: "Yasho Jewellers" },
    { img: brand6, name: "Taamaraa Indian Cuisine" },
    { img: brand2, name: "Liza Products" },
    { img: brand3, name: "The Encoded" },
    { img: brand4, name: "Outbox Nutrition" },
    { img: brand5, name: "Buttercup Events" },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Change slide every 3 seconds
  };


  const services = [
    {
      name: "Video Editing",
      img: VideoEditing,
      content: "Transform your raw footage into a masterpiece. Whether it’s a YouTube video, an Instagram clip, or a cinematic project, our skilled editors use the latest tools and techniques to create visually stunning and engaging content.",
    },
    {
      name: "Graphics Designing",
      img: GraphiDesiging,
      content: "Our talented graphic designers are here to craft visually appealing designs that capture your brand’s essence. logos to marketing materials, we provide creative solutions that leave a lasting impression.",
    },
    {
      name: "Software Development",
      img: SoftwareDevelopemt,
      content: "Innovate and automate with our custom software development services. We build scalable, user-friendly applications tailored to your business needs, ensuring efficiency and growth.",
    },
    {
      name: "Digital Marketing",
      img: DigitalMarketing,
      content: "Enhance your online presence with our comprehensive digital marketing strategies. From SEO and content marketing to PPC and email campaigns, we help you reach and engage your target audience effectively.",
    },
    {
      name: "Social Media Handling",
      img: SocialMedia,
      content: "Stay connected with your audience through our expert social media management services. We create and curate content, manage your accounts, and build your brand’s online community, driving engagement and growth.",
    },
  ];

  const features = [
    {
      name: "Exceptional Quality",
      description: "We ensure top-notch quality in every project, utilizing the latest tools and techniques to deliver outstanding results.",
      icon: ShieldCheckIcon,
    },
    {
      name: "Timely Delivery",
      description: "We value your time and are committed to delivering your projects on schedule without compromising on quality.",
      icon: TruckIcon,
    },
    {
      name: "Client Satisfaction",
      description: "Your satisfaction is our priority. We work closely with you to understand your needs and exceed your expectations.",
      icon: FaceSmileIcon,
    },
    {
      name: "Innovative Solutions",
      description: "Our creative and technical expertise allows us to provide innovative solutions tailored to your business needs.",
      icon: FingerPrintIcon,
    },
  ];

  const stats = [
    { name: "Total Clients", value: "15+" },
    { name: "project Completed", value: "500+" },
    { name: "Hours per week", value: "40" },
    { name: "Full-time colleagues", value: "5+" },
  ];

  // const Team = [
  //   {
  //     name: "Hari Prasanth .S.N",
  //     role: "CEO & Founder",
  //     image: CEO
  //   },
  //   {
  //     name: "Prema .S",
  //     role: "Founder Member & Managing Director",
  //     image: XFounder
  //   },
  //   {
  //     name: "Kavin .C.S",
  //     role: "Head of Software Development",
  //     image: Developer
  //   },
  //   {
  //     name: "Malathi .A",
  //     role: "Chief Financial Officer",
  //     image: Finanace
  //   },

  // ]

  return (
    <div className="h-screen w-full bg-cover bg-center" style={{ backgroundImage: `url(${bgImg})`, width: '100%', backgroundColor: 'black' }}>
      <header>
        <nav className="fixed top-0 z-50 bg-black w-full  border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
          <div className="flex flex-wrap justify-between items-center mx-auto ">
            <main className="flex items-center">
              <img src={brandLogo} className="mr-3  w-[100px] sm:w-[200px]" alt="Flowbite Logo" />
              {/* <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white text-white">Nova Frames</span> */}
            </main>
            <div className="flex items-center lg:order-2">
              <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false" onClick={toggleMenu}>
                <span className="sr-only">Open main menu</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </button>
              <div className="hidden justify-between items-end w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                  <li>
                    <a href="#home" className="block py-2 pr-4 pl-3 text-gray-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Home</a>
                  </li>
                  <li>
                    <a href="#guaranteed" className="block py-2 pr-4 pl-3 text-gray-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Guaranteed</a>
                  </li>
                  <li>
                    <a href="#services" className="block py-2 pr-4 pl-3 text-gray-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Our Services</a>
                  </li>
                  <li>
                    <a href="#team" className="block py-2 pr-4 pl-3 text-gray-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Team</a>
                  </li>
                  <li>
                    <a href="#choose-us" className="block py-2 pr-4 pl-3 text-gray-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Choose Us</a>
                  </li>
                  <li>
                    <a href="#contact" className="block py-2 pr-4 pl-3 text-gray-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </nav>
      </header>

      <div
        className={`${isOpen ? 'block' : 'hidden'} z-50 fixed right-3 top-16  mt-0 bg-white dark:bg-gray-700 border border-gray-200 rounded-lg w-48 lg:hidden`}
        id="mobile-menu-2"
      >
        <ul className="flex text-white flex-col font-medium lg:flex-row lg:space-x-8 lg:mt-0">
          <div className="w-48 text-gray-700 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            <a href="#home">
              <button
                type="button"
                className="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border-b border-gray-200 rounded-t-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
                onClick={() => setIsOpen(false)}
              >
                Home
              </button>
            </a>
            <a href="#guaranteed">
              <button
                type="button"
                className="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border-b border-gray-200 rounded-t-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
                onClick={() => setIsOpen(false)}
              >
                Guaranteed
              </button>
            </a>
            <a href="#services">
              <button
                type="button"
                className="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border-b border-gray-200 rounded-t-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
                onClick={() => setIsOpen(false)}
              >
                Our Services
              </button>
            </a>
            {/* <a href="#team">
              <button
                type="button"
                className="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border-b border-gray-200 rounded-t-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
              >
                Team
              </button>
            </a> */}
            <a href="#choose-us">
              <button
                type="button"
                className="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border-b border-gray-200 rounded-t-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
                onClick={() => setIsOpen(false)}
              >
                Choose Us
              </button>
            </a>
            <a href="#contact">
              <button
                type="button"
                className="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border-b border-gray-200 rounded-t-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </button>
            </a>
          </div>
        </ul>
      </div>


      <section id="home" className="h-screen w-full" data-aos="zoom-out-up">
        <div className="  rounded-full px-3 py-1 flex flex-col md:mt-8 mt-4 justify-center items-center" >
          <h1 className="text-5xl font-bold mb-4 mt-16 ">
            <img src={brand} className="mr-3 md:h-32 sm:24 xs:16 " alt="Flowbite Logo" />
          </h1>
          <p className=" text-md text-white  md:w-1/2 w-full text-center">
            Welcome to Nova Frames, where creativity meets innovation. We are a full-service digital agency dedicated to bringing your vision to life through exceptional video editing, graphic designing, software development, digital marketing, and social media handling services. Our team of experts is committed to delivering high-quality results that exceed your expectations.
          </p>
          <div className="mt-8 relative rounded-full px-4  py-2 text-sm leading-6  ring-2 ring-blue hover:ring-blue-900/20 sm:bg-transparent bg-opacity-50 bg-black text-white">
            Let's create something extraordinary together!
          </div>
          <div className='mt-8'>
            <a href='#contact'>
              <button type="button" className=" animate-bounce text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800c">Get Started
              </button>
            </a>
          </div>
        </div>
      </section>
      <section id="guaranteed" className='w-full'>
        <div aria-hidden="true" className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
          <div
            style={{
              clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className=" mx-4 my-16" data-aos="fade-up" data-aos-duration="3000">
          <div className="bg-transparent ">
            <div className="">
              <div className="mx-auto max-w-2xl lg:text-center">
                <h2 className="text-base font-semibold leading-7 text-indigo-600">Guaranteed Confidence</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Empowering Your Vision: Confidence in Every Step of the Way</p>
                <p className="mt-6 text-lg leading-8 text-gray-600">Accelerate your business with our swift, top-quality services. Specializing in video editing, social media management, graphic design, and software development, we ensure rapid turnaround without compromising excellence</p>
              </div>
              <div className="mx-auto mt-8 max-w-2xl sm:mt-20 lg:mt-12 lg:max-w-4xl">
                <dl className="grid max-w-xl grid-cols-1 gap-x-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                  {features.map((feature) => (
                    <div key={feature.name} className="p-4 rounded-xl relative card pl-16">
                      <dt className="text-base font-semibold leading-7 text-gray-900">
                        <div className="absolute left-3 top-5 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                          <feature.icon aria-hidden="true" className="h-6 w-6 text-white" />
                        </div>
                        {feature.name}
                      </dt>
                      <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='bg-cover bg-opacity-50 bg-center' id="services" style={{ backgroundImage: `url(${CIRCLE})` }}>
        <div className='sm:m-16 m-4 p-4 sm:p-24 r'>
          <div className='flex justify-center items-center'>
            <div className='mb-12  text-3xl font-bold tracking-tight text-white sm:text-4xl'>Our Services</div>
          </div>
          <div className="grid grid-cols-1  md:grid-cols-2 gap-12 ">
            {/* <div className='text-white'>Our Services</div> */}
            {services.map((item: any, index) => {
              return (
                <div key={index} className="group" data-aos="zoom-out-up">
                  <div className="shadow-lg flex flex-col md:flex-row items-center px-7 py-6 bg-[#17171e] rounded-lg leading-none space-y-4 md:space-y-0 md:space-x-6 transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
                    <img
                      src={item.img}
                      alt="Service"
                      className="h-40 w-40 object-cover rounded-lg"
                    />
                    <div className="space-y-2 text-center md:text-left">
                      <div>
                        <h3 className="text-2xl text-white">{item.name}</h3>
                      </div>
                      <p className="text-lg text-[#a9a4abf7]">
                        {item.content}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section id="team" className="container mx-auto mt-16 sm:block  hidden" data-aos="fade-up" data-aos-duration="3000">
        <div className="text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet Our Team</p>
          <p className="my-8 lg:mb-16 font-light text-gray-500 dark:text-gray-400 sm:text-xl">
            Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 mt-10 place-items-center">
          {/* Team Member 1 */}
          <div className="relative grid h-[30rem] w-[21rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
            <div
              className="absolute inset-0 m-0 h-full w-full overflow-hidden bg-cover bg-center"
              style={{ backgroundImage: `url(${CEO})` }}
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-black/80 via-black/50"></div>
            </div>
            <div className="relative p-6 px-6 py-14 md:px-12">
              <h2 className="mb-6 text-3xl font-medium text-white">CEO & Founder</h2>
              <h5 className="text-xl font-semibold text-gray-400">Hari Prasanth .S.N</h5>
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="relative grid h-[30rem] w-[21rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
            <div
              className="absolute inset-0 m-0 h-full w-full overflow-hidden bg-cover bg-center"
              style={{ backgroundImage: `url(${XFounder})` }}
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-black/80 via-black/50"></div>
            </div>
            <div className="relative p-6 px-6 py-14 md:px-12">
              <h2 className="mb-6 text-2xl font-medium text-white">Co-Founder & Managing Director</h2>
              <h5 className="text-xl font-semibold text-gray-400">Prema .T</h5>
            </div>
          </div>

          {/* Team Member 3 */}
          <div className="relative grid h-[30rem] w-[21rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
            <div
              className="absolute inset-0 m-0 h-full w-full overflow-hidden bg-cover bg-center"
              style={{ backgroundImage: `url(${Developer})` }}
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-black/80 via-black/50"></div>
            </div>
            <div className="relative p-6 px-6 py-14 md:px-12">
              <h2 className="mb-6 text-2xl font-medium text-white">Co-Founder</h2>
              <h5 className="text-xl font-semibold text-gray-400">Kavin .C.S</h5>
            </div>
          </div>
        </div>
      </section>

      <section id="team" className="container  sm:hidden block mt-16 mx-auto " data-aos="fade-up" data-aos-duration="3000">
        <div className="flex  justify-center mb-8">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet Our Team</p>
        </div>
        <div className="w-full overflow-hidden">
          <Slider {...settings}>
            <div className="p-4">
              <div className="relative grid h-[35rem] w-full flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
                <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent  bg-cover bg-clip-border bg-center text-gray-700 shadow-none" style={{ backgroundImage: `url(${CEO})` }}>
                  <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
                </div>
                <div className="relative p-6 px-6 py-14 md:px-12">
                  <h2 className="mb-6 block font-sans text-3xl font-medium leading-[1.5] tracking-normal text-white antialiased">CEO & Founder</h2>
                  <h5 className="block mb-4 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-gray-400">Hari Prasanth .S.N</h5>
                </div>
              </div>
            </div>
            <div className="p-4">
              <div className="relative grid h-[35rem] w-full flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
                <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent  bg-cover bg-clip-border bg-center text-gray-700 shadow-none" style={{ backgroundImage: `url(${XFounder})` }}>
                  <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
                </div>
                <div className="relative p-6 px-6 py-14 md:px-12">
                  <h2 className="mb-6 block font-sans text-2xl font-medium leading-[1.5] tracking-normal text-white antialiased">Co-Founder & Managing Director</h2>
                  <h5 className="block mb-4 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-gray-400">Prema .T</h5>
                </div>
              </div>
            </div>
            <div className="p-4">
              <div className="relative grid h-[35rem] w-full flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
                <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent  bg-cover bg-clip-border bg-center text-gray-700 shadow-none" style={{ backgroundImage: `url(${Developer})` }}>
                  <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
                </div>
                <div className="relative p-6 px-6 py-14 md:px-12">
                  <h2 className="mb-6 block font-sans text-2xl font-medium leading-[1.5] tracking-normal text-white antialiased">Co-Founder</h2>
                  <h5 className="block mb-4 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-gray-400">Kavin .C.S</h5>
                </div>
              </div>
            </div>
            {/* <div className="p-4">
              <div className="relative grid h-[35rem] w-full flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
                <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent  bg-cover bg-clip-border bg-center text-gray-700 shadow-none" style={{ backgroundImage: `url(${Finanace})` }}>
                  <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
                </div>
                <div className="relative p-6 px-6 py-14 md:px-12">
                  <h2 className="mb-6 block font-sans text-2xl font-medium leading-[1.5] tracking-normal text-white antialiased">Chief Financial Officer</h2>
                  <h5 className="block mb-4 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-gray-400">Malathi .A</h5>
                </div>
              </div>
            </div> */}
          </Slider>
        </div>
      </section>




      <div>
        <div className="bg-white  md:pt-32 md:py-32 pt-16 py-16">
          <div className="mx-auto  px-6 lg:px-8">
            <h2 className="text-center font-bold leading-8 text-gray-900 sm:text-4xl text-3xl ">Clients Who Trust Us</h2>
            <h3 className='mt-4 font-bold text-center text-gray-500 dark:text-gray-400 sm:text-xl'>Our Brand Partners</h3>
            <div className=" max-w-full md:overflow-hidden overflow-y-hidden pb-4 overflow-scroll">
              <div className="overflow-x-auto whitespace-nowrap">
                <div className="flex justify-center space-x-4 ">
                  {clients1.map((item: any, index: number) => (
                    <div key={index} className="flex flex-col items-center">
                      <div className="h-42 w-52">
                        <img
                          alt="Transistor"
                          src={item.img}
                          className="md:h-full md:w-full object-cover"
                        />
                      </div>
                      <div className="text-center text-gray-600 font-bold">{item.name}</div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
            <div className='flex justify-end font-bold md:hidden '>
              scroll &nbsp; &nbsp; <svg className="w-6 h-6 text-black " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>

            </div>
            <h3 className='mt-4  font-bold text-center text-gray-500 dark:text-gray-400 sm:text-xl'>Our Creater Partners</h3>
            <div className="max-w-full overflow-hidden pb-4">
              <div className="flex w-max animate-marquee">
                {clients.concat(clients).map((item: any, index: number) => ( 
                  <div key={index} className="flex flex-col items-center mx-4">
                    <div className="h-42 w-52">
                      <img
                        alt="Transistor"
                        src={item.img}
                        className="md:h-full md:w-full object-cover"
                      />
                    </div>
                    <div className="text-center text-gray-600 font-bold">{item.name}</div>
                  </div>
                ))}
              </div>
            </div>
            {/* <div className='flex justify-end font-bold md:hidden '>
              scroll &nbsp; &nbsp; <svg className="w-6 h-6 text-black " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </div> */}
          </div>
        </div>
      </div>

      <section id="choose-us" className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
        <img alt="" src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply" className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center" />
        <div aria-hidden="true" className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl">
          <div
            style={{
              clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          />
        </div>
        <div aria-hidden="true" className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu">
          <div
            style={{
              clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8" data-aos="zoom-out-right">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Why choose us</h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">At Nova Frames, we believe in the power of creativity and technology to transform businesses. Our commitment to quality, innovation, and customer satisfaction sets us apart. We work closely with our clients to understand their needs and deliver customized solutions that drive results. Contact us today to see how Nova Frames can elevate your brand and help you achieve your business objectives. Let’s create something amazing together!</p>
          </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat: any) => (
                <div key={stat.name} className="flex flex-col-reverse">
                  <dt className="text-base leading-7 text-gray-300">{stat.name}</dt>
                  <dd className="text-2xl font-bold leading-9 tracking-tight text-white">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section id='contact' className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Us</h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
            Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.
          </p>
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
              <input type="email" name="from_name" id="from_name"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="name@gmail.com" required onChange={handleChange} value={formData.from_name} />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Phone number</label>
              <input type="number" name="phone_number" id="phone_number"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Ex : 9876543210" required onChange={handleChange} value={formData.phone_number} />
            </div>
            <div className="sm:col-span-2">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
              <textarea name="message" id="message"
                rows={6} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Leave a message..." required onChange={handleChange} value={formData.message} ></textarea>
            </div>
            <div className='mt-4 flex justify-center items-center'>


              <button
                disabled={!isFormValid}
                type="submit"
                className={`animate-pulse gap-4 flex justify-center items-center w-1/4 text-white font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:ring-4 focus:outline-none
      ${isFormValid ? 'bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                    : 'bg-gray-400 cursor-not-allowed dark:bg-gray-500'}`}
              >
                {
                  loading ? <div role="status">
                    <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                      <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                    </svg>
                    <span className="sr-only">Loading...</span>
                  </div>
                    :
                    <div>Submit</div>}
              </button>
            </div>


            {status && <p className="text-center text-blue-800 font-semibold">{status}</p>}
          </form>
        </div>


        <div className="flex items-center justify-between py-4 px-8" style={{ backgroundImage: `url(${CIRCLE})` }}>
          <div className="text-sm text-white sm:text-center dark:text-gray-400">© 2024 <a href="https://flowbite.com" className="hover:underline">NovaFrames™</a>. All Rights Reserved.
          </div>
          <div className="flex  space-x-6 sm:justify-center ">
            <a href="tel:8940479776">
              <svg className="w-5 h-5 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                <path d="M16 0H4a2 2 0 0 0-2 2v1H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6ZM13.929 17H7.071a.5.5 0 0 1-.5-.5 3.935 3.935 0 1 1 7.858 0 .5.5 0 0 1-.5.5Z" />
              </svg>
            </a>
            <a href="https://www.instagram.com/nova_.frames?igsh=NWVxYWttMzFkMW5s" className="text-white hover:blue dark:hover:text-white">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" /></svg>
            </a>
            <a
              href="https://wa.me/918940279776"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center"
            >
              <svg
                className="w-5 h-5 text-white hover:text-white transition-colors"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M17.472 14.382c-.297-.149-1.76-.867-2.031-.967-.271-.099-.469-.148-.667.149-.198.297-.767.966-.94 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.763-1.653-2.06-.173-.298-.018-.46.13-.609.134-.134.297-.347.446-.521.149-.173.198-.298.298-.496.099-.198.049-.372-.025-.521-.075-.149-.667-1.612-.916-2.213-.241-.579-.486-.501-.667-.511l-.566-.011c-.198 0-.52.074-.792.372-.271.298-1.038 1.014-1.038 2.477 0 1.462 1.063 2.876 1.211 3.074.149.198 2.095 3.201 5.077 4.486.709.306 1.26.489 1.691.626.71.226 1.356.194 1.87.118.57-.085 1.76-.719 2.009-1.413.248-.695.248-1.292.173-1.413-.074-.122-.271-.198-.57-.347zM12 2C6.477 2 2 6.477 2 12c0 1.658.403 3.22 1.114 4.6L2 22l5.532-1.148C8.776 21.598 10.337 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
export default App;
