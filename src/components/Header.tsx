import Logo from "../assets/images/logo.svg";

import Illustration from "../assets/images/illustration-devices.svg";

export default function Header() {
  return (
    <header className="relative text-lg">
      {/*=====Navbar=====*/}
      <nav className="relative flex justify-between xl:px-32 p-8 font-bold uppercase text-very-dark-blue font-barlow-condensed ">
        {/*=====Logo=====*/}
        <img src={Logo} alt="" />
        <input type="checkbox" id="menu" className="hidden" />
        <label htmlFor="menu">
          {/*=====Close Icon=====*/}
          <svg
            className="close-menu my-[6px] xl:hidden"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
          >
            <path
              fill="#242942"
              fill-rule="evenodd"
              d="M17.778.808l1.414 1.414L11.414 10l7.778 7.778-1.414 1.414L10 11.414l-7.778 7.778-1.414-1.414L8.586 10 .808 2.222 2.222.808 10 8.586 17.778.808z"
            />
          </svg>
          {/*=====Menu Icon=====*/}
          <svg
            className="open-menu my-2 xl:hidden"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="16"
          >
            <g fill="#242942" fill-rule="evenodd">
              <path d="M0 0h24v2H0zM0 7h24v2H0zM0 14h24v2H0z" />
            </g>
          </svg>
        </label>
        {/*=====Navbar List=====*/}
        <div
          id="sidebar"
          className="absolute transition-all duration-500 ease-in-out xl:-translate-y-0 -translate-y-[15%] opacity-0 bg-white xl:static xl:opacity-100 shadow-css-1 xl:shadow-none xl:bg-transparent z-10 top-20 w-[80vw] xl:w-auto"
        >
          <ul className="flex flex-col xl:flex-row items-center p-4 xl:gap-8 *:mb-4 xl:p-0 xl:*:mb-0">
            <li className="hover:underline">
              <a href="">Product</a>
            </li>
            <li className="hover:underline">
              <a href="">Features</a>
            </li>
            <li className="hover:underline">
              <a href="">Pricing</a>
            </li>
            <span className="flex hover:underline justify-center w-full pt-4 border-t xl:inline xl:pt-0 text-grayish-blue border-t-grayish-blue xl:border-t-0">
              <a href="">Login</a>
            </span>
          </ul>
        </div>
      </nav>
      {/*=====Content=====*/}
      <div className="grid grid-rows-2 xl:py-28 xl:grid-rows-[none] xl:gap-y-12 xl:grid-cols-2">
        {/*=====Narrative=====*/}
        <div className="p-8 xl:pr-20 xl:pl-32 font-barlow-condensed">
          {/*=====New Monograph Dashboard=====*/}
          <div className="flex items-center uppercase gap-x-4">
            <span className="px-3 font-bold rounded-full bg-very-dark-blue text-light-grayish-blue">
              New
            </span>
            <span className="tracking-[0.2rem] text-grayish-blue">
              Monograph Dashboard
            </span>
          </div>
          {/*=====Title=====*/}
          <h1 className="my-4 uppercase text-[2.5rem] xl:text-[3.5rem] leading-10 xl:leading-[4rem] font-bold">
            Powerful insights into your team
          </h1>
          {/*=====Description=====*/}
          <p className="mr-8  leading-6 font-barlow text-very-dark-blue xl:w-[28ch]">
            Project planning and time tracking for agile teams
          </p>
          {/*=====Demo Preview Button=====*/}
          <div className="flex my-4 gap-x-4 xl:pt-12">
            <button
              type="button"
              className="px-4 hover:opacity-75 xl:px-6 xl:py-4 py-2 tracking-wide xl:tracking-widest text-white uppercase font-bold rounded-md bg-red"
            >
              <a href="">Schedule a demo</a>
            </button>
            <button
              type="button"
              className="uppercase xl:tracking-[0.2rem] text-grayish-blue"
            >
              <a href="">to see a preview</a>
            </button>
          </div>
        </div>
        {/*=====Illustration=====*/}
        <div className="relative -order-1 xl:order-1">
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-[500px] h-[300px] xl:w-[960px] xl:h-[464px]"
          >
            <defs>
              <rect
                id="a"
                width="597.554"
                height="396.861"
                x="0"
                y="0"
                rx="3"
              />
              <rect id="c" width="331" height="184" x="0" y="0" rx="5" />
              <rect id="h" width="167" height="341" x="0" y="0" rx="12" />
              <rect id="i" width="155" height="330" x="0" y="0" rx="9" />
              <rect id="k" width="140" height="184" x="0" y="0" rx="5" />
              <filter
                id="g"
                width="213.8%"
                height="155.7%"
                x="-53.3%"
                y="-16.1%"
                filterUnits="objectBoundingBox"
              >
                <feOffset
                  dx="6"
                  dy="40"
                  in="SourceAlpha"
                  result="shadowOffsetOuter1"
                />
                <feGaussianBlur
                  in="shadowOffsetOuter1"
                  result="shadowBlurOuter1"
                  stdDeviation="25"
                />
                <feColorMatrix
                  in="shadowBlurOuter1"
                  values="0 0 0 0 0.243459558 0 0 0 0 0.279312558 0 0 0 0 0.375398597 0 0 0 0.255293252 0"
                />
              </filter>
              <path
                id="e"
                d="M3 0h769.629a3 3 0 013 3v16.006H0V3a3 3 0 013-3z"
              />
            </defs>
            <g fill="none" fill-rule="evenodd">
              <g transform="translate(184 9)">
                <rect
                  width="635"
                  height="434"
                  x="81"
                  fill="#191D36"
                  fill-rule="nonzero"
                  rx="12"
                />
                <rect
                  width="629"
                  height="428"
                  x="84"
                  y="3"
                  fill="#0B0E21"
                  fill-rule="nonzero"
                  rx="10"
                />
                <rect
                  width="603"
                  height="402"
                  x="97"
                  y="16"
                  fill="#16171B"
                  fill-rule="nonzero"
                  rx="5"
                />
                <g transform="translate(100 18)">
                  <mask id="b" fill="#fff">
                    <use href="#a" />
                  </mask>
                  <use fill="#EBEDF4" fill-rule="nonzero" href="#a" />
                  <g mask="url(#b)">
                    <g transform="translate(129 14)">
                      <g transform="translate(0 75)">
                        <rect width="331" height="47" fill="#FFF" rx="5" />
                        <g transform="translate(16 18)">
                          <rect width="53" height="5" fill="#B1B4C7" rx="2.5" />
                          <rect
                            width="34"
                            height="5"
                            y="9"
                            fill="#D4D7E6"
                            rx="2.5"
                          />
                          <g transform="translate(75)">
                            <rect
                              width="53"
                              height="5"
                              fill="#B1B4C7"
                              rx="2.5"
                            />
                            <rect
                              width="34"
                              height="5"
                              y="9"
                              fill="#D4D7E6"
                              rx="2.5"
                            />
                          </g>
                          <g transform="translate(177)">
                            <rect
                              width="53"
                              height="5"
                              fill="#B1B4C7"
                              rx="2.5"
                            />
                            <rect
                              width="34"
                              height="5"
                              y="9"
                              fill="#D4D7E6"
                              rx="2.5"
                            />
                          </g>
                          <g transform="translate(250)">
                            <rect
                              width="53"
                              height="5"
                              fill="#B1B4C7"
                              rx="2.5"
                            />
                            <rect
                              width="34"
                              height="5"
                              y="9"
                              fill="#D4D7E6"
                              rx="2.5"
                            />
                          </g>
                        </g>
                      </g>
                      <g transform="translate(0 136)">
                        <mask id="d" fill="#fff">
                          <use href="#c" />
                        </mask>
                        <use fill="#FFF" href="#c" />
                        <g mask="url(#d)">
                          <g transform="translate(-33 32)">
                            <rect
                              width="184"
                              height="24"
                              x="17"
                              fill="#FF5E5E"
                              rx="12"
                            />
                            <rect
                              width="184"
                              height="24"
                              x="17"
                              y="96"
                              fill="#FF5E5E"
                              rx="12"
                            />
                            <rect
                              width="24"
                              height="24"
                              x="209"
                              fill="#BC4747"
                              rx="12"
                            />
                            <rect
                              width="88"
                              height="24"
                              x="209"
                              y="32"
                              fill="#FF5E5E"
                              rx="12"
                            />
                            <rect
                              width="114"
                              height="24"
                              x="87"
                              y="31.547"
                              fill="#BC4747"
                              rx="12"
                            />
                            <rect
                              width="50"
                              height="24"
                              x="247"
                              y="64.53"
                              fill="#FF5E5E"
                              rx="12"
                            />
                            <rect
                              width="79"
                              height="24"
                              y="63.925"
                              fill="#FF5E5E"
                              rx="12"
                            />
                            <rect
                              width="24"
                              height="24"
                              x="305"
                              y="32"
                              fill="#BC4747"
                              rx="12"
                            />
                          </g>
                        </g>
                      </g>
                      <rect width="77" height="5" fill="#CBCEDC" rx="2.5" />
                      <g transform="translate(0 26)" fill="#8C90A3">
                        <rect width="66" height="19" rx="9.5" />
                        <rect width="31" height="19" x="76" y=".288" rx="9.5" />
                        <rect width="31" height="19" x="115" rx="9.5" />
                      </g>
                    </g>
                  </g>
                  <g mask="url(#b)">
                    <path fill="#353740" d="M0 0h107v397H0z" />
                    <g transform="translate(15 12)">
                      <rect
                        width="77"
                        height="5"
                        y="68"
                        fill="#4A4E5D"
                        rx="2.5"
                      />
                      <rect
                        width="77"
                        height="5"
                        y="87"
                        fill="#4A4E5D"
                        rx="2.5"
                      />
                      <rect
                        width="77"
                        height="5"
                        y="106"
                        fill="#4A4E5D"
                        rx="2.5"
                      />
                      <rect
                        width="77"
                        height="5"
                        y="125"
                        fill="#4A4E5D"
                        rx="2.5"
                      />
                      <rect
                        width="77"
                        height="5"
                        y="144"
                        fill="#4A4E5D"
                        rx="2.5"
                      />
                      <rect
                        width="77"
                        height="5"
                        y="366"
                        fill="#4A4E5D"
                        rx="2.5"
                      />
                      <g transform="translate(0 25)">
                        <g transform="translate(24 2)">
                          <rect width="53" height="5" fill="#7B7F90" rx="2.5" />
                          <rect
                            width="34"
                            height="5"
                            y="9"
                            fill="#4A4E5D"
                            rx="2.5"
                          />
                        </g>
                        <circle cx="9" cy="9" r="9" fill="#FF5E5E" />
                      </g>
                      <rect width="77" height="9" fill="#8C90A3" rx="4.5" />
                    </g>
                  </g>
                </g>
                <g
                  fill="#4A5166"
                  fill-rule="nonzero"
                  opacity=".098"
                  transform="translate(387 8)"
                >
                  <rect width="15.64" height="4" rx="2" />
                  <rect width="3.68" height="4" x="19.32" rx="1.84" />
                </g>
                <g transform="translate(0 430)">
                  <mask id="f" fill="#fff">
                    <use href="#e" />
                  </mask>
                  <use fill="#242942" fill-rule="nonzero" href="#e" />
                  <rect
                    width="126.689"
                    height="57.968"
                    x="324.47"
                    y="-46.564"
                    fill="#2E334F"
                    fill-rule="nonzero"
                    mask="url(#f)"
                    rx="10"
                  />
                </g>
                <path
                  fill="#1A1C27"
                  fill-rule="nonzero"
                  d="M0 448h776a7 7 0 01-7 7H7a7 7 0 01-7-7z"
                />
              </g>
              <g fill-rule="nonzero" transform="translate(44 9.21)">
                <use fill="#000" filter="url(#g)" href="#h" />
                <use fill="#242942" href="#h" />
              </g>
              <g transform="translate(50 15)">
                <mask id="j" fill="#fff">
                  <use href="#i" />
                </mask>
                <use fill="#EBEDF4" fill-rule="nonzero" href="#i" />
                <g mask="url(#j)">
                  <path fill="#353740" d="M0 0h155v77H0z" />
                  <g transform="translate(8 108)">
                    <mask id="l" fill="#fff">
                      <use href="#k" />
                    </mask>
                    <use fill="#FFF" href="#k" />
                    <g mask="url(#l)">
                      <g transform="matrix(-1 0 0 1 293 32)">
                        <rect
                          width="184"
                          height="24"
                          x="17"
                          fill="#FF5E5E"
                          rx="12"
                        />
                        <rect
                          width="184"
                          height="24"
                          x="17"
                          y="96"
                          fill="#FF5E5E"
                          rx="12"
                        />
                        <rect
                          width="24"
                          height="24"
                          x="209"
                          fill="#BC4747"
                          rx="12"
                        />
                        <rect
                          width="88"
                          height="24"
                          x="209"
                          y="32"
                          fill="#FF5E5E"
                          rx="12"
                        />
                        <rect
                          width="114"
                          height="24"
                          x="87"
                          y="31.547"
                          fill="#BC4747"
                          rx="12"
                        />
                        <rect
                          width="50"
                          height="24"
                          x="247"
                          y="64.53"
                          fill="#FF5E5E"
                          rx="12"
                        />
                        <rect
                          width="79"
                          height="24"
                          y="63.925"
                          fill="#FF5E5E"
                          rx="12"
                        />
                        <rect
                          width="24"
                          height="24"
                          x="305"
                          y="32"
                          fill="#BC4747"
                          rx="12"
                        />
                      </g>
                    </g>
                  </g>
                  <rect
                    width="140"
                    height="47"
                    x="8"
                    y="52"
                    fill="#FFF"
                    rx="5"
                  />
                  <rect
                    width="77"
                    height="5"
                    x="37"
                    y="21"
                    fill="#4A4E5D"
                    rx="2.5"
                  />
                </g>
              </g>
              <g transform="translate(74 85)">
                <rect width="102" height="5" fill="#B1B4C7" rx="2.5" />
                <rect width="65" height="5" y="9" fill="#D4D7E6" rx="2.5" />
              </g>
            </g>
          </svg> */}
          <img
            className="absolute scale-[1.4] xl:scale-[1.5] origin-top-left"
            src={Illustration}
            alt="Device illustration"
          />
        </div>
      </div>
      {/*=====Square Background Illustration=====*/}
      <div className="bg-light-grayish-blue rounded-[2rem] h-[75vh] w-screen -top-1/4 -right-1/2 absolute -z-10"></div>
    </header>
  );
}
