import "./styles.css"

import build from "../../assets/build.svg"
import avatar from "../../assets/avatar.png"

import github from "../../assets/github.svg"
import angular from "../../assets/angular.svg"
import react from "../../assets/react.svg"
import typescript from "../../assets/typescript.svg"
import figma from "../../assets/figma.svg"

export const Card = () => {
  return (
    <section className="card">
      <div className="container">
        <div className="faixa"></div>
        <div className="encaixe"></div>
        <div className="avatar">
          <span>
            <img className="circle" src={build} alt="Selo Rocketseat" />
          </span>
          <img src={avatar} alt="Foto pessoal" id="userImage" />
        </div>
        <h1 id="userName">Ivan Rogério</h1>
        <a id="userLink" href="" target="_blank">
          <img src={github} alt="" />
          <span id="userLogin">ivanrogeriio</span>
        </a>

        <p id="userBio">
          I’m Front-end Developer and UX/UI Designer with Frameworks and Figma
        </p>
        <ul id="socialLinks">
          <li className="angular">
            <a href="https://angular.io/" target="_blank" className="tecs">
              <img
                className="img-buttom"
                src={angular}
                alt=""
              />
            </a>
          </li>
          <li className="react">
            <a href="https://pt-br.reactjs.org/" target="_blank" className="tecs">
              <img
                className="img-buttom"
                src={react}
                alt=""
              />
            </a>
          </li>
          <li className="typescript">
            <a href="https://www.typescriptlang.org/" target="_blank" className="tecs">
              <img
                className="img-buttom"
                src={typescript}
                alt=""
              />
            </a>
          </li>
          <li className="figma">
            <a href="https://www.figma.com/" target="_blank" className="tecs">
              <img
                className="img-buttom"
                src={figma}
                alt=""
              />
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}
