import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { setSignIn } from "../../../services/auth";
import cx from 'classnames';

// react-toastify
import { toast } from 'react-toastify';

// Cookies
import Cookies from 'js-cookie';

// Captcha
import ReCAPTCHA from "react-google-recaptcha";

export default function SignInForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [captcha, setCaptcha] = useState<string | null>();
  const router = useRouter();

  const className = {
    label: cx('form-label text-lg fw-medium color-palette-1 mb-10'),
    input: 'form-control rounded-pill text-lg',
  }

  const onSubmit = async () => {
    const data = {
      email,
      password,
    }

    if (!email || !password) {
      toast.error('Email dan Password wajib diisi!!!')
    } else if (!captcha) {
      toast.error('Captcha wajib diisi!!')
    } else {
      const response = await setSignIn(data)
      if (response.error) {
        toast.error(response.message)
      } else {
        toast.success('Login Berhasil')
        const { token } = response.data;
        const tokenBase64 = btoa(token)
        Cookies.set('token', tokenBase64, { expires: 1 })
        router.push('/')
      }
    }
  }

  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  return (
    <>
      <h2 className="text-4xl fw-bold color-palette-1 mb-10">Sign In</h2>
      <p className="text-lg color-palette-1 m-0">Masuk untuk melakukan proses top up</p>
      <div className="pt-50">
        <label htmlFor="email" className={className.label}>Email
          Address</label>
        <input
          type="email"
          className={className.input}
          id="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div className="pt-20">
        <label htmlFor="password"
          className={className.label}>Password</label>
        <input
          type="password"
          className={className.input}
          id="password"
          placeholder="Your password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      {/* Recaptcha */}
      <div className="flex pt-20">
        <ReCAPTCHA
          className="mx-auto"
          sitekey={siteKey!}
          onChange={setCaptcha}
        />
      </div>

      <div className="button-group d-flex flex-column mx-auto pt-20">
        <button
          type="button"
          className="btn btn-sign-in fw-medium text-lg text-white rounded-pill mb-16"
          onClick={onSubmit}
        >
          Continue to Sign In
        </button>
        <Link className="btn btn-sign-up fw-medium text-lg color-palette-1 rounded-pill"
          href="/sign-up">Sign
          Up</Link>
      </div>
    </>
  )
}
