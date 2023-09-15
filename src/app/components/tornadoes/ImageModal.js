import Image from "next/image";

const ImageModal = ({ imageUrl, closeModalHandler }) => {
  return (
    <div className="fixed top-0 left-0 bg-black bg-opacity-80 w-[100vw] h-[100vh] z-20">
      <div className="modal-box absolute top-40 lg:top-20 lg:left-[30%]">
        <p className="text-center font-medium pb-6">
          Here is your image for this tornado
        </p>
        <Image
          src={imageUrl}
          width={250}
          height={250}
          alt="image"
          className="lg:w-[800px] lg:h-[400px] mx-auto"
        />
        <div className="flex items-center justify-center pt-6">
          <button
            className="btn btn-active btn-neutral"
            onClick={() => closeModalHandler()}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
