import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function FormDataDiri() {
  // State untuk menyimpan nilai input
  const [formData, setFormData] = useState({
    npm: "",
    firstName: "",
    middleName: "",
    lastName: "",
    birthdate: null,
  });

  // State untuk menyimpan pesan kesalahan
  const [errors, setErrors] = useState({});

  // State untuk mengontrol tampilan modal
  const [showModal, setShowModal] = useState(false);

  // Handler untuk menampilkan modal
  const handleShowModal = () => setShowModal(true);

  // Handler untuk menyembunyikan modal
  const handleCloseModal = () => setShowModal(false);

  // Handler untuk mengupdate nilai input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handler untuk mengupdate nilai tanggal lahir
  const handleDateChange = (date) => {
    setFormData({ ...formData, birthdate: date });
  };

  // Handler untuk menangani submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validasi isian form
    const errors = {};
    if (!formData.npm || isNaN(formData.npm) || formData.npm.length > 10) {
      errors.npm = "NPM harus berupa angka dan maksimal 10 karakter";
    }
    if (!formData.firstName || !formData.lastName || !formData.birthdate) {
      errors.requiredFields = "Semua kolom wajib diisi";
    }
    setErrors(errors);
    // Jika tidak ada kesalahan, tampilkan informasi dalam modal
    if (Object.keys(errors).length === 0) {
      handleShowModal(); // Menampilkan modal
    }
  };

  // Fungsi untuk menghitung usia dari tanggal lahir
  const calculateAge = (birthdate) => {
    if (!birthdate) return null;
    const today = new Date();
    const birthDate = new Date(birthdate);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    return age;
  };

  return (
    <div className="container mt-5">
      <h2>Form Data Diri</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="npm">NPM:</label>
          <input
            type="text"
            className={`form-control ${errors.npm ? "is-invalid" : ""}`}
            id="npm"
            name="npm"
            value={formData.npm}
            onChange={handleChange}
            required
          />
          {errors.npm && <div className="invalid-feedback">{errors.npm}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="middleName">Middle Name:</label>
          <input
            type="text"
            className="form-control"
            id="middleName"
            name="middleName"
            value={formData.middleName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="birthdate">Birthdate:</label>
          <div>
            <DatePicker
              className={`form-control ${errors.birthdate ? "is-invalid" : ""}`}
              id="birthdate"
              name="birthdate"
              selected={formData.birthdate}
              onChange={handleDateChange}
              dateFormat="yyyy-MM-dd"
              placeholderText="YYYY-MM-DD"
              required
            />
            {errors.birthdate && (
              <div className="invalid-feedback">{errors.birthdate}</div>
            )}
          </div>
        </div>
        {errors.requiredFields && (
          <div className="text-danger">{errors.requiredFields}</div>
        )}
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>

      {/* Modal */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Informasi</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>NPM: {formData.npm}</p>
          <p>
            Fullname: {formData.firstName} {formData.middleName}{" "}
            {formData.lastName}
          </p>
          <p>Age: {calculateAge(formData.birthdate)}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default FormDataDiri;
