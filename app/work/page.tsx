
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Work() {

	return (
		<>

			<Layout headerStyle={1} footerStyle={1}>
				<div>
					<section className="section-work pt-120 pb-150">
						<div className="container">
							<div className="row">
								<div className="col-lg-8 mx-lg-auto">
									<div className="text-center">
										<Link href="/#" className="btn btn-gradient d-inline-block text-uppercase"> recent Work </Link>
										<h3 className="mt-3 mb-4" style={{ color: '#ffffff', fontSize: '45px', fontWeight: 'bold', display: 'block' }}>
											Explore My Latest Works & <br />
											<span style={{ color: '#ffffff' }}>Project Involvements</span>
										</h3>
										<p style={{ color: '#ffffff', fontSize: '18px', display: 'block' }}>
											A detailed look into how I bring innovation, quality assurance, and creativity to life through diverse projects.
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="container">
							<div className="row">
								<div className="card-scroll mt-8">
									<div className="cards">

										{/* 1. BSTI Mobile App */}
										<div className="card-custom" data-index={0}>
											<div className="card__inner bg-6 p-lg-6 p-md-4 p-3">
												<div className="card__image-container zoom-img position-relative">
													<img className="card__image" src="/assets/imgs/work/img-6.png" alt="BSTI App" />
													<Link href="/work-bsti" className="card-image-overlay position-absolute start-0 end-0 w-100 h-100" />
												</div>
												<div className="card__content px-md-4 px-3">
													<div className="card__title d-md-flex align-items-center mb-0 mb-lg-2">
														<div className="card_title_link w-100">
															<p className="text-primary-1 mb-0 mb-md-2">MOBILE APP TESTING</p>
															<div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
																<h3 className="fw-semibold mb-0">BSTI Mobile App</h3>
																<Link href="https://play.google.com/store/apps/details?id=com.ba.bsti_app" target="_blank" className="btn btn-dark btn-sm py-2 px-4 rounded-3 d-inline-flex align-items-center bg-black border-secondary shadow-sm">
																	<img src="https://www.vectorlogo.zone/logos/google_play/google_play-icon.svg" alt="Google Play" style={{ width: '20px', height: '20px', marginRight: '10px' }} />
																	<div className="text-start">
																		<small className="d-block" style={{ fontSize: '10px', lineHeight: '1', color: '#a1a1aa' }}>GET IT ON</small>
																		<span className="fw-bold" style={{ fontSize: '14px', lineHeight: '1.2', color: '#ffffff' }}>Google Play</span>
																	</div>
																</Link>
															</div>
														</div>
														<Link href="/work-bsti" className="card-icon d-none d-md-inline-flex border text-dark border-dark icon-shape ms-auto icon-md rounded-circle mt-md-0 mt-3">
															<i className="ri-arrow-right-up-line" />
														</Link>
													</div>
													<p className="text-300 mb-lg-auto mb-md-4 mb-3">Conducted comprehensive mobile app testing for the Bangladesh Standards & Testing Institution (BSTI). This involved rigorous automated and manual testing of QR code scanning, product verification flows, and employee management modules to ensure data integrity and seamless user experience across various Android and iOS devices.</p>
													<div className="d-md-flex content">
														<p className="mb-0 fs-7 text-dark text-uppercase w-40">
															Product
														</p>
														<p className="mb-0 card__description text-300 fs-6 mb-0">
															Business Automation
														</p>
													</div>
													<div className="d-md-flex content">
														<p className="mb-0 fs-7 text-dark text-uppercase w-40">
															Completion Time
														</p>
														<p className="mb-0 card__description text-300 fs-6 mb-0">
															4 months
														</p>
													</div>
													<div className="d-md-flex content">
														<p className="mb-0 fs-7 text-dark text-uppercase w-40">
															Tools
														</p>
														<p className="mb-0 card__description text-300 fs-6 mb-0">
															Appium, Selenium, Postman, JMeter
														</p>
													</div>
												</div>
											</div>
										</div>

										{/* 2. Namjari Mobile App */}
										<div className="card-custom" data-index={0}>
											<div className="card__inner bg-6 p-lg-6 p-md-4 p-3">
												<div className="card__image-container zoom-img position-relative">
													<img className="card__image" src="/assets/imgs/work/img-7.png" alt="নামজারি অ্যাপ" />
													<Link href="/work-mutation" className="card-image-overlay position-absolute start-0 end-0 w-100 h-100" />
												</div>
												<div className="card__content px-md-4 px-3">
													<div className="card__title d-md-flex align-items-center mb-0 mb-lg-2">
														<div className="card_title_link w-100">
															<p className="text-primary-1 mb-0 mb-md-2">MOBILE APP TESTING</p>
															<div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
																<h3 className="fw-semibold mb-0">নামজারি Mobile App</h3>
																<Link href="https://play.google.com/store/apps/details?id=com.bat.mutation_app" target="_blank" className="btn btn-dark btn-sm py-2 px-4 rounded-3 d-inline-flex align-items-center bg-black border-secondary shadow-sm">
																	<img src="https://www.vectorlogo.zone/logos/google_play/google_play-icon.svg" alt="Google Play" style={{ width: '20px', height: '20px', marginRight: '10px' }} />
																	<div className="text-start">
																		<small className="d-block" style={{ fontSize: '10px', lineHeight: '1', color: '#a1a1aa' }}>GET IT ON</small>
																		<span className="fw-bold" style={{ fontSize: '14px', lineHeight: '1.2', color: '#ffffff' }}>Google Play</span>
																	</div>
																</Link>
															</div>
														</div>
														<Link href="/work-mutation" className="card-icon d-none d-md-inline-flex border text-dark border-dark icon-shape ms-auto icon-md rounded-circle mt-md-0 mt-3">
															<i className="ri-arrow-right-up-line" />
														</Link>
													</div>
													<p className="text-300 mb-lg-auto mb-md-4 mb-3">Spearheaded the Software Quality Assurance for the E-Mutation (নামজারি) mobile platform by the Ministry of Land, Bangladesh. Performed end-to-end testing of the land mutation workflow, including application submission, real-time status tracking, and secure payment integrations, ensuring 100% data accuracy for property records.</p>
													<div className="d-md-flex content">
														<p className="mb-0 fs-7 text-dark text-uppercase w-40">
															Product
														</p>
														<p className="mb-0 card__description text-300 fs-6 mb-0">
															Business Automation
														</p>
													</div>
													<div className="d-md-flex content">
														<p className="mb-0 fs-7 text-dark text-uppercase w-40">
															Completion Time
														</p>
														<p className="mb-0 card__description text-300 fs-6 mb-0">
															5 months
														</p>
													</div>
													<div className="d-md-flex content">
														<p className="mb-0 fs-7 text-dark text-uppercase w-40">
															Tools
														</p>
														<p className="mb-0 card__description text-300 fs-6 mb-0">
															Appium, Postman, JMeter, Selenium
														</p>
													</div>
												</div>
											</div>
										</div>

										{/* 3. QueuePro System */}
										<div className="card-custom" data-index={0}>
											<div className="card__inner bg-6 p-lg-6 p-md-4 p-3">
												<div className="card__image-container zoom-img position-relative">
													<img className="card__image" src="/assets/imgs/work/queuepro-details.png" alt="QueuePro System" />
													<Link href="/work-queuepro" className="card-image-overlay position-absolute start-0 end-0 w-100 h-100" />
												</div>
												<div className="card__content px-md-4 px-3">
													<div className="card__title d-md-flex align-items-center mb-0 mb-lg-2">
														<div className="card_title_link w-100">
															<p className="text-primary-1 mb-0 mb-md-2">WEB DEVELOPMENT</p>
															<div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
																<h3 className="fw-semibold mb-0">QueuePro System</h3>
																<Link href="https://queue-pro.com/" target="_blank" className="btn btn-dark btn-sm py-2 px-4 rounded-3 d-inline-flex align-items-center bg-black border-secondary shadow-sm">
																	<i className="ri-global-line me-2 text-primary-1"></i>
																	<div className="text-start">
																		<span className="fw-bold" style={{ fontSize: '14px', lineHeight: '1.2', color: '#ffffff' }}>Visit Site</span>
																	</div>
																</Link>
															</div>
														</div>
														<Link href="/work-queuepro" className="card-icon d-none d-md-inline-flex border text-dark border-dark icon-shape ms-auto icon-md rounded-circle mt-md-0 mt-3">
															<i className="ri-arrow-right-up-line" />
														</Link>
													</div>
													<p className="text-300 mb-lg-auto mb-md-4 mb-3">A comprehensive computational queue-optimization system designed to streamline the customer journey and enhance efficiency. It functions as a Kiosk and Electronic Queue Management System accessible via the internet, offering features like appointment booking, virtual queues, and real-time analytics.</p>
													<div className="d-md-flex content">
														<p className="mb-0 fs-7 text-dark text-uppercase w-40">
															Product
														</p>
														<p className="mb-0 card__description text-300 fs-6 mb-0">
															Business Automation
														</p>
													</div>
													<div className="d-md-flex content">
														<p className="mb-0 fs-7 text-dark text-uppercase w-40">
															Completion Time
														</p>
														<p className="mb-0 card__description text-300 fs-6 mb-0">
															Ongoing
														</p>
													</div>
													<div className="d-md-flex content">
														<p className="mb-0 fs-7 text-dark text-uppercase w-40">
															Tools
														</p>
														<p className="mb-0 card__description text-300 fs-6 mb-0">
															Next.js, Node.js, WebSocket, Analytics
														</p>
													</div>
												</div>
											</div>
										</div>

										{/* 4. BA-Systems Portfolio */}
										<div className="card-custom" data-index={0}>
											<div className="card__inner bg-6 p-lg-6 p-md-4 p-3 border-linear-1 shadow-sm">
												<div className="card__image-container zoom-img position-relative mb-4">
													<div className="laptop-mockup-mini" style={{ transform: 'scale(1.2)', margin: '40px auto' }}>
														<div className="laptop-screen-container-mini">
															<div className="laptop-screen-mini">
																<img className="w-100 h-100 object-fit-cover" src="/image.png" alt="BA Systems Portfolio" />
															</div>
														</div>
														<div className="laptop-bottom-mini"></div>
													</div>
													<Link href="/work-ba-systems" className="card-image-overlay position-absolute start-0 end-0 w-100 h-100" style={{ zIndex: '2' }} />
												</div>
												<div className="card__content px-md-4 px-3">
													<div className="card__title d-md-flex align-items-center mb-0 mb-lg-2">
														<div className="card_title_link w-100">
															<p className="text-primary-1 mb-0 mb-md-2">WEB DEVELOPMENT</p>
															<div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
																<h3 className="fw-semibold mb-0">BA-Systems Portfolio</h3>
																<Link href="https://ba-systems.com/" target="_blank" className="btn btn-dark btn-sm py-2 px-4 rounded-3 d-inline-flex align-items-center bg-black border-secondary shadow-sm">
																	<i className="ri-global-line me-2 text-primary-1"></i>
																	<div className="text-start">
																		<span className="fw-bold" style={{ fontSize: '14px', lineHeight: '1.2', color: '#ffffff' }}>Visit Site</span>
																	</div>
																</Link>
															</div>
														</div>
														<Link href="/work-ba-systems" className="card-icon d-none d-md-inline-flex border text-dark border-dark icon-shape ms-auto icon-md rounded-circle mt-md-0 mt-3">
															<i className="ri-arrow-right-up-line" />
														</Link>
													</div>
													<p className="text-300 mb-lg-auto mb-md-4 mb-3">A modern corporate portfolio website for Business Automation LTD. Showcases the company's full suite of enterprise solutions, services, and strategic partnerships with a focus on professional aesthetics and high performance across all devices.</p>
													<div className="d-md-flex content">
														<p className="mb-0 fs-7 text-dark text-uppercase w-40">
															Product
														</p>
														<p className="mb-0 card__description text-300 fs-6 mb-0">
															Business Automation
														</p>
													</div>
													<div className="d-md-flex content">
														<p className="mb-0 fs-7 text-dark text-uppercase w-40">
															Completion Time
														</p>
														<p className="mb-0 card__description text-300 fs-6 mb-0">
															2024
														</p>
													</div>
													<div className="d-md-flex content">
														<p className="mb-0 fs-7 text-dark text-uppercase w-40">
															Tools
														</p>
														<p className="mb-0 card__description text-300 fs-6 mb-0">
															Next.js, TypeScript, Framer Motion, GSAP
														</p>
													</div>
												</div>
											</div>
										</div>

										{/* 5. Ziyarah - eSIM App */}
										<div className="card-custom" data-index={0}>
											<div className="card__inner bg-6 p-lg-6 p-md-4 p-3">
												<div className="card__image-container zoom-img position-relative rounded-3 overflow-hidden">
													<img className="card__image w-100 object-fit-cover" src="/assets/imgs/work/ziyarah-featured-v3.png" alt="Ziyarah App" style={{ height: '550px' }} />
													<Link href="/work-ziyarah" className="card-image-overlay position-absolute start-0 end-0 w-100 h-100" style={{ zIndex: '2' }} />
												</div>
												<div className="card__content px-md-4 px-3">
													<div className="card__title d-md-flex align-items-center mb-0 mb-lg-2">
														<div className="card_title_link w-100">
															<p className="text-primary-1 mb-0 mb-md-2">MOBILE APP DEVELOPMENT</p>
															<div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
																<h3 className="fw-semibold mb-0">Ziyarah - eSIM App</h3>
																<Link href="https://play.google.com/store/apps/details?id=com.ba.ziyarah&pcampaignid=web_share" target="_blank" className="btn btn-dark btn-sm py-2 px-4 rounded-3 d-inline-flex align-items-center bg-black border-secondary shadow-sm">
																	<img src="https://www.vectorlogo.zone/logos/google_play/google_play-icon.svg" alt="Google Play" style={{ width: '20px', height: '20px', marginRight: '10px' }} />
																	<div className="text-start">
																		<small className="d-block" style={{ fontSize: '10px', lineHeight: '1', color: '#a1a1aa' }}>GET IT ON</small>
																		<span className="fw-bold" style={{ fontSize: '14px', lineHeight: '1.2', color: '#ffffff' }}>Google Play</span>
																	</div>
																</Link>
															</div>
														</div>
														<Link href="/work-ziyarah" className="card-icon d-none d-md-inline-flex border text-dark border-dark icon-shape ms-auto icon-md rounded-circle mt-md-0 mt-3">
															<i className="ri-arrow-right-up-line" />
														</Link>
													</div>
													<p className="text-300 mb-lg-auto mb-md-4 mb-3">Ziyarah is a next-generation eSIM connectivity app designed for travelers, pilgrims, and global users. It features instant activation, global coverage, and a powerful B2B partnership model for travel agencies and hotels, ensuring seamless mobile data across multiple countries without roaming surprises.</p>
													<div className="d-md-flex content">
														<p className="mb-0 fs-7 text-dark text-uppercase w-40">
															Product
														</p>
														<p className="mb-0 card__description text-300 fs-6 mb-0">
															Business Automation
														</p>
													</div>
													<div className="d-md-flex content">
														<p className="mb-0 fs-7 text-dark text-uppercase w-40">
															Completion Time
														</p>
														<p className="mb-0 card__description text-300 fs-6 mb-0">
															6 months
														</p>
													</div>
													<div className="d-md-flex content">
														<p className="mb-0 fs-7 text-dark text-uppercase w-40">
															Tools
														</p>
														<p className="mb-0 card__description text-300 fs-6 mb-0">
															React Native, Node.js, GSMA eSIM APIs
														</p>
													</div>
												</div>
											</div>
										</div>

										{/* 6. icommune App */}
										<div className="card-custom" data-index={0}>
											<div className="card__inner bg-6 p-lg-6 p-md-4 p-3">
												<div className="card__image-container zoom-img position-relative rounded-3 overflow-hidden bg-6">
													<img className="card__image w-100 object-fit-contain" src="/assets/imgs/work/icommune.PNG" alt="icommune App" style={{ height: '400px' }} />
													<Link href="/work-icommune" className="card-image-overlay position-absolute start-0 end-0 w-100 h-100" />
												</div>
												<div className="card__content px-md-4 px-3">
													<div className="card__title d-md-flex align-items-center mb-0 mb-lg-2">
														<div className="card_title_link w-100">
															<p className="text-primary-1 mb-0 mb-md-2">MOBILE APP DEVELOPMENT</p>
															<div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
																<h3 className="fw-semibold mb-0">icommune App</h3>
																<Link href="https://play.google.com/store/apps/details?id=com.ba.commune&pcampaignid=web_share" target="_blank" className="btn btn-dark btn-sm py-2 px-4 rounded-3 d-inline-flex align-items-center bg-black border-secondary shadow-sm">
																	<img src="https://www.vectorlogo.zone/logos/google_play/google_play-icon.svg" alt="Google Play" style={{ width: '20px', height: '20px', marginRight: '10px' }} />
																	<div className="text-start">
																		<small className="d-block" style={{ fontSize: '10px', lineHeight: '1', color: '#a1a1aa' }}>GET IT ON</small>
																		<span className="fw-bold" style={{ fontSize: '14px', lineHeight: '1.2', color: '#ffffff' }}>Google Play</span>
																	</div>
																</Link>
															</div>
														</div>
														<Link href="/work-icommune" className="card-icon d-none d-md-inline-flex border text-dark border-dark icon-shape ms-auto icon-md rounded-circle mt-md-0 mt-3">
															<i className="ri-arrow-right-up-line" />
														</Link>
													</div>
													<p className="text-300 mb-lg-auto mb-md-4 mb-3">icommune is a mobile application designed to facilitate seamless community engagement and event management. It offers a user-friendly platform for staying in touch and sharing information with various communities.</p>
													<div className="d-md-flex content">
														<p className="mb-0 fs-7 text-dark text-uppercase w-40">
															Product
														</p>
														<p className="mb-0 card__description text-300 fs-6 mb-0">
															Business Automation
														</p>
													</div>
													<div className="d-md-flex content">
														<p className="mb-0 fs-7 text-dark text-uppercase w-40">
															Completion Time
														</p>
														<p className="mb-0 card__description text-300 fs-6 mb-0">
															4 months
														</p>
													</div>
													<div className="d-md-flex content">
														<p className="mb-0 fs-7 text-dark text-uppercase w-40">
															Tools
														</p>
														<p className="mb-0 card__description text-300 fs-6 mb-0">
															React Native, Node.js, Express, MongoDB
														</p>
													</div>
												</div>
											</div>
										</div>

										{/* 7. Co-worker App UI/UX Case Study */}
										<div className="card-custom" data-index={0}>
											<div className="card__inner bg-6 p-lg-6 p-md-4 p-3">
												<div className="card__image-container zoom-img position-relative rounded-3 overflow-hidden bg-6">
													<img className="card__image w-100 object-fit-cover" src="/assets/imgs/work/case study.jpeg" alt="Co-worker App Case Study" style={{ height: '400px' }} />
													<Link href="/work-coworker" className="card-image-overlay position-absolute start-0 end-0 w-100 h-100" />
												</div>
												<div className="card__content px-md-4 px-3">
													<div className="card__title d-md-flex align-items-center mb-0 mb-lg-2">
														<div className="card_title_link w-100">
															<p className="text-primary-1 mb-0 mb-md-2">UI/UX CASE STUDY</p>
															<div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
																<h3 className="fw-semibold mb-0">UI/UX case study: Co-worker APP</h3>
																<Link href="https://www.behance.net/gallery/178174237/Co-worker-UIUX-case-Study-Employee-Communication-app" target="_blank" className="btn btn-dark btn-sm py-2 px-4 rounded-3 d-inline-flex align-items-center bg-black border-secondary shadow-sm">
																	<i className="ri-behance-fill me-2 text-primary-1 fs-5"></i>
																	<div className="text-start">
																		<span className="fw-bold" style={{ fontSize: '14px', lineHeight: '1.2', color: '#ffffff' }}>Behance</span>
																	</div>
																</Link>
															</div>
														</div>
														<Link href="/work-coworker" className="card-icon d-none d-md-inline-flex border text-dark border-dark icon-shape ms-auto icon-md rounded-circle mt-md-0 mt-3">
															<i className="ri-arrow-right-up-line" />
														</Link>
													</div>
													<p className="text-300 mb-lg-auto mb-md-4 mb-3">Introducing Co-worker, an Office Management and Employee Communication app where there will be exciting facilities for the employees and managers which will help to run and maintain an office very easily.</p>
													<div className="d-md-flex content">
														<p className="mb-0 fs-7 text-dark text-uppercase w-40">
															Product
														</p>
														<p className="mb-0 card__description text-300 fs-6 mb-0">
															Business Automation
														</p>
													</div>
													<div className="d-md-flex content">
														<p className="mb-0 fs-7 text-dark text-uppercase w-40">
															Project Type
														</p>
														<p className="mb-0 card__description text-300 fs-6 mb-0">
															UI/UX Design
														</p>
													</div>
													<div className="d-md-flex content">
														<p className="mb-0 fs-7 text-dark text-uppercase w-40">
															Tools
														</p>
														<p className="mb-0 card__description text-300 fs-6 mb-0">
															Figma, Adobe XD
														</p>
													</div>
												</div>
											</div>
										</div>

										{/* EBS - Enterprise Solution (Extra) */}
										<div className="card-custom" data-index={0}>
											<div className="card__inner bg-6 p-lg-6 p-md-4 p-3 border-linear-1 shadow-sm">
												<div className="card__image-container zoom-img position-relative">
													<img className="card__image" src="/assets/imgs/work/ebs-details.png" alt="EBS" />
													<Link href="/work-ebs" className="card-image-overlay position-absolute start-0 end-0 w-100 h-100" />
												</div>
												<div className="card__content px-md-4 px-3">
													<div className="card__title d-md-flex align-items-center mb-0 mb-lg-2">
														<div className="card_title_link w-100">
															<p className="text-primary-1 mb-0 mb-md-2">SOFTWARE QUALITY ASSURANCE</p>
															<div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
																<h3 className="fw-semibold mb-0">EBS - Enterprise Solution</h3>
																<Link href="https://ebs.ba-systems.com/" target="_blank" className="btn btn-dark btn-sm py-2 px-4 rounded-3 d-inline-flex align-items-center bg-black border-secondary shadow-sm">
																	<i className="ri-global-line me-2 text-primary-1"></i>
																	<div className="text-start">
																		<span className="fw-bold" style={{ fontSize: '14px', lineHeight: '1.2', color: '#ffffff' }}>Visit Site</span>
																	</div>
																</Link>
															</div>
														</div>
														<Link href="/work-ebs" className="card-icon d-none d-md-inline-flex border text-dark border-dark icon-shape ms-auto icon-md rounded-circle mt-md-0 mt-3">
															<i className="ri-arrow-right-up-line" />
														</Link>
													</div>
													<p className="text-300 mb-lg-auto mb-md-4 mb-3">A comprehensive enterprise management platform designed to simplify and digitize internal business operations. Features HR automation, payroll management, and task tracking for enhanced efficiency.</p>
													<div className="d-md-flex content">
														<p className="mb-0 fs-7 text-dark text-uppercase w-40">
															Product
														</p>
														<p className="mb-0 card__description text-300 fs-6 mb-0">
															Business Automation
														</p>
													</div>
												</div>
											</div>
										</div>

									</div>
								</div>
							</div>
						</div>
					</section>
				</div>
			</Layout>
		</>
	)
}