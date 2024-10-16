import React from 'react'
import { useTranslations } from 'next-intl';
import NewsletterSignUpForm from './NewsletterSignUpForm';
import { Heart } from 'lucide-react';

function Footer() {
  const t = useTranslations('News');
    
  return (
    <>
        <footer className="bg-gradient-to-r from-cyan-500 to-cyan-800 py-12 px-10 font-[sans-serif]" >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                    <h4 className="text-white font-bold text-lg mb-6">{t('follow')}</h4>
                    <ul>
                        <li className="text-gray-300 flex flex-wrap gap-4 items-center">
                        <a href='https://www.facebook.com/terapeutagaya' target='blank'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="fill-gray-200 inline w-7 h-7 hover:fill-white"
                            viewBox="0 0 24 24">
                            <path fillRule="evenodd"
                                d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7v-7h-2v-3h2V8.5A3.5 3.5 0 0 1 15.5 5H18v3h-2a1 1 0 0 0-1 1v2h3v3h-3v7h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z"
                                clipRule="evenodd" />
                            </svg>
                        </a>
                        <a href='https://www.linkedin.com/in/gabriela-ayala-schmitt-3486947/' target='blank'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                            className="fill-gray-200 inline w-7 h-7 hover:fill-white" viewBox="0 0 24 24">
                            <path fillRule="evenodd"
                                d="M21 5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5zm-2.5 8.2v5.3h-2.79v-4.93a1.4 1.4 0 0 0-1.4-1.4c-.77 0-1.39.63-1.39 1.4v4.93h-2.79v-8.37h2.79v1.11c.48-.78 1.47-1.3 2.32-1.3 1.8 0 3.26 1.46 3.26 3.26zM6.88 8.56a1.686 1.686 0 0 0 0-3.37 1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68zm1.39 1.57v8.37H5.5v-8.37h2.77z"
                                clipRule="evenodd" />
                            </svg>
                        </a>
                        <a href='https://www.instagram.com/terapeutagaya' target='blank'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                            className="fill-gray-200 inline w-7 h-7 hover:fill-white" viewBox="0 0 24 24">
                            <path
                                d="M12 9.3a2.7 2.7 0 1 0 0 5.4 2.7 2.7 0 0 0 0-5.4Zm0-1.8a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm5.85-.225a1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 0 1 2.25 0ZM12 4.8c-2.227 0-2.59.006-3.626.052-.706.034-1.18.128-1.618.299a2.59 2.59 0 0 0-.972.633 2.601 2.601 0 0 0-.634.972c-.17.44-.265.913-.298 1.618C4.805 9.367 4.8 9.714 4.8 12c0 2.227.006 2.59.052 3.626.034.705.128 1.18.298 1.617.153.392.333.674.632.972.303.303.585.484.972.633.445.172.918.267 1.62.3.993.047 1.34.052 3.626.052 2.227 0 2.59-.006 3.626-.052.704-.034 1.178-.128 1.617-.298.39-.152.674-.333.972-.632.304-.303.485-.585.634-.972.171-.444.266-.918.299-1.62.047-.993.052-1.34.052-3.626 0-2.227-.006-2.59-.052-3.626-.034-.704-.128-1.18-.299-1.618a2.619 2.619 0 0 0-.633-.972 2.595 2.595 0 0 0-.972-.634c-.44-.17-.914-.265-1.618-.298-.993-.047-1.34-.052-3.626-.052ZM12 3c2.445 0 2.75.009 3.71.054.958.045 1.61.195 2.185.419A4.388 4.388 0 0 1 19.49 4.51c.457.45.812.994 1.038 1.595.222.573.373 1.227.418 2.185.042.96.054 1.265.054 3.71 0 2.445-.009 2.75-.054 3.71-.045.958-.196 1.61-.419 2.185a4.395 4.395 0 0 1-1.037 1.595 4.44 4.44 0 0 1-1.595 1.038c-.573.222-1.227.373-2.185.418-.96.042-1.265.054-3.71.054-2.445 0-2.75-.009-3.71-.054-.958-.045-1.61-.196-2.185-.419A4.402 4.402 0 0 1 4.51 19.49a4.414 4.414 0 0 1-1.037-1.595c-.224-.573-.374-1.227-.419-2.185C3.012 14.75 3 14.445 3 12c0-2.445.009-2.75.054-3.71s.195-1.61.419-2.185A4.392 4.392 0 0 1 4.51 4.51c.45-.458.994-.812 1.595-1.037.574-.224 1.226-.374 2.185-.419C9.25 3.012 9.555 3 12 3Z" />
                            </svg>
                        </a>
                        {/* <a href=''>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                            className="fill-gray-200 inline w-7 h-7 hover:fill-white" viewBox="0 0 24 24">
                            <path
                                d="M22.92 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.83 4.5 17.72 4 16.46 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98-3.56-.18-6.73-1.89-8.84-4.48-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.9 20.29 6.16 21 8.58 21c7.88 0 12.21-6.54 12.21-12.21 0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                            </svg>
                        </a> */}
                        </li>
                    </ul>
                    </div>
                    <div>
                        <h1 className="text-white font-bold text-lg mb-6">{t('title')}</h1>
                        <div className="flex mt-6">
                            <NewsletterSignUpForm />
                            {/* <form 
                                // onSubmit={subscribe}
                                className="w-full max-w-md mx-auto"
                                // method='post'
                                // target='_blank'
                            > */}
                            {/* <h1 className="mb-4 text-md font-bold tracking-tight leading-none text-gray-900 md:text-2xl lg:text-3xl dark:text-white">Subscribe</h1>    */}
                                {/* <label htmlFor="default-email" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Email sign-up</label>
                                    <div className="relative">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                    </svg>
                                    </div>
                                <input type="email" id="default-email" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={t('pholder')} required />
                                <button type="submit" className="text-gray-900 absolute right-2.5 bottom-2.5 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{t('button')}</button>
                                    </div>
                                <div className="mx-auto max-w-screen-sm text-sm text-left sm:text-center text-white newsletter-form-footer dark:text-white">{t('p1')} <a href="/policy" className="font-medium text-white dark:text-white underline hover:underline">{t('p2')}</a></div>
                            </form> */}
                        </div>
                    </div>
            </div>
                <hr className="my-12 border-gray-300" />
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
                <div>
                    {/* <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4> */}
                    <ul className="space-y-4">
                        <li>
                            <a href="#home" className="hover:text-white text-gray-200 text-[15px]">{t('home')}</a>
                        </li>
                        <li>
                            <a href="#services" className="hover:text-white text-gray-200 text-[15px]">{t('services')}</a>
                        </li>
                        <li>
                            <a href="#about" className="hover:text-white text-gray-200 text-[15px]">{t('about')}</a>
                        </li>
                        <li>
                            <a href="#faqs" className="hover:text-white text-gray-200 text-[15px]">{t('faqs')}</a>
                        </li>
                        <li>
                            <a href="#letstalk" className="hover:text-white text-gray-200 text-[15px]">{t('letstalk')}</a>
                        </li>
                        {/* <li>
                            <a href="/blog" className="hover:text-white text-gray-200 text-[15px]">{t('blog')}</a>
                        </li> */}
                    </ul>
                </div>
                <div>
                    {/* <h4 className="text-white font-bold text-lg mb-6">Services</h4> */}
                        <ul className="space-y-4">
                            <li>
                                <a href="#faqs" className="hover:text-white text-gray-200 text-[15px]">{t('therapy')}</a>
                            </li>
                            <li>
                                <a href="#faqs" className="hover:text-white text-gray-200 text-[15px]">{t('gestalt')}</a>
                            </li>
                            <li>
                                <a href="#faqs" className="hover:text-white text-gray-200 text-[15px]">{t('constela')}</a>
                            </li>
                            <li>
                                <a href="#faqs" className="hover:text-white text-gray-200 text-[15px]">{t('coaching')}</a>
                            </li>
                        </ul>
                </div>
                <div>
                    {/* <h4 className="text-white font-bold text-lg mb-6">Platforms</h4> */}
                    <ul className="space-y-4">
                        {/* <li>
                            <a href="https://www.rinnovagroups.com/" target='blank' className="hover:text-white text-gray-200 text-[15px]">Rinnova Groups</a>
                            <a href='https://www.instagram.com/rinnovagroups' target='blank'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                            className="fill-gray-200 inline w-7 h-7 hover:fill-white" viewBox="0 0 24 24">
                            <path
                                d="M12 9.3a2.7 2.7 0 1 0 0 5.4 2.7 2.7 0 0 0 0-5.4Zm0-1.8a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm5.85-.225a1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 0 1 2.25 0ZM12 4.8c-2.227 0-2.59.006-3.626.052-.706.034-1.18.128-1.618.299a2.59 2.59 0 0 0-.972.633 2.601 2.601 0 0 0-.634.972c-.17.44-.265.913-.298 1.618C4.805 9.367 4.8 9.714 4.8 12c0 2.227.006 2.59.052 3.626.034.705.128 1.18.298 1.617.153.392.333.674.632.972.303.303.585.484.972.633.445.172.918.267 1.62.3.993.047 1.34.052 3.626.052 2.227 0 2.59-.006 3.626-.052.704-.034 1.178-.128 1.617-.298.39-.152.674-.333.972-.632.304-.303.485-.585.634-.972.171-.444.266-.918.299-1.62.047-.993.052-1.34.052-3.626 0-2.227-.006-2.59-.052-3.626-.034-.704-.128-1.18-.299-1.618a2.619 2.619 0 0 0-.633-.972 2.595 2.595 0 0 0-.972-.634c-.44-.17-.914-.265-1.618-.298-.993-.047-1.34-.052-3.626-.052ZM12 3c2.445 0 2.75.009 3.71.054.958.045 1.61.195 2.185.419A4.388 4.388 0 0 1 19.49 4.51c.457.45.812.994 1.038 1.595.222.573.373 1.227.418 2.185.042.96.054 1.265.054 3.71 0 2.445-.009 2.75-.054 3.71-.045.958-.196 1.61-.419 2.185a4.395 4.395 0 0 1-1.037 1.595 4.44 4.44 0 0 1-1.595 1.038c-.573.222-1.227.373-2.185.418-.96.042-1.265.054-3.71.054-2.445 0-2.75-.009-3.71-.054-.958-.045-1.61-.196-2.185-.419A4.402 4.402 0 0 1 4.51 19.49a4.414 4.414 0 0 1-1.037-1.595c-.224-.573-.374-1.227-.419-2.185C3.012 14.75 3 14.445 3 12c0-2.445.009-2.75.054-3.71s.195-1.61.419-2.185A4.392 4.392 0 0 1 4.51 4.51c.45-.458.994-.812 1.595-1.037.574-.224 1.226-.374 2.185-.419C9.25 3.012 9.555 3 12 3Z" />
                            </svg>
                            </a>
                        </li> */}
                        <li>
                            <a href="https://women-breakingbarriers.com/" target='blank' className="hover:text-white text-gray-200 text-[15px]">{t('WBB')}</a>
                            <a href='https://www.instagram.com/women.breakingbarriers/' target='blank'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                            className="fill-gray-200 inline w-7 h-7 hover:fill-white" viewBox="0 0 24 24">
                            <path
                                d="M12 9.3a2.7 2.7 0 1 0 0 5.4 2.7 2.7 0 0 0 0-5.4Zm0-1.8a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm5.85-.225a1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 0 1 2.25 0ZM12 4.8c-2.227 0-2.59.006-3.626.052-.706.034-1.18.128-1.618.299a2.59 2.59 0 0 0-.972.633 2.601 2.601 0 0 0-.634.972c-.17.44-.265.913-.298 1.618C4.805 9.367 4.8 9.714 4.8 12c0 2.227.006 2.59.052 3.626.034.705.128 1.18.298 1.617.153.392.333.674.632.972.303.303.585.484.972.633.445.172.918.267 1.62.3.993.047 1.34.052 3.626.052 2.227 0 2.59-.006 3.626-.052.704-.034 1.178-.128 1.617-.298.39-.152.674-.333.972-.632.304-.303.485-.585.634-.972.171-.444.266-.918.299-1.62.047-.993.052-1.34.052-3.626 0-2.227-.006-2.59-.052-3.626-.034-.704-.128-1.18-.299-1.618a2.619 2.619 0 0 0-.633-.972 2.595 2.595 0 0 0-.972-.634c-.44-.17-.914-.265-1.618-.298-.993-.047-1.34-.052-3.626-.052ZM12 3c2.445 0 2.75.009 3.71.054.958.045 1.61.195 2.185.419A4.388 4.388 0 0 1 19.49 4.51c.457.45.812.994 1.038 1.595.222.573.373 1.227.418 2.185.042.96.054 1.265.054 3.71 0 2.445-.009 2.75-.054 3.71-.045.958-.196 1.61-.419 2.185a4.395 4.395 0 0 1-1.037 1.595 4.44 4.44 0 0 1-1.595 1.038c-.573.222-1.227.373-2.185.418-.96.042-1.265.054-3.71.054-2.445 0-2.75-.009-3.71-.054-.958-.045-1.61-.196-2.185-.419A4.402 4.402 0 0 1 4.51 19.49a4.414 4.414 0 0 1-1.037-1.595c-.224-.573-.374-1.227-.419-2.185C3.012 14.75 3 14.445 3 12c0-2.445.009-2.75.054-3.71s.195-1.61.419-2.185A4.392 4.392 0 0 1 4.51 4.51c.45-.458.994-.812 1.595-1.037.574-.224 1.226-.374 2.185-.419C9.25 3.012 9.555 3 12 3Z" />
                            </svg>
                            </a>
                        </li>
                        <li>
                            <a href="https://contigoradious.com/" target='blank' className="hover:text-white text-gray-200 text-[15px]">Contigo Radio</a>
                            <a href='https://www.instagram.com/contigoradio.us/' target='blank'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                            className="fill-gray-200 inline w-7 h-7 hover:fill-white" viewBox="0 0 24 24">
                            <path
                                d="M12 9.3a2.7 2.7 0 1 0 0 5.4 2.7 2.7 0 0 0 0-5.4Zm0-1.8a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm5.85-.225a1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 0 1 2.25 0ZM12 4.8c-2.227 0-2.59.006-3.626.052-.706.034-1.18.128-1.618.299a2.59 2.59 0 0 0-.972.633 2.601 2.601 0 0 0-.634.972c-.17.44-.265.913-.298 1.618C4.805 9.367 4.8 9.714 4.8 12c0 2.227.006 2.59.052 3.626.034.705.128 1.18.298 1.617.153.392.333.674.632.972.303.303.585.484.972.633.445.172.918.267 1.62.3.993.047 1.34.052 3.626.052 2.227 0 2.59-.006 3.626-.052.704-.034 1.178-.128 1.617-.298.39-.152.674-.333.972-.632.304-.303.485-.585.634-.972.171-.444.266-.918.299-1.62.047-.993.052-1.34.052-3.626 0-2.227-.006-2.59-.052-3.626-.034-.704-.128-1.18-.299-1.618a2.619 2.619 0 0 0-.633-.972 2.595 2.595 0 0 0-.972-.634c-.44-.17-.914-.265-1.618-.298-.993-.047-1.34-.052-3.626-.052ZM12 3c2.445 0 2.75.009 3.71.054.958.045 1.61.195 2.185.419A4.388 4.388 0 0 1 19.49 4.51c.457.45.812.994 1.038 1.595.222.573.373 1.227.418 2.185.042.96.054 1.265.054 3.71 0 2.445-.009 2.75-.054 3.71-.045.958-.196 1.61-.419 2.185a4.395 4.395 0 0 1-1.037 1.595 4.44 4.44 0 0 1-1.595 1.038c-.573.222-1.227.373-2.185.418-.96.042-1.265.054-3.71.054-2.445 0-2.75-.009-3.71-.054-.958-.045-1.61-.196-2.185-.419A4.402 4.402 0 0 1 4.51 19.49a4.414 4.414 0 0 1-1.037-1.595c-.224-.573-.374-1.227-.419-2.185C3.012 14.75 3 14.445 3 12c0-2.445.009-2.75.054-3.71s.195-1.61.419-2.185A4.392 4.392 0 0 1 4.51 4.51c.45-.458.994-.812 1.595-1.037.574-.224 1.226-.374 2.185-.419C9.25 3.012 9.555 3 12 3Z" />
                            </svg>
                            </a>
                        </li>                        
                        {/* <li>
                            <a href="" className="hover:text-white text-gray-200 text-[15px]">Glossary</a>
                        </li>
                        <li>
                            <a href="" className="hover:text-white text-gray-200 text-[15px]">Path</a>
                        </li> */}
                    </ul>
                </div>
                <div>
                    {/* <h4 className="text-white font-bold text-lg mb-6">Company</h4> */}
                    <ul className="space-y-4">
                        <li>
                            <a href="#about" className="hover:text-white text-gray-200 text-[15px]">{t('about')}</a>
                        </li>
                        <li>
                            <a href="#faqs" className="hover:text-white text-gray-200 text-[15px]">{t('faqs')}</a>
                        </li>
                        <li>
                            <a href="#success" className="hover:text-white text-gray-200 text-[15px]">{t('success')}</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-white text-gray-200 text-[15px]">{t('terms')}</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-white text-gray-200 text-[15px]">{t('policy')}</a>
                        </li>                        
                    </ul>
                </div>
            </div>
        </footer>
        <section>
            <footer className="bg-gray-200 py-4">
                <div className="flex-cols-1 md:flex-cols-2">
                    <div className="flex justify-center items-center">
                    <span className="text-gray-600">© 2024 {" "} {t("copyr2")}</span>&nbsp;<Heart size={16} color='red'/><span className='text-gray-600'>&nbsp;{t("copyr3")}</span>
                        
                    <a href="https://disvolvi.com" className="font-semibold text-gray-600"><span className="text-gray-600">&nbsp;Disvolvi.com</span></a> 
                    </div>
                </div>
            </footer>
        </section>
    </>
  )
}

export default Footer