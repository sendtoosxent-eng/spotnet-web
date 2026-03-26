'use client'
import SectionTitle from "../components/SectionTitle"
import { pricingData } from "../data/pricing";
import type { IPricing } from "../types";
import { CheckIcon } from "lucide-react";
import { motion } from "motion/react";

export default function PricingSection() {
    return (
        <div id="pricing" className="px-4 md:px-16 lg:px-24 xl:px-32">
            <SectionTitle text1="PRODUCTS" text2="Our Best Products." text3="At Spotnet Technologies, we take pride in building powerful digital products that help businesses grow, adapt, and succeed in today’s fast-paced world. Our solutions are designed with a strong focus on performance, simplicity, and user experience, ensuring that every product we deliver not only works efficiently but also creates real value. From custom software tailored to specific business needs to modern web and mobile applications, we develop systems that are reliable, scalable, and easy to use.

We also specialize in business automation solutions that reduce manual work and improve productivity, allowing organizations to operate smarter and faster. Our cloud-based platforms provide flexibility and accessibility, enabling users to manage their operations anytime and from anywhere. Every product we create is built using modern technologies and best practices, ensuring security, speed, and long-term sustainability." />

            <div className="flex flex-wrap items-center justify-center gap-8 mt-20">
                {pricingData.map((plan: IPricing, index: number) => (
                    <motion.div key={index} className={`w-72 text-center border border-pink-950 p-6 pb-16 rounded-xl ${plan.mostPopular ? 'bg-pink-950 relative' : 'bg-pink-950/30'}`}
                        initial={{ y: 150, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                    >
                        {plan.mostPopular && (
                            <p className="absolute px-3 text-sm -top-3.5 left-3.5 py-1 bg-pink-400 rounded-full">Most Popular</p>
                        )}
                        <h1 className="text-3xl font-semibold">{plan.name}</h1>
                        <h1 className="text-3xl font-semibold">${plan.price}<span className="text-gray-500 font-normal text-sm">/{plan.period}</span></h1>
                       <br></br>
                        <p className="font-semibold">{plan.Description}</p>
                        <ul className="list-none text-slate-300 mt-6 space-y-2">
                            {plan.features.map((feature, index) => (
                                <li key={index} className="flex items-center gap-2">
                                    <CheckIcon className="size-4.5 text-pink-600" />
                                    <p>{feature}</p>
                                </li>
                            ))}
                        </ul>
                        <button type="button" className={`w-full py-2.5 rounded-md font-medium mt-7 transition-all ${plan.mostPopular ? 'bg-white text-pink-600 hover:bg-slate-200' : 'bg-pink-500 hover:bg-pink-600'}`}>
                            View More
                        </button>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}