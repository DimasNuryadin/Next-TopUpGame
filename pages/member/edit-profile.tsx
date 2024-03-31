import Image from "next/image";
import Input from "../../components/atoms/Input.tsx";
import SideBar from "../../components/organisms/SideBar";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { JWTPayloadTypes, UserTypes } from "../../services/data-types/index.js";
import { jwtDecode } from "jwt-decode";
import { updateProfile } from "../../services/member";
import { toast } from "react-toastify";
import { useRouter } from "next/router.js";

export default function EditProfile() {
  const [user, setUser] = useState({
    avatar: '',
    name: '',
    email: '',
  })
  const [imagePreview, setImagePreview] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      const jwtToken = atob(token!)
      // jwt_decode
      const payload: JWTPayloadTypes = jwtDecode(jwtToken);
      const userFromPayload: UserTypes = payload.player;

      // Image
      if (userFromPayload.avatar) {
        const IMG = process.env.NEXT_PUBLIC_IMG;
        userFromPayload.avatar = `${IMG}/${userFromPayload.avatar}`;
      }
      setUser(userFromPayload)
    }
  }, [])

  const onSubmit = async () => {
    const data = new FormData();

    data.append('image', user.avatar)
    data.append('name', user.name)

    const response = await updateProfile(data);
    if (response.error) {
      toast.error(response.message)
    } else {
      Cookies.remove('token')
      router.push('/sign-in');
    }
  }

  return (
    <section className="edit-profile overflow-auto">
      <SideBar activeMenu="settings" />
      <main className="main-wrapper">
        <div className="ps-lg-0">
          <h2 className="text-4xl fw-bold color-palette-1 mb-30">Settings</h2>
          <div className="bg-card pt-30 ps-30 pe-30 pb-30">
            <form action="">
              <div className="photo d-flex">
                <div className="image-upload">
                  <label htmlFor="avatar">
                    {imagePreview ? (
                      <img
                        src={imagePreview}
                        width={90}
                        height={90}
                        alt="Icon Upload"
                        style={{ borderRadius: "100%" }}
                      />
                    ) : (
                      <Image
                        src={user.avatar}
                        loader={() => `${user.avatar}?w="90"`}
                        width={90}
                        height={90}
                        alt="Icon Upload"
                        style={{ borderRadius: "100%" }}
                      />
                    )}

                  </label>
                  <input
                    id="avatar"
                    type="file"
                    name="avatar"
                    accept="image/png, image/jpeg"
                    onChange={(event) => {
                      const image: any = event.target.files?.[0];
                      setImagePreview(URL.createObjectURL(image));
                      return setUser({
                        ...user,
                        avatar: image,
                      });
                    }}
                  />
                </div>
              </div>
              <div className="pt-30">
                <Input
                  label="Full Name"
                  placeholder="Enter your name"
                  value={user.name}
                  onChange={(event) => setUser({
                    ...user,
                    name: event.target.value,
                  })}
                />
              </div>
              <div className="pt-30">
                <Input
                  label="Email Address"
                  placeholder="Enter your email"
                  value={user.email}
                  disabled
                />
              </div>
              {/* <div className="pt-30">
                <Input label="Phone" placeholder="Enter your phone number" />
              </div> */}
              <div className="button-group d-flex flex-column pt-50">
                <button
                  type="button"
                  className="btn btn-save fw-medium text-lg text-white rounded-pill"
                  onClick={onSubmit}
                >
                  Save My Profile
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </section >
  )
}
