
import Link from "next/link"

export default function Service1() {
	return (
		<>

			<section className="section-service-1 pt-120 pb-120">
				<div className="container">
					<div className="row align-items-end">
						<div className="col-lg-7 me-auto">
							<h3 className="ds-3 mt-3 mb-3 text-primary-1 font-stylish">What do I offer?</h3>
							<span className="fs-5 fw-medium text-200">I specialize in Software Quality Assurance, ensuring applications are reliable,
								<br />
								bug-free, and user-friendly through effective testing.
							</span>
						</div>
					</div>
					<div className="row mt-6 justify-content-between">
						<div className="col-12">
							<div className="single-service-card-1 w-100 border-top border-900 p-3">
								<div className="service-card-details d-lg-flex align-items-center">
									<h3 className="service-card-title w-lg-50 w-100 mb-0 font-stylish">
										<Link href="/work-single">
											<span className="service-number">01.</span>
											Manual Testing
										</Link>
									</h3>
									<Link href="/#" className="d-md-flex d-block ps-lg-10 align-items-center justify-content-end w-100">
										<p className="service-card-text my-3">
											Ensuring software quality through detailed test cases, exploratory <br />
											testing, and bug reporting to deliver stable and user-friendly applications.
										</p>
										<div className="service-card-icon icon-shape ms-auto icon-md rounded-circle border">
											<i className="ri-arrow-right-up-line" />
										</div>
									</Link>
								</div>
							</div>
						</div>
						<div className="col-12">
							<div className="single-service-card-1 w-100 border-top border-900 p-3">
								<div className="service-card-details d-lg-flex align-items-center">
									<h3 className="service-card-title w-lg-50 w-100 mb-0 font-stylish">
										<Link href="/work-single">
											<span className="service-number">02.</span>
											Test Automation
										</Link>
									</h3>
									<Link href="/#" className="d-md-flex d-block ps-lg-10 align-items-center justify-content-end w-100">
										<p className="service-card-text my-3">
											Building fast and reliable automation using modern frameworks and <br />
											AI-assisted agentic coding to create smooth, scalable, and time-efficient test solutions.
										</p>
										<div className="service-card-icon icon-shape ms-auto icon-md rounded-circle border">
											<i className="ri-arrow-right-up-line" />
										</div>
									</Link>
								</div>
							</div>
						</div>
						<div className="col-12">
							<div className="single-service-card-1 w-100 border-top border-900 p-3">
								<div className="service-card-details d-lg-flex align-items-center">
									<h3 className="service-card-title w-lg-50 w-100 mb-0 font-stylish">
										<Link href="/work-single">
											<span className="service-number">03.</span>
											API Testing
										</Link>
									</h3>
									<Link href="/#" className="d-md-flex d-block ps-lg-10 align-items-center justify-content-end w-100">
										<p className="service-card-text my-3">
											Validating APIs for accuracy, performance, and security to ensure <br />
											seamless communication between systems and reliable backend functionality.
										</p>
										<div className="service-card-icon icon-shape ms-auto icon-md rounded-circle border">
											<i className="ri-arrow-right-up-line" />
										</div>
									</Link>
								</div>
							</div>
						</div>
						<div className="col-12">
							<div className="single-service-card-1 w-100 border-top border-900 p-3">
								<div className="service-card-details d-lg-flex align-items-center">
									<h3 className="service-card-title w-lg-50 w-100 mb-0 font-stylish">
										<Link href="/work-single">
											<span className="service-number">04.</span>
											Requirement Gathering & Analysis
										</Link>
									</h3>
									<Link href="/#" className="d-md-flex d-block ps-lg-10 align-items-center justify-content-end w-100">
										<p className="service-card-text my-3">
											Analyzing business requirements and user needs to identify test scenarios, <br />
											ensure clarity, and prevent issues early in the development lifecycle.
										</p>
										<div className="service-card-icon icon-shape ms-auto icon-md rounded-circle border">
											<i className="ri-arrow-right-up-line" />
										</div>
									</Link>
								</div>
							</div>
						</div>
						<div className="col-12">
							<div className="single-service-card-1 w-100 border-top border-900 p-3 border-bottom">
								<div className="service-card-details d-lg-flex align-items-center">
									<h3 className="service-card-title w-lg-50 w-100 mb-0 font-stylish">
										<Link href="/work-single">
											<span className="service-number">05.</span>
											UI/UX Design
										</Link>
									</h3>
									<Link href="/#" className="d-md-flex d-block ps-lg-10 align-items-center justify-content-end w-100">
										<p className="service-card-text my-3">
											Creating intuitive, user-centric designs that enhance product <br />
											usability and provide an exceptional user experience.
										</p>
										<div className="service-card-icon icon-shape ms-auto icon-md rounded-circle border">
											<i className="ri-arrow-right-up-line" />
										</div>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

		</>
	)
}
