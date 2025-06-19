'use client';
export default function Client5() {
  return (
    <>
      <section className="client-section bg_dark_1">
        {/*===============spacing==============*/}
        <div className="pd_top_50" />
        {/*===============spacing==============*/}
        <div className="container">
          <div className="row">
            <div className="client_logo_carousel type_three">
              <div
                className="swiper-container"
                data-swiper='{
                     "autoplay": {
                       "delay": 6000
                     },
                     "freeMode": true,
                     "loop": true,
                     "speed": 1000,
                     "centeredSlides": false,
                     "slidesPerView": 5,
                     "spaceBetween": 30,
                     "pagination": {
                       "el": ".swiper-pagination",
                       "clickable": true
                     },
                      
                     "breakpoints": {
                        "1200": {
                           "slidesPerView": 5
                        },
                        "1024": {
                         "slidesPerView": 4
                        },
                       "768": {
                         "slidesPerView": 3
                       },
                       "576": {
                         "slidesPerView": 2
                       },
                       "250": {
                        "slidesPerView": 2
                      },
                       "0": {
                         "slidesPerView": 1 
                       }
                     }
                   }'
              >
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="image text-center">
                      <img
                        src="/assets/images/CLIENT-logo-w.png"
                        alt="clients-logo"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="image text-center">
                      <img
                        src="/assets/images/CLIENT-logo-3-w.png"
                        alt="clients-logo"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="image text-center">
                      <img
                        src="/assets/images/CLIENT-logo-2-w.png"
                        alt="clients-logo"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="image text-center">
                      <img
                        src="/assets/images/CLIENT-logo-1-w.png"
                        alt="clients-logo"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="image text-center">
                      <img
                        src="/assets/images/CLIENT-logo-3-w.png"
                        alt="clients-logo"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*===============spacing==============*/}
        <div className="pd_bottom_50" />
        {/*===============spacing==============*/}
      </section>
    </>
  );
}
