import Link from 'next/link'

export default function OffCanvas({ isOffCanvas, handleOffCanvas }: any) {
	return (
		<>
			{/* offCanvas-menu */}
			<div className={`offCanvas__info ${isOffCanvas ? 'active' : ''}`}>
				<div className="offCanvas__close-icon menu-close" onClick={handleOffCanvas}>
					<button aria-label="Close Menu"><i className="ri-close-line" /></button>
				</div>
				<div className="offCanvas__logo mb-5">
					<h3 className="mb-0 text-primary-1 font-stylish">Get in touch</h3>
				</div>
				<div className="offCanvas__side-info mb-30">
					<div className="contact-list mb-30">
						<p className="fs-6 fw-medium mb-5" style={{ color: '#ffffff', opacity: '0.8' }}>
							I'm always excited to take on new projects and collaborate with innovative minds.
						</p>

						<div className="mb-4">
							<span className="text-primary-1 fs-8 fw-bold text-uppercase ls-1 d-block mb-1">PHONE NUMBER</span>
							<div className="fw-bold fs-6" style={{ color: '#ffffff' }}>01705109756</div>
						</div>

						<div className="mb-4">
							<span className="text-primary-1 fs-8 fw-bold text-uppercase ls-1 d-block mb-1">EMAIL</span>
							<div className="fw-bold fs-7" style={{ wordBreak: 'break-all', color: '#ffffff' }}>asifabdullahsizan2001@gmail.com</div>
						</div>

						<div className="mb-4">
							<span className="text-primary-1 fs-8 fw-bold text-uppercase ls-1 d-block mb-1">ADDRESS</span>
							<div className="fw-bold fs-6" style={{ color: '#ffffff' }}>Kazihata, Rajshahi</div>
						</div>
					</div>

					<div className="contact-list pt-10 border-top border-secondary border-opacity-25 mt-5">
						<p className="text-primary-1 fs-8 fw-bold text-uppercase ls-1 mb-3">SOCIAL PROFILES</p>
						<div className="d-flex gap-3">
							<Link href="https://www.facebook.com/share/1XUM1xryGY/" target="_blank" className="icon-shape icon-sm border border-light rounded-circle text-white hover-primary-1 transition-all" title="Facebook" style={{ borderColor: 'rgba(255,255,255,0.3) !important' }}>
								<i className="ri-facebook-circle-fill fs-18" style={{ color: '#ffffff' }} />
							</Link>
							<Link href="https://www.linkedin.com/in/asif-abdullah-ba2a86245/" target="_blank" className="icon-shape icon-sm border border-light rounded-circle text-white hover-primary-1 transition-all" title="LinkedIn" style={{ borderColor: 'rgba(255,255,255,0.3) !important' }}>
								<i className="ri-linkedin-fill fs-18" style={{ color: '#ffffff' }} />
							</Link>
							<Link href="https://www.behance.net/sizanabdullah" target="_blank" className="icon-shape icon-sm border border-light rounded-circle text-white hover-primary-1 transition-all" title="Behance" style={{ borderColor: 'rgba(255,255,255,0.3) !important' }}>
								<i className="ri-behance-fill fs-18" style={{ color: '#ffffff' }} />
							</Link>
							<div className="icon-shape icon-sm border border-light rounded-circle text-white opacity-50" title="GitHub" style={{ borderColor: 'rgba(255,255,255,0.3) !important' }}>
								<i className="ri-github-fill fs-18" style={{ color: '#ffffff' }} />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className={`offCanvas__overly ${isOffCanvas ? 'active' : ''}`} onClick={handleOffCanvas} />
		</>
	)
}
