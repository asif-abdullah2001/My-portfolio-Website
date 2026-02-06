'use client'
import Link from "next/link"

export default function Skills1() {
	return (
		<>

			<section id="skills" className="section-skills-1 position-relative section-padding bg-900">
				<div className="container">
					<div className="row">
						<div className="text-center mb-7">
							<h3 className="ds-3 mt-3 mb-3 text-primary-1">My Skills</h3>
							<span className="fs-5 fw-medium text-200">
								Expertise in Software Quality Assurance, Development, and Design
							</span>
						</div>

						<div className="row g-4 justify-content-center px-lg-6">
							{/* Skill 1 */}
							<div className="col-lg-4 col-md-6">
								<div className="bg-6 p-4 rounded-4 text-center h-100 border border-secondary transition-all hover-up shadow-sm">
									<div className="icon-shape icon-xl bg-linear-2 rounded-circle mx-auto mb-4">
										<i className="ri-shield-check-line fs-2 text-primary-1"></i>
									</div>
									<h5 className="fw-bold mb-2 text-dark">Software Testing</h5>
									<p className="text-300 fs-7 mb-0">Manual & Automation Testing Expert</p>
								</div>
							</div>

							{/* Skill 2 */}
							<div className="col-lg-4 col-md-6">
								<div className="bg-6 p-4 rounded-4 text-center h-100 border border-secondary transition-all hover-up shadow-sm">
									<div className="icon-shape icon-xl bg-linear-2 rounded-circle mx-auto mb-4">
										<i className="ri-magic-line fs-2 text-primary-1"></i>
									</div>
									<h5 className="fw-bold mb-2 text-dark">AI Agentic Coding</h5>
									<p className="text-300 fs-7 mb-0">Vibe Coding & AI-Driven Development</p>
								</div>
							</div>

							{/* Skill 3 */}
							<div className="col-lg-4 col-md-6">
								<div className="bg-6 p-4 rounded-4 text-center h-100 border border-secondary transition-all hover-up shadow-sm">
									<div className="icon-shape icon-xl bg-linear-2 rounded-circle mx-auto mb-4">
										<i className="ri-terminal-box-line fs-2 text-primary-1"></i>
									</div>
									<h5 className="fw-bold mb-2 text-dark">API Testing</h5>
									<p className="text-300 fs-7 mb-0">Deep Debugging & API Performance</p>
								</div>
							</div>

							{/* Skill 4 */}
							<div className="col-lg-4 col-md-6">
								<div className="bg-6 p-4 rounded-4 text-center h-100 border border-secondary transition-all hover-up shadow-sm">
									<div className="icon-shape icon-xl bg-linear-2 rounded-circle mx-auto mb-4">
										<i className="ri-code-s-slash-line fs-2 text-primary-1"></i>
									</div>
									<h5 className="fw-bold mb-2 text-dark">Languages</h5>
									<p className="text-300 fs-7 mb-0">C, HTML, CSS, JavaScript, Java</p>
								</div>
							</div>

							{/* Skill 5 */}
							<div className="col-lg-4 col-md-6">
								<div className="bg-6 p-4 rounded-4 text-center h-100 border border-secondary transition-all hover-up shadow-sm">
									<div className="icon-shape icon-xl bg-linear-2 rounded-circle mx-auto mb-4">
										<i className="ri-database-2-line fs-2 text-primary-1"></i>
									</div>
									<h5 className="fw-bold mb-2 text-dark">MySQL Database</h5>
									<p className="text-300 fs-7 mb-0">Database Management & Query Optimization</p>
								</div>
							</div>

							{/* Skill 6 */}
							<div className="col-lg-4 col-md-6">
								<div className="bg-6 p-4 rounded-4 text-center h-100 border border-secondary transition-all hover-up shadow-sm">
									<div className="icon-shape icon-xl bg-linear-2 rounded-circle mx-auto mb-4">
										<i className="ri-pantone-line fs-2 text-primary-1"></i>
									</div>
									<h5 className="fw-bold mb-2 text-dark">UI/UX Designing</h5>
									<p className="text-300 fs-7 mb-0">Creative & User-Centric Core Design</p>
								</div>
							</div>

							{/* Skill 7 */}
							<div className="col-lg-12">
								<div className="bg-6 p-4 rounded-4 text-center border border-secondary transition-all hover-up shadow-sm mt-2">
									<div className="d-flex align-items-center justify-content-center flex-wrap gap-3">
										<div className="icon-shape icon-md bg-linear-2 rounded-circle">
											<i className="ri-chat-smile-2-line fs-5 text-primary-1"></i>
										</div>
										<h5 className="fw-bold mb-0 text-dark">Presentation & Communication</h5>
										<p className="text-300 fs-7 mb-0 pe-lg-4 border-start ps-3 d-none d-md-block">Professional Soft Skills & Client Engagement</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

		</>
	)
}
