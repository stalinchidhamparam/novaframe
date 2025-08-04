import {
  FaYoutube,
  FaTwitter,
  FaInstagram,
  FaFacebook,
  FaMailBulk,
  FaPhone,
  FaPhoneAlt,
} from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { Navigation } from "../utils/Navigation";
import { Mail } from "lucide-react";

const Footer = () => {

  const navigate = useNavigate();

  const socialLinks = [
    {
      icon: <Mail />,
      name: "Mail",
      link: "mailto:novaframes02@gmail.com",
      color: "text-[#D44638]" // Gmail red
    },
    {
      icon: <FaInstagram />,
      name: "Instagram",
      link: "https://www.instagram.com/nova_.frames?igsh=emxxNDd1ODNsdXBo",
      color: "text-[#E1306C]" // Instagram pink
    },
    {
      icon: <FaPhoneAlt />,
      name: "Phone",
      link: "tel:+918940279776",
      color: "text-[#34A853]" // Google call green / WhatsApp green
    },
    {
      icon: <FaFacebook />,
      name: "Facebook",
      link: "https://facebook.com/yourpage",
      color: "text-[#1877F2]" // Official Facebook blue
    }
  ];
  


  const columns = Navigation()

  return (
    <footer className="bg-black text-white px-6 md:px-20 py-16">
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-10">
        {socialLinks.map((item, i) => (
          <a
            key={i}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between border-b border-white/10 pb-2 transition-all"
          >
            <div className={`flex items-center gap-2 text-lg font-semibold ${item.color}`}>
              {
                item.name === 'Instagram' ? (
                  <span className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 text-white p-1 rounded-full">
                    {item.icon}
                  </span>
                ) : <span className="bg-white p-1 rounded-2xl">{item.icon}</span>
              }
              <span className="text-white">{item.name}</span>
            </div>
            <FiArrowRight className="text-white transform transition-transform duration-300 group-hover:translate-x-2" />
          </a>
        ))}
      </div>


      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-10 mt-12">
        {columns.map((col, i) => (
          <div key={i}>
            <h4 className="text-blue-400 text-sm mb-4">{col.title}</h4>
            <ul className="space-y-2 text-sm">
              {col.items.map((item, idx) => (
                <li key={idx} className="hover:text-blue-400 cursor-pointer"
                  onClick={() => navigate(item.to)} >
                  {item.label}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Brand and Newsletter */}
      <div className="mt-16 flex flex-col md:flex-row md:items-end md:justify-between gap-10">
        <div className="max-w-md space-y-4">
          <h2 className="text-2xl font-bold">NOVAFRAMES.</h2>
          <p className="text-gray-400 text-sm">
            In the new era of technology we look a in the future with certainty and pride to for our company and business.
          </p>
        </div>

        <div className="flex w-full md:w-auto items-center">
          <input
            type="email"
            placeholder="NAME@EMAIL.COM"
            className="px-4 py-3 rounded-l-md w-full md:w-72 text-black"
          />
          <button onClick={() => { navigate('contact') }} className="bg-white text-black px-5 py-3 rounded-r-md hover:cursor-pointer hover:bg-gray-300 transition">
            CONTACT
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
