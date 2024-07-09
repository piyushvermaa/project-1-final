"use client";
import React, { useState, useEffect } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import { Clock, Speaker, Users } from "react-feather";

const CoursePage: React.FC = () => {
  const [activeLesson, setActiveLesson] = useState<number | null>(null);
  const [reviews, setReviews] = useState<
    { username: string; review: string }[]
  >([]);
  const [newReview, setNewReview] = useState<{
    username: string;
    review: string;
  }>({
    username: "",
    review: "",
  });

  const handleLessonToggle = (index: number) => {
    setActiveLesson(activeLesson === index ? null : index);
  };

  const handleReviewSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (newReview.review.trim() !== "" && newReview.username.trim() !== "") {
      setReviews([...reviews, newReview]);
      setNewReview({ username: "", review: "" });
    }
  };

  // Mock reviews data
  useEffect(() => {
    const mockReviews = [
      { username: "Aditya", review: "Wow, what a great course!" },
      {
        username: "Sushila",
        review: "Very nice teaching and good way of explaining.",
      },
      {
        username: "Rahul",
        review: "Had a very good experience learning. Thank you!",
      },
      {
        username: "Mahima",
        review: "Got help in understanding, thank you. Very good.",
      },
      {
        username: "Sunil",
        review: "Great course, the best. Wow, what a time!",
      },
    ];

    setReviews(mockReviews);
  }, []);

  useEffect(() => {
    // gsap.from(".fade-in", { opacity: 0, y: 50, duration: 1, stagger: 0.3 });
  }, []);

  return (
    <div
      className="min-h-screen p-6 text-black"
      style={{ backgroundImage: "url(/bg.png)" }}
    >
      <div className="max-w-6xl mx-auto bg-gradient-to-br from-[#b68e42] via-[#ffffff37] to-transparent bg-opacity-100 border border-black shadow-lg rounded-lg overflow-hidden fade-in flex flex-col lg:flex-row">
        <div className="lg:w-2/3 p-6 fade-in bg-white bg-opacity-30 backdrop-blur-sm">
          <h1 className="text-3xl font-bold mb-4 text-brown-900">
            Tabla Tunes: Mastering the Rhythms
          </h1>
          <div className="flex items-center mb-4">
            <span className="text-xl font-semibold text-brown-700">
              ⭐⭐⭐⭐⭐ (4.8/5)
            </span>
            <span className="ml-4 text-brown-600">
              ({reviews.length} reviews)
            </span>
          </div>
          
          <h2 className="text-xl font-semibold mb-2 text-brown-700">
            Course Overview
          </h2>
          <p className="mb-4 text-brown-600">
            Discover the art of tabla with our comprehensive course. Perfect for
            all levels, our curriculum covers rhythm techniques, performance
            skills, and more.
          </p>
          <div className="flex justify-around flex-wrap">
            <div className="flex items-center mb-4 text-brown-600">
              <Clock size={20} className="mr-2" />
              <span>Duration: 12 weeks</span>
            </div>
            <div className="flex items-center mb-4 text-brown-600">
              <Speaker size={20} className="mr-2" />
              <span>Live Lectures: 10</span>
            </div>
            <div className="flex items-center mb-4 text-brown-600">
              <Users size={20} className="mr-2" />
              <span>Students Enrolled: 772</span>
            </div>
          </div>
          <h2 className="text-xl font-semibold mb-2 text-brown-700">
            Educator
          </h2>
          <div className="flex items-center mb-4">
            <Image
              src="/avatar.jpg"
              alt="Salman Usmani"
              width={100}
              height={100}
              className="rounded-full"
            />
            <p className="ml-4 text-brown-600 text-justify">
              Led by renowned tabla maestro Salman Usmani, who has over 20 years
              of experience in the music industry. Salman has mastered various
              Indian classical instruments and has performed globally.
            </p>
          </div>
          <h2 className="text-xl font-semibold mb-2 text-brown-700">Lessons</h2>
          <ul className="mb-4 text-brown-600">
            {[
              "Introduction to Tabla",
              "Basic Rhythms",
              "Advanced Techniques",
              "Performance Skills",
              "Live Performance Practice",
            ].map((lesson, index) => (
              <li
                key={index}
                className="mb-2 border border-black rounded-md shadow-sm"
              >
                <button
                  className="flex items-center justify-between w-full p-2 text-left bg-brown-100 rounded-md hover:bg-brown-200 transition duration-300"
                  onClick={() => handleLessonToggle(index)}
                >
                  {lesson}
                  <span className="ml-2">
                    {activeLesson === index ? "▲" : "▼"}
                  </span>
                </button>
                {activeLesson === index && (
                  <p className="mt-2 p-2 bg-brown-50 rounded-md text-sm text-black">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consectetur ipsum est atque odio quae? Molestias architecto
                    labore impedit officia ducimus dolore maxime fuga.
                    Perspiciatis reiciendis laudantium porro, rerum excepturi
                    iste! {lesson.toLowerCase()}.
                  </p>
                )}
              </li>
            ))}
          </ul>
          <h2 className="text-xl font-semibold mb-2 text-brown-700">
            Prerequisites
          </h2>
          <p className="mb-4 text-brown-600">
            No prior experience required. A passion for music is all you need.
          </p>
          {/* Review Form Section */}
          <div className="max-w-6xl mx-auto mt-8">
            <h2 className="text-2xl font-semibold mb-4 text-brown-700">
              Add Your Review
            </h2>
            <form
              onSubmit={handleReviewSubmit}
              className="flex flex-col w-full max-w-md"
            >
              <input
                type="text"
                placeholder="Your Name"
                value={newReview.username}
                onChange={(e) =>
                  setNewReview({ ...newReview, username: e.target.value })
                }
                className="w-full p-2 mb-2 border border-black rounded-md shadow-sm bg-white"
              />
              <textarea
                className="w-full p-2 mb-2 border border-black rounded-md shadow-sm bg-white"
                rows={3}
                placeholder="Add your review..."
                value={newReview.review}
                onChange={(e) =>
                  setNewReview({ ...newReview, review: e.target.value })
                }
              ></textarea>
              <button
                type="submit"
                className="bg-[#614412] text-white px-4 py-2 rounded-lg shadow hover:bg-brown-800 transition duration-300 w-full"
              >
                Submit Review
              </button>
            </form>
          </div>
        </div>
        <div className="lg:w-1/3 flex flex-col items-center p-6 fade-in bg-white bg-opacity-30 backdrop-blur-sm">
          <Image
            src="/Hero-sec.jpg"
            alt="Singing Academy"
            width={400}
            height={400}
            objectFit="cover"
            className="rounded-lg mb-4"
          />
          <div className="p-4 rounded-lg bg-opacity-50 border border-black shadow-sm mb-4">
            <h2 className="text-xl font-semibold mb-2 text-brown-700">
              Pricing
            </h2>
            <p className="mb-4 text-brown-600">
              Rs. 6000/- <br /> One-time payment for lifetime access
            </p>
            <button className="bg-[#614412] text-white px-4 py-2 rounded-lg shadow hover:bg-brown-800 transition duration-300 w-full">
              Enroll Now
            </button>
            <p className="mt-2 text-sm text-gray-700 text-center">
              Have questions? Contact us at{" "}
              <a href="tel:+1234567890" className="text-gray-900">
                +1234567890
              </a>
            </p>
          </div>
          {/* Display Reviews Section */}
          <div className="max-w-6xl mx-auto mt-8 p-3 border border-black shadow-sm rounded-md">
            <h2 className="text-2xl font-semibold mb-4 text-brown-700">
              Reviews
            </h2>
            <ul className="mb-4 text-brown-600">
              {reviews.map((review, index) => (
                <li key={index} className="mb-2">
                  <p className="font-semibold">{review.username}</p>
                  <p className="mb-2 text-black text-sm">{review.review}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePage;
