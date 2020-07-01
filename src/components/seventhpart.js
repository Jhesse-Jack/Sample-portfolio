import React from "react"
import "../App.scss"
import "../bootstrap.min.css"
// import { FaRegCopyright } from "react-icons/fa";


let currentDate = new Date().getFullYear()
const SeventhPart = () => (
  <div className="rowdeep thirdpartheader">
    <h5> &copy; {currentDate} James Armah </h5>
  </div>
)

export default SeventhPart
