import React from 'react'
import logo from "../../assets/ui-ux/uiux-icon.png";
import desain1 from "../../assets/ui-ux/Desain1.jpg";
import desain2 from "../../assets/ui-ux/Desain2.jpg";
import desain3 from "../../assets/ui-ux/Desain3.jpg";

function UIUX() {
  return (
    <div className="content">
      <h1 className="title">UI-UX</h1>
      <img src={logo} alt="img-title" className="img-title" style={{ height: "300px" }} />
      <section>
        <h2>1. User Experience (UX)</h2>
        <p>Tahapan dalam membangun sebuah user experience:</p>
        <h4>Emphatize</h4>
        <p>
          yaitu kita sebagai ux designer perlu melihat masalah dari sudut pandang pengguna, mencoba memahami perasaannya dan mencoba berkomunikasi dengan calon pengguna, sehingga tampilan yang kita bangun akan relevan dengan kebutuhan
          pengguna.
        </p>
        <h4>Define</h4>
        <p>yaitu tahapan setelah mengumpulkan informasi yang diperlukan dari user, Pada tahapan ini UX designer perlu untuk menemukan masalah utama, dan memetakan prioritas masalah yang perlu diselesaikan</p>
        <h4>Ideate</h4>
        <p>Merupakan tahapan untuk menentukan tujuan dibangunnya desain, lalu menentukan user flow, yaitu step by step yang perlu user lakukan.</p>
        <h4>Prototype</h4>
        <p>Merupakan tahapan merancang system yang akan dibangun dimana rancangan tersebut sudah mirip dengan tampilan aslinya, atau bisa dikatakan sebagai sample version dari final product yang akan dibangun </p>
      </section>
      <section>
        <h2>2. User Interface (UI)</h2>
        <p>Terdapat 4 pilar utama pada user interface, yaitu:</p>
        <h4>Konsistensi</h4>
        <p>
          Kita perlu merancang sebuah user interface yang konsisten, agar pengguna tidak kebingungan saat menggunakan software yang kita rancang. Konsisten disini berarti menggunakan pola desain yang sama kepada tiap halaman sehingga user
          akan mudah menggunakan website yang kita rancang.
        </p>
        <h4>Tipografi yang baik</h4>
        <p>
          Penggunaan tipografi yang baik yaitu penggunaan font yang mudah dibaca, ukuran font yang terstruktur antara header1, header2, dst, dan warna font yang senada dengan background yang digunakan agar pengguna dapat membaca informasi
          yang diberikan dengan baik
        </p>
        <h4>Tampilan yang jelas dan ringkas</h4>
        <p>Tampilan yang dibangun jelas dan ringkas, maksudnya adalah informasi yang disampaikan harus to the point dan tidak boleh terlalu banyak informasi dalam 1 tampilan yang berpotensi membuat user menjadi bingung.</p>
        <h4>Feedback yang jelas</h4>
        <p>Jangan memberi umpan balik yang bersifat ambigu seperti "tunggu", usahakan menggunakan umpan balik seperti "Transaksi anda sedang kami proses"</p>
      </section>
      <section>
        <h2>3. Tools untuk membangun sebuah UI-UX</h2>
        <ul>
          <li>Sketch</li>
          <li>Adobe XD</li>
          <li>Figma</li>
          <li>Invision</li>
          <li>Marvel</li>
        </ul>
      </section>
      <section>
        <h2>Output Praktikum:</h2>
        <div className="img-flex">
          <img src={desain1} alt="img-praktikum" width="400px"  height="300px"/>
          <img src={desain2} alt="img-praktikum" width="400px" height="300px"/>
          <img src={desain3} alt="img-praktikum" width="400px"  height="300px"/>
        </div>
      </section>
    </div>
  )
}

export default UIUX