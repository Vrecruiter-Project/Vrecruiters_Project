import React from 'react';
import GlobalMultiCards from '../../../../../components/pageComponent/GlobalMultiCards';

export default function SolutionsPage() {

    const cardData = [
        { title: 'Search Engine Optimization', description: 'Boost your website’s visibility and drive organic traffic with expert SEO services. We specialize in on-page, off-page, and technical SEO to improve your search engine rankings and grow your business.' },
        { title: 'Content Marketing', description: 'Engage and convert your audience with strategic content marketing. We create high-quality, SEO-friendly content that drives traffic, builds brand authority, and boosts conversions.' },
        { title: 'Social Media Marketing', description: 'Grow your brand and engage your audience with targeted social media marketing. We create data-driven strategies and compelling content to boost your online presence and drive results' },
        { title: 'Pay-Per-Click Advertising', description: 'Maximize your ROI with targeted Pay-Per-Click advertising. Our expert PPC campaigns drive immediate traffic, increase conversions, and help you reach your ideal customers on Google, Bing, and social media.' },
        { title: 'Email Marketing', description: 'Boost engagement and drive sales with strategic email marketing. We create personalized, data-driven email campaigns that nurture leads, retain customers, and maximize your ROI.' },
        { title: 'E-commerce Marketing', description: "Enhance your online store’s success with expert e-commerce marketing. We drive traffic, boost conversions, and increase revenue through targeted strategies and data-driven insights." },
    ];

    return (
        <>
        <GlobalMultiCards 
        cardData={cardData} 
        MainTitle = "digital marketing solutions!"
         />
        </>
    );
}
