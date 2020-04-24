import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import Hero from "../components/home/hero"
import About from "../components/home/about"
import Portfolio from "../components/home/portfolio"
import Skills from "../components/home/skills"
import Contact from "../components/home/contact"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    
    <Hero />
    {/* <About /> */}
    <Portfolio />
    <Skills />
    <Contact />
  </Layout>
)

export default IndexPage
