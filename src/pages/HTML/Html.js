import React from 'react'
import logo from "../../assets/HTML/logo-html.png";
import index from "../../assets/HTML/1. index.png";
import form from "../../assets/HTML/2. form.png";
import welcome from "../../assets/HTML/3. welcome.png";

function Html() {
  return (
    <div className="content">
      <h1 className="title">HTML</h1>
      <img src={logo} alt="img-title" className="img-title" />
      <section>
        <h2>1. HTML</h2>
        <p>
          Merupakan singkatan dari **HyperText Markup Language**, atau bisa juga disebut dengan bahasa markup, yang digunakan untuk membuat struktur dasar pada sebuah halaman website. File HTML dapat dijalankan melalui web browser seperti
          Google Chrome, Microsoft Edge, Safari, dll. Untuk membuat file HTML, perlu menggunakan sebuah code editor, seperti:
          <ul>
            <li>Notepad++</li>
            <li>Sublime Text</li>
            <li>Atom</li>
            <li>Visual Studio Code</li>
          </ul>
        </p>
      </section>
      <section>
        <h2>2. Struktur Dasar HTML</h2>
        <h4>DOCTYPE</h4>
        <p>
          DOCTYPE yang merupakan singkatan dari Document Type Declaration dan juga dikenal sebagai DTD adalah deklarasi dokumen yang digunakan untuk menginfokan tipe dokumen dan versi HTML yang digunakan kepada aplikasi web browser.
          Penulisan DOCTYPE harus berada pada awal dokumen.
        </p>
        <h4>Tag HTML</h4>
        <p>
          Tag html digunakan untuk menginformasikan pada aplikasi web browser bahwa tipe dokomen tersebut adalah HTML. Tag html juga menjadi wadah untuk semua elemen HTML. Jadi, semua elemen harus berada di dalam tag tersebut kecuali
          DOCTYPE karena DOCTYPE bukan termasuk elemen melainkan deklarasi dokumen.
        </p>
        <h4>Tag Head</h4>
        <p>Tag head merupakan tag yang berisi informasi tentang halaman yang tidak ditampilkan di halaman web browser. Misalnya: source css, js atau lainnya yang berasal dari luar, informasi meta, title, dan lainnya.</p>
        <h4>Tag Body</h4>
        <p>
          Tag body merupakan tag yang berisi elemen-elemen yang ditampilkan di halaman web. Misalnya teks yang berupa paragraph, heading, menampilkan gambar, membuat tabel, dan lainnya. Di dalam tag body inilah konten visual dari halaman
          web ditempatkan.
        </p>
      </section>
      <section>
        <h2>3. Tag-tag pada HTML</h2>
        <ul>
          <li>Tag Heading (h1-h6)</li>
          <li>Tag Paragraph (p)</li>
          <li>Tag Table (table)</li>
          <li>Tag Link (a)</li>
          <li>Tag Image (img)</li>
          <li>Tag Form (form)</li>
          <li>Tag List (ul li)</li>
          <li>Tag Styling (strong, em, br, u)</li>
        </ul>
      </section>
      <section>
        <h2>Output Praktikum</h2>
        <img src={index} alt="img-praktikum" className="img-praktikum" />
        <img src={form} alt="img-praktikum" className="img-praktikum" />
        <img src={welcome} alt="img-praktikum" className="img-praktikum" />
      </section>
    </div>
  )
}

export default Html