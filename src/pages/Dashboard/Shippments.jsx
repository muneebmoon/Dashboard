import React, { useEffect, useState } from "react";

const STORAGE_KEY = "shipments_data";

const statusColors = {
  Delivered: "bg-green-100 text-green-600",
  "In Transit": "bg-blue-100 text-blue-600",
  Pending: "bg-yellow-100 text-yellow-600",
};

export default function Shippments() {
  const [shipments, setShipments] = useState(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  });
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);

  const [form, setForm] = useState({
    id: "",
    customer: "",
    origin: "",
    destination: "",
    status: "Pending",
    date: "",
  });

  

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(shipments));
  }, [shipments]);

  const openAddModal = () => {
    setForm({
      id: "",
      customer: "",
      origin: "",
      destination: "",
      status: "Pending",
      date: "",
    });
    setEditingIndex(null);
    setIsOpen(true);
  };

  const openEditModal = (index) => {
    setForm(shipments[index]);
    setEditingIndex(index);
    setIsOpen(true);
  };

  const handleSave = () => {
    if (!form.id || !form.customer) return;

    if (editingIndex !== null) {
      const updated = [...shipments];
      updated[editingIndex] = form;
      setShipments(updated);
    } else {
      setShipments([...shipments, form]);
    }

    setIsOpen(false);
  };

  const handleDelete = (index) => {
    const updated = shipments.filter((_, i) => i !== index);
    setShipments(updated);
  };



  const filtered = shipments.filter((s) =>
    s.id.toLowerCase().includes(search.toLowerCase())
  );



  const total = shipments.length;
  const delivered = shipments.filter((s) => s.status === "Delivered").length;
  const inTransit = shipments.filter((s) => s.status === "In Transit").length;
  const pending = shipments.filter((s) => s.status === "Pending").length;

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-6">
      <div className="max-w-7xl mx-auto space-y-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between gap-3">
          <h1 className="text-2xl md:text-3xl font-bold">
            Shipment Dashboard
          </h1>

          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Search ID..."
              className="px-4 py-2 border rounded-lg"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <button
              onClick={openAddModal}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg"
            >
              + Add
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card title="Total" value={total} />
          <Card title="Delivered" value={delivered} />
          <Card title="In Transit" value={inTransit} />
          <Card title="Pending" value={pending} />
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl shadow overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50 text-gray-600 text-sm">
              <tr>
                <th className="p-4">ID</th>
                <th className="p-4">Customer</th>
                <th className="p-4">Origin</th>
                <th className="p-4">Destination</th>
                <th className="p-4">Date</th>
                <th className="p-4">Status</th>
                <th className="p-4">Actions</th>
              </tr>
            </thead>

            <tbody>
              {filtered.map((item, index) => (
                <tr key={index} className="border-t hover:bg-gray-50">
                  <td className="p-4 font-medium">{item.id}</td>
                  <td className="p-4">{item.customer}</td>
                  <td className="p-4">{item.origin}</td>
                  <td className="p-4">{item.destination}</td>
                  <td className="p-4">{item.date}</td>

                  <td className="p-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColors[item.status]}`}
                    >
                      {item.status}
                    </span>
                  </td>

                  <td className="p-4 flex gap-2">
                    <button
                      onClick={() => openEditModal(index)}
                      className="bg-yellow-400 px-3 py-1 rounded text-sm"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => handleDelete(index)}
                      className="bg-red-500 text-white px-3 py-1 rounded text-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filtered.length === 0 && (
            <p className="p-6 text-center text-gray-500">
              No shipments found
            </p>
          )}
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center p-4">
          <div className="bg-white rounded-xl p-6 w-full max-w-lg space-y-4">
            <h2 className="text-xl font-bold">
              {editingIndex !== null ? "Edit Shipment" : "Add Shipment"}
            </h2>

            <input
              placeholder="Shipment ID"
              className="w-full border p-2 rounded"
              value={form.id}
              onChange={(e) => setForm({ ...form, id: e.target.value })}
            />

            <input
              placeholder="Customer"
              className="w-full border p-2 rounded"
              value={form.customer}
              onChange={(e) => setForm({ ...form, customer: e.target.value })}
            />

            <input
              placeholder="Origin"
              className="w-full border p-2 rounded"
              value={form.origin}
              onChange={(e) => setForm({ ...form, origin: e.target.value })}
            />

            <input
              placeholder="Destination"
              className="w-full border p-2 rounded"
              value={form.destination}
              onChange={(e) =>
                setForm({ ...form, destination: e.target.value })
              }
            />

            <input
              type="date"
              className="w-full border p-2 rounded"
              value={form.date}
              onChange={(e) => setForm({ ...form, date: e.target.value })}
            />

            <select
              className="w-full border p-2 rounded"
              value={form.status}
              onChange={(e) => setForm({ ...form, status: e.target.value })}
            >
              <option>Pending</option>
              <option>In Transit</option>
              <option>Delivered</option>
            </select>

            <div className="flex justify-end gap-2 pt-2">
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 border rounded"
              >
                Cancel
              </button>

              <button
                onClick={handleSave}
                className="px-4 py-2 bg-blue-600 text-white rounded"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function Card({ title, value }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <p className="text-gray-500 text-sm">{title}</p>
      <h2 className="text-2xl font-bold">{value}</h2>
    </div>
  );
}
