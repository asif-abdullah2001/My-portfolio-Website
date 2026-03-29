'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import Link from "next/link"

const swiperOptions = {
	modules: [Autoplay, Navigation, Pagination],
	slidesPerView: 2,
	spaceBetween: 30,
	slidesPerGroup: 1,
	centeredSlides: false,
	loop: true,
	autoplay: {
		delay: 5000,
	},
	breakpoints: {
		1200: {
			slidesPerView: 2,
		},
		992: {
			slidesPerView: 2,
		},
		768: {
			slidesPerView: 1,
		},
		576: {
			slidesPerView: 1,
		},
		0: {
			slidesPerView: 1,
		},
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
}

const recommendations = [
	{
		name: "Tahsina Sabrin",
		role: "SQA Engineer | Automation & Manual Testing | API Testing | Cypress | Selenium",
		relation: "January 21, 2026, Tahsina worked with Asif on the same team",
		linkedin: "https://www.linkedin.com/in/tahsina-sabrin-ba8ba9210?utm_source=share_via&utm_content=profile&utm_medium=member_android",
		initials: "TS",
		id: 1,
		text: "Asif is a detail-oriented and reliable SQA professional with strong communication skills and a clear understanding of quality-driven product delivery."
	},
	{
		name: "Md. Shaidur Rahman Tanzid",
		role: "Junior Software Engineer",
		relation: "January 21, 2026, Md. Shaidur worked with Asif on the same team",
		linkedin: "https://www.linkedin.com/in/md-shaidur-rahaman-18ab2024b?utm_source=share_via&utm_content=profile&utm_medium=member_android",
		initials: "SR",
		id: 2,
		text: "I had the pleasure of working with Asif Abdullah, and I can confidently say he is an exceptional Software Quality Assurance professional. He possesses a sharp analytical mindset, excelling at deconstructing requirements and identifying critical edge cases to ensure a bug-free product. Beyond his technical skills, Asif Abdullah is a proactive and collaborative team player who consistently goes the extra mile. He maintains high standards and is someone you can truly rely on for accuracy and quality. I highly recommend him to any team looking for a committed and capable SQA expert."
	},
	{
		name: "MD. Shafiqul Islam",
		role: "Java Developer | Flutter Developer | Springboot | Spring | Mobile App Security",
		relation: "January 21, 2026, MD. Shafiqul worked with Asif on the same team",
		linkedin: "https://www.linkedin.com/in/shafique01934776188?utm_source=share_via&utm_content=profile&utm_medium=member_android",
		initials: "SI",
		id: 3,
		text: "I am working with Asif Abdullah, an SQA Engineer, and he is skilled in both manual and automation testing. He is detail-oriented, proactive, and contributes effectively to ensuring product quality. I recommend Asif as a reliable QA professional."
	},
	{
		name: "Md. Sakib Hossain",
		role: "Software Engineer at Business Automation Ltd | Flutter Developer | Firebase | REST APIs",
		relation: "January 21, 2026, Md. Sakib worked with Asif on the same team",
		linkedin: "https://www.linkedin.com/in/sakib-hossin?utm_source=share_via&utm_content=profile&utm_medium=member_android",
		initials: "SH",
		id: 4,
		text: "I have truly enjoyed working alongside Asif Abdullah in our team. He is an exceptional SQA Engineer with strong expertise in both manual and automation testing. Asif is highly detail-oriented, proactive, and consistently ensures that products meet the highest quality standards. He collaborates effectively with the team, identifies issues early, and contributes to smooth and reliable releases. I highly recommend Asif as a dedicated and skilled QA professional."
	},
	{
		name: "Shafiun Miraz",
		role: "Infrastructure Architect | Go Engineer | DevOps & SRE Engineer | PhD Researcher at Rajshahi University of Engineering & Technology | Kubernetes, Cloud-Native & Distributed Systems Engineer",
		relation: "March 28, 2026, Shafiun worked with Asif but on different teams",
		linkedin: "https://www.linkedin.com/in/shafiunmiraz/",
		initials: "SM",
		id: 5,
		text: "I worked with him at Business Automation Ltd, where he consistently demonstrated strong expertise in Software Quality Assurance and a deep commitment to delivering high-quality products. He has extensive experience working across multiple projects, handling both manual and automated testing with great efficiency. His understanding of test planning, test case design, bug tracking, and quality standards ensures that applications are reliable and meet business requirements. He is also skilled in automation testing, helping improve testing efficiency and coverage while reducing manual effort. His attention to detail and ability to identify critical issues early in the development cycle significantly contributed to the overall product quality. In addition, he is highly collaborative and communicates effectively with developers and stakeholders, ensuring smooth coordination throughout the development lifecycle. I am highly satisfied with his work and confidently recommend him for any SQA or QA automation role requiring strong analytical skills and a quality-driven mindset."
	}
]

export default function Recommendations1() {
	return (
		<>
			<section id="recommendations" className="section-testimonials-1 position-relative pt-120 pb-120 bg-900 overflow-hidden">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="text-center mb-8">
								<h3 className="ds-3 mt-3 mb-3 text-primary-1">Professional Recommendations</h3>
								<p className="fs-5 fw-medium text-200">
									What my colleagues and partners say about our collaboration <br className="d-none d-md-block" />
									and the quality of work delivered.
								</p>
							</div>

							<div className="row mt-8">
								<Swiper {...swiperOptions} className="swiper slider-2 pt-2 pb-5">
									<div className="swiper-wrapper">
										{recommendations.map((item) => (
											<SwiperSlide key={item.id}>
												<div className="bg-6 card-testimonial-1 p-lg-6 p-md-5 p-4 mx-2 border border-secondary rounded-4 position-relative h-100 d-flex flex-column justify-content-between transition-all hover-up shadow-sm">
													<div className="quote-icon mb-4">
														<svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 52 52" fill="none" opacity="0.2">
															<path d="M0 29.7144H11.1428L3.71422 44.5715H14.8571L22.2857 29.7144V7.42871H0V29.7144Z" fill="currentColor" />
															<path d="M29.7148 7.42871V29.7144H40.8577L33.4291 44.5715H44.5719L52.0005 29.7144V7.42871H29.7148Z" fill="currentColor" />
														</svg>
													</div>

													<div className="testimonial-content">
														<p className="text-300 fs-6 mb-5 font-italic lh-lg">
															"{item.text}"
														</p>
													</div>

													<div className="d-flex align-items-center mt-auto pt-4 border-top border-secondary-subtle">
														<div className="avatar-initials icon_50 bg-linear-2 rounded-circle d-flex align-items-center justify-content-center text-white fw-bold fs-5 shadow-sm">
															{item.initials}
														</div>
														<div className="ms-3 text-start w-100">
															<div className="d-flex align-items-center mb-1">
																<span className="mb-0 fs-6 fw-bold me-2" style={{ color: '#ffffff', display: 'block', WebkitTextFillColor: '#ffffff', opacity: 1, textShadow: '0 0 1px rgba(255,255,255,0.5)' }}>
																	{item.name}
																</span>
																<Link href={item.linkedin} target="_blank" className="text-decoration-none hover-primary-1 transition-all d-inline-flex align-items-center">
																	<i className="ri-linkedin-box-fill text-primary-1 fs-5" style={{ fontSize: '1.25rem' }}></i>
																</Link>
															</div>
															<p className="mb-1 text-primary-1 fs-7 fw-semibold lh-sm">{item.role}</p>
														</div>
													</div>
												</div>
											</SwiperSlide>
										))}
									</div>
									<div className="swiper-pagination mt-4" style={{ position: 'relative', bottom: '0' }} />
								</Swiper>
							</div>
						</div>
					</div>
				</div>

				{/* Background Decoration */}
				<div className="position-absolute top-0 start-0 w-100 h-100 z-0 opacity-10 pointer-events-none">
					<div className="position-absolute top-10 start-10 bg-primary-1 rounded-circle blur-3xl shadow-lg" style={{ width: '300px', height: '300px', filter: 'blur(100px)' }} />
					<div className="position-absolute bottom-10 end-10 bg-secondary rounded-circle blur-3xl shadow-lg" style={{ width: '300px', height: '300px', filter: 'blur(100px)' }} />
				</div>
			</section>
		</>
	)
}
