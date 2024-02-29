import Image from "next/image";
import Menu from "./Menu";

export default function Footer() {
  return (
    <section className="footer pt-50">
      <footer>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 text-lg-start text-center">
              <a href="/" className="mb-30">
                <Image height={60} width={60} alt="" src="/icon/logo.svg" />
              </a>
              <p className="mt-30 text-lg color-palette-1 mb-30">StoreGG membantu gamers<br /> untuk menjadi
                pemenang sejati</p>
              <p className="mt-30 text-lg color-palette-1 mb-30">Copyright 2021. All Rights Reserved.</p>
            </div>
            <Menu />
          </div>
        </div>
      </footer>
    </section>
  )
}
