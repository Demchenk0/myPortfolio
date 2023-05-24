import React from 'react';
import Book from '../assets/book.jpg';
import IceCream from '../assets/icecream.jpg';
import Filmoteka from '../assets/filmoteka.jpg';
import PhotoProject from '../assets/photoProject.jpg';
import PhotoTest from '../assets/photoTest.jpg';
import DashBoard from '../assets/dashboard.jpg';

const Work = () => {
	return (
		<div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
			<div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full ">
				<div className="pb-8 ">
					<p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600 ">
						Work
					</p>
					<p className="py-6">*Chack out some of my recent work</p>
				</div>
				{/* Container */}
				<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
					{/* grid-item */}
					<div
						style={{ backgroundImage: `url(${Book})` }}
						className=" shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
					>
						{/* Hover effects */}
						<div className=" opacity-0 group-hover:opacity-100 p-3 text-justify">
							<span className=" text-base font-medium  text-white tracking-wider">
								This project is created for those who like reading books. Simple
								and easy to use for tracking your reading progress. It was made
								with JS, npm packages and SCSS
							</span>
							<div className="pt-8 text-center">
								<a href="https://demchenk0.github.io/BooksProject/">
									<button
										className="text-center rounded-lg px-4 py-3 m-2
                    bg-white text-gray-700 font-bold text-lg"
									>
										Demo
									</button>
								</a>
								<a href="https://github.com/Demchenk0/BooksProject">
									<button
										className="text-center rounded-lg px-4 py-3 m-2
                    bg-white text-gray-700 font-bold text-lg"
									>
										Code
									</button>
								</a>
							</div>
						</div>
					</div>
					<div
						style={{ backgroundImage: `url(${IceCream})` }}
						className=" shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
					>
						{/* Hover effects */}
						<div className=" opacity-0 group-hover:opacity-100 p-3 text-justify">
							<span className=" text-base font-medium text-white tracking-wider">
								This is a business card website for an ice cream manufacturer.
								Simple and easy-to-use one-page website. It was made using
								simple HTML and SASS.
							</span>
							<div className="pt-8 text-center">
								<a href="https://demchenk0.github.io/IceCream/">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
										Demo
									</button>
								</a>
								<a href="https://github.com/Demchenk0/IceCream">
									<button
										className="text-center rounded-lg px-4 py-3 m-2
                      bg-white text-gray-700 font-bold text-lg"
									>
										Code
									</button>
								</a>
							</div>
						</div>
					</div>{' '}
					<div
						style={{ backgroundImage: `url(${Filmoteka})` }}
						className=" shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
					>
						{/* Hover effects */}
						<div className=" opacity-0 group-hover:opacity-100 p-3 text-justify">
							<span className=" text-base font-medium text-white tracking-wider">
								Project about searching movies, and adding favorite movies to a
								client personal library. Role: Scrum master. Using pure JS,
								npm-packages and SCSS
							</span>
							<div className="pt-8 text-center">
								<a href="https://demchenk0.github.io/Filmoteka/">
									<button
										className="text-center rounded-lg px-4 py-3 m-2
                      bg-white text-gray-700 font-bold text-lg"
									>
										Demo
									</button>
								</a>
								<a href="https://github.com/Demchenk0/Filmoteka">
									<button
										className="text-center rounded-lg px-4 py-3 m-2
                      bg-white text-gray-700 font-bold text-lg"
									>
										Code
									</button>
								</a>
							</div>
						</div>
					</div>
					<div
						style={{ backgroundImage: `url(${PhotoProject})` }}
						className=" shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
					>
						{/* Hover effects */}
						<div className=" opacity-0 group-hover:opacity-100 p-3 text-justify">
							<span className=" text-base font-medium text-white tracking-wider">
							Project site gallery for personal photos. Using next.js, npm packages and Tailwind CSS.
							</span>
							<div className="pt-8 text-center">
								<a href="https://my-photo-project.netlify.app">
									<button
										className="text-center rounded-lg px-4 py-3 m-2
                      bg-white text-gray-700 font-bold text-lg"
									>
										Demo
									</button>
								</a>
								<a href="https://github.com/Demchenk0/myPortfolio">
									<button
										className="text-center rounded-lg px-4 py-3 m-2
                      bg-white text-gray-700 font-bold text-lg"
									>
										Code
									</button>
								</a>
							</div>
						</div>
					</div>{' '}
					<div
						style={{ backgroundImage: `url(${PhotoTest})` }}
						className=" shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
					>
						{/* Hover effects */}
						<div className=" opacity-0 group-hover:opacity-100 p-3 text-justify">
							<span className=" text-base font-medium text-white tracking-wider">
							This one-page website was a test task that was successfully completed. It was made with React, npm packages and SCSS
							</span>
							<div className="pt-8 text-center">
								<a href="https://lively-daifuku-588b66.netlify.app/">
									<button
										className="text-center rounded-lg px-4 py-3 m-2
                      bg-white text-gray-700 font-bold text-lg"
									>
										Demo
									</button>
								</a>
								<a href="https://github.com/Demchenk0/testsoftryzen">
									<button
										className="text-center rounded-lg px-4 py-3 m-2
                      bg-white text-gray-700 font-bold text-lg"
									>
										Code
									</button>
								</a>
							</div>
						</div>
					</div>
					<div
						style={{ backgroundImage: `url(${DashBoard})` }}
						className=" shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
					>
						{/* Hover effects */}
						<div className=" opacity-0 group-hover:opacity-100 p-3 text-justify">
							<span className=" text-base font-medium text-white tracking-wider">
							This multi-page website is designed for financial income control. It was made with Next.js, npm packages and SCSS.
							</span>
							<div className="pt-8 text-center">
								<a href="https://idyllic-pixie-b72dee.netlify.app/">
									<button
										className="text-center rounded-lg px-4 py-3 m-2
                      bg-white text-gray-700 font-bold text-lg"
									>
										Demo
									</button>
								</a>
								<a href="https://github.com/Demchenk0/UserDashboard">
									<button
										className="text-center rounded-lg px-4 py-3 m-2
                      bg-white text-gray-700 font-bold text-lg"
									>
										Code
									</button>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Work;
