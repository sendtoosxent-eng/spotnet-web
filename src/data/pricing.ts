import type { IPricing } from "../types";

export const pricingData: IPricing[] = [
    {
        name: "XPOS",
        price: 29,
        period: "month",
        Description:"Experience the best POS Services with our software that streamlines your Day - to -day Businesses activities ",
        features: [
            "Automated Accounting",
            "Inventory Management",
            "Stock Management",
            "Efficient Reporting ",
            "Prior Support"
            
        ],
        mostPopular: false
    },
    {
        name: "EDLINK",
        price: 79,
        Description:"A one real time software for Primary schools that provides seamless workflow of the School operations ",
        period: "month",
        features: [
            "Online Student Management",
            "Online Exam Management",
            "Online Staff Management",
            "Exam Monitoring",
            "Advanced Accounting",
            "Efficient Reporting",
            "Cloud Based Data storage"
        ],
        mostPopular: true
    },
    {
        name: "NXT-EMS",
        price: 199,
        Description:"A Premium Employee Managements software to stramline your Business and bost productivity",
        period: "month",
        features: [
            "Track employee performance",
            "Dedicated support",
            "Track On site projects",
            "Manage salaries",
            "Leave Management"
        ],
        mostPopular: false
    }
];