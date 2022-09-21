import React from "react"
import Button from '../components/Button'
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const LandingPage = () => (
    <Layout id="landing-page">
        <SEO title="Landing Page" />
        <section>
            <div className="container lg:flex">
                <div className="text-center lg:text-left lg:w-1/2">
                    <StaticImage
                        src="../images/logo.webp"
                        alt="Search Nerds"
                    />
                    <h1 className="title-big font-bold leading-none uppercase">
                        Search Nerds!
                    </h1>
                    <p className="text-xl mt-5 lg:text-2xl font-light">
                        Google Ads Done Right!
                    </p>
                    <p className="mt-8 md:mt-12">
                        <Button className='btn uppercase'>Request Pricing</Button>
                    </p>
                    <div className="flex mt-10 gap-4">
                        <div className="basis-1/4 justify-self-center">
                            <StaticImage
                                src="../images/google-partner.webp"
                                alt="Search Nerds"
                            />
                        </div>
                        <div className="basis-1/4 justify-self-center">
                            <StaticImage
                                src="../images/tiktok.webp"
                                alt="Search Nerds"
                            />
                        </div>
                        <div className="basis-1/4 justify-self-center">
                            <StaticImage
                                src="../images/semrush.webp"
                                alt="Search Nerds"
                            />
                        </div>
                        <div className="basis-1/4 justify-self-center">
                            <StaticImage
                                src="../images/shopify.webp"
                                alt="Search Nerds"
                            />
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/2 justify-center flex">
                    <StaticImage
                        src="../images/workers.webp"
                        alt="Search Nerds Workers"
                    />
                </div>
            </div>
        </section>
        <section className="mt-32">
            <div className="container lg:flex">
                <div className="lg:w-1/2 justify-center flex">
                    <StaticImage
                        src="../images/helping-chart.png"
                        alt="Search Nerds Workers"
                    />
                </div>
                <div className="text-center lg:text-left lg:w-1/2">
                    <p className="text-2xl lg:text-3xl xl:text-4xl font-bold uppercase">
                    Do you find yourself jumping from agency to agency, just not able to get the results you want?
                    </p>
                    <p className="text-md mt-5 lg:text-md font-light">
                        It’s time consuming, frustrating, and down right tiring! 
                    </p>
                    <p className="text-md mt-5 lg:text-md font-light">
                    You can’t honestly be expected to keep paying these set up fees, management fees, the Google spend, just coughing up over and over again… Can you?
                    </p>
                    <p className="text-md mt-5 lg:text-md font-light">
                    There are so many agencies and experts out there claiming to be experts in their field. Promising you the world, but when it comes down to it, where the rubber hits the road? 
                    </p>
                    <p className="text-md mt-5 lg:text-md font-light">
                    Nothing, nada, no bueno.
                    </p>
                </div>
            </div>
        </section>
        <section className="mt-32">
            <div className="container lg:flex">
                <div className="text-center lg:text-left lg:w-1/2">
                    <p className="text-2xl lg:text-3xl xl:text-3xl font-bold leading-normal uppercase">
                    You’re sales are just not where they need to be. This is not just a money problem, it’s a time problem!
                    </p>
                    <p className="text-md mt-5 lg:text-md font-light">
                    Which makes it a life problem!
                    </p>
                    <p className="text-md mt-5 lg:text-md font-light">
                    The longer it takes you to find the right Google Ads experts, the longer it takes for you to hit your business goals and grow your business to where you want it to be right? It CRUCIAL your business gets the results from Google Ads that it needs… sooner rather than later.
                    </p>
                    <p className="text-md mt-5 lg:text-md font-light">
                    Well you’ve come to the right place. 
                    </p>
                    <p className="mt-8 md:mt-12">
                        <Button className='btn uppercase'>Lets Chat</Button>
                    </p>
                </div>
                <div className="lg:w-1/2 justify-center flex">
                    <StaticImage
                        src="../images/sales.png"
                        alt="Search Nerds Workers"
                    />
                </div>
            </div>
        </section>
        <section className="mt-32">
            <div className="container lg:flex">
                <div className="lg:w-1/2 justify-center flex">
                    <StaticImage
                        src="../images/data-vector.png"
                        alt="Search Nerds Workers"
                    />
                </div>
                <div className="text-center lg:text-left lg:w-1/2">
                    <p className="text-2xl lg:text-3xl xl:text-3xl font-bold leading-normal uppercase">
                        At Search Nerds you get what you see.
                    </p>
                    <p className="text-md mt-5 lg:text-md font-light">
                    A team of nerds <span className='font-bold uppercase'>OBSESSED</span> with Google Ads and helping businesses grow!
                    </p>
                    <p className="text-md mt-5 lg:text-md font-light">
                    We don’t just set up and manage your typical campaigns. 
                    </p>
                    <p className="text-md mt-5 lg:text-md font-light">
                    We understand the cutting edge strategies and marketing psychology behind killer campaings that will not only move the needle, but red line your business, breaking every sales record you’ve ever had!
                    </p>
                    <p className="text-md mt-5 lg:text-md font-light">
                    We do this by having in-depth knowledge of the platform as well as constantly testing 3rd party software that can enhance your campaigns performance. 
                    </p>
                    <p className="text-md mt-5 lg:text-md font-light">
                    Through the use of advanced bidding, IP tracking, and heat-mapping software we can instantly increase your conversions without spending an extra cent of on advertising. 
                    </p>
                    <p className="text-md mt-5 lg:text-md font-light">
                    Google Ads consists of many more features than most people think. Advanced bidding, responsive search ads, experiments and scripts are only the beginning. 
                    </p>
                    <p className="text-md mt-5 lg:text-md font-light">
                    Not to mentioned the sheer amount of work we put into your campaigns. This can easily be measured by looking at the change history in your account. Most campaigns that we take over from other agencies have limited work being done on a monthly basis. 
                    </p>
                    <p className="text-md mt-5 lg:text-md font-light">
                    This set and forget mentality is costing your busines precious dollars and more importantly time.
                    </p>
                </div>
            </div>
        </section>
        <section className="mt-32">
            <div className="container lg:flex">
                <div className="text-center lg:text-left lg:w-1/2 pr-40">
                    <StaticImage
                        src="../images/google-partner.webp"
                        alt="Search Nerds Workers"
                        className="mb-5"
                    />
                    <p className="text-2xl lg:text-3xl xl:text-3xl font-bold leading-normal uppercase">
                    We are in the top 3% of agencies Australia wide! 
                    </p>
                    <p className="text-md mt-5 lg:text-md font-light">
                    Our search nerds team tweak your campaigns DAILY to ensure evey single click is going to the best possible keyword, ad, and page. 
                    </p>
                    <p className="text-md mt-5 lg:text-md font-light">
                    It’s through this hard work we have been able to obtain the Google Premium Partners badge.
                    </p>
                    <p className="text-md mt-5 lg:text-md font-light">
                    Our proprietary reporting platform is also set up to give you information in real-time so you can see exactly how your campaign is performing. 
                    </p>
                    <p className="text-md mt-5 lg:text-md font-light">
                    We frequently ring you up and go through this dashboard with you to make sure we are working collaboratively with you so that your getting the leads that you want!  
                    </p>
                    <p className="mt-8 md:mt-12">
                        <Button className='btn uppercase'>GET A FREE ACCOUNT HEALTH CHECK</Button>
                    </p>
                </div>
                <div className="lg:w-1/2 justify-center flex">
                    <StaticImage
                        src="../images/target-vector.png"
                        alt="Search Nerds Workers"
                    />
                </div>
            </div>
        </section>
    </Layout>
)

export default LandingPage