'use client'
import Isotope from "isotope-layout"
import Link from "next/link"
import { useCallback, useEffect, useRef, useState } from "react"

export default function PortfolioFilter() {
	// Isotope
	const isotope = useRef<Isotope | null>(null)
	const [filterKey, setFilterKey] = useState<string>("*")

	useEffect(() => {
		const initIsotope = () => {
			isotope.current = new Isotope(".masonry-active", {
				itemSelector: ".filter-item",
				percentPosition: true,
				masonry: {
					columnWidth: ".filter-item",
				},
			})
		}
		const timeout = setTimeout(initIsotope, 1000)

		return () => {
			clearTimeout(timeout)
			isotope.current?.destroy()
		}
	}, [])

	useEffect(() => {
		const handleResize = () => {
			isotope.current?.layout()
		}
		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)
	}, [])

	const handleImageLoad = () => {
		isotope.current?.layout()
	}

	useEffect(() => {
		if (isotope.current) {
			isotope.current.arrange({ filter: filterKey === "*" ? "*" : `.${filterKey}` })
		}
	}, [filterKey])

	const handleFilterKeyChange = useCallback((key: string) => () => {
		setFilterKey(key)
	}, [])

	const activeBtn = (value: string) => (value === filterKey ? "active btn btn-md btn-filter mb-2 me-2 text-uppercase" : "btn btn-md btn-filter mb-2 me-2 text-uppercase")

	return (
		<>

			<div className="container">
				<div className="text-start">
					<div className="button-group filter-button-group filter-menu-active">
						<button className={activeBtn("*")} onClick={handleFilterKeyChange("*")}>All Projects</button>
						<button className={activeBtn("sqa")} onClick={handleFilterKeyChange("sqa")}>SQA</button>
						<button className={activeBtn("dev")} onClick={handleFilterKeyChange("dev")}>Development</button>
						<button className={activeBtn("ui")} onClick={handleFilterKeyChange("ui")}>UI/UX</button>
					</div>
				</div>
				<div className="row masonry-active justify-content-between mt-6">
					<div className="grid-sizer" />

					{/* 1. BSTI App */}
					<div className="filter-item col-lg-6 col-12 sqa">
						<div className="project-item rounded-4 overflow-hidden position-relative p-md-4 p-3 bg-white">
							<Link href="/work-bsti">
								<img className="rounded-3 w-100 zoom-img" src="/assets/imgs/projects/projects-1/img-6.png" alt="BSTI App" onLoad={handleImageLoad} />
							</Link>
							<div className="d-flex align-items-center mt-4">
								<div className="project-card-content">
									<h3 className="fw-semibold font-stylish mb-1">BSTI Mobile App</h3>
									<p className="mb-3 text-secondary">Bangladesh Standards & Testing Institution</p>
									<Link href="https://play.google.com/store/apps/details?id=com.ba.bsti_app" target="_blank" className="btn btn-dark btn-sm py-1 px-3 fs-7 rounded-pill d-inline-flex align-items-center bg-black border-secondary">
										<img src="https://www.vectorlogo.zone/logos/google_play/google_play-icon.svg" alt="Google Play" style={{ width: '16px', height: '16px', marginRight: '8px' }} />
										<span style={{ color: '#ffffff' }}>Play Store</span>
									</Link>
								</div>
								<Link href="/work-bsti" className="project-card-icon icon-shape ms-auto icon-md rounded-circle">
									<i className="ri-arrow-right-up-line" />
								</Link>
							</div>
						</div>
					</div>

					{/* 2. Namjari Mobile App */}
					<div className="filter-item col-lg-6 col-12 sqa">
						<div className="project-item rounded-4 overflow-hidden position-relative p-md-4 p-3 bg-white">
							<Link href="/work-mutation">
								<img className="rounded-3 w-100 zoom-img" src="/assets/imgs/projects/projects-1/img-7.png" alt="নামজারি অ্যাপ" onLoad={handleImageLoad} />
							</Link>
							<div className="d-flex align-items-center mt-4">
								<div className="project-card-content">
									<h3 className="fw-semibold font-stylish mb-1">নামজারি Mobile App</h3>
									<p className="mb-3 text-secondary">Ministry of Land (Govt. of BD)</p>
									<Link href="https://play.google.com/store/apps/details?id=com.bat.mutation_app" target="_blank" className="btn btn-dark btn-sm py-1 px-3 fs-7 rounded-pill d-inline-flex align-items-center bg-black border-secondary">
										<img src="https://www.vectorlogo.zone/logos/google_play/google_play-icon.svg" alt="Google Play" style={{ width: '16px', height: '16px', marginRight: '8px' }} />
										<span style={{ color: '#ffffff' }}>Play Store</span>
									</Link>
								</div>
								<Link href="/work-mutation" className="project-card-icon icon-shape ms-auto icon-md rounded-circle">
									<i className="ri-arrow-right-up-line" />
								</Link>
							</div>
						</div>
					</div>

					{/* 3. QueuePro System */}
					<div className="filter-item col-lg-6 col-12 sqa">
						<div className="project-item rounded-4 overflow-hidden position-relative p-md-4 p-3 bg-white shadow-sm">
							<Link href="/work-queuepro">
								<img className="rounded-3 w-100 zoom-img" src="/assets/imgs/work/queuepro-details.png" alt="QueuePro" onLoad={handleImageLoad} />
							</Link>
							<div className="d-flex align-items-center mt-4">
								<div className="project-card-content">
									<h3 className="fw-semibold font-stylish mb-1">QueuePro System</h3>
									<p className="mb-3 text-secondary">Queue Management Solution</p>
									<Link href="https://queue-pro.com/" target="_blank" className="btn btn-dark btn-sm py-1 px-3 fs-7 rounded-pill d-inline-flex align-items-center bg-black border-secondary">
										<i className="ri-global-line me-2 text-primary-1"></i>
										<span style={{ color: '#ffffff' }}>Visit Site</span>
									</Link>
								</div>
								<Link href="/work-queuepro" className="project-card-icon icon-shape ms-auto icon-md rounded-circle">
									<i className="ri-arrow-right-up-line" />
								</Link>
							</div>
						</div>
					</div>

					{/* 4. BA-Systems Portfolio */}
					<div className="filter-item col-lg-6 col-12 sqa">
						<div className="project-item rounded-4 overflow-hidden position-relative p-md-4 p-3 bg-white shadow-sm">
							<Link href="/work-ba-systems" className="d-block mb-3">
								<div className="laptop-mockup-mini">
									<div className="laptop-screen-container-mini">
										<div className="laptop-screen-mini">
											<img className="w-100 h-100 object-fit-cover zoom-img" src="/image.png" alt="BA Systems Portfolio" onLoad={handleImageLoad} />
										</div>
									</div>
									<div className="laptop-bottom-mini"></div>
								</div>
							</Link>
							<div className="d-flex align-items-center mt-4">
								<div className="project-card-content">
									<h3 className="fw-semibold font-stylish mb-1">BA-Systems Portfolio</h3>
									<p className="mb-3 text-secondary">Business Automation LTD — Company Portfolio Website</p>
									<Link href="https://ba-systems.com/" target="_blank" className="btn btn-dark btn-sm py-1 px-3 fs-7 rounded-pill d-inline-flex align-items-center bg-black border-secondary">
										<i className="ri-global-line me-2 text-primary-1"></i>
										<span style={{ color: '#ffffff' }}>Visit Site</span>
									</Link>
								</div>
								<Link href="/work-ba-systems" className="project-card-icon icon-shape ms-auto icon-md rounded-circle">
									<i className="ri-arrow-right-up-line" />
								</Link>
							</div>
						</div>
					</div>

					{/* 5. Ziyarah App */}
					<div className="filter-item col-lg-6 col-12 sqa">
						<div className="project-item rounded-4 overflow-hidden position-relative p-md-4 p-3 bg-white">
							<Link href="/work-ziyarah" className="d-block position-relative rounded-3 overflow-hidden shadow-sm">
								<img className="rounded-3 w-100 img-fluid zoom-img" src="/assets/imgs/Gemini_Generated_Image_b5g91mb5g91mb5g9.png" alt="Ziyarah App" style={{ height: 'auto', display: 'block', objectFit: 'cover' }} onLoad={handleImageLoad} />
							</Link>
							<div className="d-flex align-items-center mt-4">
								<div className="project-card-content">
									<h3 className="fw-semibold font-stylish mb-1">Ziyarah - eSIM App</h3>
									<p className="mb-3 text-secondary">Global Connectivity for Travelers & Pilgrims</p>
									<Link href="https://play.google.com/store/apps/details?id=com.ba.ziyarah&pcampaignid=web_share" target="_blank" className="btn btn-dark btn-sm py-1 px-3 fs-7 rounded-pill d-inline-flex align-items-center bg-black border-secondary">
										<img src="https://www.vectorlogo.zone/logos/google_play/google_play-icon.svg" alt="Google Play" style={{ width: '16px', height: '16px', marginRight: '8px' }} />
										<span style={{ color: '#ffffff' }}>Play Store</span>
									</Link>
								</div>
								<Link href="/work-ziyarah" className="project-card-icon icon-shape ms-auto icon-md rounded-circle">
									<i className="ri-arrow-right-up-line" />
								</Link>
							</div>
						</div>
					</div>

					{/* 6. icommune App */}
					<div className="filter-item col-lg-6 col-12 sqa">
						<div className="project-item rounded-4 overflow-hidden position-relative p-md-4 p-3 bg-white">
							<Link href="/work-icommune" className="d-block position-relative rounded-3 overflow-hidden shadow-sm">
								<img className="rounded-3 w-100 img-fluid zoom-img" src="/assets/imgs/icomunw.jpeg" alt="icommune App" onLoad={handleImageLoad} />
							</Link>
							<div className="d-flex align-items-center mt-4">
								<div className="project-card-content">
									<h3 className="fw-semibold font-stylish mb-1">icommune App</h3>
									<p className="mb-3 text-secondary">Community Engagement & Events</p>
									<Link href="https://play.google.com/store/apps/details?id=com.ba.commune&pcampaignid=web_share" target="_blank" className="btn btn-dark btn-sm py-1 px-3 fs-7 rounded-pill d-inline-flex align-items-center bg-black border-secondary">
										<img src="https://www.vectorlogo.zone/logos/google_play/google_play-icon.svg" alt="Google Play" style={{ width: '16px', height: '16px', marginRight: '8px' }} />
										<span style={{ color: '#ffffff' }}>Play Store</span>
									</Link>
								</div>
								<Link href="/work-icommune" className="project-card-icon icon-shape ms-auto icon-md rounded-circle">
									<i className="ri-arrow-right-up-line" />
								</Link>
							</div>
						</div>
					</div>

					{/* 7. Co-worker App Case Study */}
					<div className="filter-item col-lg-6 col-12 ui">
						<div className="project-item rounded-4 overflow-hidden position-relative p-md-4 p-3 bg-white">
							<Link href="/work-coworker" className="d-block position-relative rounded-3 overflow-hidden">
								<img className="rounded-3 w-100 zoom-img object-fit-cover" src="/assets/imgs/work/case study.jpeg" alt="Co-worker App" style={{ height: '350px' }} onLoad={handleImageLoad} />
							</Link>
							<div className="d-flex align-items-center mt-4">
								<div className="project-card-content">
									<h3 className="fw-semibold font-stylish mb-1">Co-worker APP Case Study</h3>
									<p className="mb-3 text-secondary">Office Management & Communication</p>
									<Link href="https://www.behance.net/gallery/178174237/Co-worker-UIUX-case-Study-Employee-Communication-app" target="_blank" className="btn btn-dark btn-sm py-1 px-3 fs-7 rounded-pill d-inline-flex align-items-center bg-black border-secondary">
										<i className="ri-behance-fill me-2 text-primary-1"></i>
										<span style={{ color: '#ffffff' }}>Behance</span>
									</Link>
								</div>
								<Link href="/work-coworker" className="project-card-icon icon-shape ms-auto icon-md rounded-circle">
									<i className="ri-arrow-right-up-line" />
								</Link>
							</div>
						</div>
					</div>

					{/* EBS - Enterprise Solution (Remaining) */}
					<div className="filter-item col-lg-6 col-12 sqa">
						<div className="project-item rounded-4 overflow-hidden position-relative p-md-4 p-3 bg-white shadow-sm">
							<Link href="/work-ebs" className="d-block mb-3">
								<div className="laptop-mockup-mini">
									<div className="laptop-screen-container-mini">
										<div className="laptop-screen-mini">
											<img className="w-100 h-100 object-fit-cover zoom-img" src="/assets/imgs/work/ebs-details.png" alt="EBS" onLoad={handleImageLoad} />
										</div>
									</div>
									<div className="laptop-bottom-mini"></div>
								</div>
							</Link>
							<div className="d-flex align-items-center mt-4">
								<div className="project-card-content">
									<h3 className="fw-semibold font-stylish mb-1">EBS - Enterprise Solution</h3>
									<p className="mb-3 text-secondary">Enterprise Management Platform</p>
									<Link href="https://ebs.ba-systems.com/" target="_blank" className="btn btn-dark btn-sm py-1 px-3 fs-7 rounded-pill d-inline-flex align-items-center bg-black border-secondary">
										<i className="ri-global-line me-2 text-primary-1"></i>
										<span style={{ color: '#ffffff' }}>Visit Site</span>
									</Link>
								</div>
								<Link href="/work-ebs" className="project-card-icon icon-shape ms-auto icon-md rounded-circle">
									<i className="ri-arrow-right-up-line" />
								</Link>
							</div>
						</div>
					</div>


					{/* EBS Support Portal Automation */}
					<div className="filter-item col-lg-6 col-12 sqa">
						<div className="project-item rounded-4 overflow-hidden position-relative p-md-4 p-3 bg-white shadow-sm">
							<Link href="/work-ebs-support" className="d-block mb-3 overflow-hidden rounded-3">
								<img className="rounded-3 w-100 img-fluid zoom-img" src="/assets/imgs/support%20portal.png" alt="EBS Support Portal Automation" style={{ height: 'auto', display: 'block', objectFit: 'cover', transform: 'scale(1.12)', transformOrigin: 'center center' }} onLoad={handleImageLoad} />
							</Link>
							<div className="d-flex align-items-center mt-4">
								<div className="project-card-content">
									<h3 className="fw-semibold font-stylish mb-1">EBS Support System Automation</h3>
									<p className="mb-3 text-secondary">Automation Testing with Playwright</p>
									<Link href="https://uat-support-v2.oss.net.bd/" target="_blank" className="btn btn-dark btn-sm py-1 px-3 fs-7 rounded-pill d-inline-flex align-items-center bg-black border-secondary">
										<i className="ri-global-line me-2 text-primary-1"></i>
										<span style={{ color: '#ffffff' }}>Visit Site</span>
									</Link>
								</div>
								<Link href="/work-ebs-support" className="project-card-icon icon-shape ms-auto icon-md rounded-circle flex-shrink-0">
									<i className="ri-arrow-right-up-line" />
								</Link>
							</div>
						</div>
					</div>


					{/* 8. ICommune Portfolio Website */}
					<div className="filter-item col-lg-6 col-12 dev">
						<div className="project-item rounded-4 overflow-hidden position-relative p-md-4 p-3 bg-white shadow-sm">
							<Link href="/work-icomune-portfolio">
								<img className="rounded-3 w-100 zoom-img" src="/assets/icomune%20portfolio.jpeg" alt="ICommune App Portfolio" onLoad={handleImageLoad} />
							</Link>
							<div className="d-flex align-items-center mt-4">
								<div className="project-card-content">
									<h3 className="fw-semibold font-stylish mb-1">ICommune App Portfolio</h3>
									<p className="mb-3 text-secondary">Next.js Development & AI-Assisted Design</p>
									<div className="d-flex gap-2">
										<Link href="https://icommune.app/" target="_blank" className="btn btn-dark btn-sm py-1 px-3 fs-7 rounded-pill d-inline-flex align-items-center bg-black border-secondary">
											<i className="ri-global-line me-2 text-primary-1"></i>
											<span style={{ color: '#ffffff' }}>Visit Site</span>
										</Link>
									</div>
								</div>
								<Link href="/work-icomune-portfolio" className="project-card-icon icon-shape ms-auto icon-md rounded-circle flex-shrink-0">
									<i className="ri-arrow-right-up-line" />
								</Link>
							</div>
						</div>
					</div>

					{/* 9. Personal Portfolio Website */}
					<div className="filter-item col-lg-6 col-12 dev">
						<div className="project-item rounded-4 overflow-hidden position-relative p-md-4 p-3 bg-white shadow-sm">
							<Link href="/work-personal-portfolio">
								<img className="rounded-3 w-100 zoom-img" src="/assets/my%20portfolio.jpeg" alt="Personal Portfolio" onLoad={handleImageLoad} />
							</Link>
							<div className="d-flex align-items-center mt-4">
								<div className="project-card-content">
									<h3 className="fw-semibold font-stylish mb-1">Personal Portfolio</h3>
									<p className="mb-3 text-secondary">Next.js Development & AI-Assisted Vibe Coding</p>
									<div className="d-flex gap-2">
										<Link href="/work-personal-portfolio" className="btn btn-dark btn-sm py-1 px-3 fs-7 rounded-pill d-inline-flex align-items-center bg-black border-secondary">
											<i className="ri-code-s-slash-line me-2 text-primary-1"></i>
											<span style={{ color: '#ffffff' }}>Details</span>
										</Link>
										<Link href="https://asif-abullah.netlify.app/" target="_blank" className="btn btn-dark btn-sm py-1 px-3 fs-7 rounded-pill d-inline-flex align-items-center bg-black border-secondary">
											<i className="ri-global-line me-2 text-primary-1"></i>
											<span style={{ color: '#ffffff' }}>Visit Site</span>
										</Link>
									</div>
								</div>
								<Link href="/work-personal-portfolio" className="project-card-icon icon-shape ms-auto icon-md rounded-circle flex-shrink-0">
									<i className="ri-arrow-right-up-line" />
								</Link>
							</div>
						</div>
					</div>

				</div>
			</div>
		</>
	)
}
