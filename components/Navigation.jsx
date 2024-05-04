import { NextUINavbar, NavbarContent, NavbarBrand, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle, Link } from "./nexui"
import { link as linkStyles } from "@nextui-org/theme";

import NextLink from "next/link";
import clsx from "clsx";

import Image from "next/image";
import {useTranslations} from 'next-intl';
import ThemeSwitch from "./theme-switch";
import InlineDropdown from "./Dropdown";


function Navigation() {
  const t = useTranslations('Navigation');
  return (
    <>
     <NextUINavbar maxWidth="xl" position="sticky">
        <NavbarContent className="basis-1/5 sm:basis-full">
          <NavbarBrand className="gap-3 max-w-fit">
            <NextLink className="flex justify-start items-center gap-1" href="/">
              <div className="hidden md:block">
                <Image
                  alt="Logo"
                  className=""          
                  src="/logov2.svg"
                  width={180} 
                  height={90}
                          /> 
                {/* <Logo /> */}
              </div>
              <div className="block md:hidden">
                <Image
                  alt="Logo"
                  className=""          
                  src="/flower.svg"
                  width={40} 
                  height={50}
                            /> 
              </div>
            </NextLink>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent justify="center">
          <div className="hidden lg:flex gap-4 justify-center ml-2">
            {/* {siteConfig.navItems.map((item) => ( */}
            {/* key={item.href} */}
              <NavbarItem >
                <NextLink
                  className={clsx(
                    linkStyles({ color: "foreground" }),
                    "data-[active=true]:text-primary data-[active=true]:font-medium"
                  )}
                  color="foreground"
                  href="/"
                >
                  {/* {item.label} */}
                  {t('home')}
                </NextLink>
              </NavbarItem>
              <NavbarItem >
                <NextLink
                  className={clsx(
                    linkStyles({ color: "foreground" }),
                    "data-[active=true]:text-primary data-[active=true]:font-medium"
                  )}
                  color="foreground"
                  href="/#services"							
                >
                  {t('services')}
                </NextLink>
              </NavbarItem>
              <NavbarItem >
                <NextLink
                  className={clsx(
                    linkStyles({ color: "foreground" }),
                    "data-[active=true]:text-primary data-[active=true]:font-medium"
                  )}
                  color="foreground"
                  href="/#about"							
                >
                  {t('about')}
                </NextLink>
              </NavbarItem>
              <NavbarItem >
                <NextLink
                  className={clsx(
                    linkStyles({ color: "foreground" }),
                    "data-[active=true]:text-primary data-[active=true]:font-medium"
                  )}
                  color="foreground"
                  href="/#faqs"							
                >
                  {t('faqs')}
                </NextLink>
              </NavbarItem>
              <NavbarItem >
                <NextLink
                  className={clsx(
                    linkStyles({ color: "foreground" }),
                    "data-[active=true]:text-primary data-[active=true]:font-medium"
                  )}
                  color="foreground"
                  href="/#letstalk"							
                >
                  {t('letstalk')}
                </NextLink>
              </NavbarItem>
              {/* <NavbarItem >
                <NextLink
                  className={clsx(
                    linkStyles({ color: "foreground" }),
                    "data-[active=true]:text-primary data-[active=true]:font-medium"
                  )}
                  color="foreground"
                  href="/blog"							
                >
                  {t('blog')}
                </NextLink>
              </NavbarItem>																		 */}
            {/* ))} */}
          </div>
        </NavbarContent>

      	<NavbarContent className="hidden sm:flex basis-1/5 sm:basis-full" justify="end">
          <NavbarItem className="hidden sm:flex gap-2">
            {/* <Link isExternal href={siteConfig.links.twitter}>

            </Link>
            <Link isExternal href={siteConfig.links.discord}>

            </Link>
            <Link isExternal href={siteConfig.links.github}>
    
            </Link> */}
            <InlineDropdown />
            <ThemeSwitch /> 

          </NavbarItem>
				<NavbarItem className="hidden lg:flex">


				</NavbarItem>
				<NavbarItem className="hidden md:flex">
					{/* <Button
						isExternal
						as={Link}
						className="text-sm font-normal text-default-600 bg-default-100"
						href={siteConfig.links.sponsor}
						startContent={<HeartFilledIcon className="text-danger" />}
						variant="flat"
					>
						Sponsor
					</Button> */}
				</NavbarItem>
			  </NavbarContent>

			  <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
				  {/* <Link isExternal href={siteConfig.links.github}>

				  </Link> */}
            <InlineDropdown />
        		<ThemeSwitch /> 

			<NavbarMenuToggle />
      	</NavbarContent>

          <NavbarMenu>

            <div className="mx-4 mt-2 flex flex-col gap-2">
              {/* {siteConfig.navMenuItems.map((item, index) => ( */}
                <NavbarMenuItem >
                  {/* key={`${item.href}-${index}`} */}
                  <Link
                    className={clsx(
                      linkStyles({ color: "foreground" }),
                      "data-[active=true]:text-primary data-[active=true]:font-medium"
                    )}
                    // color={
                    // 	index === 2
                    // 		? "primary"
                    // 		: index === siteConfig.navMenuItems.length - 1
                    // 		? "danger"
                    // 		: "foreground"
                    // }
                    href="/"
                    size="lg"
                  >
                    {t('home')}
                    {/* {item.label} */}
                  </Link>
                </NavbarMenuItem>
                <NavbarMenuItem >
                  <Link
                    className={clsx(
                      linkStyles({ color: "foreground" }),
                      "data-[active=true]:text-primary data-[active=true]:font-medium"
                    )}
                    size="lg"
                    href="/#services"
                  >
                    {t('services')}
                  </Link>
                </NavbarMenuItem>
                <NavbarMenuItem >
                  <Link
                    className={clsx(
                      linkStyles({ color: "foreground" }),
                      "data-[active=true]:text-primary data-[active=true]:font-medium"
                    )}
                    size="lg"
                    href="/#about"
                  >
                    {t('about')}
                  </Link>
                </NavbarMenuItem>
                <NavbarMenuItem >
                  <Link
                    className={clsx(
                      linkStyles({ color: "foreground" }),
                      "data-[active=true]:text-primary data-[active=true]:font-medium"
                    )}
                    size="lg"
                    href="/#faqs"
                  >
                    {t('faqs')}								
                  </Link>
                </NavbarMenuItem>
                <NavbarMenuItem >
                  <Link
                    className={clsx(
                      linkStyles({ color: "foreground" }),
                      "data-[active=true]:text-primary data-[active=true]:font-medium"
                    )}
                    size="lg"
                    href="/#letstalk"
                  >
                    {t('letstalk')}
                  </Link>
                </NavbarMenuItem>
                {/* <NavbarMenuItem >
                  <Link
                    className={clsx(
                      linkStyles({ color: "foreground" }),
                      "data-[active=true]:text-primary data-[active=true]:font-medium"
                    )}
                    size="lg"
                    href="/blog"
                  >
                    {t('blog')}
                  </Link>
                </NavbarMenuItem>																														 */}
              {/* ))} */}
            </div>
          </NavbarMenu>
		  </NextUINavbar>        
    </>
  )
}

export default Navigation