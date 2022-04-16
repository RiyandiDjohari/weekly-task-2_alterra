import React from 'react'
import logo from "../../assets/Figma/figma_logo.png";
import hasil_preview from "../../assets/Figma/Hasil-preview.jpg";
import prototype from "../../assets/Figma/prototype.jpg";
function Figma() {
  return (
    <div className="content">
      <h1 className="title">Figma</h1>
      <img src={logo} alt="img-title" className="img-title" />
      <section>
        <h2>1. Figma</h2>
        <p>Figma merupakan aplikasi desain berbasis cloud dan alat prototyping untuk proyek digital. Figma dibuat untuk membantu para pengguna agar dapat berkolaborasi secara tim. Figma adalah tools yang berguna bagi siapa saja dalam pekerjaan di ranah desain digital. Hal ini terbukti dengan kemampuannya dalam memudahkan pengguna memasarkan produk desain kepada klien atau calon pembeli.</p>
      </section>
      <section>
        <h2>2. Kelebihan Figma</h2>
        <ul>
          <li>Gratis(Untuk 2 users, dan 3 project per akun)</li>
          <li>Dapat berjalan pada sistem operasi Mac, Linux dan Windows</li>
          <li>Dapat berkolaborasi team secara real-time</li>
          <li>Dapat mengimport sketch file</li>
          <li>Memiliki banyak fitur plugin</li>
          <li>Berbasis website sehingga tidak perlu menginstall aplikasi</li>
          <li>Menggunakan penyimpanan cloud </li>
        </ul>
      </section>
      <section>
        <h2>3. Kekurangan Figma</h2>
        <ul>
          <li>Membutuhkan koneksi internet</li>
          <li>Tidak sepenuhnya gratis</li>
          <li>Tidak dapat mengeksport ke file sketch</li>
        </ul>
      </section>
      <section>
        <h2>Output Praktikum:</h2>
        <div className='img-flex'>
          <img src={hasil_preview} alt="img-praktikum" width="600px" height="400px" />
          <img src={prototype} alt="img-praktikum" width="600px" height="400px" />
        </div>
      </section>
    </div>
  )
}

export default Figma
