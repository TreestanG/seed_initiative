"use client"

import Image from "next/image"
import Link from "next/link"
import { ChevronDown, Menu, X } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { Header as HeaderType } from '@/payload-types'
import { useIsMobile } from "@/hooks/use-mobile"

type NavLink = NonNullable<HeaderType['navLinks']>[number];
type DropdownItem = NonNullable<NonNullable<HeaderType['navLinks']>[number]['dropdownItems']>[number];

export default function Header({
    res
}: {
    res: HeaderType
}) {
    const [menuOpen, setMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const [lastScrollY, setLastScrollY] = useState(0)
    const [openDropdown, setOpenDropdown] = useState<string | null>(null)
    const [hoveredDropdown, setHoveredDropdown] = useState<string | null>(null)
    const sidebarRef = useRef(null)
    const dropdownRef = useRef<{ [key: string]: HTMLDivElement | null }>({})
    const hoverTimeoutRef = useRef<{ [key: string]: NodeJS.Timeout | null }>({})
    const navItemsRef = useRef<{ [key: string]: HTMLDivElement | null }>({})

    const items = res.navLinks ?? []
    const image = typeof res.logo === 'object' && res.logo !== null ? res.logo.url : '/logo-header.png'

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY

            if (currentScrollY > 50) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }

            // Detect scroll direction
            if (currentScrollY < lastScrollY) {
                // Scrolling up
                setIsScrolled(false)
            }

            setLastScrollY(currentScrollY)
        }

        window.addEventListener('scroll', handleScroll, { passive: true })

        // Close dropdowns when clicking outside
        const handleClickOutside = (event: MouseEvent) => {
            if (openDropdown) {
                const dropdownElement = dropdownRef.current[openDropdown];
                if (dropdownElement && !dropdownElement.contains(event.target as Node)) {
                    setOpenDropdown(null);
                }
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            window.removeEventListener('scroll', handleScroll)
            document.removeEventListener("mousedown", handleClickOutside);

            // Clear any remaining timeouts
            Object.values(hoverTimeoutRef.current).forEach(timeout => {
                if (timeout) clearTimeout(timeout);
            });
        }
    }, [lastScrollY, openDropdown])

    const toggleDropdown = (label: string) => {
        if (openDropdown === label) {
            setOpenDropdown(null);
        } else {
            setOpenDropdown(label);
        }
    };

    const handleMouseEnter = (label: string) => {
        // Clear any existing timeout for this item
        if (hoverTimeoutRef.current[label]) {
            clearTimeout(hoverTimeoutRef.current[label]!);
            hoverTimeoutRef.current[label] = null;
        }

        setHoveredDropdown(label);
    };

    const handleMouseLeave = (label: string) => {
        // Set a small timeout to prevent menu from closing immediately
        // (helps with menu usability when moving between parent and submenu)
        hoverTimeoutRef.current[label] = setTimeout(() => {
            if (hoveredDropdown === label) {
                setHoveredDropdown(null);
            }
        }, 100);
    };

    const isMobile = useIsMobile()

    const isDropdownItem = (item: NavLink): boolean => {
        return item.type === 'dropdown' && Array.isArray(item.dropdownItems) && item.dropdownItems.length > 0;
    };

    const isDropdownVisible = (label: string): boolean => {
        return openDropdown === label || hoveredDropdown === label;
    };

    return (
        <>
            <div
                className={`fixed flex w-full items-center z-[100] overflow-visible bg-white transition-all duration-300 border-b-2 border-neutral-200 ease-in-out ${isScrolled ? 'py-2' : 'py-6'
                    }`}
            >
                <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between w-full items-center">
                    <div className="flex w-full md:w-auto mb-2 md:mb-0">
                        <Link href="/" className={`w-48 md:w-60 relative transition-all duration-300 ${isScrolled ? 'md:w-48' : 'md:w-60'}`}>
                            <Image src={image!} alt="logo" width={350} height={100} className="w-full h-full object-contain" />
                        </Link>
                    </div>
                    <div className="flex justify-center md:justify-end gap-4 items-center">
                        <div className={`hidden md:flex gap-4 font-semibold items-center transition-all duration-300 ${isScrolled ? 'opacity-0 scale-90 max-h-0 overflow-hidden' : 'opacity-100 scale-100'
                            }`}>
                            {items.length > 0 && items.map((item, index) => (
                                <div
                                    key={`${item.label}-${index}`}
                                    className="relative"
                                    ref={(el) => {
                                        if (item.label) {
                                            navItemsRef.current[item.label] = el;
                                            dropdownRef.current[item.label] = el;
                                        }
                                    }}
                                    onMouseEnter={() => isDropdownItem(item) ? handleMouseEnter(item.label!) : null}
                                    onMouseLeave={() => isDropdownItem(item) ? handleMouseLeave(item.label!) : null}
                                >
                                    <Link
                                        href={item.link ?? "#"}
                                        className="flex items-center gap-1 p-4 text-base text-neutral-800 hover:text-brand-700 hover:cursor-pointer"
                                    >
                                        {item.label}
                                        {isDropdownItem(item) && <ChevronDown className="w-4 h-4" />}
                                    </Link>
                                </div>
                            ))}
                        </div>
                        <Link href="https://hcb.hackclub.com/donations/start/seed-science-engagement-and-educational-development-initiative" className="hidden md:block" target="_blank" >
                            <button className={`bg-primary-600 py-2 px-4 text-white uppercase hover:cursor-pointer bg-brand-400 hover:scale-105 transition-all duration-300 ${isScrolled ? 'text-sm' : 'text-lg'
                                }`}>
                                Donate
                            </button>
                        </Link>
                    </div>

                    <div className="absolute top-6 right-6 md:hidden">
                        <Menu className="block" onClick={() => setMenuOpen(!menuOpen)} />
                    </div>
                    <div
                        ref={sidebarRef}
                        className={`fixed md:hidden top-0 left-0 w-screen h-screen p-6 z-[100] overflow-x-hidden bg-white transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-x-0' : 'translate-x-full'
                            }`}
                    >
                        <div className="flex justify-between items-center">
                            <span className="text-sm font-bold text-neutral-500">Seed Initiative</span>
                            <X className="" onClick={() => setMenuOpen(!menuOpen)} />
                        </div>
                        <div className="flex flex-col items-start justify-center pt-8 gap-1">
                            {items.length > 0 && items.map((item, index) => (
                                <div key={`${item.label}-${index}`} className="w-full">
                                    {isDropdownItem(item) ? (
                                        <div className="mb-2">
                                            <div
                                                className="flex items-center justify-between w-full py-2 uppercase font-medium"
                                            >
                                                <Link href={item.link ?? "#"} className="flex items-center gap-1">{item.label}</Link>
                                                <ChevronDown onClick={() => toggleDropdown(item.label!)} className={`w-4 h-4 transition-transform ${openDropdown === item.label ? 'rotate-180' : ''}`} />
                                            </div>

                                            {openDropdown === item.label && item.dropdownItems && (
                                                <div className="pl-4 mt-1 border-l-2 border-gray-200 space-y-2">
                                                    {item.dropdownItems.map((subItem: DropdownItem, subIndex: number) => (
                                                        <Link
                                                            key={`${subItem.label}-${subIndex}`}
                                                            href={subItem.link || "#"}
                                                            className="block py-2 text-sm text-neutral-600 hover:text-brand-700"
                                                            onClick={() => {
                                                                setOpenDropdown(null);
                                                                setMenuOpen(false);
                                                            }}
                                                        >
                                                            {subItem.label}
                                                        </Link>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ) : (
                                        <Link
                                            href={item.link || "#"}
                                            onClick={() => setMenuOpen(false)}
                                            className="block py-2 uppercase font-medium w-full"
                                        >
                                            {item.label}
                                        </Link>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {items.length > 0 && items.map((item, index) => (
                isDropdownItem(item) && isDropdownVisible(item.label!) && item.dropdownItems && !isMobile && (
                    <div
                        key={`dropdown-${item.label}-${index}`}
                        className="fixed bg-white shadow-md rounded-md py-2 min-w-48 z-[9999] border border-gray-100"
                        style={{
                            top: `${(isScrolled ? 50 : 80)}px`,
                            left: navItemsRef.current[item.label!]?.getBoundingClientRect().left || 0,
                        }}
                        ref={(el) => {
                            if (item.label) {
                                dropdownRef.current[`dropdown-${item.label}`] = el;
                            }
                        }}
                        onMouseEnter={() => handleMouseEnter(item.label!)}
                        onMouseLeave={() => handleMouseLeave(item.label!)}
                    >
                        {item.dropdownItems.map((subItem: DropdownItem, subIndex: number) => (
                            <Link
                                key={`${subItem.label}-${subIndex}`}
                                href={subItem.link || "#"}
                                className="block px-4 py-2 text-sm text-neutral-700 hover:bg-gray-50 hover:text-brand-700 whitespace-nowrap"
                                onClick={() => {
                                    setOpenDropdown(null);
                                    setHoveredDropdown(null);
                                }}
                            >
                                {subItem.label}
                            </Link>
                        ))}
                    </div>
                )
            ))}
        </>
    );
}