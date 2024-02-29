import MenuItem from "./MenuItem";

export default function Menu() {
  return (
    <div className="col-lg-8 mt-lg-0 mt-20">
      <div className="row gap-sm-0">
        <div className="col-md-4 col-6 mb-lg-0 mb-25">
          <p className="text-lg fw-semibold color-palette-1 mb-12">Company</p>
          <ul className="list-unstyled">
            <MenuItem title="About Us" href="/" />
            <MenuItem title="Press Release" href="/" />
            <MenuItem title="Terms of Use" href="/" />
            <MenuItem title="Privacy & Policy" href="/" />
          </ul>
        </div>
        <div className="col-md-4 col-6 mb-lg-0 mb-25">
          <p className="text-lg fw-semibold color-palette-1 mb-12">Support</p>
          <ul className="list-unstyled">
            <MenuItem title="Refund Policy" href="/" />
            <MenuItem title="Unlock Rewards" href="/" />
            <MenuItem title="Live Chatting" href="/" />
          </ul>
        </div>
        <div className="col-md-4 col-12 mt-lg-0 mt-md-0 mt-25">
          <p className="text-lg fw-semibold color-palette-1 mb-12">Connect</p>
          <ul className="list-unstyled">
            <MenuItem title="hi@store.gg" href="mailto: hi@store.gg" />
            <MenuItem title="team@store.gg" href="mailto: team@store.gg" />
            <MenuItem title="Pasific 12, Jakarta Selatan" href="http://maps.google.com/?q=Pasific 12,
                                        Jakarta Selatan" />
            <MenuItem title="021 - 1122 - 9090" href="tel: 02111229090" />
          </ul>
        </div>
      </div>
    </div>
  )
}
