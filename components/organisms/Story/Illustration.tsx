import Image from 'next/image'

export default function Illustration() {
  return (
    <div className="col-lg-7 col-12 d-lg-flex d-none justify-content-lg-end pe-lg-60" data-aos="zoom-in">
      <Image src="/img/Header-9.png" width={612} height={452} className="img-fluid" alt="Header" />
    </div>
  )
}
