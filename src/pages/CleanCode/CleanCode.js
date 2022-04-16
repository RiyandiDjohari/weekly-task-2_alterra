import React from 'react'
import logo from "../../assets/CleanCode/logo-clean-code.png";
import problem1 from "../../assets/CleanCode/problem1.png";
import problem2 from "../../assets/CleanCode/problem2.png";

function CleanCode() {
  return (
    <div className="content">
      <h1 className="title">Clean Code</h1>
      <img src={logo} alt="img-title" className="img-title" />
      <section>
        <h2>1. Clean Code</h2>
        <p>
          Merupakan istilah untuk kode program yang mudah dibaca, dipahami, dan dimodifikasioleh prorammer lain. Kita harus menggunakan clean karena akan memudahkan saat bekerja sama secara tim,Mengembangkan fitur baru pada aplikasi yang
          dibangun, dan mempercepat proses development.
        </p>
      </section>
      <section>
        <h2>2. Karakteristik Clean Code</h2>
        <ul>
          <li>Mudah Dipahami</li>
          <li>Mudah dieja dan dicari</li>
          <li>Singkat namun mendeskipsikan konteks</li>
          <li>Konsisten</li>
          <li>Hindari penambahan konteks yang tidak perlu</li>
          <li>Komentar yang seperlunya</li>
          <li>Gunakan konvensi</li>
          <li>Terapkan Formatting</li>
        </ul>
      </section>
      <section>
        <h2>3. Prinsip-prinsip Clean Code</h2>
        <h4>KISS (Keep It Simple Stupid)</h4>
        <p>yaitu hindari membuat fungsi yang dibuat untukmelakukan tugas A,Memodifikasi B,Mengecek fungsi C, dst Cukup membuat fungsi yang kecildengan satu tugas saja. Hindari juga menggunakan terlalubanyak argumen pada fungsi.</p>
        <h4>DRY (Don't Repeat Yourself)</h4>
        <p>Don't Repeat Yourself, yaitu Hindari duplikasi code. Hal ini sering terjadi karena melakukan copy-paste dan tidak teliti.</p>
        <h4>Refactoring Code</h4>
        <p>Merupakan proses restrukturisasi kode yang telah dibuat. Dengan cara mengubah struktur internal tanpa mengubah prilaku eksternal. Prinsip KISS dan DRY bisa dicapai dengan cara refactoring.</p>
      </section>
      <section>
        <h2>Output Praktikum:</h2>
        <img src={problem1} alt="img-praktikum" className="img-praktikum" />
        <img src={problem2} alt="img-praktikum" className="img-praktikum" />
      </section>
    </div>
  )
}

export default CleanCode