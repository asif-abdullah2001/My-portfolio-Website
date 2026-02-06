
import Layout from "@/components/layout/Layout"
import Link from "next/link"

export default function WorkMutation() {
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
                                            নামজারি Mobile App (Digital Land Services)
                                        </h3>
                                        <p className="text-300 fs-5 mb-0">
                                            A specialized mobile platform for the Ministry of Land, Bangladesh, designed to deliver land services directly to the doorsteps of citizens through the e-Namjari system.
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
                                        <h6>Aug 2023</h6>
                                    </div>
                                    <div className="bg-6 px-5 py-3 rounded-2 text-center">
                                        <p className="text-300 mb-0">Complete</p>
                                        <h6>Jan 2024</h6>
                                    </div>
                                    <div className="bg-6 px-5 py-3 rounded-2 text-center">
                                        <p className="text-300 mb-0">Services</p>
                                        <h6>SQA & API Testing</h6>
                                    </div>
                                    <div className="bg-6 px-5 py-3 rounded-2 text-center d-flex flex-column align-items-center justify-content-center">
                                        <p className="text-300 mb-2">App Store</p>
                                        <Link href="https://play.google.com/store/apps/details?id=com.bat.mutation_app" target="_blank" className="btn btn-dark btn-sm py-1 px-3 rounded-2 d-inline-flex align-items-center bg-black border-secondary shadow-sm">
                                            <img src="https://www.vectorlogo.zone/logos/google_play/google_play-icon.svg" alt="Google Play" style={{ width: '16px', height: '16px', marginRight: '8px' }} />
                                            <div className="text-start">
                                                <span style={{ fontSize: '12px', color: '#ffffff', fontWeight: 'bold' }}>Google Play</span>
                                            </div>
                                        </Link>
                                    </div>
                                </div>

                                <div className="col-12 text-center">
                                    <img src="/assets/imgs/work/img-7.png" alt="নামজারি অ্যাপ বর্ণনা" className="rounded-4 shadow-lg w-100 mb-8" style={{ maxWidth: '1000px' }} />
                                </div>

                                <div className="col-lg-8 mx-lg-auto mt-8">
                                    <h5 className="fs-5 fw-medium">Description</h5>
                                    <p className="text-300">
                                        Every year, approximately 2.2 million (twenty-two lakh) Namjari (mutation) applications are submitted in Bangladesh. To bring land services directly to the people's doorsteps, the Ministry of Land developed the e-Namjari Mobile App. This platform enables the electronic submission, processing, and payment for mutation cases at Upazila and Circle land offices, ensuring services are delivered in less time, at a lower cost, and without public suffering.
                                    </p>
                                    <h5 className="fs-5 fw-medium mt-4">Key Features</h5>
                                    <ul className="list-unstyled">
                                        <li className="mb-3">
                                            <p className="text-dark fw-bold mb-1">Online Application & Tracking:</p>
                                            <p className="text-300">For Android users, downloading the app from Google Play Store allows citizens to easily search and see the current status of their applications and receive SMS updates.</p>
                                        </li>
                                        <li className="mb-3">
                                            <p className="text-dark fw-bold mb-1">Resource Directory:</p>
                                            <p className="text-300">Provides comprehensive information on all land office officials, facilitating easier communication and access to services.</p>
                                        </li>
                                        <li className="mb-3">
                                            <p className="text-dark fw-bold mb-1">Electronic Submission & Payment:</p>
                                            <p className="text-300">Process land mutation cases electronically from Upazila and Circle land offices, significantly reducing processing time and costs.</p>
                                        </li>
                                        <li className="mb-3">
                                            <p className="text-dark fw-bold mb-1">Office User Dashboard:</p>
                                            <p className="text-300">Internal users can view and manage the list of running and pending applications efficiently through a dedicated dashboard.</p>
                                        </li>
                                    </ul>

                                    <h5 className="fs-5 fw-medium mt-5">Quality Assurance Contribution</h5>
                                    <ul className="list-unstyled">
                                        <li className="mb-3">
                                            <p className="text-dark fw-bold mb-1">Requirement Analysis:</p>
                                            <p className="text-300">Analyzed requirements to understand the land registration and ownership workflow for comprehensive test coverage.</p>
                                        </li>
                                        <li className="mb-3">
                                            <p className="text-dark fw-bold mb-1">Manual Testing:</p>
                                            <p className="text-300">Performed manual testing on core features and user flows to ensure seamless functionality.</p>
                                        </li>
                                        <li className="mb-3">
                                            <p className="text-dark fw-bold mb-1">API Verification:</p>
                                            <p className="text-300">Verified API responses to ensure correct data processing and consistency across the system.</p>
                                        </li>
                                        <li className="mb-3">
                                            <p className="text-dark fw-bold mb-1">Data Validation:</p>
                                            <p className="text-300">Validated data accuracy across different input scenarios to maintain data integrity.</p>
                                        </li>
                                        <li className="mb-3">
                                            <p className="text-dark fw-bold mb-1">Bug Reporting:</p>
                                            <p className="text-300">Identified and reported issues with clear reproduction steps for efficient resolution.</p>
                                        </li>
                                        <li className="mb-3">
                                            <p className="text-dark fw-bold mb-1">Developer Collaboration:</p>
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
