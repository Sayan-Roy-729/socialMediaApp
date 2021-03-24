import React from "react";
import "./style.css";

const UserInformation = () => {
  return (
    <>
      <div className="userInfo">
        <div class="main-content">
          <div class="container mt-7 pa mb-5 bg-info-gray">
            {/* <!-- Table --> */}
            <h2 class="mb-5 profile-text">Profile Card</h2>
            <div class="row">
              <div class="col-xl-8 m-auto order-xl-2 mb-5 mb-xl-0">
                <div class="card card-profile shadow">
                  <div class="row justify-content-center">
                    <div class="col-lg-3 order-lg-2">
                      <div class="card-profile-image">
                        <a href="#">
                          <img
                            src="https://demos.creative-tim.com/argon-dashboard/assets/img/theme/team-4.jpg"
                            class="rounded-circle"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4" >
                    <div class="d-flex justify-content-between">
                      <a href="#" class="btn btn-sm btn-info mr-4">
                        Connect
                      </a>
                      <a href="#" class="btn btn-sm btn-default float-right">
                        Message
                      </a>
                    </div>
                  </div>
                  <div class="card-body pt-0 pt-md-4">
                    <div class="row">
                      <div class="col">
                        <div class="card-profile-stats d-flex justify-content-center mt-md-5">
                          <div>
                            <span class="heading">22</span>
                            <span class="description">Friends</span>
                          </div>
                          <div>
                            <span class="heading">10</span>
                            <span class="description">Photos</span>
                          </div>
                          <div>
                            <span class="heading">89</span>
                            <span class="description">Comments</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="text-center">
                      <h3>
                        Jessica Jones<span class="font-weight-light">, 27</span>
                      </h3>
                      <div class="h5 font-weight-300">
                        <i class="ni location_pin mr-2"></i>Bucharest, Romania
                      </div>
                      <div class="h5 mt-4">
                        <i class="ni business_briefcase-24 mr-2"></i>Solution
                        Manager - Creative Tim Officer
                      </div>
                      <div>
                        <i class="ni education_hat mr-2"></i>University of
                        Computer Science
                      </div>
                      <hr class="my-4" />
                      {/* <p>
                        Ryan — the name taken by Melbourne-raised,
                        Brooklyn-based Nick Murphy — writes, performs and
                        records all of his own music.
                      </p>
                      <a
                        href="https://www.creative-tim.com/product/argon-dashboard"
                        target="_blank"
                      >
                        Show more
                      </a> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <footer class="footer">
          <div class="row align-items-center justify-content-xl-between">
            <div class="col-xl-6 m-auto text-center">
              <div class="copyright">
                <p>
                  Made with{" "}
                  <a
                    href="https://www.creative-tim.com/product/argon-dashboard"
                    target="_blank"
                  >
                    Argon Dashboard
                  </a>{" "}
                  by Creative Tim
                </p>
              </div>
            </div>
          </div>
        </footer> */}
      </div>
    </>
  );
};

export default UserInformation;
