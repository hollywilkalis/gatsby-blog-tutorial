// Step 1: Import React
import * as React from 'react'
// import { Link } from 'gatsby'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <main>
      <Layout pageTitle="Home Page">
        <p>I'm making this by following the Gatsby Tutorial.</p>
        <StaticImage
        alt="Gus is a fluffy gray tabby. He is staring at the window at his enemy, the neighborhood squirrel"
        src="../images/gus-and-the-squirrel.jpeg"
      />
      </Layout>
    </main>
  )
}
// Step 3: Export your component
export default IndexPage