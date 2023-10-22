import img1 from "../../../assets/images/banner/1.jpg";
import img2 from "../../../assets/images/banner/2.jpg";
import img3 from "../../../assets/images/banner/3.jpg";
import img4 from "../../../assets/images/banner/4.jpg";
import img5 from "../../../assets/images/banner/5.jpg";
import img6 from "../../../assets/images/banner/6.jpg";

const Banner = () => {
  return (
    <div className="carousel w-full max-h-[500px] mt-5">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={img1} className="w-full" />
        <div className="absolute h-full w-full flex items-center bg-gradient-to-r from-black to-[rgba(21,21,21,0)] ">
          <div className="md:w-1/3 md:ml-5 space-y-5">
            <h1 className="text-5xl text-white font-bold">Hello</h1>
            <p className="text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ut
              dignissimos quasi repellendus vel necessitatibus?
            </p>
            <div className="flex gap-5">
              <button className="btn btn-success">Success</button>
              <button className="btn btn-warning">Warning</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} className="w-full" />
        <div className="absolute h-full w-full flex items-center bg-gradient-to-r from-black to-[rgba(21,21,21,0)] ">
          <div className="md:w-1/3 md:ml-5 space-y-5">
            <h1 className="text-5xl text-white font-bold">Hello</h1>
            <p className="text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ut
              dignissimos quasi repellendus vel necessitatibus?
            </p>
            <div className="flex gap-5">
              <button className="btn btn-success">Success</button>
              <button className="btn btn-warning">Warning</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={img3} className="w-full" />
        <div className="absolute h-full w-full flex items-center bg-gradient-to-r from-black to-[rgba(21,21,21,0)] ">
          <div className="md:w-1/3 md:ml-5 space-y-5">
            <h1 className="text-5xl text-white font-bold">Hello</h1>
            <p className="text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ut
              dignissimos quasi repellendus vel necessitatibus?
            </p>
            <div className="flex gap-5">
              <button className="btn btn-success">Success</button>
              <button className="btn btn-warning">Warning</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={img4} className="w-full" />
        <div className="absolute h-full w-full flex items-center bg-gradient-to-r from-black to-[rgba(21,21,21,0)] ">
          <div className="md:w-1/3 md:ml-5 space-y-5">
            <h1 className="text-5xl text-white font-bold">Hello</h1>
            <p className="text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ut
              dignissimos quasi repellendus vel necessitatibus?
            </p>
            <div className="flex gap-5">
              <button className="btn btn-success">Success</button>
              <button className="btn btn-warning">Warning</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
