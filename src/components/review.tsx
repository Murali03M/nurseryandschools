import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const reviews = [
  {
    text: "Amazing nursery, never had any issues.",
    name: "Michael Gough",
    title: "CEO ",
    image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
  },
  {
    text: "Excellent facilities and great staff.",
    name: "Sarah Johnson",
    title: "HR Manager at Amazon",
    image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
  },
  {
    text: "My child loves it here. Highly recommend!",
    name: "John Doe",
    title: "Software Engineer at Facebook",
    image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
  },
  {
    text: "Safe and nurturing environment.",
    name: "Jane Smith",
    title: "Product Manager at Apple",
    image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
  },
  {
    text: "Great experience, friendly staff!",
    name: "Emily Davis",
    title: "Marketing Specialist at Twitter",
    image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
  },
  {
    text: "Highly professional and caring.",
    name: "David Brown",
    title: "Consultant at Microsoft",
    image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
  }
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: true,
};

const ReviewCarousel:React.FC = () => {
  return (
    <div className="mt-12">
      <h1 className="text-center text-3xl font-bold mb-6">Latest Reviews</h1>
      <section className="bg-white dark:bg-gray-900">
        <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
          <Slider {...settings}>
            {reviews.map((review, index) => (
              <div key={index}>
                <figure className="max-w-screen-md mx-auto">
                  <svg className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/>
                  </svg>
                  <blockquote>
                    <p className="text-2xl font-medium text-gray-900 dark:text-white">{review.text}</p>
                  </blockquote>
                  <figcaption className="flex items-center justify-center mt-6 space-x-3">
                    <img className="w-6 h-6 rounded-full" src={review.image} alt={`${review.name} profile picture`} />
                    <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                      <div className="pr-3 font-medium text-gray-900 dark:text-white">{review.name}</div>
                      <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">{review.title}</div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </div>
  );
};

export default ReviewCarousel;
