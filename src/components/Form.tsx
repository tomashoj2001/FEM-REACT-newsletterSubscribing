import {useState} from "react"
import {HomeProps as FormProps} from "./Home"

export default function Form ({ email, setEmail, setHome }: FormProps) {
  const [validMail, setValidMail] = useState<boolean>(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    if (!email) {
      setValidMail(true)
      return
    }

    setHome(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (validMail) setValidMail(false)
    setEmail(e.target.value)
  }
  return(
    <form onSubmit={handleSubmit} className="flex flex-col mt-12 relative md:mt-8">
      {validMail && <span className="text-red-500 absolute right-0 text-xs top-1">Valid email required</span>}
      <label
        className="font-semibold text-sm"
        htmlFor="email"
      >
        Email address
      </label>
      <input
        type="text"
        id="email"
        className={`border p-2 mt-2 mb-4 rounded ${validMail && 'bg-red-200 text-tomato placeholder:text-tomato'}}`}
        onChange={handleChange}
        value={email}
        placeholder="email@company.com"
      />
      <button className="font-bold text-white bg-dark-blue py-4 rounded md:hover:bg-tomato">Suscribe to monthly newsletter</button>
    </form>
  )
}