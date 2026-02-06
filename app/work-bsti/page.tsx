
import Layout from "@/components/layout/Layout"
import Link from "next/link"

export default function WorkBsti() {
	return (
		<>
			<Layout headerStyle={1} footerStyle={1}>
				<div>
					<section className="section-work-single pt-150 pb-6">
						<div className="container">
							<div className="row">
								<div className="col-lg-8 mx-lg-auto mb-lg-0">
									<div className="text-center">

										<h3 className="ds-3 mt-3 mb-4 text-primary-1">
											BSTI Mobile App - Quality Assurance & Verification
										</h3>
										<p className="text-300 fs-5 mb-0">
											A government-standard mobile application developed for the Bangladesh Standards & Testing Institution (BSTI) to ensure product quality and consumer safety through digital verification.
										</p>
									</div>
								</div>
								<div className="d-flex flex-wrap justify-content-center gap-4 py-8">
									<div className="bg-6 px-5 py-3 rounded-2 text-center">
										<p className="text-300 mb-0">Product</p>
										<h6>Business Automation</h6>
									</div>
									<div className="bg-6 px-5 py-3 rounded-2 text-center">
										<p className="text-300 mb-0">Start</p>
										<h6>Jan 2024</h6>
									</div>
									<div className="bg-6 px-5 py-3 rounded-2 text-center">
										<p className="text-300 mb-0">Complete</p>
										<h6>Ongoing</h6>
									</div>
									<div className="bg-6 px-5 py-3 rounded-2 text-center">
										<p className="text-300 mb-0">Services</p>
										<h6>Testing & QA</h6>
									</div>
									<div className="bg-6 px-5 py-3 rounded-2 text-center d-flex flex-column align-items-center justify-content-center">
										<p className="text-300 mb-2">App Store</p>
										<Link href="https://play.google.com/store/apps/details?id=com.ba.bsti_app" target="_blank" className="btn btn-dark btn-sm py-1 px-3 rounded-2 d-inline-flex align-items-center bg-black border-secondary shadow-sm">
											<img src="https://www.vectorlogo.zone/logos/google_play/google_play-icon.svg" alt="Google Play" style={{ width: '16px', height: '16px', marginRight: '8px' }} />
											<div className="text-start">
												<span style={{ fontSize: '12px', color: '#ffffff', fontWeight: 'bold' }}>Google Play</span>
											</div>
										</Link>
									</div>
								</div>

								<div className="col-12 text-center">
									<img src="/assets/imgs/work/bsti-details.png" alt="BSTI App Details Mockup" className="rounded-4 shadow-lg w-100 mb-8" style={{ maxWidth: '1000px' }} />
								</div>

								<div className="col-lg-8 mx-lg-auto mt-8">
									<h5 className="fs-5 fw-medium">Description</h5>
									<p className="text-300">
										The BSTI Mobile App is a vital tool for market regulation and consumer safety in Bangladesh. It allows users to verify whether a product is BSTI-certified, thereby reducing the risk of fraud and counterfeit products. As a Lead SQA Engineer, I ensured the application meets standard quality metrics, focusing on data accuracy, QR scan stability across devices, and secure API communication.
									</p>
									<h5 className="fs-5 fw-medium mt-4">Key Features</h5>
									<ul className="list-unstyled">
										<li className="mb-3">
											<p className="text-dark fw-bold mb-1">QR Code Verification:</p>
											<p className="text-300">Allows users to scan product QR codes to instantly verify authenticity and view official BSTI license and certification details.</p>
										</li>
										<li className="mb-3">
											<p className="text-dark fw-bold mb-1">License & Certificate Search:</p>
											<p className="text-300">Enables users to search products using license numbers or certificate information for quick verification.</p>
										</li>
										<li className="mb-3">
											<p className="text-dark fw-bold mb-1">Official Test Report Access:</p>
											<p className="text-300">Provides access to verified BSTI test reports, ensuring transparency and accuracy of product information.</p>
										</li>
										<li className="mb-3">
											<p className="text-dark fw-bold mb-1">User-Friendly Interface:</p>
											<p className="text-300">Designed with a simple and intuitive interface to ensure easy navigation for all users.</p>
										</li>
										<li className="mb-3">
											<p className="text-dark fw-bold mb-1">Fraud Prevention Support:</p>
											<p className="text-300">Helps identify counterfeit, expired, or unauthorized products, contributing to consumer safety and market regulation.</p>
										</li>
									</ul>

									<h5 className="fs-5 fw-medium mt-5">Quality Assurance Contribution</h5>
									<ul className="list-unstyled">
										<li className="mb-3">
											<p className="text-dark fw-bold mb-1">Requirement Analysis:</p>
											<p className="text-300">Analyzed requirements and understood the product verification workflow to ensure comprehensive test coverage.</p>
										</li>
										<li className="mb-3">
											<p className="text-dark fw-bold mb-1">Core Feature Testing:</p>
											<p className="text-300">Tested core features including QR scan functionality, license search capabilities, and official test report access to ensure reliability and accuracy.</p>
										</li>
										<li className="mb-3">
											<p className="text-dark fw-bold mb-1">Test Case Development:</p>
											<p className="text-300">Created and executed comprehensive manual test cases covering both positive and negative scenarios to validate all user flows.</p>
										</li>
										<li className="mb-3">
											<p className="text-dark fw-bold mb-1">Cross-Device Testing:</p>
											<p className="text-300">Tested across multiple Android devices and OS versions to ensure consistent performance and compatibility.</p>
										</li>
										<li className="mb-3">
											<p className="text-dark fw-bold mb-1">API Verification:</p>
											<p className="text-300">Verified API responses and validated data accuracy against official BSTI records to maintain data integrity.</p>
										</li>
										<li className="mb-3">
											<p className="text-dark fw-bold mb-1">Test Automation:</p>
											<p className="text-300">Automated key user flows using Appium for efficient regression testing and continuous quality assurance.</p>
										</li>
										<li className="mb-3">
											<p className="text-dark fw-bold mb-1">Bug Reporting & Collaboration:</p>
											<p className="text-300">Reported bugs with detailed documentation and worked closely with developers to ensure timely resolution.</p>
										</li>
										<li className="mb-3">
											<p className="text-dark fw-bold mb-1">Release Testing:</p>
											<p className="text-300">Performed thorough sanity and regression testing before each release to ensure production-ready quality.</p>
										</li>
									</ul>

								</div>
							</div>
						</div>
					</section>
				</div>
			</Layout>
		</>
	)
}