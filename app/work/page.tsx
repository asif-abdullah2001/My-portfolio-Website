import Layout from "@/components/layout/Layout"
import Link from "next/link"

const projects = [
	{
		title: "BSTI Mobile App",
		category: "APP AUTOMATION BY APPIUM",
		image: "/assets/imgs/work/img-6.png",
		link: "/work-bsti",
		description: "Designed and executed robust mobile app automation testing using Appium for the official BSTI application. Automated the verification of product licenses, scanner functionality for QR-coded clearances, and cross-platform workflows.",
		externalLink: "https://play.google.com/store/apps/details?id=com.ba.bsti",
		externalText: "Play Store",
		externalIcon: "ri-google-play-line",
	},
	{
		title: "নামজারি Mobile App",
		category: "MOBILE APP TESTING",
		image: "/assets/imgs/work/img-7.png",
		link: "/work-mutation",
		description: "Spearheaded the SQA for the E-Mutation (নামজারি) mobile platform by the Ministry of Land, Bangladesh. Performed end-to-end testing of the land mutation workflow, including application submission, real-time status tracking, and secure payment integrations.",
		externalLink: "https://play.google.com/store/apps/details?id=com.bat.mutation_app",
		externalText: "Play Store",
		externalIcon: "ri-google-play-line",
	},
	{
		title: "QueuePro System",
		category: "WEB TESTING & REQUIREMENT GATHERING",
		image: "/assets/imgs/work/queuepro-details.png",
		link: "/work-queuepro",
		description: "Conducted web testing and requirement gathering for a comprehensive computational queue-optimization system. Ensured flawless performance for Kiosk integrations, virtual queues, and real-time analytics dashboards.",
		externalLink: "https://queue-pro.com/",
		externalText: "Visit Site",
		externalIcon: "ri-global-line",
	},
	{
		title: "BA-Systems Core Website",
		category: "WEB TESTING & QA",
		image: "/image.png",
		link: "/work-ba-systems",
		description: "Led comprehensive frontend and backend web testing for the modern corporate website of Business Automation Ltd. Validated responsive UI, server-side APIs, data integrations, and robust full-stack web architecture across all devices.",
		externalLink: "https://ba-systems.com/",
		externalText: "Visit Site",
		externalIcon: "ri-global-line",
	},
	{
		title: "Ziyarah - eSIM App",
		category: "APP AUTOMATION BY APPIUM",
		image: "/assets/imgs/Gemini_Generated_Image_b5g91mb5g91mb5g9.png",
		link: "/work-ziyarah",
		description: "Implemented robust mobile app automation testing using Appium for the Ziyarah eSIM application. Ensured seamless performance for mobile data connectivity, instant eSIM activation workflows, and B2B platform integrations universally.",
		externalLink: "https://play.google.com/store/apps/details?id=com.ba.ziyarah&pcampaignid=web_share",
		externalText: "Play Store",
		externalIcon: "ri-google-play-line",
		imageScale: "1.12"
	},
	{
		title: "icommune App",
		category: "MOBILE APP TESTING",
		image: "/assets/imgs/icomunw.jpeg",
		link: "/work-icommune",
		description: "Executed end-to-end functionality and UI testing for the icommune mobile application, ensuring seamless community engagement, event management workflows, and a bug-free user experience across mobile platforms.",
		externalLink: "https://play.google.com/store/apps/details?id=com.ba.commune&pcampaignid=web_share",
		externalText: "Play Store",
		externalIcon: "ri-google-play-line",
	},
	{
		title: "EBS - Enterprise Solution",
		category: "EBS WEB TESTING",
		image: "/assets/imgs/work/ebs-details.png",
		link: "/work-ebs",
		description: "Performed meticulous web testing and quality assurance for the comprehensive EBS enterprise management platform. Validated core modules including HR automation, payroll management, and task tracking to ensure flawless business digitizations.",
		externalLink: "https://ebs.ba-systems.com/",
		externalText: "Visit Site",
		externalIcon: "ri-global-line",
	},
	{
		title: "EBS Support System Automation",
		category: "AUTOMATION TESTING",
		image: "/assets/imgs/support%20portal.png",
		link: "/work-ebs-support",
		description: "This project contains automated UI tests for the EBS Support System web application. The automation framework is built using Playwright and Node.js to validate core functionalities of the support portal such as ticket submission and replies.",
		externalLink: "https://uat-support-v2.oss.net.bd/",
		externalText: "Visit Site",
		externalIcon: "ri-global-line",
		imageScale: "1.12"
	},
	{
		title: "ICommune App Portfolio Website",
		category: "NEXT.JS DEVELOPMENT",
		image: "/assets/icomune%20portfolio.jpeg",
		link: "/work-icomune-portfolio",
		description: "Developed a modern and responsive portfolio website for the ICommune application using Next.js. The primary goal of this project was to showcase the app’s features, modules, and overall product vision in a clean and user-friendly interface.",
		externalLink: "https://icommune.app/",
		externalText: "Visit Site",
		externalIcon: "ri-global-line",
		imageScale: "1.0"
	},
	{
		title: "Personal Portfolio Website",
		category: "NEXT.JS DEVELOPMENT",
		image: "/assets/my%20portfolio.jpeg",
		link: "/work-personal-portfolio",
		description: "Designed and developed my own personal portfolio website using Next.js to showcase my skills, projects, and professional journey in a clean and interactive way. Built using a vibe coding approach and inspired by Google 'Anti-Gravity'.",
		externalLink: "https://asif-abullah.netlify.app/",
		externalText: "Visit Site",
		externalIcon: "ri-global-line",
		imageScale: "1.0"
	}
];

export default function Work() {

	return (
		<>

			<Layout headerStyle={1} footerStyle={1}>
				<div>
					<section className="section-work pt-120 pb-150">
						<div className="container">
							<div className="row mb-8">
								<div className="col-lg-8 mx-lg-auto">
									<div className="text-center">
										<h3 className="mt-3 mb-4" style={{ color: '#ffffff', fontSize: '45px', fontWeight: 'bold', display: 'block' }}>
											Explore My Latest Works & <br />
											<span style={{ color: '#ffffff' }}>Project Involvements</span>
										</h3>
										<p style={{ color: '#ffffff', fontSize: '18px', display: 'block' }}>
											A detailed look into how I bring innovation, quality assurance, and creativity to life through diverse projects in a beautiful alternating layout.
										</p>
									</div>
								</div>
							</div>
						</div>
						
						{/* Alternate Layout Series */}
						<div className="container mt-6">
							{projects.map((project, index) => (
								<div className="row align-items-center mb-10" key={index} style={{ paddingBottom: '30px', borderBottom: index !== projects.length - 1 ? '1px solid #333' : 'none' }}>
									<div className={`col-lg-6 mb-5 mb-lg-0 ${index % 2 !== 0 ? 'order-lg-2' : 'order-lg-1'}`}>
										<div className="rounded-4 overflow-hidden position-relative shadow-lg zoom-img bg-6">
											<Link href={project.link} className="d-block position-relative">
												<img 
													src={project.image} 
													alt={project.title} 
													className="w-100 img-fluid" 
													style={{ 
														objectFit: 'contain', 
														height: 'auto', 
														display: 'block',
														transform: project.imageScale ? `scale(${project.imageScale})` : 'none',
														transformOrigin: 'center center'
													}} 
												/>
											</Link>
										</div>
									</div>
									<div className={`col-lg-5 ${index % 2 !== 0 ? 'order-lg-1 me-auto' : 'order-lg-2 ms-auto'}`}>
										<p className="text-primary-1 mb-2 fw-semibold text-uppercase letter-spacing-1">{project.category}</p>
										<h2 className="fw-semibold mb-3 display-6 text-white">{project.title}</h2>
										<p className="text-400 mb-5 fs-5 lh-lg">{project.description}</p>
										
										<div className="d-flex align-items-center flex-wrap gap-3">
											<Link href={project.link} className="btn btn-primary btn-md rounded-pill d-inline-flex align-items-center shadow">
												Details <i className="ri-arrow-right-up-line ms-2" />
											</Link>
											{project.externalLink && (
												<Link href={project.externalLink} target="_blank" className="btn btn-outline-light btn-md rounded-pill d-inline-flex align-items-center">
													<i className={`${project.externalIcon} me-2`}></i>
													{project.externalText}
												</Link>
											)}
										</div>
									</div>
								</div>
							))}
						</div>
					</section>
				</div>
			</Layout>
		</>
	)
}