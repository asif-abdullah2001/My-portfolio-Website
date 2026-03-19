
import Link from "next/link"

export default function Home1() {
	return (
		<>

			<section className="section-hero-1 position-relative pt-120 pb-120 overflow-hidden">
				<div className="container position-relative z-3">
					<div className="row">
						<div className="col-lg-6 col-md-12">
							<span className="text-dark">Hello! I’m Asif Abdullah.</span>
							<h1 className="ds-2 mb-3 font-stylish">Ensuring Software Quality Through <span className="text-primary-1">Smart Testing</span></h1>
							<p className="text-300 mb-6">I’m an SQA Engineer specializing in web and mobile automation, along with REST API and database testing, to deliver reliable and bug-free products</p>
							<div className="d-flex flex-column flex-sm-row gap-3 align-items-start">
								<Link href="/assets/imgs/work/Curriculum Vita -Asif Abdullah.pdf" className="btn btn-gradient" target="_blank" download>
									Download CV
									<i className="ri-download-line ms-2" />
								</Link>
								<Link href="/#contact" className="btn btn-gradient d-inline-flex align-items-center">
									<span>Contact me</span>
									<i className="ri-arrow-right-line ms-2" />
								</Link>
							</div>

							{/* Social Icons for Mobile */}


							<p className="text-400 mt-6 mb-3">Expertise in industry-standard tools</p>
							<div className="d-flex gap-3">
								<div className="brand-logo icon-xl icon-shape rounded-3 bg-900 p-1">
									<img src="/assets/imgs/cypress.svg" alt="Cypress" className="w-100 h-100 object-fit-contain" />
								</div>
								<div className="brand-logo icon-xl icon-shape rounded-3 bg-900 p-1">
									<img src="/assets/imgs/brands/brands-1/Playwright--Streamline-Svg-Logos.svg" alt="Playwright" className="w-100 h-100 object-fit-contain" />
								</div>
								<div className="brand-logo icon-xl icon-shape rounded-3 bg-900 p-1">
									<img src="/assets/imgs/appium.png" alt="Appium" className="w-100 h-100 object-fit-contain" />
								</div>
								<div className="brand-logo icon-xl icon-shape rounded-3 bg-900 p-1">
									<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" alt="Postman" className="w-100 h-100 object-fit-contain" />
								</div>
								<div className="brand-logo icon-xl icon-shape rounded-3 bg-900 p-1">
									<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" alt="MySQL" className="w-100 h-100 object-fit-contain" />
								</div>
								<div className="brand-logo icon-xl icon-shape rounded-3 bg-900 p-1">
									<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" alt="Figma" className="w-100 h-100 object-fit-contain" />
								</div>
							</div>
						</div>
						<div className="col-lg-6 col-md-12 d-none d-lg-block">
							<div className="shape-1 position-relative z-1">
								{/* Floating Cards Design */}
								<div className="position-relative mx-auto" style={{ width: '450px', minHeight: '750px' }}>
									{/* Card 1 - Manual Testing */}
									<div className="position-absolute floating-card" style={{
										top: '20px',
										left: '0',
										width: '320px',
										background: 'linear-gradient(135deg, #059669 0%, #10b981 100%)',
										borderRadius: '24px',
										padding: '25px',
										boxShadow: '0 20px 60px rgba(5, 150, 105, 0.4)',
										transform: 'rotate(-5deg)',
										zIndex: 3,
										border: '1px solid rgba(255, 255, 255, 0.2)'
									}}>
										<div className="d-flex align-items-center mb-3">
											<div className="icon-xl icon-shape rounded-circle bg-white bg-opacity-20 me-3">
												<i className="ri-shield-check-line fs-3 text-white"></i>
											</div>
											<div>
												<h5 className="text-white mb-0 fw-bold font-stylish">Manual Testing</h5>
												<small className="text-white text-opacity-80">Software Quality Assurance</small>
											</div>
										</div>
										<p className="text-white mb-0 fw-medium">Expert in identifying critical logic flaws and user experience bottlenecks.</p>
									</div>

									{/* Card 2 - Automation */}
									<div className="position-absolute floating-card delay-2s" style={{
										top: '210px',
										right: '0',
										width: '320px',
										background: 'linear-gradient(135deg, #4f46e5 0%, #6366f1 100%)',
										borderRadius: '24px',
										padding: '25px',
										boxShadow: '0 20px 60px rgba(79, 70, 229, 0.4)',
										transform: 'rotate(5deg)',
										zIndex: 2,
										border: '1px solid rgba(255, 255, 255, 0.2)'
									}}>
										<div className="d-flex align-items-center mb-3">
											<div className="icon-xl icon-shape rounded-circle bg-white bg-opacity-20 me-3">
												<i className="ri-robot-line fs-3 text-white"></i>
											</div>
											<div>
												<h5 className="text-white mb-0 fw-bold font-stylish">Test Automation</h5>
												<small className="text-white text-opacity-80">Web & Mobile Test Automation</small>
											</div>
										</div>
										<p className="text-white mb-0 fw-medium">Design and maintain scalable end-to-end automation frameworks for web and mobile applications, ensuring faster releases, stable builds.</p>
									</div>

									{/* Card 3 - API Testing */}
									<div className="position-absolute floating-card delay-4s" style={{
										top: '480px',
										left: '30px',
										width: '320px',
										background: 'linear-gradient(135deg, #e11d48 0%, #f43f5e 100%)',
										borderRadius: '24px',
										padding: '25px',
										boxShadow: '0 20px 60px rgba(225, 29, 72, 0.4)',
										transform: 'rotate(-3deg)',
										zIndex: 1,
										border: '1px solid rgba(255, 255, 255, 0.2)'
									}}>
										<div className="d-flex align-items-center mb-3">
											<div className="icon-xl icon-shape rounded-circle bg-white bg-opacity-20 me-3">
												<i className="ri-code-s-line fs-3 text-white"></i>
											</div>
											<div>
												<h5 className="text-white mb-0 fw-bold font-stylish">API Testing</h5>
												<small className="text-white text-opacity-80">Postman & Swagger</small>
											</div>
										</div>
										<p className="text-white mb-0 fw-medium">Performing comprehensive API testing, validating request–response flows, status codes, data integrity, and edge cases to ensure secure and reliable backend services</p>
									</div>

									{/* Decorative Ribbon */}
									<div className="position-absolute top-50 start-0 translate-middle z-0 mt-8 ms-10 ps-8">
										<img className="ribbonRotate" src="/assets/imgs/hero/hero-1/decorate.png" alt="" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="position-absolute top-0 start-0 w-100 h-100 filter-invert" data-background="assets/imgs/hero/hero-1/background.png" />
			</section>

		</>
	)
}
