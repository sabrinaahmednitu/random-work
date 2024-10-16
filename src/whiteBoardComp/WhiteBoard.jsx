import imageRight from '../assets/images/Image right.png';
import imageLeft from '../assets/images/Image left.png';
import './WhiteBoard.css';

const WhiteBoard = () => {
  return (
    <div className="bg-[#c9cfcf]">
      <div className="container mx-auto">
        {/* section-1 */}
        <div className="section1-card">
          <div className="section1-text">
            <h1 className="text-8xl text-[#353D32] font-bold mb-5">
              Interior design
            </h1>
            <p className="text-2xl mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
              sapiente alias nulla ut facilis et sequi mollitia nemo! Excepturi
              doloremque .
            </p>
            <button className="px-9 py-3 text-white bg-[#353D32] rounded-full">
              Explore
            </button>
          </div>
          <div>
            <img src={imageRight} className="sec1-img" alt="" />
          </div>
        </div>
        {/* section-2 */}
        <div className="section2-card">
          <img src={imageLeft} className="sec2-img" alt="" />
          <div className="section2-text">
            <div>
              <h1>5.8</h1>
              <h2></h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                tenetur quos animi! Facilis inventore a soluta cumque libero
                ipsam quaerat?
              </p>
            </div>
            <div>
              <h1>99+</h1>
              <h2></h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                tenetur quos animi! Facilis inventore a soluta cumque libero
                ipsam quaerat?
              </p>
            </div>
            <div>
              <h1>110k</h1>
              <h2></h2>
              <p>
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
