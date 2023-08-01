import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import ImageComponent from "../common/ImageComponent";
import { useRouter } from 'next/router'
import { type } from "os";
const Navigation = [
  {
    name: "HOME",
    href: "/",
  },
  {
    name: "COURSES",
    href: "/courses",
  },
  {
    name: "SUCCESS STORIES",
    href: "/success-stories",
  },
  {
    name: "BLOGS",
    href: "/blogs",
  },
  {
    name: "CONTACT US",
    href: "/contact",
  },
];

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const router=useRouter()
  return (
    <header id="header" className="header">
      <nav className="w-full bg-transparent border-b border-black-100">
        <div className="container justify-between md:flex md:items-center ">
          <div className="flex items-center justify-between py-5 md:block md:py-8">
            <Link href="/">
              {/* <svg className="sm:w-[13.875rem] w-[10rem] h-[3.438rem]"  viewBox="0 0 222 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M70.8762 25.5811C74.0323 19.9929 78.5172 16.6547 84.669 15.8851V3.01357C82.2325 3.01357 79.9435 2.92036 77.6674 3.04825C76.3148 3.12412 75.5388 4.1776 75.0598 5.37849C74.7194 6.23471 74.4485 7.11912 73.9846 8.45873C73.3061 6.19787 73.8003 4.39438 73.6486 2.66675C75.3914 2.01212 96.7298 1.89722 99.331 2.51934V8.13142C98.4921 7.6502 98.6265 6.82649 98.4076 6.22605C97.5384 3.82211 96.4719 2.97456 93.9401 2.9117C92.2146 2.86835 90.4848 2.90302 88.8027 2.90302C88.2196 4.43989 88.0505 11.9877 88.5122 15.6814C92.8779 16.0672 96.6995 17.9011 100.036 21.404C100.603 19.7848 101.061 18.4798 101.618 16.8953C101.971 17.4263 102.294 17.6865 102.296 17.9488C102.333 21.6316 102.333 25.3166 102.318 28.9995C102.318 29.1751 102.119 29.3485 101.963 29.6064C100.972 29.2769 101.085 28.3904 100.909 27.6945C100.016 24.1353 98.2537 21.1482 95.18 19.0456C93.2356 17.7146 91.0918 16.9711 88.4169 16.9776C88.3778 17.7255 88.3171 18.4083 88.315 19.0911C88.3085 20.8252 88.2955 22.5594 88.3453 24.2935C88.432 27.4409 89.4183 28.2061 91.8352 28.0912C92.078 28.0804 92.3252 28.2083 92.75 28.3167C90.8707 28.9648 82.0244 28.9756 79.9045 28.243C80.9168 28.1411 81.5064 28.0826 82.0938 28.0197C83.8453 27.8333 84.5064 27.3976 84.6126 25.6483C84.7752 22.9972 84.6538 20.3267 84.6538 17.4654C84.127 17.5607 83.5591 17.5586 83.0822 17.7667C79.7787 19.219 77.145 21.4083 76.0113 24.9503C73.7656 31.9713 73.731 39.0574 76.1869 46.0026C78.2787 51.916 84.8858 55.4384 92.0759 53.1776C95.7132 52.033 97.3303 49.7288 97.4365 45.9181C97.469 44.7649 97.4582 43.5987 97.3303 42.4563C97.1027 40.4296 96.3071 39.6925 94.2912 39.4389C93.5802 39.3501 92.8692 39.2742 92.1626 39.1615C92.0759 39.1485 92.0195 38.9425 91.8591 38.6759C92.2276 38.5177 92.5766 38.2359 92.9212 38.2424C97.9112 38.3378 102.914 38.0148 108.114 38.4201C107.672 39.569 106.918 39.3436 106.356 39.4411C103.829 39.8768 103.127 40.5293 102.953 43.0979C102.762 45.9007 102.721 48.7122 102.619 51.3719C99.0254 52.408 95.5593 53.6133 92.0022 54.3915C84.3633 56.0649 77.6371 54.3741 72.4347 48.2353C68.5698 43.6724 67.603 38.225 68.6456 32.5436C69.1225 29.9511 68.8884 28.1693 66.9679 26.2596C65.095 24.3975 63.7402 22.0153 62.1318 19.8823C61.436 18.9611 60.6708 18.094 59.9446 17.1922C59.0472 16.0781 57.9266 15.6012 56.4547 15.9502C56.3615 16.0997 56.1599 16.2731 56.1577 16.4487C56.1426 19.5528 56.0884 22.6591 56.1859 25.7588C56.2314 27.2025 56.9186 27.7661 58.3709 27.9893C58.993 28.0847 59.6238 28.1216 60.4367 28.2061C58.9454 28.9388 50.5934 29.0428 48.4561 28.2213C49.0327 28.1454 49.6136 28.0891 50.1858 27.9872C51.5276 27.7466 52.0544 27.248 52.2863 25.8846C52.4055 25.1757 52.4315 24.4452 52.4337 23.7256C52.4424 18.1612 52.4337 12.5968 52.4315 7.03458C52.4315 6.67258 52.4012 6.31275 52.3947 5.95075C52.3535 4.03454 51.7812 2.81848 49.4185 2.84666C49.2169 2.84883 49.0153 2.73828 48.5384 2.60171C49.0001 2.35894 49.2516 2.11183 49.5095 2.10749C53.3355 2.03379 57.1722 1.80836 60.983 2.01646C62.8623 2.11834 64.8674 2.72311 66.517 3.63786C70.6182 5.91174 70.6291 11.2745 66.6297 13.7392C65.379 14.5108 63.9093 14.9292 62.5675 15.4971C65.2879 18.7963 67.9737 22.05 70.8805 25.5746L70.8762 25.5811ZM56.1643 15.276C58.2951 15.0441 60.1744 15.0029 61.9714 14.6019C64.4534 14.047 65.3725 12.1047 65.509 9.75283C65.6499 7.29471 65.3855 4.95797 63.0032 3.49263C62.9425 3.45578 62.8775 3.4211 62.8103 3.39508C60.6752 2.59739 58.4967 2.49767 56.1643 2.79247V15.276Z" fill="black" />
                <path d="M0 1.50496C1.56071 0.570702 16.2314 0.4905 18.4836 1.04542C17.9937 1.33155 17.7054 1.62853 17.3846 1.66538C16.3116 1.79327 15.2191 1.76509 14.1505 1.91899C12.5486 2.14877 11.8484 2.8294 11.623 4.4183C11.4626 5.55849 11.4149 6.72035 11.4127 7.87355C11.3889 16.1063 11.3867 24.3391 11.3846 32.5719C11.3846 33.2937 11.4127 34.0155 11.4648 34.7352C11.6403 37.1716 12.3405 38.1384 14.6881 38.2446C17.8485 38.3877 21.0241 38.236 24.1933 38.1341C26.2265 38.0691 27.8219 36.9917 28.8407 35.3378C29.8899 33.634 30.6334 31.7417 31.5134 29.9338C31.8017 29.3421 31.6413 28.4186 32.6558 28.3449C33.2411 29.6759 33.2649 34.6268 32.6775 39.2418C32.0575 39.309 31.3747 39.4433 30.6897 39.4455C21.087 39.465 11.4864 39.4694 1.8837 39.4629C1.27892 39.4629 0.671974 39.3393 0.0130054 38.8516C0.338154 38.715 0.654637 38.5069 0.992792 38.4571C1.70378 38.353 2.43645 38.3812 3.14311 38.2641C4.57593 38.0235 5.48853 37.1716 5.72914 35.7236C5.87003 34.8739 5.95674 34.0047 5.95674 33.142C5.96974 24.4041 5.96107 15.6663 5.95674 6.92845C5.95674 6.64015 5.9524 6.34969 5.93939 6.06139C5.805 2.78822 5.0875 2.03605 1.84468 1.74124C1.2269 1.68488 0.615615 1.58301 0 1.50064V1.50496Z" fill="black" />
                <path d="M123.802 40.6831C125.69 43.0177 127.552 45.3046 129.396 47.6088C131.475 50.2035 133.413 52.9672 137.141 53.5417C136.034 54.2137 134.885 53.8191 133.816 53.9969C131.055 54.4564 129.171 53.2881 127.621 51.0771C125.633 48.2396 123.494 45.5062 121.38 42.7597C120.463 41.5675 119.345 40.6853 117.55 41.1839C117.479 41.5437 117.331 41.9447 117.329 42.3479C117.314 44.9491 117.299 47.5503 117.342 50.1515C117.381 52.473 117.938 53.0214 120.266 53.2642C120.65 53.3054 121.025 53.4116 121.389 53.7281C117.515 54.0359 113.657 54.0099 109.798 53.9817C109.772 53.8322 109.749 53.6826 109.723 53.533C110.147 53.4376 110.568 53.3162 110.997 53.2512C112.812 52.9694 113.317 52.4513 113.49 50.5915C113.551 49.9455 113.572 49.2931 113.575 48.6428C113.581 43.2952 113.581 37.9475 113.575 32.5999C113.575 32.0233 113.551 31.4424 113.507 30.868C113.356 28.9518 112.942 28.4684 111.123 28.0934C110.711 28.0088 110.288 27.9763 109.506 27.8679C110.05 27.584 110.271 27.3715 110.494 27.3672C114.604 27.3065 118.721 27.1223 122.822 27.2978C124.482 27.3694 126.262 27.9698 127.721 28.8C131.898 31.1758 131.878 36.5689 127.742 39.0509C126.533 39.777 125.111 40.1521 123.799 40.681L123.802 40.6831ZM117.435 40.3146C119.161 40.2366 120.68 40.2886 122.161 40.0719C124.222 39.7705 125.805 38.7149 126.394 36.5711C126.864 34.8608 126.847 33.1375 126.305 31.4489C125.815 29.9229 124.87 28.8325 123.251 28.3621C121.359 27.8116 119.471 27.7053 117.435 28.0652V40.3146Z" fill="black" />
                <path d="M148.931 54.4696C145.632 54.4045 141.115 52.5707 138.418 47.7932C133.894 39.7794 137.152 28.0436 149.67 26.9381C152.447 26.6932 155.159 27.1354 157.697 28.2929C164.51 31.3992 166.507 37.7483 165.091 44.132C163.645 50.6567 158.263 54.4717 148.931 54.4674V54.4696ZM161.309 40.7309C161.094 39.0488 161.005 37.3082 160.63 35.6304C159.962 32.6477 158.584 30.0899 155.655 28.6874C149.209 25.6007 142.459 29.0603 141.203 36.103C140.655 39.1854 140.681 42.2765 141.219 45.3546C142.149 50.6783 145.584 53.4898 150.919 53.6892C156.314 53.8908 159.811 50.3358 160.704 45.4998C160.99 43.9478 161.107 42.3632 161.309 40.7309Z" fill="black" />
                <path d="M211.857 53.8386H200.878C200.862 53.7216 200.845 53.6024 200.83 53.4853C201.339 53.3943 201.851 53.3076 202.36 53.2122C203.485 52.9997 204.159 52.3321 204.307 51.1919C204.389 50.5503 204.439 49.8978 204.439 49.2497C204.45 43.5444 204.445 37.8391 204.443 32.1339C204.443 31.7003 204.439 31.2668 204.404 30.8354C204.246 28.9452 203.856 28.5052 201.979 28.0825C201.597 27.9958 201.211 27.9286 200.615 27.8094C201.005 27.5861 201.183 27.3975 201.363 27.3953C205.475 27.3693 209.587 27.3303 213.699 27.3823C214.618 27.3932 215.559 27.6555 216.446 27.9373C219.589 28.9409 221.366 31.4727 221.208 34.6202C221.043 37.9323 219.034 40.4186 215.771 40.9866C213.866 41.3182 211.896 41.2749 209.956 41.4006C209.457 41.4331 208.961 41.4678 208.369 41.5068C208.269 41.949 208.1 42.3522 208.1 42.7554C208.094 45.1376 208.072 47.5242 208.161 49.9043C208.261 52.6031 208.625 52.9369 211.293 53.2967C211.495 53.3249 211.688 53.4333 211.883 53.5048C211.872 53.6175 211.863 53.7302 211.852 53.843L211.857 53.8386ZM208.209 40.5444C211.445 40.5075 214.748 41.212 216.446 37.8044C217.72 35.2423 217.714 32.472 216.014 30.0052C214.705 28.102 211.222 27.3932 208.209 28.2884V40.5465V40.5444Z" fill="black" />
                <path d="M169.115 27.5602H180.016C179.946 27.738 179.914 27.9352 179.86 27.9417C176.255 28.3276 176.541 29.3854 176.511 31.6419C176.435 36.9765 176.565 42.3198 176.753 47.6523C176.851 50.4507 178.622 52.1827 181.186 52.9002C184.048 53.7022 186.911 53.5028 189.571 51.9941C191.665 50.8062 192.991 49.0179 193.052 46.6009C193.176 41.624 193.16 36.6427 193.158 31.6636C193.158 29.9858 192.484 28.7286 190.674 28.3449C190.338 28.2734 190.03 28.0783 189.718 27.7445C192.276 27.1939 194.847 27.571 197.517 27.7878C197.322 27.9309 197.145 28.1585 196.928 28.2062C194.658 28.7026 194.002 30.2741 194.012 32.3789C194.034 36.2764 194.01 40.176 193.993 44.0756C193.989 44.9405 193.984 45.8119 193.9 46.6703C193.572 50.0193 191.758 52.2737 188.676 53.4984C185.552 54.7383 182.337 54.8337 179.121 53.9146C174.943 52.7202 173.014 50.2643 172.86 45.8986C172.767 43.2302 172.832 40.5575 172.826 37.8848C172.819 35.7193 172.843 33.5516 172.795 31.3883C172.741 28.8803 172.325 28.4468 169.817 28.0393C169.568 27.9981 169.321 27.9352 169.071 27.881C169.084 27.7726 169.095 27.6643 169.108 27.5559L169.115 27.5602Z" fill="black" />
                <path d="M27.1846 28.6136C24.6225 28.9062 22.3291 28.813 19.9316 28.4922C22.9165 27.404 23.5906 24.7443 24.6029 22.3187C27.293 15.8634 30.0091 9.41898 32.7208 2.97453C32.8531 2.65805 33.0503 2.36975 33.2541 2.00342C34.2642 2.33724 34.3076 3.2238 34.5894 3.88927C37.2903 10.2622 39.9652 16.646 42.6466 23.0275C42.7593 23.2942 42.8655 23.5608 42.9717 23.8296C43.7477 25.7957 44.5714 27.7184 47.1249 28.2884C45.3843 28.9431 39.1328 28.9951 36.7202 28.3231C37.7455 28.1302 38.3264 28.0608 38.8857 27.9091C39.9695 27.6143 40.403 27.0399 40.0237 25.9864C39.2433 23.8187 38.3502 21.6858 37.3835 19.594C37.2079 19.2168 36.4579 18.9198 35.9637 18.9068C33.2974 18.8418 30.6269 18.8981 27.9585 18.8721C27.1066 18.8635 26.6059 19.2515 26.3262 20.0037C25.8255 21.3563 25.2684 22.6894 24.8479 24.0659C24.1846 26.24 24.5227 26.9315 26.5668 28.0413C26.7229 28.1259 26.8378 28.2884 27.1846 28.6136ZM36.8134 18.0636C35.2635 14.229 33.8719 10.6069 31.9578 7.09742C30.2064 10.6849 28.6153 14.216 27.2648 18.0636H36.8134Z" fill="black" />
                <path d="M18.6826 9.31274C20.614 6.48611 22.2051 3.43838 24.4464 0.817683C24.7889 0.416666 25.398 0.128366 25.9291 0.0308213C27.1842 -0.196783 28.0209 0.87187 27.5635 2.05975C27.414 2.44993 27.156 2.84444 26.8439 3.11757C24.3055 5.33725 21.7434 7.52875 19.1877 9.72893C19.0186 9.5902 18.8517 9.45147 18.6826 9.31274Z" fill="black" />
              </svg> */}
              <ImageComponent src={'/assets/images/logo.png'} width={200} height={60}/>
            </Link>
            <div className="md:hidden">
              <button
                className="rounded-md p-1.5 text-gray-700 outline-none focus:border focus:border-gray-400"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 h-10 text-black-100"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293
 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 h-10 text-black-100"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
          <div
            className={`overflow-hidden  duration-300 ease-linear ${navbar
                ? "h-56  pt-2 md:h-auto md:pb-0 md:pt-0 "
                : "mt-0  h-0  md:h-auto"
              }`}
          >
            <ul className="items-center justify-center md:flex lg:space-x-[4.5rem] md:space-x-6">
              {Navigation?.map((item, i) => (
                <Link href={item.href} key={i}>
                  <li className={`${item.href==router.pathname? "text-red":"text-black-100" } mb-5  md:mb-0 font-display`}>{item.name}</li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}