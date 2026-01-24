import React, { useState } from 'react';

function FormAntrian() {
  const [waktu, setWaktu] = useState('');

  const handleWaktuChange = (event) => {
    setWaktu(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Waktu yang dipilih:', waktu);
    // Kirim ke backend atau simpan ke database
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <label className="block">
        <span className="text-gray-700">Pilih Waktu:</span>
        <input
          type="time"
          value={waktu}
          onChange={handleWaktuChange}
          className="mt-1 block w-full border rounded px-2 py-1"
        />
      </label>

      <button
        type="submit"
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Simpan
      </button>
    </form>
  );
}

export default FormAntrian;
