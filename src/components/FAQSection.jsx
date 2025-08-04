import React, { useEffect, useRef, useState } from "react";
import { Plus, Minus } from "lucide-react";
import { db } from "../utils/firebase";
import { collection, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState(null);
    const contentRefs = useRef([]);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const [faqs,setFaqs] = useState([]);

    const fetchFaqs = async () => {
        const querySnapshot = await getDocs(collection(db, 'faqs'));
        const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setFaqs(data);
      };
    
      useEffect(() => {
        fetchFaqs();
      }, []);

      const navigate = useNavigate();

    return (
        <div className="mx-auto bg-black py-16 px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2
                className="text-3xl md:text-5xl text-white font-extrabold tracking-wide">
                    Frequently Asked Questions
                </h2>
                <p className="text-gray-300 mt-4 text-base md:text-lg max-w-2xl mx-auto">
                    Find answers to common questions about Alt+Shift's features, services, and setup.
                    For further assistance, our support team is always ready to help.
                </p>
            </div>
            <div className="grid  gap-6 max-w-6xl mx-auto">
                {faqs.map((faq, index) => {
                    const isOpen = openIndex === index;

                    return (
                        <div
                            key={index}
                            className=" transition-all "
                        >
                            <span className="text-white  hover:text-black" >
                            <button
                                className="w-full text-left px-6 py-5 hover:bg-blue-300 rounded-xl flex justify-between items-center focus:outline-none"
                                onClick={() => toggleFAQ(index)}
                                aria-expanded={isOpen}
                                aria-controls={`faq-${index}`}
                            >
                                <span className="text-lg font-medium ">{faq.question}</span>
                                {isOpen ? (
                                    <Minus size={20} />
                                ) : (
                                    <Plus size={20} />
                                )}
                            </button>
                                </span>

                            <div
                                id={`faq-${index}`}
                                ref={(el) => (contentRefs.current[index] = el)}
                                style={{
                                    height: isOpen
                                        ? `${contentRefs.current[index]?.scrollHeight}px`
                                        : "0px",
                                }}
                                className="transition-all duration-500 overflow-hidden"
                            >
                                <div className="px-6 pb-5 text-gray-300">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="text-center mt-12">
                <p className="text-gray-300">
                    Still have questions?{" "}
                    <span onClick={()=>navigate('/contact')} className="text-blue-500 hover:text-blue-300 font-medium">
                        Contact our support team
                    </span>
                </p>
            </div>
        </div>
    );
}