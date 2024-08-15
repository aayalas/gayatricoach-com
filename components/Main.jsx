import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Link } from "./nexui"
import Image from 'next/image';
import { IoLogoWhatsapp } from "react-icons/io";
import CarouselContent from '@/components/carousel';
import CarouselContent2 from './Testimonials';

import {useTranslations} from 'next-intl';
import { Faqs } from './Faqs';
import InLineWidgetCall from './InLineWidgetCall';
import { Slider } from './slider';
import { SliderDos } from './sliderdos';


function Main() {
  const t = useTranslations('Main');

  return (
    <>
      <section id="home" className="pt-8"> 
      {/* bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')]  */}
        <div className="px-1 mx-auto text-center py-1 lg:py-1">
          <div className="flex flex-col space-y-1 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          {/*  CAROUCEL  */}
           <div>
			  <SliderDos />
              {/* <CarouselContent/> */}
            </div> 
          </div>
        </div>
      </section>
	  <section id="about" className="antialiased">                
				<div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
					<div className="grid md:grid-cols-2 gap-4">
						<div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
							<img className="object-cover rounded-xl aspect-rectangle" src="/Gaby.jpg" alt=""/>
						</div>                       
						<div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
							<div className="max-w-2xl mx-auto text-start">
								<h2 className="text-3xl font-bold leading-tight tracking-tight text-gray-900 sm:text-4xl dark:text-white">
									{t('links.about.title')}
								</h2>
								<p className="mt-4 text-2xl font-bold text-gray-900 sm:text-xl dark:text-white">
									{t('links.about.subtitleA')}
								</p>
								<p className="mt-4 text-2xl font-light text-gray-900 sm:text-xl dark:text-white">
									{t('links.about.subtitleB')}
								</p>
							</div>
								<p className="mt-4 text-base font-light text-gray-900 sm:text-xl dark:text-white">
									{t('links.about.p')}
								</p>
								<p className="mt-4 text-3xl font-bold text-gray-900 sm:text-xl dark:text-white">
									{t('links.about.subtitle2')}
								</p>
								<div className="mt-4 text-base font-light text-gray-900 sm:text-xl dark:text-white">
									{/* {t('links.about.p2')} */}
									<ul>
										<li>{t('links.about.p2')}</li>
										<li>{t('links.about.p3')}</li>
										<li>{t('links.about.p4')}</li>
										<li>{t('links.about.p5')}</li>
										<li>{t('links.about.p6')}</li>
										<li>{t('links.about.p7')}</li>
										<li>{t('links.about.p8')}</li>
										<li>{t('links.about.p9')}</li>
									</ul>
								</div>
						</div>
					</div>
				</div>
	  </section>
      <section id="services" className="antialiased">
				<div className="max-w-2xl mx-auto text-center py-16">						
					<h2 className="text-3xl font-normal leading-tight tracking-tight text-gray-900 sm:text-4xl dark:text-white">
						{t('links.services.title')}
					</h2>
					<p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">{t('links.services.subtitle')}</p>
					<a href="#letstalk" className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
              			{t('links.services.button1')}   
					</a>
					<a href="#faqs" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
						{t('links.services.button2')}
					</a> 
				</div>
				<div className="py-4 px-2 mx-auto max-w-screen-xl lg:py-4">
					<div className="grid md:grid-cols-2 gap-8">
						{/* <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 md:p-12 shadow-lg">
							<h2 className="text-gray-900 dark:text-white text-3xl font-normal mb-2">
                				{t('links.services.tcard1')}
              				</h2>
							<p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
								{t('links.services.pcard1')}
              				</p>
						</div>
						<div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 md:p-12 shadow-lg">
							<h2 className="text-gray-900 dark:text-white text-3xl font-normal mb-2">
								{t('links.services.tcard2')}
							</h2>
							<p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
								{t('links.services.pcard2')}
							</p>
						</div> */}
						{/* <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 md:p-12 shadow-lg">
							<h2 className="text-gray-900 dark:text-white text-3xl font-normal mb-2">
                				{t('links.services.tcard3')}
              				</h2>
							<p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
								{t('links.services.pcard3')}
              				</p>
						</div> */}
						{/* <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 md:p-12 shadow-lg">
							<h2 className="text-gray-900 dark:text-white text-3xl font-normal mb-2">
								{t('links.services.tcard4')}
							</h2>
							<p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
								{t('links.services.pcard4')}
							</p>
						</div> */}
						{/* <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 md:p-12 shadow-lg">
							<h2 className="text-gray-900 dark:text-white text-3xl font-normal mb-2">
                				{t('links.services.tcard5')}
              				</h2>
							<p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
								{t('links.services.pcard5')}
              				</p>
						</div> */}
						{/* <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 md:p-12 shadow-lg">
							<h2 className="text-gray-900 dark:text-white text-3xl font-normal mb-2">
								{t('links.services.tcard6')}
							</h2>
							<p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
								{t('links.services.pcard6')}
							</p>
						</div> */}
						{/* <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 md:p-12 shadow-lg">
							<h2 className="text-gray-900 dark:text-white text-3xl font-normal mb-2">
                				{t('links.services.tcard3')}
							</h2>
							<p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
								{t('links.services.pcard3')}
							</p>
						</div> */}
					</div>
				</div>
	  </section>
      <section id="faqs" className="antialiased">
				<div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
					<div className="max-w-2xl mx-auto text-center">
						<h2 className="text-3xl font-normal leading-tight tracking-tight text-gray-900 sm:text-4xl dark:text-white">
							{t('links.faqs.title')}
						</h2>
						<h2 className="mt-4 text-base font-normal text-gray-500 sm:text-xl dark:text-gray-400">
							{t('links.faqs.subtitle')}
						</h2>
					</div>
					<div className="py-4 px-2 mx-auto max-w-screen-xl lg:py-4">
					<div className="grid md:grid-cols-1 gap-8">
						<div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 md:p-12 shadow-lg">
							<h2 className="text-gray-900 dark:text-white text-2xl font-normal mb-2">
                				{t('links.faqs.tcard1')}
              				</h2>
							<p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
								{t('links.faqs.pcard1')}
								<br/><br/>
								{t('links.faqs.pcard1a')}
              				</p>
							<p className="text-gray-900 dark:text-white text-2xl font-normal mb-2"> 
							    {t('links.faqs.tcard2')}
							</p>
							<p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
							    {t('links.faqs.pcard2')}
							</p>
							<p className="text-gray-900 dark:text-white text-2xl font-normal mb-2"> 
							    {t('links.faqs.tcard3')}
							</p>
							<p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
							    {t('links.faqs.pcard3')}
								<br/><br/>
								{t('links.faqs.pcard3a')}
								<br/><br/>
								{t('links.faqs.pcard3b')}
								<br/><br/>
								{t('links.faqs.pcard3c')}
							</p>
							<p className="text-gray-900 dark:text-white text-2xl font-normal mb-2"> 
							    {t('links.faqs.tcard4')}
							</p>
							<p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
							    {t('links.faqs.pcard4')}
							</p>
							<p className="text-gray-900 dark:text-white text-2xl font-normal mb-2"> 
							    {t('links.faqs.tcard5')}
							</p>
							<p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
							    {t('links.faqs.pcard5')}
							</p>						
							<p className="text-gray-900 dark:text-white text-2xl font-normal mb-2"> 
							    {t('links.faqs.tcard6')}
							</p>
							<p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
							    {t('links.faqs.pcard6')}
							</p>
							<p className="text-gray-900 dark:text-white text-2xl font-normal mb-2"> 
							    {t('links.faqs.tcard7')}
							</p>
							<p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
							    {t('links.faqs.pcard7')}
								<br/>
								{t('links.faqs.pcard7a')}
								<br/>
								{t('links.faqs.pcard7b')}
								<br/>
								{t('links.faqs.pcard7c')}
								<br/>
								{t('links.faqs.pcard7d')}
								<br/>
								{t('links.faqs.pcard7e')}
								<br/>
								{t('links.faqs.pcard7f')}
								<br/>
								{t('links.faqs.pcard7g')}
								<br/>
								{t('links.faqs.pcard7h')}
							</p>														
						</div>
					</div>
				</div>					
				</div>
	  </section>
      <section id="success" className="antialiased"> 
				<div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
					<div className="max-w-2xl mx-auto text-center">
						<h2 className="text-3xl font-normal leading-tight tracking-tight text-gray-900 sm:text-4xl dark:text-white">
							{t('links.success.title')}
						</h2>
						<p className="mt-4 mb-8 text-base font-normal text-gray-500 sm:text-xl dark:text-gray-400">
							{t('links.success.subtitle')}
						</p>
          			{/*  TESTIMONIAL  */}
					<div>
						<Slider />
						{/* <CarouselContent2 /> */}
					</div> 
					</div>
				</div>   
	  </section>
      <section id="letstalk" className="mb-8">
				<div className="max-w-2xl mx-auto text-center">
					<h2 className="text-3xl font-normal leading-tight tracking-tight text-gray-900 sm:text-4xl dark:text-white">
						{t('links.letstalk.title')}
					</h2>
					<h3 className="max-w-2xl mt-4 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                        {t('links.letstalk.subtitle')} 
          			</h3>
					<h3 className="max-w-2xl mt-4 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                        {t('links.letstalk.subtitle2')} 
          			</h3>					
					<p className="max-w-2xl mt-4 font-light text-gray-900 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                        {t('links.letstalk.p')} 
          			</p>
				</div>
				<div className="py-2 px-4 mx-auto max-w-screen-xl">
					<div className="grid md:grid-cols-1 gap-8">
						<InLineWidgetCall />
						{/* <Card className="bg-gray-50 dark:bg-white text-center items-center border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 shadow-lg">
						<div className="w-full justify-between sm:w-auto mb-4 sm:mb-0">
							<ul className="flex flex-wrap justify-center sm:justify-start">
								<li className="mr-3"><Link className='text-xl font-normal leading-tight tracking-tight text-gray-900 sm:text-4xl dark:text-gray-900' href="tel:+19548604423">
									<IoLogoWhatsapp className="text-cyan-700"/>&nbsp; + 1 (954) 800-4423</Link>
								</li>            
							</ul>
						</div> */}
						{/* style={{ color: "green", fontSize: 25 }} */}
						{/* </Card>                 */}
					</div>
					<div className="grid md:grid-cols-2 pt-8 gap-8">
						<Card className="bg-gray-50 dark:bg-white text-center text-2xl border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 shadow-lg">
							<CardHeader>
								<span className='text-black'>@terapeutagaya</span>
							</CardHeader>
							<CardBody>
								<Link href="https://www.instagram.com/terapeutagaya?igsh=MXdnY3BhNzd6bGFjaA==">
								
								<Image 
									src="/instacard.png"
									alt="Instagram"
									className=""
									width={1024}
									height={768}
								/>
								</Link>
							</CardBody>
						</Card>
						<Card className="bg-gray-50 dark:bg-white text-center text-2xl border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 shadow-lg">
							<CardHeader>
								<span className='text-black'>Gaby Ayala Terapeuta</span>
							</CardHeader>
							<CardBody>
								<Link href="https://www.facebook.com/terapeutagaya?mibextid=LQQJ4d">
								
								<Image 
									src="/fbcard.png"
									alt="Facebook"
									className=""
									width={1024}
									height={768}
								/>
								</Link>
							</CardBody>
						</Card>              
					</div>
					<div className="grid md:grid-cols-1 pt-8 gap-8">
						<Card className="bg-gray-50 dark:bg-white text-center items-center border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 shadow-lg">
							<div className="w-full justify-between sm:w-auto mb-4 sm:mb-0">
              	<ul className="flex flex-wrap justify-center sm:justify-start">
                	<li className="mr-3"><Link className='text-xl font-normal leading-tight tracking-tight text-gray-900 sm:text-4xl dark:text-gray-900' href="tel:+19548604423">
                    <IoLogoWhatsapp className="text-cyan-700"/>&nbsp; + 1 (954) 800-4423</Link>
                  </li>            
								</ul>
							</div>
								{/* style={{ color: "green", fontSize: 25 }} */}
						</Card>                
					</div>
				</div>                      
      </section>
    </>
  )
}

export default Main