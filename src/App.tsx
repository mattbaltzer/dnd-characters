import React from "react";
import styles from "./index.css";
import Logo from "./assests/updatedlogo.png";
//import "./App.css";
import Layout from "./layout";
import dwarfPic from "./assests/dwarf.png";
import elfPic from "./assests/elf.png";
import halflingPic from "./assests/halfling.png";
import humanPic from "./assests/human.png";
import dragonbornPic from "./assests/dragonborn.png";
import gnomePic from "./assests/gnome.png";
import halfelfPic from "./assests/halfelf.png";
import halforcPic from "./assests/halforc.png";
import tieflingPic from "./assests/tiefling.png";

function App() {
  return (
    <Layout>
      <div>
        <header>
          <img
            src={Logo}
            className="App-logo"
            alt="logo"
            height={200}
            width={300}
          />
          <h1>Basic Character Selector</h1>
        </header>
        <section>
          <ul>
            <button>
              <img src={dwarfPic} alt="dwarfPic" height={100} width={120} />
              <p>Dwarf</p>
            </button>
            <button>
              <img src={elfPic} alt="elfPic" height={120} width={80} />{" "}
              <p>Elf</p>
            </button>
            <button>
              <img
                src={halflingPic}
                alt="halflingPic"
                height={140}
                width={160}
              />{" "}
              <p>Halfling</p>
            </button>
            <button>
              <img src={humanPic} alt="humanPic" height={120} width={60} />{" "}
              <p>Human</p>
            </button>
            <button>
              <img
                src={dragonbornPic}
                alt="dragonbornPic"
                height={100}
                width={80}
              />{" "}
              <p>Dragonborn</p>
            </button>
            <button>
              <img src={gnomePic} alt="gnomePic" height={100} width={120} />{" "}
              <p>Gnome</p>
            </button>
            <button>
              <img src={halfelfPic} alt="halfelfPic" height={100} width={120} />{" "}
              <p>Half Elf</p>
            </button>
            <button>
              <img src={halforcPic} alt="halforcPic" height={100} width={120} />{" "}
              <p>Half Orc</p>
            </button>
            <button>
              <img
                src={tieflingPic}
                alt="tieflingPic"
                height={100}
                width={120}
              />{" "}
              <p>Tiefling</p>
            </button>
          </ul>
        </section>
      </div>
    </Layout>
  );
}

export default App;
