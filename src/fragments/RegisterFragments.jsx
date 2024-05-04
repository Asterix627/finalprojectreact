import React, { useState } from "react";
import InputFormLabel from "../components/atoms/Input";
import IndexButton from "../components/atoms/Button";
import { Result } from "antd";
import RegisterContainer from "../components/molecules/RegisterContainer";
import { Link } from "react-router-dom";
import DataForm from "../components/data/DataForm";

const RegisterFragments = () => {
  const [formData, setFormData] = useState({
    "Nama Lengkap": "",
    "Tempat Lahir": "",
    "Tanggal Lahir": "",
    "Asal Sekolah": "",
    "Alamat Rumah": "",
    "Nomor HP/WA": "",
  });

  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Kirim data ke database di sini
      console.log("Data yang akan dikirim:", formData);
      // Reset formulir setelah pengiriman berhasil
      setFormData({
        "Nama Lengkap": "",
        "Tempat Lahir": "",
        "Tanggal Lahir": "",
        "Asal Sekolah": "",
        "Alamat Rumah": "",
        "Nomor HP/WA": "",
      });
      setIsSuccess(true); // Set isSuccess menjadi true setelah pengiriman berhasil
    } catch (error) {
      console.error("Gagal mengirim data:", error);
    }
  };

  return (
    <>
      {isSuccess ? (
        <div className="flex flex-col justify-center">
          <Result
            status="success"
            title="Pendaftaran Berhasil!"
            subTitle="Data Anda telah berhasil terkirim."
          />
          <p className="pt-2 mt-2 text-center text-sm text-gray-500">
                Kembali ke{" "}
                <Link
                  to="/"
                  className="font-semibold text-blue-600 hover:text-md hover:font-bold"
                >
                  Home
                </Link>
              </p>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center gap-10 py-10 my-auto mx-10 lg:flex-row lg:my-auto">
          <RegisterContainer />
          <form className="space-y-6" onSubmit={handleSubmit}>
            <h1 className="flex font-bold text-hijau1 text-2xl text-center md:text-left">
              Pendaftaran Calon Peserta Didik Tahun Pelajaran 2024
            </h1>
            {DataForm.map((input, index) => (
              <InputFormLabel
                key={index}
                label={input.label}
                name={input.name}
                placeholder={input.placeholder}
                type={input.type}
                value={formData[input.name]}
                onChange={handleChange}
              />
            ))}
            <div className="flex flex-col justify-center space-x-10">
              <IndexButton type="submit" name="Daftar" />
              <p className="pt-2 mt-2 text-center text-sm text-gray-500">
                atau ke halaman{" "}
                <Link
                  to="/"
                  className="font-semibold text-blue-600 hover:text-md hover:font-bold"
                >
                  Home
                </Link>
              </p>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default RegisterFragments;
