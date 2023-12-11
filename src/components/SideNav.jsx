import React from 'react'

export default function SideNav() {
    return (
        <div id='sideNav' className='w-72 flex items-center justify-center h-screen text-red-500 bg-[color:var(--black1)] fixed left-0 top-0'>
            <ul className='flex flex-col gap-6'>
                <li className='flex gap-2 items-center'>
                    <span className='min-w-[30px]'>
                        <svg width="20" height="20" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M261.56 101.28C260.071 99.8559 258.09 99.061 256.03 99.061C253.97 99.061 251.989 99.8559 250.5 101.28L66.4 277.15C65.6182 277.898 64.9962 278.797 64.5716 279.792C64.1471 280.787 63.9288 281.858 63.93 282.94L63.9 448C63.9 456.487 67.2714 464.626 73.2726 470.628C79.2738 476.629 87.4131 480 95.9 480H192C196.243 480 200.313 478.314 203.314 475.314C206.314 472.313 208 468.244 208 464V328C208 325.878 208.843 323.844 210.343 322.343C211.843 320.843 213.878 320 216 320H296C298.122 320 300.157 320.843 301.657 322.343C303.157 323.844 304 325.878 304 328V464C304 468.244 305.686 472.313 308.686 475.314C311.687 478.314 315.757 480 320 480H416.06C424.547 480 432.686 476.629 438.687 470.628C444.689 464.626 448.06 456.487 448.06 448V282.94C448.061 281.858 447.843 280.787 447.418 279.792C446.994 278.797 446.372 277.898 445.59 277.15L261.56 101.28Z" fill="white" />
                            <path d="M490.91 244.15L416.11 172.59V64C416.11 59.7565 414.424 55.6869 411.424 52.6863C408.423 49.6857 404.353 48 400.11 48H352.11C347.867 48 343.797 49.6857 340.796 52.6863C337.796 55.6869 336.11 59.7565 336.11 64V96L278.19 40.62C272.77 35.14 264.71 32 256 32C247.32 32 239.28 35.14 233.86 40.63L21.16 244.13C14.94 250.13 14.16 260 19.82 266.5C21.2413 268.141 22.9816 269.475 24.935 270.422C26.8884 271.368 29.014 271.908 31.1824 272.007C33.3509 272.106 35.5168 271.763 37.5484 270.999C39.5801 270.234 41.4349 269.064 43 267.56L250.5 69.28C251.989 67.8558 253.97 67.0609 256.03 67.0609C258.09 67.0609 260.071 67.8558 261.56 69.28L469.08 267.56C472.137 270.491 476.231 272.091 480.466 272.009C484.7 271.926 488.73 270.168 491.67 267.12C497.81 260.76 497.3 250.26 490.91 244.15Z" fill="black" />
                        </svg>

                    </span>
                    <a className='textTheme font-medium' href="">Home</a>
                </li>
                <li className='flex gap-2 items-center'>
                    <span className='min-w-[30px]'>
                        <svg width="26" height="26" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_30_18)">
                                <path d="M26.047 12.197C24.219 12.197 23.203 13.552 22.99 15.021H29.137C28.97 13.62 27.98 12.202 26.048 12.202L26.047 12.197ZM23.036 17.027C23.349 18.568 24.625 19.651 26.412 19.651C27.375 19.651 28.771 19.292 29.588 18.432L31.156 20.235C29.74 21.714 27.62 22.136 26.172 22.136C22.651 22.136 19.907 19.593 19.907 15.989C19.907 12.614 22.432 9.83301 26 9.83301C29.448 9.83301 32 12.473 32 15.969V16.989H23.036V17.027ZM14.385 22.131V14.542C14.385 13.246 13.806 12.495 12.598 12.495C11.515 12.495 10.797 13.276 10.311 13.839V22.156H7.17599V14.557C7.17599 13.254 6.62399 12.516 5.41999 12.516C4.33699 12.516 3.58699 13.297 3.12899 13.86V22.177H-0.00201416V10.01H3.13399V11.541C3.66499 10.926 4.86699 9.86401 6.74299 9.86401C8.40999 9.86401 9.53899 10.563 10.044 11.984C10.747 10.969 12.044 9.86401 13.924 9.86401C16.195 9.86401 17.513 11.208 17.513 13.812V22.136H14.377L14.382 22.125L14.385 22.131Z" fill="black" />
                            </g>
                            <defs>
                                <clipPath id="clip0_30_18">
                                    <rect width="32" height="32" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>

                    </span>
                    <a className='textTheme font-medium' href="">About</a>
                </li>
                <li className='flex gap-2 items-center'>
                    <span className='min-w-[30px]'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 9L4 12L7 15" stroke="black" strokeWidth="2" strokeLinecap="round" />
                            <path d="M19 5H5" stroke="black" strokeWidth="2" strokeLinecap="round" />
                            <path d="M19 12H10" stroke="black" strokeWidth="2" strokeLinecap="round" />
                            <path d="M19 19H5" stroke="black" strokeWidth="2" strokeLinecap="round" />
                        </svg>

                    </span>
                    <a className='textTheme font-medium' href="">Service</a>
                </li>
                <li className='flex gap-2 items-center'>
                    <span className='min-w-[30px]'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 6H17V4C17 2.897 16.103 2 15 2H9C7.897 2 7 2.897 7 4V6H4C2.897 6 2 6.897 2 8V12H7V10H9V12H15V10H17V12H22V8C22 6.897 21.103 6 20 6ZM9 4H15V6H9V4ZM17 15H15V13H9V15H7V13H2V19C2 20.103 2.897 21 4 21H20C21.103 21 22 20.103 22 19V13H17V15Z" fill="black" />
                        </svg>

                    </span>
                    <a className='textTheme font-medium' href="">Portfolio</a>
                </li>
                <li className='flex gap-2 items-center'>
                    <span className='min-w-[30px]'>
                        <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 15C12.418 15 16 11.866 16 8C16 4.134 12.418 1 8 1C3.582 1 0 4.134 0 8C0 9.76 0.743 11.37 1.97 12.6C1.873 13.616 1.553 14.73 1.199 15.566C1.12 15.752 1.273 15.96 1.472 15.928C3.728 15.558 5.069 14.99 5.652 14.694C6.41791 14.8983 7.20732 15.0012 8 15ZM8 5.993C9.664 4.282 13.825 7.276 8 11.125C2.175 7.275 6.336 4.282 8 5.993Z" fill="black" />
                        </svg>

                    </span>
                    <a className='textTheme font-medium' href="">Contact</a>
                </li>
            </ul>
        </div>
    )
}
