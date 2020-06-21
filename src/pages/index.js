//index.js
import React from "react"
import FirstPart from "../components/firstpart"
import SecondPart from "../components/secondpart"
import ThirdPart from "../components/thirdpart"
import FourthPart from "../components/fourthpart"
import FifthPart from "../components/fifthpart"
import SixthPart from "../components/sixthpart"
import SeventhPart from "../components/seventhpart"
import "../App.scss"
import SEO from "../components/seo"
import Nav from "../components/nav"

const IndexPage = () => (
  <div>
    <SEO title="James" />
    <Nav />
    <FirstPart />
    <SecondPart />
    <ThirdPart />
    <FourthPart />
    <FifthPart />
    <SixthPart />
    <SeventhPart />
  </div>
)

export default IndexPage
