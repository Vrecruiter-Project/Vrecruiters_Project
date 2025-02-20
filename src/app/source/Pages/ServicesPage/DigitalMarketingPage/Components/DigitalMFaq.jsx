import React from 'react';
import GlobalFaq from '../../../../../components/faq/GlobalFaq.jsx';

const DigitalMFaq = () => {
    const faqItems = [
        {
            id: 1,
            question: "WHAT IS DIGITAL MARKETING ?",
            answer: "Digital marketing is the strategic use of online channels and technologies to promote products, services, and brands, enabling businesses to reach and engage their target audience effectively"
        },
        {
            id: 2,
            question: "WHAT DOES A DIGITAL MARKETER DO ?",
            answer: "Digital marketers create and execute online campaigns to promote brands, analyze performance data, and engage target audiences across various digital platforms for business growth."
        },
        {
            id: 3,
            question: "WOULD MY BUSINESS BENEFIT FROM DIGITAL MARKETING SERVICES ?",
            answer: "Yes, your business would likely benefit from digital marketing services. By increasing your online presence and reaching potential customers through targeted strategies like SEO, social media, and content marketing, you can attract more leads, boost sales, and grow your business"
        },
        {
            id: 4,
            question: "HOW COST-EFFECTIVE IS DIGITAL MARKETING COMPARED WITH TRADITIONAL MARKETING ?",
            answer: "Digital marketing is significantly more cost-effective than traditional marketing, offering targeted reach, measurable results, and lower overall expenses for businesses"
        },
        {
            id: 5,
            question: "HOW DO YOU IDENTIFY A SUCESSFUL DIGITAL MARKETING COMPANY ?",
            answer: "To identify a successful digital marketing company, look for proven results, diverse service offerings, strong client communication, and positive testimonials from past clients."
        },
    ]
    return (
        <> 
                <GlobalFaq
                    id= "DigitalMarketingFAQ"
                    faqItems={faqItems}
                />
        </>
    )
}

export default DigitalMFaq;