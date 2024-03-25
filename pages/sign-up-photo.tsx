import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { getGameCategory } from "../services/player";
import { setSignUp } from "../services/auth";

// react-toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/router";

export default function SignUpPhoto() {
  const [categories, setCategories] = useState([]);
  const [localForm, setLocalForm] = useState({
    name: '',
    email: '',
  });
  const [favorite, setFavorite] = useState('')
  const [image, setImage] = useState('')
  const [imagePreview, setImagePreview] = useState('/icon/upload.svg')

  const router = useRouter()

  const getGameCategoryAPI = useCallback(async () => {
    const response = await getGameCategory();
    setCategories(response.data)
    setFavorite(response.data[0]._id)
  }, [getGameCategory])

  useEffect(() => {
    getGameCategoryAPI()
  }, []);

  useEffect(() => {
    const getLocalForm = localStorage.getItem('user-form')
    setLocalForm(JSON.parse(getLocalForm!))
  }, [])

  const onSubmit = async () => {
    // Local storage
    const getLocalForm = await localStorage.getItem('user-form');
    const form = JSON.parse(getLocalForm!);

    // Menggabungkan data
    const data = new FormData();

    data.append('image', image);
    data.append('email', form.email);
    data.append('name', form.name);
    data.append('password', form.password);
    data.append('username', form.name);
    data.append('phoneNumber', '089123');
    data.append('role', 'user');
    data.append('status', 'Y');
    data.append('favorite', favorite);

    const result = await setSignUp(data);

    if (result.error) {
      // react-toastify
      toast.error(result.message);
    } else {
      toast.success('Register Berhasil')
      router.push('/sign-up-success')
      localStorage.removeItem('user-form')
    }
  }

  return (
    <section className="sign-up-photo mx-auto pt-lg-227 pb-lg-227 pt-130 pb-50">
      <div className="container mx-auto">
        <form action="">
          <div className="form-input d-md-block d-flex flex-column">
            <div>
              <div className="mb-20">
                <div className="image-upload text-center">
                  <label htmlFor="avatar">
                    <Image className="img-upload" src={imagePreview} height={120} width={120} alt="Upload" priority />
                  </label>
                  <input
                    id="avatar"
                    type="file"
                    name="avatar"
                    accept="image/png, image/jpeg"
                    onChange={(event) => {
                      const image = event.target.files[0];
                      setImagePreview(URL.createObjectURL(image));
                      return setImage(image);
                    }}
                  />
                </div>
              </div>
              <h2 className="fw-bold text-xl text-center color-palette-1 m-0">{localForm.name}</h2>
              <p className="text-lg text-center color-palette-1 m-0">{localForm.email}</p>
              <div className="pt-50 pb-50">
                <label htmlFor="category" className="form-label text-lg fw-medium color-palette-1 mb-10">Favorite
                  Game</label>
                <select
                  id="category"
                  name="category"
                  className="form-select d-block w-100 rounded-pill text-lg"
                  aria-label="Favorite Game"
                  value={favorite}
                  onChange={(event) => setFavorite(event.target.value)}
                >
                  {categories.map(category => {
                    return (
                      <option
                        key={category._id}
                        value={category._id}
                      >
                        {category.name}
                      </option>
                    )
                  })}
                </select>
              </div>
            </div>

            <div className="button-group d-flex flex-column mx-auto">
              <button
                className="btn btn-create fw-medium text-lg text-white rounded-pill mb-16"
                type="button"
                onClick={onSubmit} >
                Create My Account
              </button>
              <Link className="btn btn-tnc text-lg color-palette-1 text-decoration-underline pt-15" href="/"
              >Terms &
                Conditions</Link>
            </div>
          </div>
        </form>
      </div>

      {/* react-toastify */}
      <ToastContainer />
    </section>
  )
}
