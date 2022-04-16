import React from 'react'
import logo from "../../assets/Bootstrap/logo-bootstrap.png";
import img_navbar from "../../assets/Bootstrap/2. navbar-responsive.png";
import img_main from "../../assets/Bootstrap/3. main-jumbotron.png";
import img_about from "../../assets/Bootstrap/5. main-about.png";
import img_footer from "../../assets/Bootstrap/7. footer.png";
function Bootstrap() {
  return (
    <>
      <div className="content">
      <h1 className="title">Bootstrap</h1>
      <img src={logo} alt="img-title" className="img-title" />
      <section>
        <h2>1. Bootstrap</h2>
        <p>
          Merupakan salah satu framework CSS yang berfungsi untuk mendesain halaman web secara responsive dengan lebih mudah. Kelebihan framework bootstrap ini adalah:
          <ul>
            <li>Menggunakan grid-system sehingga memudahkan untuk mengatur layout.</li>
            <li>Mudah dipelajari karena memiliki dokumentasi lengkap</li>
            <li>Bersifat Open-Source</li>
          </ul>
        </p>
      </section>
      <section>
        <h2>2. Memulai Bootstrap</h2>
        <p>
          Terdapat 2 cara untuk menggunakan framework bootstrap ini, yaitu:
          <ol>
            <li>Menggunakan bootstrap secara offline, yaitu dengan mengunduh file bootstrap, lalu memindahkan hasil ekstraknya pada folder project kita</li>
            <li>
              Bengan menggunakan CDN yang telah disediakan oleh bootstrap. Kita hanya perlu menyalin kode CDN tersebut kedalam file index.html kita. Namun dengan menggunakan CDN, kita harus terhubung dengan koneksi internet agar dapat
              menggunakan bootstrap
            </li>
          </ol>
        </p>
      </section>
      <section>
        <h2>3. Class pada bootstrap</h2>
        <p>
          Terdapat sangat banyak class yang disediakan oleh bootstrap untuk digunakan, dan semua dijelaskan secara detail pada dokumentasinya yang bisa dilihat disini{" "}
          <a href="https://getbootstrap.com/docs/5.1/getting-started/introduction/">wwww.getbootstrap.com</a>
        </p>
      </section>
      <section>
        <h2>Output Praktikum</h2>
        <h4>Tampilan Navbar</h4>
        <img src={img_navbar} alt="img-praktikum" className="img-praktikum" />
        <h4>Tampilan Main</h4>
        <img src={img_main} alt="img-praktikum" className="img-praktikum" />
        <h4>Tampilan About</h4>
        <img src={img_about} alt="img-praktikum" className="img-praktikum" />
        <h4>Tampilan Footer</h4>
        <img src={img_footer} alt="img-praktikum" className="img-praktikum" />
      </section>
    </div>
    </>
  )
}

export default Bootstrap