/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

 import React from "react"
 import PropTypes from "prop-types"
 import { useStaticQuery, graphql } from "gatsby"
 import { StaticImage } from "gatsby-plugin-image"
 import Button from '../components/Button'
 import { FaFacebookF, FaLinkedinIn} from 'react-icons/fa'
 
 import Header from "./header"
 
 const Layout = ({ children }) => {
   const data = useStaticQuery(graphql`
     query SiteTitleQuery {
       site {
         siteMetadata {
           title
         }
       }
     }
   `)
 
   return (
     <>
       {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
       <div
         // style={{
         //   margin: `0 auto`,
         //   maxWidth: 960,
         //   padding: `0 1.0875rem 1.45rem`,
         // }}
       >
         <main>{children}</main>
         <footer>
           <section className="bg-black">
             <div className="container lg:flex">
               <div className="lg:text-left lg:w-1/2">
                   <StaticImage
                         src="../images/results.png"
                         alt="Search Nerds Workers"
                   />
               </div>
               <div id="our-results" className="lg:text-left lg:w-1/2 justify-center">
                 <div>
                    <p className="text-md mt-5 lg:text-md font-bold">
                    Our results speak for themselves
                    </p>
                    <ul type="circle" className="text-md mt-5 lg:text-md font-light">
                      <li>I want more leads (B2B)</li>
                      <li>I want more sales (eCommerce)</li>
                    </ul>
                    <p className="mt-8 md:mt-12">
                        <Button className='btn uppercase block'>GET A FREE ACCOUNT HEALTH CHECK</Button>
                    </p>
                 </div>
               </div>
             </div>
           </section>
           <div className="copyright-bottom">
              <div className="container lg:flex">
                <div className="lg:text-left lg:w-1/2 flex">
                    <StaticImage
                        src="../images/logo.webp"
                        alt="Search Nerds Logo"
                        width={50}
                        className="mr-10"
                    />
                    © {new Date().getFullYear()}, | Search Nerds | Australian Internet Advertising | All rights reserved
                </div>
                <div className="lg:w-1/2 flex justify-end">
                  <div className="mr-5">
                    <FaFacebookF/>
                  </div>
                  <div>
                    <FaLinkedinIn/>
                  </div>
                </div>
              </div>
           </div>
         </footer>
       </div>
     </>
   )
 }
 
 Layout.propTypes = {
   children: PropTypes.node.isRequired,
 }
 
 export default Layout
 