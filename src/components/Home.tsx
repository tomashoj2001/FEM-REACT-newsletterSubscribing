import Form from "./Form"
import check from "../assets/images/icon-list.svg"
import imgDesktop from "../assets/images/illustration-sign-up-desktop.svg"
import imgMobile from "../assets/images/illustration-sign-up-mobile.svg"

export interface HomeProps {
  email: string
  setEmail: React.Dispatch<React.SetStateAction<string>>
  setHome: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Home({ email, setEmail, setHome }: HomeProps) {
  const width = window.innerWidth

  return (
    <div className="max-w-[900px] h-full flex flex-col-reverse md:grid md:grid-flow-col md: grid-cols-20">
      <section className="my-auto px-8 py-8 md:col-span-11">
        <h1 className="text-4xl font-bold text-dark-blue md:text-6xl">Stay updated!</h1>
        <p className="py-4">Join 60,000+ product managers receiving monthly updates on:</p>
        <ul className="flex flex-col gap-4">
          <li className="flex gap-4">
            <img src={check} alt="check" />
            <p>Product discovery and building what matters</p>
          </li>
          <li className="flex gap-4">
            <img src={check} alt="check" />
            <p>Measuring to ensure updates are a success</p>
          </li>
          <li className="flex gap-4">
            <img src={check} alt="check" />
            <p>And much more!</p>
          </li>
        </ul>
        <Form email={email} setEmail={setEmail} setHome={setHome} />
      </section>
      <picture className="p-0 md:p-4 md:pl-0 md:col-span-9">
        {
          width < 600
          ? <img src={imgMobile} alt="logo" className="w-full rounded-bl-2xl rounded-br-2xl md:h-full md:rounded-xl"/>
          : <img src={imgDesktop} alt="logo" className="rounder"/>
        }
      </picture>
    </div>
  )
}