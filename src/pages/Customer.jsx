import { useState } from "react";
import Swal from "sweetalert2";

function Customer() {
  const [data, setData] = useState([]);
  const [nama, setNama] = useState("");
  const [editId, setEditId] = useState(null);

  const simpanData = () => {
    if (!nama) {
      Swal.fire("Warning", "Nama tidak boleh kosong", "warning");
      return;
    }

    if (editId) {
      // MODE EDIT
      const updatedData = data.map((item) =>
        item.id === editId ? { ...item, nama } : item
      );

      setData(updatedData);
      setEditId(null);

      Swal.fire("Success", "Data berhasil diupdate", "success");
    } else {
      // MODE TAMBAH
      setData([...data, { id: Date.now(), nama }]);
      Swal.fire("Success", "Data berhasil ditambah", "success");
    }

    setNama("");
  };

  const handleEdit = (item) => {
    setNama(item.nama);
    setEditId(item.id);
  };

  const hapusData = (id) => {
    Swal.fire({
      title: "Yakin hapus?",
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        setData(data.filter((item) => item.id !== id));
      }
    });
  };

  return (
    <div>
      <h2>Customer CRUD</h2>

      <input
        type="text"
        value={nama}
        onChange={(e) => setNama(e.target.value)}
        placeholder="Nama customer"
      />

      <button onClick={simpanData}>
        {editId ? "Update" : "Tambah"}
      </button>

      <ul>
        {data.map((item) => (
          <li key={item.id}>
            {item.nama}

            <button onClick={() => handleEdit(item)}>
              Edit
            </button>

            <button onClick={() => hapusData(item.id)}>
              Hapus
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Customer;