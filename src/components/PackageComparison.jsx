import React, { useEffect, useState } from "react";
import { Check, Link, Star, Zap } from "lucide-react";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { motion } from 'framer-motion';
import { db } from "../utils/firebase";


const PackageComparison = () => {
    const navigate = useNavigate();
    const [hoveredCard, setHoveredCard] = useState(null);
    const [packages, setPackages] = useState([]);

    useEffect(() => {
        const fetchPackages = async () => {
            try {
                const packagesCollection = collection(db, 'packages');
                const packagesSnapshot = await getDocs(packagesCollection);
                const data = packagesSnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));

                // Convert price like "25K", "1L" to numbers for proper sorting
                const parsePrice = (price) => {
                    if (typeof price === 'string') {
                        const lower = price.toLowerCase().trim();
                        if (lower.endsWith('k')) return parseFloat(lower) * 1000;
                        if (lower.endsWith('l')) return parseFloat(lower) * 100000;
                        return parseFloat(lower);
                    }
                    return price;
                };

                const sortedData = data.sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
                console.log(sortedData, 'sorted packages');

                setPackages(sortedData);
            } catch (error) {
                console.error('Error fetching packages:', error);
            }
        };

        fetchPackages();
    }, []);


    return (
        <section id="PackageComparison" className="bg-black text-white py-10 px-4 sm:px-8">
            <div className="mx-auto">
                <div className="text-center mb-16 mt-10">
                    <span className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-900/50 text-indigo-300 text-sm font-medium mb-4">
                        <Zap className="w-4 h-4 mr-2" /> Pricing Plans
                    </span>
                    <div className="text-center mb-12">
                        <h2
                            className="text-3xl md:text-5xl text-white font-extrabold tracking-wide">
                            Find The Perfect Package
                        </h2>
                    </div>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Whether you're starting out or scaling up, choose a package that grows with your business needs.
                    </p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {packages.map((pkg, idx) => (
                        <div
                            key={idx}
                            className={clsx(
                                "rounded-xl border transition-all duration-300 p-6 flex flex-col justify-between relative overflow-hidden",
                                pkg.highlighted
                                    ? "border-indigo-500 bg-gradient-to-b from-gray-900 to-gray-950 shadow-lg shadow-indigo-500/20 transform scale-[1.02]"
                                    : "border-gray-800 bg-gray-900 hover:border-gray-600 hover:shadow-xl hover:shadow-gray-900/20",
                                hoveredCard === idx && !pkg.highlighted ? "border-gray-600 shadow-xl shadow-gray-900/20" : ""
                            )}
                            onMouseEnter={() => setHoveredCard(idx)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            {pkg.highlighted && (
                                <div className="absolute top-0 right-0 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg flex items-center">
                                    <Star className="w-3 h-3 mr-1" /> POPULAR
                                </div>
                            )}

                            <div>
                                <h3 className={clsx(
                                    "text-2xl font-bold mb-2",
                                    pkg.highlighted ? "text-indigo-300" : "text-white"
                                )}>
                                    {pkg.name}
                                </h3>

                                <p className="text-gray-400 text-sm mb-4">{pkg.bestFor}</p>

                                {/* <div className="mb-6">
                                    <div className="flex items-end justify-center">
                                        <span className="text-3xl font-bold">₹{pkg.price}</span>
                                        <span className="text-gray-400 ml-1 text-sm"> {pkg.billing}</span>
                                    </div>
                                </div> */}

                                <ul className="space-y-3 mb-6">
                                    {pkg.features.map((feature, i) => (
                                        <li key={i} className="flex items-start text-sm">
                                            <Check className={clsx(
                                                "h-4 w-4 mt-1 mr-2 flex-shrink-0",
                                                pkg.highlighted ? "text-indigo-300" : "text-green-400"
                                            )} />
                                            <span className={pkg.highlighted ? "text-gray-100" : "text-gray-300"}>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mt-auto pt-4 border-t border-gray-800">
                                <button
                                    className={clsx(
                                        "w-full py-3 cursor-pointer rounded-lg font-medium transition-all duration-200 flex items-center justify-center",
                                        pkg.highlighted
                                            ? "bg-indigo-600 text-white hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-500/30"
                                            : "bg-gray-800 text-white hover:bg-gray-700 hover:shadow-lg hover:shadow-gray-900/20"
                                    )}
                                    onClick={() => navigate("/package-details", { state: { selectedPackage: pkg } })}
                                >

                                    {pkg.button}
                                    {pkg.highlighted && <Zap className="w-4 h-4 ml-2" />}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <p className="text-gray-400 text-sm">
                        Need custom solutions? <span onClick={() => { navigate('/contact') }} className="text-indigo-400 hover:cursor-pointer hover:text-indigo-300 underline">Contact our team</span> for tailored packages.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default PackageComparison;