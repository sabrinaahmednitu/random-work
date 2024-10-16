
import main from '../assets/images/Image left.png';
import star from '../assets//images/shape wave.png';

const FourImage = () => {
    return (
      <div>
        <div>
          <div className="relative flex items-center justify-center w-80 h-96 mx-auto my-12 p-4">
            {/* Wrapper with pseudo-elements for box decorations */}
            <div className="relative w-full h-full">
              {/* Main Image */}
              <img
                src={main}
                alt="Product Image"
                className="w-full h-full object-cover rounded-2xl shadow-md absolute z-10"
              />

              {/* Before pseudo-element box */}
              <div className="before:absolute before:inset-[-35px] before:w-full before:h-[310px] before:border-black before:border-2 before:bg-white before:rounded-2xl before:shadow-md before:z-0"></div>

              {/* After pseudo-element box */}

              <div className="after:absolute after:bottom-[-40px] after:left-32 after:w-[200px] after:h-[300px] after:border-black after:border-2 after:bg-white after:rounded-2xl after:z-0"></div>
            </div>

            {/* Award tag */}
            <div className="absolute top-10 -right-4 bg-purple-600 text-white text-xs py-3 px-4 rounded-2xl z-20">
              Award winning product
            </div>

            {/* Ergonomic design tag */}
            <div className="absolute bottom-9 -left-4 bg-purple-600 text-white text-xs  py-3 px-4 rounded-2xl z-20">
              Ergonomic design
            </div>

            {/* Star shape (decoration) */}
            <div className="absolute top-[-40px] left-[-35px] w-16 h-16 flex items-center justify-center z-20">
              <img src={star} alt="" />
            </div>

            {/* Sparkle/star effect */}
            <div className="absolute bottom-12 right-16 text-white text-2xl z-20">
              <img className="h-14 w-14" src={star} alt="" />
            </div>
          </div>
        </div>
      </div>
    );
};

export default FourImage;