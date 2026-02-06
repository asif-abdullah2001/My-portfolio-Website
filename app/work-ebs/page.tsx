
import Layout from "@/components/layout/Layout"
import Link from "next/link"

export default function WorkEBS() {
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
                                            EBS - Enterprise Business Solution
                                        </h3>
                                        <p className="text-300 fs-5 mb-0">
                                            A comprehensive enterprise management platform designed to simplify and digitize internal business operations for enhanced efficiency and transparency.
                                        </p>
                                    </div>
                                </div>
                                <div className="d-flex flex-wrap justify-content-center gap-4 py-8">
                                    <div className="bg-6 px-5 py-3 rounded-2 text-center">
                                        <p className="text-300 mb-0">Product</p>
                                        <h6>Business Automation</h6>
                                    </div>
                                    <div className="bg-6 px-5 py-3 rounded-2 text-center">
                                        <p className="text-300 mb-0">Complete</p>
                                        <h6>Ongoing</h6>
                                    </div>
                                    <div className="bg-6 px-5 py-3 rounded-2 text-center">
                                        <p className="text-300 mb-0">Services</p>
                                        <h6>Enterprise Web Solution</h6>
                                    </div>
                                    <div className="bg-6 px-5 py-3 rounded-2 text-center d-flex flex-column align-items-center justify-content-center">
                                        <p className="text-300 mb-2">Visit Site</p>
                                        <Link href="https://ebs.ba-systems.com/" target="_blank" className="btn btn-dark btn-sm py-2 px-4 rounded-2 d-inline-flex align-items-center bg-black border-secondary shadow-sm">
                                            <i className="ri-global-line me-2 text-primary-1 fs-5"></i>
                                            <span style={{ fontSize: '14px', color: '#ffffff', fontWeight: 'bold' }}>Visit Website</span>
                                        </Link>
                                    </div>
                                </div>

                                <div className="col-12 text-center">
                                    <div className="laptop-mockup mb-10">
                                        <div className="laptop-screen-container">
                                            <div className="laptop-screen">
                                                <img src="/assets/imgs/work/ebs-details.png" alt="EBS Landing Page" />
                                            </div>
                                        </div>
                                        <div className="laptop-bottom"></div>
                                        <div className="laptop-under-base"></div>

                                        <div className="mobile-mockup-float d-none d-md-block">
                                            <div className="mobile-screen-inner">
                                                <img src="/assets/imgs/work/ebs-dashboard.png" alt="EBS Dashboard Mobile View" className="w-100" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-8 mx-lg-auto mt-10">
                                    <h5 className="fs-5 fw-medium text-white">The Challenge</h5>
                                    <p className="text-300">
                                        Modern enterprises often struggle with fragmented systems for HR, Payroll, and internal communications. EBS was built to centralize these critical functions, providing a single source of truth and a seamless digital workspace for employees and administrators alike.
                                    </p>
                                </div>

                                <div className="col-lg-8 mx-lg-auto mt-8">
                                    <h5 className="fs-5 fw-medium text-white">Description</h5>
                                    <p className="text-300">
                                        EBS is a comprehensive enterprise management platform designed to simplify and digitize internal business operations. The system helps organizations manage employees, workflows, and services efficiently from a single centralized platform.
                                    </p>
                                    <p className="text-300">
                                        With features such as employee communication, announcements, task tracking, and reporting, EBS helps organizations improve productivity, transparency, and overall workplace efficiency through a secure and user-friendly web platform.
                                    </p>

                                    <h5 className="fs-5 fw-medium mt-4 text-white">Payroll Management</h5>
                                    <p className="text-300">
                                        EBS includes a powerful Payroll Management module that automates salary calculation based on attendance, working hours, deductions, and allowances. It supports accurate payroll processing, payslip generation, and timely salary disbursement while reducing manual errors and administrative workload.
                                    </p>

                                    <h5 className="fs-5 fw-medium mt-4 text-white">Ticket Management</h5>
                                    <p className="text-300">
                                        The platform also offers an integrated Ticket Management system that enables employees to raise service requests, issues, or complaints related to IT, HR, or administration. Tickets can be tracked in real time, assigned to responsible teams, and resolved in an organized and transparent manner, improving response time and internal service quality.
                                    </p>

                                    <h5 className="fs-5 fw-medium mt-4 text-white">Key Features</h5>
                                    <ul className="list-unstyled">
                                        <li className="mb-3">
                                            <p className="text-primary-1 fw-bold mb-1">Centralized Employee Management:</p>
                                            <p className="text-300">A unified database for all employee-related information and documentation.</p>
                                        </li>
                                        <li className="mb-3">
                                            <p className="text-primary-1 fw-bold mb-1">Automated Workflow:</p>
                                            <p className="text-300">Streamlines internal approvals and processes, reducing paper-based administrative work.</p>
                                        </li>
                                        <li className="mb-3">
                                            <p className="text-primary-1 fw-bold mb-1">Real-time Task Tracking:</p>
                                            <p className="text-300">Monitor work progress and deadlines effectively across various departments.</p>
                                        </li>
                                        <li className="mb-3">
                                            <p className="text-primary-1 fw-bold mb-1">Secure Communication:</p>
                                            <p className="text-300">Internal announcement system to keep the workforce informed of important updates.</p>
                                        </li>
                                    </ul>

                                    <h5 className="fs-5 fw-medium text-white mt-5">Quality Assurance Contribution</h5>
                                    <ul className="list-unstyled">
                                        <li className="mb-3">
                                            <p className="text-primary-1 fw-bold mb-1">Requirement Analysis:</p>
                                            <p className="text-300">Analyzed requirements to understand the enterprise management and business automation workflow.</p>
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
