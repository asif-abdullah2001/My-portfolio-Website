
import Link from "next/link"

export default function Contact1() {
	return (
		<>
			<section id="contact" className="section-contact-1 bg-900 position-relative pt-150 pb-lg-250 pb-150 overflow-hidden">
				<div className="container position-relative z-1">
					<div className="row align-items-start">
						<div className="col-lg-8">
							<h3 className="ds-3 mt-3 mb-3 text-primary-1">Get in touch</h3>
							<span className="fs-5 fw-medium text-200">
								I'm always excited to take on new projects and collaborate with innovative minds. If you
								<br className="d-none d-md-block" />
								have a project in mind or just want to chat, feel free to reach out!
							</span>

							<div className="row mt-8 g-4">
								<div className="col-md-6">
									<div className="d-flex align-items-center mb-4 position-relative">
										<div className="bg-white icon-flip position-relative icon-shape icon-xxl border-linear-2 border-2 rounded-4 flex-shrink-0">
											<i className="ri-phone-fill text-primary-1 fs-26" />
										</div>
										<div className="ps-3 overflow-hidden">
											<span className="text-primary-1 fs-6 d-block mb-1 fw-bold text-uppercase ls-1">Phone Number</span>
											<h6 className="mb-0 fw-bold" style={{ color: '#ffffff' }}>01705109756</h6>
										</div>
										<Link href="tel:01705109756" className="position-absolute top-0 start-0 w-100 h-100" />
									</div>
									<div className="d-flex align-items-center mb-4 position-relative">
										<div className="bg-white icon-flip position-relative icon-shape icon-xxl border-linear-2 border-2 rounded-4 flex-shrink-0">
											<i className="ri-mail-fill text-primary-1 fs-26" />
										</div>
										<div className="ps-3 overflow-hidden">
											<span className="text-primary-1 fs-6 d-block mb-1 fw-bold text-uppercase ls-1">Email</span>
											<h6 className="mb-0 text-lowercase fw-bold" style={{ color: '#ffffff', wordBreak: 'break-word', fontSize: '14px' }}>asifabdullahsizan2001@gmail.com</h6>
										</div>
										<Link href="mailto:asifabdullahsizan2001@gmail.com" className="position-absolute top-0 start-0 w-100 h-100" />
									</div>
									<div className="d-flex align-items-center mb-4 position-relative">
										<div className="bg-white icon-flip position-relative icon-shape icon-xxl border-linear-2 border-2 rounded-4 flex-shrink-0">
											<i className="ri-map-2-fill text-primary-1 fs-26" />
										</div>
										<div className="ps-3 overflow-hidden">
											<span className="text-primary-1 fs-6 d-block mb-1 fw-bold text-uppercase ls-1">Address</span>
											<h6 className="mb-0 fw-bold" style={{ color: '#ffffff' }}>Kazihata, Rajshahi</h6>
										</div>
									</div>
								</div>
								<div className="col-md-6">
									<div className="d-flex align-items-center mb-4 position-relative">
										<div className="bg-white icon-flip position-relative icon-shape icon-xxl border-linear-2 border-2 rounded-4 flex-shrink-0">
											<i className="ri-facebook-circle-fill text-primary-1 fs-26" />
										</div>
										<div className="ps-3 overflow-hidden">
											<span className="text-primary-1 fs-6 d-block mb-1 fw-bold text-uppercase ls-1">Facebook</span>
											<h6 className="mb-0 fw-bold" style={{ color: '#ffffff' }}>Asif Abdullah Sizan</h6>
										</div>
										<Link href="https://www.facebook.com/share/1XUM1xryGY/" target="_blank" className="position-absolute top-0 start-0 w-100 h-100" />
									</div>
									<div className="d-flex align-items-center mb-4 position-relative">
										<div className="bg-white icon-flip position-relative icon-shape icon-xxl border-linear-2 border-2 rounded-4 flex-shrink-0">
											<i className="ri-linkedin-fill text-primary-1 fs-26" />
										</div>
										<div className="ps-3 overflow-hidden">
											<span className="text-primary-1 fs-6 d-block mb-1 fw-bold text-uppercase ls-1">LinkedIn</span>
											<h6 className="mb-0 fw-bold" style={{ color: '#ffffff' }}>asif-abdullah</h6>
										</div>
										<Link href="https://www.linkedin.com/in/asif-abdullah-ba2a86245?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" className="position-absolute top-0 start-0 w-100 h-100" />
									</div>
									<div className="d-flex align-items-center mb-4 position-relative">
										<div className="bg-white icon-flip position-relative icon-shape icon-xxl border-linear-2 border-2 rounded-4 flex-shrink-0">
											<i className="ri-behance-fill text-primary-1 fs-26" />
										</div>
										<div className="ps-3 overflow-hidden">
											<span className="text-primary-1 fs-6 d-block mb-1 fw-bold text-uppercase ls-1">Behance</span>
											<h6 className="mb-0 fw-bold" style={{ color: '#ffffff' }}>sizanabdullah</h6>
										</div>
										<Link href="https://www.behance.net/sizanabdullah" target="_blank" className="position-absolute top-0 start-0 w-100 h-100" />
									</div>
								</div>
							</div>
						</div>

						<div className="col-lg-4 pt-5 pt-lg-0 text-center text-lg-end">
							<div className="contact-image-container position-relative d-inline-block">
								<div className="contact-image-shield position-absolute top-50 start-50 translate-middle z-0" style={{ width: '130%', height: '130%', background: 'linear-gradient(135deg, rgba(var(--primary-1-rgb), 0.25) 0%, transparent 80%)', borderRadius: '40% 60% 70% 30% / 40% 40% 60% 60%', filter: 'blur(50px)' }}></div>

								<div className="position-relative z-1 overflow-hidden rounded-5 shadow-lg p-3" style={{
									backdropFilter: 'blur(5px)',
									maxWidth: '310px',
									margin: '0 auto',
									border: '2px solid #6e4ef2',
									backgroundColor: 'rgba(110, 78, 242, 0.15)'
								}}>
									<img
										src="/assets/imgs/work/PNG.jpeg"
										alt="Asif Abdullah"
										className="rounded-4 w-100 object-fit-cover shadow-sm"
										style={{ height: 'auto', display: 'block' }}
									/>
								</div>

								{/* Floating active status badge */}
								<div className="position-absolute bottom-0 end-0 mb-5 me-n3 bg-white p-2 px-3 rounded-pill shadow-lg z-2 d-none d-md-block border border-light animate-bounce" style={{ animationDuration: '3s' }}>
									<div className="d-flex align-items-center gap-2">
										<div className="bg-primary-1 rounded-circle d-flex align-items-center justify-content-center flex-shrink-0" style={{ width: '20px', height: '20px' }}>
											<i className="ri-check-line text-white" style={{ fontSize: '12px' }}></i>
										</div>
										<span className="fw-bold text-dark whitespace-nowrap" style={{ fontSize: '12px', marginBottom: '0', lineHeight: '1' }}>Open for Projects</span>
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
