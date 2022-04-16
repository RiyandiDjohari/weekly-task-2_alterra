import React from 'react'
import logo from "../../assets/CSS/logo-css.png";
import file1 from "../../assets/CSS/File1.png";
import file2 from "../../assets/CSS/File2.png";

function Css() {
  return (
    <div className="content">
      <h1 className="title">CSS</h1>
      <img src={logo} alt="img-title" className="img-title" />
      <section>
        <h2>1. CSS</h2>
        <p>
          Merupakan singkatan dari Cascading Style Sheet yang berfungsi untuk memberi tampilan visual yang lebih baik pada halaman yang telah dibuat menggunakan HTML. CSS dapat mengatur styling pada tampilan website, dan juga dapat mengatur
          Layouting pada halaman web. Terdapat 3 cara menambahkan CSS, yaitu:
          <ul>
            <li>Inline CSS</li>
            <li>Internal CSS</li>
            <li>External CSS</li>
          </ul>
        </p>
      </section>
      <section>
        <h2>2. CSS Selector dan CSS Grouping</h2>
        <h4>CSS Selector</h4>
        <p>
          CSS Selector adalah kode yang digunakan untuk mencari atau memilih element dalam HTML yang akan diberikan styling. Terdapat 5 kategori CSS Selector, yaitu
          <ul>
            <li>Simple Selector: memilih element berdasarkan nama, id, class.</li>
            <li>Combinatory selectors : Memilih element berdasarkan hubungan spesifik antar element</li>
            <li>Pseudo-class selectors : memilih element berdasarkan keadaan tertentu</li>
            <li>Pseudo-elements selectors : Memilih dan memberikan style pada bagian element tertentu.</li>
            <li>Attribute selectors : Memilih element berdasarkan atribut atau nilai atribut tertentu</li>
          </ul>
        </p>
        <h4>CSS Grouping</h4>
        <p>CSS Grouping merupakan teknik pemberian styling kepada lebih dari 1 element pada html. Hal ini dilakukan apabila terdapat lebih dari 1 element yang berbeda namun membutuhkan styling yang sama.</p>
      </section>
      <section>
        <h2>3. Property pada CSS</h2>
        <h4>Property Tipografi</h4>
        <ul>
          <li>color</li>
          <li>font-family</li>
          <li>font-size</li>
          <li>font-weight</li>
          <li>text-decoration, dll</li>
        </ul>
        <h4>Property Box Model</h4>
        <ul>
          <li>height</li>
          <li>width</li>
          <li>padding</li>
          <li>margin</li>
          <li>border, dll</li>
        </ul>
        <h4>Property Positioning</h4>
        <ul>
          <li>position</li>
          <li>top</li>
          <li>right</li>
          <li>bottom</li>
          <li>left, dll</li>
        </ul>
      </section>
      <section>
        <h2>Output Praktikum</h2>
        <img src={file1} alt="img-praktikum" className="img-praktikum" />
        <img src={file2} alt="img-praktikum" className="img-praktikum" />
      </section>
    </div>
  )
}

export default Css