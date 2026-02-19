import React, { useEffect, useState } from "react";

const CUSTOMER_KEY = "customers_data";
const ORDERS_KEY = "orders_data";

export default function Customers() {

  const [customers, setCustomers] = useState(() => {
    const stored = localStorage.getItem(CUSTOMER_KEY);
    return stored ? JSON.parse(stored) : [];
  });

  
  const [orders, setOrders] = useState(() => {
    const stored = localStorage.getItem(ORDERS_KEY);
    return stored ? JSON.parse(stored) : [];
  });

  const [isOpen, setIsOpen] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    orderId: "",
  });


  useEffect(() => {
    localStorage.setItem(CUSTOMER_KEY, JSON.stringify(customers));
  }, [customers]);



  const openAddModal = () => {
    setForm({
      name: "",
      email: "",
      phone: "",
      orderId: "",
    });
    setEditingIndex(null);
    setIsOpen(true);
  };

  const openEditModal = (index) => {
    setForm(customers[index]);
    setEditingIndex(index);
    setIsOpen(true);
  };

  const handleSave = () => {
    if (!form.name) return;

    if (editingIndex !== null) {
      const updated = [...customers];
      updated[editingIndex] = form;
      setCustomers(updated);
    } else {
      setCustomers([...customers, form]);
    }

    setIsOpen(false);
  };

  const handleDelete = (index) => {
    const updated = customers.filter((_, i) => i !== index);
    setCustomers(updated);
  };



  const getOrderDetails = (orderId) => {
    return orders.find((o) => o.id === orderId);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-6">
      <div className="max-w-7xl mx-auto space-y-6">

        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl font-bold">
            Customers Management
          </h1>

          <button
            onClick={openAddModal}
            className="bg-[#FF6B6B] text-white px-4 py-2 rounded-lg"
          >
            + Add Customer
          </button>
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl shadow overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50 text-gray-600 text-sm">
              <tr>
                <th className="p-4">Name</th>
                <th className="p-4">Email</th>
                <th className="p-4">Phone</th>
                <th className="p-4">Order</th>
                <th className="p-4">Actions</th>
              </tr>
            </thead>

            <tbody>
              {customers.map((customer, index) => {
                const order = getOrderDetails(customer.orderId);

                return (
                  <tr key={index} className="border-t hover:bg-gray-50">
                    <td className="p-4 font-medium">{customer.name}</td>
                    <td className="p-4">{customer.email}</td>
                    <td className="p-4">{customer.phone}</td>

                    <td className="p-4">
                      {order ? (
                        <div>
                          <p className="font-semibold">{order.id}</p>
                          <p className="text-sm text-gray-500">
                            {order.product}
                          </p>
                        </div>
                      ) : (
                        "No Order"
                      )}
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
                );
              })}
            </tbody>
          </table>

          {customers.length === 0 && (
            <p className="p-6 text-center text-gray-500">
              No customers found
            </p>
          )}
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center p-4">
          <div className="bg-white rounded-xl p-6 w-full max-w-lg space-y-4">
            <h2 className="text-xl font-bold">
              {editingIndex !== null ? "Edit Customer" : "Add Customer"}
            </h2>

            <input
              placeholder="Name"
              className="w-full border p-2 rounded"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />

            <input
              placeholder="Email"
              className="w-full border p-2 rounded"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />

            <input
              placeholder="Phone"
              className="w-full border p-2 rounded"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />

            {/* Orders Dropdown */}
            <select
              className="w-full border p-2 rounded"
              value={form.orderId}
              onChange={(e) =>
                setForm({ ...form, orderId: e.target.value })
              }
            >
              <option value="">Select Order</option>

              {orders.map((order, i) => (
                <option key={i} value={order.id}>
                  {order.id} — {order.product}
                </option>
              ))}
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
                className="px-4 py-2 bg-[#FF6B6B] text-white rounded"
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
