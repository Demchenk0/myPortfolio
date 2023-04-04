import React from 'react';
import ContactImg from '../assets/contact.jpg';

const Contact = () => {
	return (
		<div className="w-full h-full  text-gray-300 bg-[#0a192f] ">
			<div id="contact" className="w-full lg:h-screen">
				<div className="max-w-[1000px]  m-auto px-2 py-16 w-full text-[#ccd6f6] ">
					<p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
						Contact
					</p>
					<h2 className="py-4">Get In Touch</h2>
					<div className="grid lg:grid-cols-5 gap-8 bg-[#0a192f]">
						{/* left */}
						<div className="col-span-3 lg:col-span-2  w-full h-full p-4">
							<div className="lg:p-4 h-full  ">
								<div>
									<img
										className="rounded-xl  hover:scale-105 ease-in duration-300"
										src={ContactImg}
										alt="/"
									/>
								</div>
								<div>
									<h2 className="py-2">Clint Briley</h2>
									<p>Front-End Developer</p>
									<p className="py-4">
										I am available for freelance or full-time positions. Contact
										me and let&apos;s talk.
									</p>
								</div>
							</div>
						</div>

						{/* Right */}
						<div className="col-span-3 w-full h-auto lg:p-4">
							<div name="contact" className="p-4">
								<form
									method="POST"
									action="https://getform.io/f/b9f9619b-f219-4330-8531-1d8ad1344d29"
									className="flex flex-col max-w-[500px] w-full"
								>
									{/* <div className="pb-8">
									<p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
										Contact
									</p>
									<p className="text-gray-300 py-4">
										{' '}
										* You can contact me by filling out this form{' '}
									</p>
								</div> */}
									<input
										className=" bg-[#ccd6f6] p-2"
										type="text"
										placeholder="Name"
										name="name"
									/>
									<input
										className="my-4 p-2 bg-[#ccd6f6]"
										type="email"
										placeholder="Email"
										name="email"
									/>
									<textarea
										className="bg-[#ccd6f6] p-2"
										name="message"
										rows="10"
										placeholder="Message"
									></textarea>
									<button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">
										Let's Collaborate{' '}
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
