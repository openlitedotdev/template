// Migrated Component
import Image from 'next/image'
import logoIphone from 'public/png/logo.png'
import { Network } from '@/components/icons'

export default function Footer() {
  return (
    <>
      <footer className="  bg-black w-full">
        <section className="mx-auto container relative  flex flex-wrap justify-evenly py-[20px]  items-center">
          <svg
            className="absolute top-0 bottom-0 right-0 h-full -z-10 font"
            viewBox="0 0 1440 638"
            fill="none"
          >
            <path
              d="M1440 638L0 638L-5.57757e-05 0.000125889L1440 0L1440 638Z"
              fill="url(#paint0_linear_451_5139)"
            >
            </path>
            <defs>
              <linearGradient
                id="paint0_linear_451_5139"
                x1="1440"
                y1="638"
                x2="1314.32"
                y2="21.9417"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.0299349" stopColor="#383638"></stop>
                <stop offset="0.480319" stopColor="#0B0B0B"></stop>
              </linearGradient>
            </defs>
          </svg>
          <section className="flex flex-col w-[95%] md:w-[392px] px-5 py-5 bg-[#17181C] justify-center items-start gap-7 rounded-2xl">
            <p className="text-blue-dark">Feedback</p>
            <h2 className="text-white font-bold text-3xl">
              <span className="text-white/40">
                Seeking personalized support?
              </span>
              {' '}
              Request a call from our team
            </h2>
            <form className="w-full flex flex-col gap-3">
              <div className="flex flex-col gap-2">
                <label className="block text-gray-dark">Email</label>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    className="w-full icono-placeholder pl-9 pr-2 h-[56px] bg-transparent border-[1px] rounded-lg border-[#8B8E99] text-[#8B8E99]"
                    placeholder="Example@email.com"
                  />
                  <svg
                    className="absolute top-1/2 text-gray-dark -translate-y-1/2 left-2"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path>
                    <path d="M3 7l9 6l9 -6"></path>
                  </svg>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="block text-gray-dark">Username</label>
                <section className="relative">
                  <input
                    type="email"
                    name="email"
                    className="w-full icono-placeholder pl-9 pr-2 bg-transparent border-[1px] rounded-lg border-gray-dark text-gray-dark h-[56px]"
                    placeholder="Feyz Ibrahim"
                  />
                  <svg
                    className="absolute top-1/2 text-gray-dark -translate-y-1/2 left-2"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
                    <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
                  </svg>
                </section>
              </div>
              <div className="flex justify-center ">
                <button className="bg-purple py-2 px-5 mt-[10px] font-semibold rounded-lg text-white max-w-max h-[44px]">
                  Send Request
                </button>
              </div>
            </form>
            <p className="text-xs text-gray-dark">Privacy</p>
          </section>
          <section className="w-[550px] flex justify-between flex-wrap mt-[20px]">
            <div className="w-full flex flex-col max-h-max justify-evenly md:w-[420px] gap-5">
              <article className="flex justify-center md:justify-start gap-6 flex-wrap">
                <article className="w-48 text-center md:text-start">
                  <h2 className="text-purple ">INFO</h2>
                  <ul className="text-white">
                    <li>Company</li>
                    <li>Products</li>
                    <li>Engineering</li>
                    <li>Services</li>
                    <li>Productions</li>
                  </ul>
                </article>
                <article className="w-48 text-center md:text-start">
                  <h2 className="text-purple">ABOUT US</h2>
                  <ul className="text-white">
                    <li>Gellery</li>
                    <li>Technologies</li>
                    <li>Contacts</li>
                  </ul>
                </article>
                <article className="w-48 text-center md:text-start">
                  <h2 className="text-purple">CONTACT US</h2>
                  <ul className="text-white">
                    <li>+91 73569 83827</li>
                    <li>help@exiphones.com</li>
                    <li>Calicut, KL, INDIA</li>
                  </ul>
                </article>
              </article>
              <div className="w-full flex justify-center md:justify-start text-white">
                <Network
                  bgfacebook="bg-white"
                  colorfacebook="text-black"
                  styleicons="text-white"
                />
              </div>
            </div>
            <figure className="w-full flex flex-col justify-center md:justify-between m-[10px] items-center md:items-end md:w-[105px]">
              <Image src={logoIphone} alt="Logo image" />
              <p className="text-[10px] text-gray-dark">© 2023 — ex-iphones</p>
            </figure>
          </section>
        </section>
      </footer>
    </>
  )
}
