import React, { useEffect, useState } from "react";

const STORAGE_KEY = "orders_data";

const statusColors = {
  Pending: "bg-yellow-100 text-yellow-600",
  Processing: "bg-blue-100 text-blue-600",
  Completed: "bg-green-100 text-green-600",
  Cancelled: "bg-red-100 text-red-600",
};

export default function OrdersDashboard() {
  
  const [orders, setOrders] = useState(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  });

  const [isOpen, setIsOpen] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);
  const [search, setSearch] = useState("");

  const [form, setForm] = useState({
    id: "",
    customer: "",
    product: "",
    amount: "",
    status: "Pending",
    date: "",
  });

  
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(orders));
  }, [orders]);

  

  const openAddModal = () => {
    setForm({
      id: "",
      customer: "",
      product: "",
      amount: "",
      status: "Pending",
      date: "",
    });
    setEditingIndex(null);
    setIsOpen(true);
  };

  const openEditModal = (index) => {
    setForm(orders[index]);
    setEditingIndex(index);
    setIsOpen(true);
  };

  const handleSave = () => {
    if (!form.id || !form.customer) return;

    if (editingIndex !== null) {
      const updated = [...orders];
      updated[editingIndex] = form;
      setOrders(updated);
    } else {
      setOrders([...orders, form]);
    }

    setIsOpen(false);
  };

  const handleDelete = (index) => {
    const updated = orders.filter((_, i) => i !== index);
    setOrders(updated);
  };

  const filteredOrders = orders.filter((o) =>
    o.id.toLowerCase().includes(search.toLowerCase())
  );

  const total = orders.length;
  const completed = orders.filter((o) => o.status === "Completed").length;
  const pending = orders.filter((o) => o.status === "Pending").length;
  const processing = orders.filter((o) => o.status === "Processing").length;

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-6">
      <div className="max-w-7xl mx-auto space-y-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between gap-3">
          <h1 className="text-2xl md:text-3xl font-bold">Orders Management</h1>

          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Search Order ID..."
              className="px-4 py-2 border rounded-lg"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <button
              onClick={openAddModal}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg"
            >
              + Add Order
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card title="Total Orders" value={total} />
          <Card title="Completed" value={completed} />
          <Card title="Processing" value={processing} />
          <Card title="Pending" value={pending} />
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl shadow overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50 text-gray-600 text-sm">
              <tr>
                <th className="p-4">Order ID</th>
                <th className="p-4">Customer</th>
                <th className="p-4">Product</th>
                <th className="p-4">Amount</th>
                <th className="p-4">Date</th>
                <th className="p-4">Status</th>
                <th className="p-4">Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredOrders.map((order, index) => (
                <tr key={index} className="border-t hover:bg-gray-50">
                  <td className="p-4 font-medium">{order.id}</td>
                  <td className="p-4">{order.customer}</td>
                  <td className="p-4">{order.product}</td>
                  <td className="p-4">${order.amount}</td>
                  <td className="p-4">{order.date}</td>

                  <td className="p-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColors[order.status]}`}
                    >
                      {order.status}
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

          {filteredOrders.length === 0 && (
            <p className="p-6 text-center text-gray-500">No orders found</p>
          )}
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center p-4">
          <div className="bg-white rounded-xl p-6 w-full max-w-lg space-y-4">
            <h2 className="text-xl font-bold">
              {editingIndex !== null ? "Edit Order" : "Add Order"}
            </h2>

            <input
              placeholder="Order ID"
              className="w-full border p-2 rounded"
              value={form.id}
              onChange={(e) => setForm({ ...form, id: e.target.value })}
            />

            <input
              placeholder="Customer Name"
              className="w-full border p-2 rounded"
              value={form.customer}
              onChange={(e) => setForm({ ...form, customer: e.target.value })}
            />

            <input
              placeholder="Product"
              className="w-full border p-2 rounded"
              value={form.product}
              onChange={(e) => setForm({ ...form, product: e.target.value })}
            />

            <input
              type="number"
              placeholder="Amount"
              className="w-full border p-2 rounded"
              value={form.amount}
              onChange={(e) => setForm({ ...form, amount: e.target.value })}
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
              <option>Processing</option>
              <option>Completed</option>
              <option>Cancelled</option>
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
