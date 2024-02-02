import "../assets/css/header.css";

const Header = () => {
  return (
    <section className="home" id="home">
      <div className="container">
        <div className="row align-items-center">
          <div className="content text-md-start">
            <h2>Berbicara dengan Hati, Belajar Bahasa Isyarat dengan Kelembutan.</h2>
            <p>Menemukan Kekayaan Bahasa Isyarat, dengan Kelembutan yang Bermakna.</p>
            <a href="shop.html" className="btn btn-custom">belajar sekarang</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
