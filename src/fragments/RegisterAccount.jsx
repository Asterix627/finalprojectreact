import InputFormLabel from "../components/atoms/Input/index";
import IndexButton from "../components/atoms/Button";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const RegisterAccoutFragment = () => {
  const [title, setTitle] = useState("Daftar Akun");

  useEffect(() => {
    document.title = title;
  }, [setTitle]);

  const dataInput = [
    {
      label: "Email",
      name: "Email",
      placeholder: "Example@example.com",
      type: "email",
    },
    {
      label: "Password",
      name: "Password",
      placeholder: "Password",
      type: "password",
    },
    {
      label: "Konfirmasi Password",
      name: "konfirmasiPassword",
      placeholder: "Ulangi Password Anda",
      type: "password",
    },
  ];
  return (
    <form>
      {dataInput.map((input, index) => (
        <InputFormLabel key={index} label={input.label} name={input.name} placeholder={input.placeholder} type={input.type} />
      ))}
      <div className="text-sm text-end my-2">
        <Link to="/reset-password" className="font-semibold text-blue-600 hover:text-md hover:font-bold">
          Lupa password?
        </Link>
      </div>
      <div>
        <IndexButton name="Daftar" />
      </div>
    </form>
  );
};

export default RegisterAccoutFragment;
