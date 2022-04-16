import React from 'react'
import git from "../../assets/Git/git.png"
import img_praktikum from "../../assets/Git/react-riyandi-djohari.png"
function Git() {
  return (
    <div className='content'>
      <h1 className="title">Git</h1>
      <img src={git} alt="img-title" className="img-title" />
      <div>
        <h2>1. Version Control System</h2>
        <p>
          Version Control System digunakan untuk mengelolah perubahan yang terjadi pada source code. Version control system mempermudah kita dalam berkolaborasi membangun sebuah aplikasi karena kita bisa mengetahui kapan perubahan itu
          terjadi dan siapa yang melakukan perubahan tersebut. Sehingga kita mudah melakukan tracking pada saat kerjasama team. Pada dasarnya terdapat banyak Version control system, seperti subversion, cvs, mercurial, dll.
        </p>
      </div>
      <section>
        <h2>2. Git</h2>
        <p>
          Merupakan salah satu version control system yang banyak digunakan saat ini untuk mengembangkan software secara bersama-sama. <br /> <strong>Terminologi yang ada pada git:</strong>
        </p>
        <ul type="square">
          <li>Repository, bisa juga dikatakan sebagai folder utama dari project yang akan kita kembangkan.</li>
          <li>branch digunakan untuk berkolaborasi, mengembangkan sebuah fitur ataupun memperbaiki bug pada bagian kode program tertentu </li>
          <li>merge atau proses penggabungan antar 2 branch. </li>
          <li>add, merupakan command yang digunakan untuk memindahkan perubahan pada working directory ke staging area</li>
          <li>commit, bisa juga dikatakan sebagai rekaman atas perubahan yang terjadi didalam repo kita </li>
          <li>push, digunakan untuk mengirimkan commit ke repository</li>
          <li>pull, digunakan untuk mengambil commit dari repository</li>
        </ul>
      </section>
      <section>
        <h2>3. Workflow Collaboration (Alur kerja kolaborasi)</h2>
        <p>
          Dalam mengembangkan sebuah software baik secara individu maupun kolaborasi dalam sebuah tim, ada baiknya kita perlu memahami alur kerja untuk berkolaborasi dalam github, sehingga pengembangan software menjadi lebih efisien.
          <br />
          <strong>Hal hal yang perlu diperhatikan saat bekerja dengan git antara lain:</strong>
          <ul type="square">
            <li>
              Jangan melakukan perubahan source code pada branch master, Hal ini karena branch master merupakan branch utama yang digunakan saat sesi production. Hal yang dapat dilakukan adalah dengan membuat branch development, branch
              development ini merupakan branch khusus yang digunakan saat proses pengembangan software.
            </li>
            <li>
              Hindari melakukan perubahan atau penambahan fitur langsung pada branch development. Hal yang sebaiknya dilakukan adalah dengan membuat branch baru untuk setiap fitur yang ingin ditambahkan. Pada saat fitur tersebut sudah fix,
              kemudian lakukan merge ke branch development.
            </li>
          </ul>
        </p>
      </section>
      <section>
        <h2>Output Praktikum:</h2>
        <img src={img_praktikum} alt="img-praktikum" className="img-praktikum" />
      </section>
    </div>
  )
}

export default Git