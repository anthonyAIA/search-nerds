import React from "react"
import Button from '../components/Button'
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const LandingPageTest = () => (
    <Layout>
        <SEO title="Landing Page" />
        <section className="flex items-center justify-center">
            <div className="flex grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-4 p-5">
                <div class="bg-green-100 text-green-500 text-lg font-bold text-center p-10 rounded-lg">1</div>
                <div class="bg-green-100 text-green-500 text-lg font-bold text-center p-10 rounded-lg">2</div>
                <div class="bg-green-100 text-green-500 text-lg font-bold text-center p-10 rounded-lg">3</div>
                <div class="bg-green-100 text-green-500 text-lg font-bold text-center p-10 rounded-lg">4</div>
                <div class="bg-green-100 text-green-500 text-lg font-bold text-center p-10 rounded-lg">5</div>
            </div>
        </section>

    </Layout>
    )

export default LandingPageTest