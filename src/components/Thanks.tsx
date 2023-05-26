import img from "../assets/images/icon-success.svg"

interface ThanksProps {
  email: string
  setHome: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Thanks({ email, setHome }: ThanksProps) {
  return (
    <div className="px-8 py-1 h-[100vh] md:h-auto md:max-w-[400px] md:p-8 md:mt-40">
      <picture>
        <img src={img} alt="foto" className="mt-16 md:mt-0" />
      </picture>
      <h1 className="text-4xl font-bold mt-12 mb-8 text-dark-blue md:mt-0">Thanks for subscribing!</h1>
      <p>A confirmation email has been sent to <span className="font-semibold">{email}</span>. Please open it and click the button inside to confirm your subscription</p>
      <button
        className="text-white py-4 rounded w-full mt-32 bg-dark-blue md:mt-8 md:hover:bg-tomato"
        onClick={() => setHome(true)}
      >
        Dismiss message
      </button>
    </div>
  )
}