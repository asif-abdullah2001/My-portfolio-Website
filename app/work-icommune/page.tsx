
import Layout from "@/components/layout/Layout"
import Link from "next/link"

export default function WorkIcommune() {
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
                                            icommune - Community & Event Management
                                        </h3>
                                        <p className="text-300 fs-5 mb-0">
                                            A mobile application designed to facilitate seamless community engagement and event management.
                                        </p>
                                    </div>
                                </div>
                                <div className="d-flex flex-wrap justify-content-center gap-4 py-8">
                                    <div className="bg-6 px-5 py-3 rounded-2 text-center">
                                        <p className="text-300 mb-0">Product</p>
                                        <h6>Business Automation</h6>
                                    </div>
                                    <div className="bg-6 px-5 py-3 rounded-2 text-center">
                                        <p className="text-300 mb-0">Type</p>
                                        <h6>Mobile App (Android/iOS)</h6>
                                    </div>
                                    <div className="bg-6 px-5 py-3 rounded-2 text-center d-flex flex-column align-items-center justify-content-center">
                                        <p className="text-300 mb-2">App Store</p>
                                        <Link href="https://play.google.com/store/apps/details?id=com.ba.commune&pcampaignid=web_share" target="_blank" className="btn btn-dark btn-sm py-1 px-3 rounded-2 d-inline-flex align-items-center bg-black border-secondary shadow-sm">
                                            <i className="ri-google-play-line me-2 text-primary-1"></i>
                                            <div className="text-start">
                                                <span style={{ fontSize: '12px', color: '#ffffff', fontWeight: 'bold' }}>Get it on Play Store</span>
                                            </div>
                                        </Link>
                                    </div>
                                </div>

                                <div className="col-12 text-center py-5">
                                    <div className="mx-auto rounded-4 overflow-hidden shadow-lg" style={{ maxWidth: '1200px' }}>
                                        <img src="/assets/imgs/icomunw.jpeg" alt="icommune App Featured Mockup" className="w-100 img-fluid" style={{ height: 'auto', display: 'block' }} />
                                    </div>
                                </div>

                                <div className="col-lg-8 mx-lg-auto mt-8">
                                    <h5 className="fs-5 fw-medium">Description</h5>
                                    <p className="text-300">
                                        icommune is a mobile application designed to facilitate seamless community engagement and event management. Whether you want to connect with friends, family, or colleagues, icommune offers a user-friendly platform for staying in touch and sharing information with various features.
                                    </p>
                                    <p className="text-300">
                                        The application focuses on bringing people together by providing tools for effective communication, event organization, and information sharing within defined groups or the broader community. It simplifies the way communities interact and manage their collective activities.
                                    </p>

                                    <h5 className="fs-5 fw-medium mt-4">Key Features</h5>
                                    <ul className="list-unstyled">
                                        <li className="mb-3">
                                            <p className="text-dark fw-bold mb-1">Community Engagement:</p>
                                            <p className="text-300">Connect with various communities and stay updated on the latest news and discussions.</p>
                                        </li>
                                        <li className="mb-3">
                                            <p className="text-dark fw-bold mb-1">Event Management:</p>
                                            <p className="text-300">Organize and join events with ease, featuring comprehensive scheduling and RSVP tracking.</p>
                                        </li>
                                        <li className="mb-3">
                                            <p className="text-dark fw-bold mb-1">User-Friendly Interface:</p>
                                            <p className="text-300">Designed for everyone, ensuring easy navigation and a smooth user experience for all ages.</p>
                                        </li>
                                        <li className="mb-3">
                                            <p className="text-dark fw-bold mb-1">Information Sharing:</p>
                                            <p className="text-300">Share important updates, documents, and media seamlessly with your community members.</p>
                                        </li>
                                    </ul>

                                    <h5 className="fs-5 fw-medium mt-5">Quality Assurance Contribution</h5>
                                    <ul className="list-unstyled">
                                        <li className="mb-3">
                                            <p className="text-dark fw-bold mb-1">Requirement Analysis:</p>
                                            <p className="text-300">Analyzed requirements to understand the community engagement and event management workflow.</p>
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
