"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Link from "next/link";
import { IProject, WorkData } from "@/constant/DigitalAgency/work";

interface WorkSliderProps {
  work?: WorkData;
}

const WorkSlider = ({ work }: WorkSliderProps) => {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        loop={false}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        spaceBetween={30}
        speed={1800}
        navigation={{
          prevEl: ".work-button-prev",
          nextEl: ".work-button-next",
        }}
        pagination={{
          el: ".work-pagination",
          type: "progressbar",
          clickable: true,
        }}
        breakpoints={{
          576: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          992: { slidesPerView: 2 },
          1201: { slidesPerView: 3 },
          1367: { slidesPerView: 3 },
        }}
      >
        {work?.projects?.map((item: IProject, index) => (
          <SwiperSlide key={index}>
            <div className="work-box-2">
              <div className="thumb">
                <div className="meta">
                  <span className="tag">{item?.status}</span>
                </div>
                <Link href={`/digital-agency/portfolio-details/${item?._id}`}>
                  <img
                    src={item?.thumbnailUrl}
                    alt={item?.name || "Project image"}
                  />
                </Link>
                <div className="content">
                  <h3 className="title">
                    <Link
                      href={`/digital-agency/portfolio-details/${item?._id}`}
                    >
                      {item?.name}
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="work-pagination fade-anim"></div>
      <div className="slide-nav-wrapper">
        <div className="slide-nav fade-anim">
          <div className="work-button-prev slide-nav-button" role="button">
            <i className="fa-solid fa-arrow-left"></i>
          </div>
          <div className="work-button-next slide-nav-button" role="button">
            <i className="fa-solid fa-arrow-right"></i>
          </div>
        </div>
        <div className="btn-wrapper fade-anim">
          <div className="t-btn-group">
            <Link
              className="t-btn t-btn-circle"
              href={work?.viewAllLink || "#"}
            >
              <i className="fa-solid fa-arrow-right"></i>
            </Link>
            <Link
              className="t-btn t-btn-primary"
              href={work?.viewAllLink || "#"}
            >
              Discover All
            </Link>
            <Link
              className="t-btn t-btn-circle"
              href={work?.viewAllLink || "#"}
            >
              <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkSlider;
