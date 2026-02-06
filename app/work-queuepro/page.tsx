
import Layout from "@/components/layout/Layout"
import Link from "next/link"

export default function WorkQueuePro() {
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
                                            QueuePro - Smart Queue Management System
                                        </h3>
                                        <p className="text-300 fs-5 mb-0">
                                            A comprehensive computational queue-optimization system designed to streamline customer journeys and enhance efficiency in various service locations globally.
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
                                        <h6>Web Development & Analytics</h6>
                                    </div>
                                    <div className="bg-6 px-5 py-3 rounded-2 text-center d-flex flex-column align-items-center justify-content-center">
                                        <p className="text-300 mb-2">Visit Site</p>
                                        <Link href="https://queue-pro.com/" target="_blank" className="btn btn-dark btn-sm py-2 px-4 rounded-2 d-inline-flex align-items-center bg-black border-secondary shadow-sm">
                                            <i className="ri-global-line me-2 text-primary-1 fs-5"></i>
                                            <span style={{ fontSize: '14px', color: '#ffffff', fontWeight: 'bold' }}>Visit Website</span>
                                        </Link>
                                    </div>
                                </div>

                                <div className="col-12 text-center">
                                    <img src="/assets/imgs/work/queuepro-details.png" alt="QueuePro Dashboard Mockup" className="rounded-4 shadow-lg w-100 mb-8" style={{ maxWidth: '1000px' }} />
                                </div>

                                <div className="col-lg-8 mx-lg-auto mt-8">
                                    <h5 className="fs-5 fw-medium">Description</h5>
                                    <p className="text-300">
                                        QueuePro is an electronic digital device and web-based system that smartly manages queues at customer interaction points. It is designed to improve the customer experience by promoting products, circulating notices, broadcasting information, and optimizing customer management. The system functions as a Kiosk and Electronic Queue Management System accessible via the internet, allowing for real-time calculation of wait times and service tokens.
                                    </p>
                                    <h5 className="fs-5 fw-medium mt-4">Key Features</h5>
                                    <ul className="list-unstyled">
                                        <li className="mb-3">
                                            <p className="text-dark fw-bold mb-1">Appointment Booking:</p>
                                            <p className="text-300">Allows users to schedule appointments in advance to optimize resources and staff schedules.</p>
                                        </li>
                                        <li className="mb-3">
                                            <p className="text-dark fw-bold mb-1">Virtual Queues:</p>
                                            <p className="text-300">Customers can join queues remotely, helping to decongest physical locations and allowing for real-time status tracking.</p>
                                        </li>
                                        <li className="mb-3">
                                            <p className="text-dark fw-bold mb-1">Real-time Analytics:</p>
                                            <p className="text-300">Offers comprehensive data monitoring and analytics services, enabling businesses to improve real-time planning and efficiency.</p>
                                        </li>
                                        <li className="mb-3">
                                            <p className="text-dark fw-bold mb-1">Customer Feedback:</p>
                                            <p className="text-300">Incorporates a mechanism to collect valuable insights from customers to improve service quality and satisfaction.</p>
                                        </li>
                                    </ul>

                                    <h5 className="fs-5 fw-medium mt-5">Quality Assurance Contribution</h5>
                                    <ul className="list-unstyled">
                                        <li className="mb-3">
                                            <p className="text-dark fw-bold mb-1">Requirement Analysis:</p>
                                            <p className="text-300">Analyzed requirements to understand the queue management and customer workflow system.</p>
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
