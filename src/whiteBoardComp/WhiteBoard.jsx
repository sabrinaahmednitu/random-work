import imageRight from '../assets/images/Image right.png';
import imageLeft from '../assets/images/Image left.png';

const WhiteBoard = () => {
  return (
    //absolute code
    <div className="bg-[#c9cfcf]">
      <div className="container mx-auto">
        {/* section-1 */}
        <div className="relative grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 ">
          <div className="max-w-[700px] absolute top-10 lg:top-[50px] lg:left-[29%] z-10">
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
            <img
              src={imageRight}
              className="absolute top-0 right-0"
              alt=""
            />
          </div>
        </div>

        {/* section-2 */}
        <div className="relative flex flex-col lg:flex-row justify-center items-center">
          <img
            src={imageLeft}
            className="absolute top-[400px] left-0 flex-[30%] order-2 lg:order-1 "
            alt=""
          />
          <div
            className="absolute top-[600px] left-[398px] flex-[60%]
          grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 justify-center items-center gap-2 p-12  bg-[#cfd8d8e6] rounded-lg lg:rounded-[150px]  order-1 lg:order-2 "
          >
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
