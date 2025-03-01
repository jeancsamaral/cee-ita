const ContactInfoBox = () => {
  return (
    <>
      <div className="relative z-10 mb-12 rounded-sm bg-white p-8 shadow-three dark:bg-gray-dark sm:p-11 lg:mb-0 lg:h-[616px] lg:p-8 xl:p-11">
        <h2 className="mb-4 text-2xl font-bold leading-tight text-black dark:text-white">
          Informações de Contato
        </h2>
        <p className="mb-[60px] text-base leading-relaxed text-body-color">
          A CEE está sempre disponível para ajudar. Nossa equipe retornará seu contato em até 24 horas úteis.
        </p>

        <div className="space-y-[18px]">
          <p className="text-base text-body-color dark:text-body-color-dark">
            Email: contato@ceeita.com
          </p>
          <p className="text-base text-body-color dark:text-body-color-dark">
            Telefones:
            <br />João Fraga: (85) 8932-3683
            <br />João Chamhum: (32) 8498-5112
          </p>
          <p className="text-base text-body-color dark:text-body-color-dark">
            Endereço: Rua H8A, 144, Campus do CTA
            <br />São José dos Campos – SP, 12228-460
          </p>
          
          <div className="mt-8">
            <h3 className="mb-4 text-xl font-semibold text-black dark:text-white">
              Redes Sociais
            </h3>
            <div className="flex space-x-4">
              <a href="https://linkedin.com/company/cee-ita" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-primary hover:text-primary/80"
              >
                <svg
                  className="h-6 w-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="https://instagram.com/cee_ita" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80"
              >
                <svg
                  className="h-6 w-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="pb-[120px] lg:pb-0">
          <span className="absolute bottom-0 left-0 -z-10">
            <svg
              width="88"
              height="92"
              viewBox="0 0 88 92"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                opacity="0.8"
                cx="36.5"
                cy="51.5"
                r="51.5"
                fill="#788293"
              />
              <mask
                id="mask0_1028_1573"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="-15"
                y="0"
                width="103"
                height="103"
              >
                <circle
                  opacity="0.8"
                  cx="36.5"
                  cy="51.5"
                  r="51.5"
                  fill="#4A6CF7"
                />
              </mask>
              <g mask="url(#mask0_1028_1573)">
                <circle
                  opacity="0.8"
                  cx="36.5"
                  cy="51.5"
                  r="51.5"
                  fill="url(#paint0_radial_1028_1573)"
                />
                <g opacity="0.8" filter="url(#filter0_f_1028_1573)">
                  <circle cx="41.0428" cy="27.2649" r="21.2059" fill="white" />
                </g>
              </g>
              <defs>
                <filter
                  id="filter0_f_1028_1573"
                  x="-1.16309"
                  y="-14.9409"
                  width="84.4121"
                  height="84.4116"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="10.5"
                    result="effect1_foregroundBlur_1028_1573"
                  />
                </filter>
                <radialGradient
                  id="paint0_radial_1028_1573"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(36.5 51.5) rotate(90) scale(55.2868)"
                >
                  <stop stopOpacity="0.47" />
                  <stop offset="1" stopOpacity="0" />
                </radialGradient>
              </defs>
            </svg>
          </span>

          <span className="absolute bottom-10 right-0 -z-10">
            <svg
              width="191"
              height="515"
              viewBox="0 0 191 515"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.45">
                <path
                  opacity="0.45"
                  d="M0.99999 276.879C48.6667 346.546 159.7 490.879 222.5 510.879C301 535.879 292 405.879 337.5 379.379C383 352.879 428.129 328.879 423.5 258.379C421.038 220.879 417.5 117.879 222.5 61.8791"
                  stroke="url(#paint0_linear_1028_1566)"
                />
                <path
                  opacity="0.45"
                  d="M0.99999 264.703C48.6667 334.37 159.7 478.703 222.5 498.703C301 523.703 292 393.703 337.5 367.203C383 340.703 428.129 316.703 423.5 246.203C421.038 208.703 417.5 105.703 222.5 49.7034"
                  stroke="url(#paint1_linear_1028_1566)"
                />
                <path
                  opacity="0.45"
                  d="M0.99999 252.527C48.6667 322.194 159.7 466.527 222.5 486.527C301 511.527 292 381.527 337.5 355.027C383 328.527 428.129 304.527 423.5 234.028C421.038 196.528 417.5 93.5276 222.5 37.5276"
                  stroke="url(#paint2_linear_1028_1566)"
                />
                <path
                  opacity="0.45"
                  d="M0.99999 240.352C48.6667 310.018 159.7 454.352 222.5 474.352C301 499.352 292 369.352 337.5 342.852C383 316.352 428.129 292.352 423.5 221.852C421.038 184.352 417.5 81.3518 222.5 25.3518"
                  stroke="url(#paint3_linear_1028_1566)"
                />
                <path
                  opacity="0.45"
                  d="M0.99999 228.176C48.6667 297.843 159.7 442.176 222.5 462.176C301 487.176 292 357.176 337.5 330.676C383 304.176 428.129 280.176 423.5 209.676C421.038 172.176 417.5 69.176 222.5 13.176"
                  stroke="url(#paint4_linear_1028_1566)"
                />
                <path
                  opacity="0.45"
                  d="M0.99999 216C48.6667 285.667 159.7 430 222.5 450C301 475 292 345 337.5 318.5C383 292 428.129 268 423.5 197.5C421.038 160 417.5 57.0002 222.5 1.00023"
                  stroke="url(#paint5_linear_1028_1566)"
                />
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_1028_1566"
                  x1="193.5"
                  y1="105.055"
                  x2="423.828"
                  y2="287.967"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#4A6CF7" stopOpacity="0" />
                  <stop offset="1" stopColor="#4A6CF7" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_1028_1566"
                  x1="193.5"
                  y1="92.8789"
                  x2="423.828"
                  y2="275.791"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#4A6CF7" stopOpacity="0" />
                  <stop offset="1" stopColor="#4A6CF7" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_1028_1566"
                  x1="193.5"
                  y1="80.7031"
                  x2="423.828"
                  y2="263.615"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#4A6CF7" stopOpacity="0" />
                  <stop offset="1" stopColor="#4A6CF7" />
                </linearGradient>
                <linearGradient
                  id="paint3_linear_1028_1566"
                  x1="193.5"
                  y1="68.5273"
                  x2="423.828"
                  y2="251.44"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#4A6CF7" stopOpacity="0" />
                  <stop offset="1" stopColor="#4A6CF7" />
                </linearGradient>
                <linearGradient
                  id="paint4_linear_1028_1566"
                  x1="193.5"
                  y1="56.3515"
                  x2="423.828"
                  y2="239.264"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#4A6CF7" stopOpacity="0" />
                  <stop offset="1" stopColor="#4A6CF7" />
                </linearGradient>
                <linearGradient
                  id="paint5_linear_1028_1566"
                  x1="193.5"
                  y1="44.1758"
                  x2="423.828"
                  y2="227.088"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#4A6CF7" stopOpacity="0" />
                  <stop offset="1" stopColor="#4A6CF7" />
                </linearGradient>
              </defs>
            </svg>
          </span>
        </div>
      </div>
    </>
  );
};

export default ContactInfoBox;
