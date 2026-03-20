
import  "../../assets/css/Loader/Loader.css"

const Loader = () => {
  return (
    <div className="full-screen-loader">
      <div className="loader-content">
        <i className="bi bi-camera-reels loader-icon"></i>
        <div className="loader-line"></div>
      </div>
    </div>
  );
};

export default Loader;