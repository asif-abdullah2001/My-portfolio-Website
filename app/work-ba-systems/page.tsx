import Layout from "@/components/layout/Layout"
import Link from "next/link"

export default function WorkBASystems() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1}>
                <div>
                    <section className="section-work-single pt-150 pb-6">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 mx-lg-auto mb-lg-0">
                                    <div className="text-center">
                                        <h3 className="ds-3 mt-3 mb-4 text-primary-1">BA-Systems Portfolio Website</h3>
                                        <p className="text-300 fs-5 mb-0">A modern, responsive corporate portfolio website developed for Business Automation LTD to showcase services, products, and company information.</p>
                                    </div>
                                </div>
                                <div className="d-flex flex-wrap justify-content-center gap-4 py-8">
                                    <div className="bg-6 px-5 py-3 rounded-2 text-center">
                                        <p className="text-300 mb-0">Product</p>
                                        <h6>Business Automation</h6>
                                    </div>
                                    <div className="bg-6 px-5 py-3 rounded-2 text-center">
                                        <p className="text-300 mb-0">Complete</p>
                                        <h6>2025</h6>
                                    </div>
                                    <div className="bg-6 px-5 py-3 rounded-2 text-center">
                                        <p className="text-300 mb-0">Services</p>
                                        <h6>Corporate Portfolio Website</h6>
                                    </div>
                                    <div className="bg-6 px-5 py-3 rounded-2 text-center d-flex flex-column align-items-center justify-content-center">
                                        <p className="text-300 mb-2">Visit Site</p>
                                        <Link href="https://ba-systems.com/" target="_blank" className="btn btn-dark btn-sm py-2 px-4 rounded-2 d-inline-flex align-items-center bg-black border-secondary shadow-sm">
                                            <i className="ri-global-line me-2 text-primary-1 fs-5"></i>
                                            <span style={{ fontSize: '14px', color: '#ffffff', fontWeight: 'bold' }}>Visit Website</span>
                                        </Link>
                                    </div>
                                </div>

                                <div className="col-12 text-center">
                                    <div className="laptop-mockup mb-10">
                                        <div className="laptop-screen-container">
                                            <div className="laptop-screen">
                                                <img src="/image.png" alt="BA Systems Portfolio" className="w-100 h-100 object-fit-cover" />
                                            </div>
                                        </div>
                                        <div className="laptop-bottom"></div>
                                        <div className="laptop-under-base"></div>
                                    </div>
                                </div>

                                <div className="col-lg-8 mx-lg-auto mt-10">
                                    <h5 className="fs-5 fw-medium text-white">Overview</h5>
                                    <p className="text-300">The BA-Systems portfolio site delivers a clear, accessible presentation of company capabilities, solutions, and case studies. The site emphasizes easy navigation, device responsiveness, and performance to reflect the company's technology-forward brand.</p>
                                </div>

                                <div className="col-lg-8 mx-lg-auto mt-8">
                                    <h5 className="fs-5 fw-medium text-white">Description</h5>
                                    <p className="text-300">Built in 2025, the portfolio website showcases BA-Systems' services, products, partnerships, and news in a modern layout. Key sections include a hero area, services overview, project highlights, careers, and contact channels to help convert visitors into leads.</p>

                                    <h5 className="fs-5 fw-medium mt-4 text-white">Design & Implementation</h5>
                                    <p className="text-300">The site was implemented with a focus on accessibility and brand consistency. Components were optimized for fast load times and the layout adapts across screen sizes with a polished laptop mockup to feature key pages and visuals.</p>

                                    <h5 className="fs-5 fw-medium mt-4 text-white">Key Features</h5>
                                    <ul className="list-unstyled">
                                        <li className="mb-3">
                                            <p className="text-primary-1 fw-bold mb-1">Responsive Design:</p>
                                            <p className="text-300">Fluid layouts and breakpoints for desktop, tablet and mobile devices.</p>
                                        </li>
                                        <li className="mb-3">
                                            <p className="text-primary-1 fw-bold mb-1">Service Showcase:</p>
                                            <p className="text-300">Structured pages for services, products, and customer success stories.</p>
                                        </li>
                                        <li className="mb-3">
                                            <p className="text-primary-1 fw-bold mb-1">SEO & Performance:</p>
                                            <p className="text-300">Optimized assets and semantic structure for search and fast rendering.</p>
                                        </li>
                                    </ul>

                                    <h5 className="fs-5 fw-medium mt-white mt-5">Quality Assurance Contribution</h5>
                                    <ul className="list-unstyled">
                                        <li className="mb-3">
                                            <p className="text-primary-1 fw-bold mb-1">Requirement Analysis:</p>
                                            <p className="text-300">Analyzed requirements to understand the corporate portfolio presentation and user experience goals.</p>
                                        </li>
                                        <li className="mb-3">
                                            <p className="text-primary-1 fw-bold mb-1">Manual Testing:</p>
                                            <p className="text-300">Performed manual testing on core features and user flows to ensure seamless functionality.</p>
                                        </li>
                                        <li className="mb-3">
                                            <p className="text-primary-1 fw-bold mb-1">API Verification:</p>
                                            <p className="text-300">Verified API responses to ensure correct data processing and consistency across the system.</p>
                                        </li>
                                        <li className="mb-3">
                                            <p className="text-primary-1 fw-bold mb-1">Data Validation:</p>
                                            <p className="text-300">Validated data accuracy across different input scenarios to maintain data integrity.</p>
                                        </li>
                                        <li className="mb-3">
                                            <p className="text-primary-1 fw-bold mb-1">Bug Reporting:</p>
                                            <p className="text-300">Identified and reported issues with clear reproduction steps for efficient resolution.</p>
                                        </li>
                                        <li className="mb-3">
                                            <p className="text-primary-1 fw-bold mb-1">Developer Collaboration:</p>
                                            <p className="text-300">Collaborated with developers to ensure smooth issue resolution and quality delivery.</p>
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
