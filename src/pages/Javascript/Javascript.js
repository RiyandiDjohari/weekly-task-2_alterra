import React from 'react'
import logo from "../../assets/Javascript/logo-js.png";
import kode1 from "../../assets/Javascript/kode-program-nomor1-2.png";
import kode2 from "../../assets/Javascript/kode-program-nomor3-6.png";
import output1 from "../../assets/Javascript/output-no1-2.png";
import output2 from "../../assets/Javascript/output-no3-6.png";

function Javascript() {
  return (
    <div className="content">
      <h1 className="title">Javascript</h1>
      <img src={logo} alt="img-title" className="img-title" />
      <section>
        <h2>1. Javascript Values</h2>
        <h4>Perbedaan Keyword Var, Let, dan Const</h4>
        <ul>
          <li>Pada Var, dan let bisa deklarasi variabel tanpa nilai, sedangkan pada Const tidak bisa.</li>
          <li>Keyword Var bisa dilakukan Deklarasi ulang, sedangkan pada let dan const tidak bisa.</li>
          <li>Keyword var dan let bisa dilakukan re-assign value, sedangkan const tidak bisa</li>
        </ul>
        <h4>Hoisting</h4>
        <p>
          Merupakan kondisi ketika assign variabel mendahului pendeklarasian variabel, namun kode tidak error Keyword var dan function bisa melakukan hoisting. Hal ini sangat tidak disarankan karena akan membingungkan pada saat baris kode
          yang dikerjakan sudah banyak. Oleh karena itu pada saat ini disarankan untuk menggunakan keyword let atau const untuk membuat sebuah variabel pada javascript
        </p>
        <h4>Scoping</h4>
        <ul>
          <li>Global Scope</li>
          <li>Function Scope (Didalam Function)</li>
          <li>Block Scope ( Didalam pengkondisian): Hanya bisa mengakses var , let dan const tidak bisa</li>
        </ul>
        <h4>Tipe Data pada Javascript</h4>
        <p>
          Tipe data pada javascript terbagi menjadi 2 yaitu tipe data primitif dan tipe data objek.
          <ul>
            <li>Tipe Data Primitif: string, number, boolean, undefined, null, symbol</li>
            <li>Tipe Data Object: Object, Array, Function, Date, Set, Map, Weak Set, Weak Map</li>
          </ul>
        </p>
      </section>
      <section>
        <h2>2. Control Flow pada Javascript</h2>
        <p>
          Control flow mengatur alur eksekusi pada statement, atau jalannya program sesuai keinginan kita. Contoh control flow yaitu pengulanan, dan pengkondisian
          <ul>
            <li>Pengulangan: For, While, Do While</li>
            <li>Oengkondisian: IF...Else, Switch, Block, Try, Catch, Break, Continue, Throw.</li>
          </ul>
        </p>
      </section>
      <section>
        <h2>3. Function Pada Javascript</h2>
        <p>Function digunakan untuk melakukan serangkaian komputasi / prosedur yang dapat digunakan berulang kali dan akan mengembalikan sebuah nilai. Terdapat 2 jenis function, yaitu function expression dan arrow function</p>
      </section>
      <section>
        <h2>Output Praktikum:</h2>
        <h4>Output No 1-2</h4>
        <img src={kode1} alt="img-praktikum" className="img-praktikum" />
        <img src={output1} alt="img-praktikum" className="img-praktikum" />
        <h4>Output No 3-6</h4>
        <img src={kode2} alt="img-praktikum" className="img-praktikum" />
        <img src={output2} alt="img-praktikum" className="img-praktikum" />
      </section>
    </div>
  )
}

export default Javascript