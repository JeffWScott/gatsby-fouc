import React from "react"
import PropTypes from "prop-types"

import Menu from "../components/menu"




const Layout = () => {

  return (
    <Menu />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
