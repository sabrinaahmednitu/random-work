import imageRight from '../assets/images/Image right.png';
import imageLeft from '../assets/images/Image left.png';
// import './WhiteBoard.css';

const WhiteBoard = () => {
  return (
    // <div className="bg-[#c9cfcf]">
    //   <div className="container mx-auto">
    //     {/* section-1 */}
    //     <div className="section1-card">
    //       <div className="section1-text">
    //         <h1 className="text-8xl text-[#353D32] font-bold mb-5">
    //           Interior design
    //         </h1>
    //         <p className="text-2xl mb-4">
    //           Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
    //           sapiente alias nulla ut facilis et sequi mollitia nemo! Excepturi
    //           doloremque .
    //         </p>
    //         <button className="px-9 py-3 text-white bg-[#353D32] rounded-full">
    //           Explore
    //         </button>
    //       </div>
    //       <div>
    //         <img src={imageRight} className="sec1-img" alt="" />
    //       </div>
    //     </div>
    //     {/* section-2 */}
    //     <div className="section2-card">
    //       <img src={imageLeft} className="sec2-img" alt="" />
    //       <div className="section2-text">
    //         <div>
    //           <h1>5.8</h1>
    //           <h2></h2>
    //           <p>
    //             Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
    //             tenetur quos animi! Facilis inventore a soluta cumque libero
    //             ipsam quaerat?
    //           </p>
    //         </div>
    //         <div>
    //           <h1>99+</h1>
    //           <h2></h2>
    //           <p>
    //             Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
    //             tenetur quos animi! Facilis inventore a soluta cumque libero
    //             ipsam quaerat?
    //           </p>
    //         </div>
    //         <div>
    //           <h1>110k</h1>
    //           <h2></h2>
    //           <p>
    //             Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
    //             tenetur quos animi! Facilis inventore a soluta cumque libero
    //             ipsam quaerat?
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="bg-[#c9cfcf]">
      <div className="container mx-auto">
        {/* section-1 */}
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 px-11 md:px-0 lg:px-0 gap-5 md:gap-5 lg:gap-0 pt-8 pb-11 md:pt-8 md:pb-20 lg:pt-0 lg:pb-0">
          <div className="max-w-[700px] transform translate-x-[0px] translate-y-[0px] md:translate-x-[0px] md:translate-y-[0px] lg:translate-x-[220px] lg:translate-y-[65px] z-10">
            <h1 className="text-6xl md:text-7xl lg:text-8xl text-[#353D32] font-bold mb-5">
              Interior design
            </h1>
            <p className="text-2xl mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
              sapiente alias nulla ut facilis et sequi mollitia nemo! Excepturi
              doloremque.
            </p>
            <button className="px-9 py-3 text-white bg-[#353D32] rounded-full">
              Explore
            </button>
          </div>
          <div>
            <img src={imageRight} className="mx-auto lg:mx-0 md:mx-auto" alt="" />
          </div>
        </div>

        {/* section-2 */}
        <div className="flex flex-col lg:flex-row justify-center items-center gap-5 md:gap-5 lg:gap-0 pb-10 md:pb-10 lg:pb-0">
          <img
            src={imageLeft}
            className="flex-[30%] transform mx-auto md:mx-0 lg:translate-y-[-80px] order-2 lg:order-1 "
            alt=""
          />
          <div className="flex-[60%] grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 justify-center items-center gap-2 p-12  bg-[#cfd8d8e6] rounded-lg lg:rounded-[150px] transform lg:translate-x-[-90px] order-1 lg:order-2 ">
            <div>
              <h1 className="text-[25px] font-bold">5.8</h1>
              <h2 className="border-b-[3px] border-[#353d32] w-[36px] my-4"></h2>
              <p className="text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                tenetur quos animi! Facilis inventore a soluta cumque libero
                ipsam quaerat?
              </p>
            </div>
            <div>
              <h1 className="text-[25px] font-bold">99+</h1>
              <h2 className="border-b-[3px] border-[#353d32] w-[36px] my-4"></h2>
              <p className="text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                tenetur quos animi! Facilis inventore a soluta cumque libero
                ipsam quaerat?
              </p>
            </div>
            <div>
              <h1 className="text-[25px] font-bold">110k</h1>
              <h2 className="border-b-[3px] border-[#353d32] w-[36px] my-4"></h2>
              <p className="text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                tenetur quos animi! Facilis inventore a soluta cumque libero
                ipsam quaerat?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhiteBoard;
