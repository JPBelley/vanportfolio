import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import Hero from "../components/home/hero"
import About from "../components/home/about"
import Portfolio from "../components/home/portfolio"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    
   <Hero />
   <About />
   <Portfolio />
  </Layout>
)

export default IndexPage
