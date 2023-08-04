import testimon from "../assets/img2.jpg";
import "./styles/style.css";

export const Testimonials = () => {
  return (
    <div className="testimonials mt-5">
        <div className="testimon container">
            <div className="d-flex justify-content-between">
                <div>
                    <h2 className="mb-5 pb-3">Testimonials</h2>
                </div>
                <div>
                    <a href="#" className="text-decoration-none">View All</a>
                </div>
            </div>
            <div className="d-md-flex justify-content-center">
                <div className="me-xl-5 testimon-img">
                    <img src={testimon} alt="" width="500" height="300" class=""/>
                </div>
                <div className="ms-xl-5 ps-md-5">
                    <div className="mb-lg-5 mb-3">
                        <p className="testimon-desc ms-xl-5 ps-xl-5 lh-base"><span>" </span>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.<span> "</span></p>
                        <p className="position ms-xl-5 ps-xl-5">Director Human Resources, and Industrial Relations Asia Pacific</p>
                    </div>
                    <div className="mb-lg-5 mb-3">
                        <p className="testimon-desc ms-xl-5 ps-xl-5 lh-base"><span>" </span>There are many variations of passages of Lorem Ipsum available, but the have suffered alteration randomised words which don't look even slightly believable.<span> "</span></p>
                        <p className="position ms-xl-5 ps-xl-5">Managing Director CCS</p>
                    </div>
                    <div className="mb-lg-5 mb-3">
                        <p className="testimon-desc ms-xl-5 ps-xl-5 lh-base"><span>" </span>There are many variations Lorem Ipsum, but the majority passages have form, by injected humour, or randomised words which don't look even slightly believable.<span> "</span></p>
                        <p className="position ms-xl-5 ps-xl-5">Manager HR – MAS FAR EAST</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="brand py-5">
            <div className="container">
                <h2 className="fst-italic fw-normal text-center">We're a HIREZONE recruitment agency that has successfully matched exceptional candidates to employers of choice since 2000.</h2>
            </div>
        </div>
    </div>
  )
}
