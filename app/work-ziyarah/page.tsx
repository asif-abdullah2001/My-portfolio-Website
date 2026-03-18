
import Layout from "@/components/layout/Layout"
import Link from "next/link"

export default function WorkZiyarah() {
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
                                            Ziyarah - Next-Gen eSIM Connectivity
                                        </h3>
                                        <p className="text-300 fs-5 mb-0">
                                            A seamless and affordable mobile data solution for travelers and pilgrims worldwide, featuring instant eSIM activation and a powerful B2B partnership model.
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
                                    <div className="bg-6 px-5 py-3 rounded-2 text-center">
                                        <p className="text-300 mb-0">Market</p>
                                        <h6>Global / Travel</h6>
                                    </div>
                                    <div className="bg-6 px-5 py-3 rounded-2 text-center d-flex flex-column align-items-center justify-content-center">
                                        <p className="text-300 mb-2">App Store</p>
                                        <Link href="https://play.google.com/store/apps/details?id=com.ba.ziyarah&pcampaignid=web_share" target="_blank" className="btn btn-dark btn-sm py-1 px-3 rounded-2 d-inline-flex align-items-center bg-black border-secondary shadow-sm">
                                            <i className="ri-google-play-line me-2 text-primary-1"></i>
                                            <div className="text-start">
                                                <span style={{ fontSize: '12px', color: '#ffffff', fontWeight: 'bold' }}>Get it on Play Store</span>
                                            </div>
                                        </Link>
                                    </div>
                                </div>

                                <div className="col-12 text-center py-5">
                                    <div className="mx-auto rounded-4 overflow-hidden shadow-lg" style={{ maxWidth: '800px' }}>
                                        <img src="/assets/imgs/Gemini_Generated_Image_b5g91mb5g91mb5g9.png" alt="Ziyarah App Featured Mockup" className="w-100 img-fluid" style={{ height: 'auto', display: 'block' }} />
                                    </div>
                                </div>

                                <div className="col-lg-8 mx-lg-auto mt-8">
                                    <h5 className="fs-5 fw-medium">Description</h5>
                                    <p className="text-300">
                                        Ziyarah is a next-generation eSIM connectivity app designed for travelers, pilgrims, and global users who want fast, affordable, and hassle-free mobile data across multiple countries. With Ziyarah, you can activate an eSIM instantly—no physical SIM card, no waiting, and no roaming surprises. Just install, connect, and travel with confidence.
                                    </p>
                                    <p className="text-300">
                                        Built for both individual users and businesses, Ziyarah also offers a powerful B2B partnership model that enables travel agencies, tour operators, hotels, corporate travel teams, and resellers to distribute eSIM data plans directly to their customers. Whether you are traveling for Ziyarat, Umrah, or Hajj, Ziyarah ensures you stay connected with ease.
                                    </p>

                                    <h5 className="fs-5 fw-medium mt-4">Key Features</h5>
                                    <ul className="list-unstyled">
                                        <li className="mb-3">
                                            <p className="text-dark fw-bold mb-1">Instant Activation:</p>
                                            <p className="text-300">Download and activate your eSIM in minutes without needing a physical SIM card.</p>
                                        </li>
                                        <li className="mb-3">
                                            <p className="text-dark fw-bold mb-1">Global Coverage:</p>
                                            <p className="text-300">Access affordable data plans across multiple countries, specifically optimized for popular travel destinations.</p>
                                        </li>
                                        <li className="mb-3">
                                            <p className="text-dark fw-bold mb-1">B2B Partnership Model:</p>
                                            <p className="text-300">A robust platform for travel agencies and hotels to offer data solutions to their clients as an added value service.</p>
                                        </li>
                                        <li className="mb-3">
                                            <p className="text-dark fw-bold mb-1">Cost Efficiency:</p>
                                            <p className="text-300">Eliminate expensive roaming charges with localized data rates tailored for travelers.</p>
                                        </li>
                                    </ul>

                                    <h5 className="fs-5 fw-medium mt-5">Quality Assurance Contribution</h5>
                                    <ul className="list-unstyled">
                                        <li className="mb-3">
                                            <p className="text-dark fw-bold mb-1">Requirement Analysis:</p>
                                            <p className="text-300">Analyzed requirements and understood the product verification workflow to ensure comprehensive test coverage.</p>
                                        </li>
                                        <li className="mb-3">
                                            <p className="text-dark fw-bold mb-1">Core Feature Testing:</p>
                                            <p className="text-300">Tested core features including QR scan functionality, license search capabilities, and official test report access to ensure reliability and accuracy.</p>
                                        </li>
                                        <li className="mb-3">
                                            <p className="text-dark fw-bold mb-1">Test Case Development:</p>
                                            <p className="text-300">Created and executed comprehensive manual test cases covering both positive and negative scenarios to validate all user flows.</p>
                                        </li>
                                        <li className="mb-3">
                                            <p className="text-dark fw-bold mb-1">Cross-Device Testing:</p>
                                            <p className="text-300">Tested across multiple Android devices and OS versions to ensure consistent performance and compatibility.</p>
                                        </li>
                                        <li className="mb-3">
                                            <p className="text-dark fw-bold mb-1">API Verification:</p>
                                            <p className="text-300">Verified API responses and validated data accuracy against official BSTI records to maintain data integrity.</p>
                                        </li>
                                        <li className="mb-3">
                                            <p className="text-dark fw-bold mb-1">Test Automation:</p>
                                            <p className="text-300">Automated key user flows using Appium for efficient regression testing and continuous quality assurance.</p>
                                        </li>
                                        <li className="mb-3">
                                            <p className="text-dark fw-bold mb-1">Bug Reporting & Collaboration:</p>
                                            <p className="text-300">Reported bugs with detailed documentation and worked closely with developers to ensure timely resolution.</p>
                                        </li>
                                        <li className="mb-3">
                                            <p className="text-dark fw-bold mb-1">Release Testing:</p>
                                            <p className="text-300">Performed thorough sanity and regression testing before each release to ensure production-ready quality.</p>
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
