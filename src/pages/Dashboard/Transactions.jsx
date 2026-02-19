import React, { useEffect, useState } from "react";

const STORAGE_KEY = "transactions_data";

const statusColors = {
  Success: "bg-green-100 text-green-600",
  Pending: "bg-yellow-100 text-yellow-600",
  Failed: "bg-red-100 text-red-600",
};

export default function Transactions() {
  
  const [transactions, setTransactions] = useState(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  });

  const [isOpen, setIsOpen] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);
  const [search, setSearch] = useState("");

  const [form, setForm] = useState({
    id: "",
    customer: "",
    method: "Cash",
    amount: "",
    status: "Success",
    date: "",
  });

 
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(transactions));
  }, [transactions]);

  const openAddModal = () => {
    setForm({
      id: "",
      customer: "",
      method: "Cash",
      amount: "",
      status: "Success",
      date: "",
    });
    setEditingIndex(null);
    setIsOpen(true);
  };

  const openEditModal = (index) => {
    setForm(transactions[index]);
    setEditingIndex(index);
    setIsOpen(true);
  };

  const handleSave = () => {
    if (!form.id || !form.customer) return;

    if (editingIndex !== null) {
      const updated = [...transactions];
      updated[editingIndex] = form;
      setTransactions(updated);
    } else {
      setTransactions([...transactions, form]);
    }

    setIsOpen(false);
  };

  const handleDelete = (index) => {
    const updated = transactions.filter((_, i) => i !== index);
    setTransactions(updated);
  };


  const filtered = transactions.filter((t) =>
    t.id.toLowerCase().includes(search.toLowerCase())
  );


  const totalRevenue = transactions
    .filter((t) => t.status === "Success")
    .reduce((sum, t) => sum + Number(t.amount || 0), 0);

  const success = transactions.filter((t) => t.status === "Success").length;
  const pending = transactions.filter((t) => t.status === "Pending").length;
  const failed = transactions.filter((t) => t.status === "Failed").length;

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-6">
      <div className="max-w-7xl mx-auto space-y-6">

        <div className="flex flex-col md:flex-row md:justify-between gap-3">
          <h1 className="text-2xl md:text-3xl font-bold">
            Transactions Management
          </h1>

          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Search Transaction ID..."
              className="px-4 py-2 border rounded-lg"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <button
              onClick={openAddModal}
              className="bg-[#FF6B6B] text-white px-4 py-2 rounded-lg"
            >
              + Add Transaction
            </button>
          </div>
        </div>

        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card title="Total Revenue" value={`PKR ${totalRevenue}`} />
          <Card title="Success" value={success} />
          <Card title="Pending" value={pending} />
          <Card title="Failed" value={failed} />
        </div>

       
        <div className="bg-white rounded-xl shadow overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50 text-gray-600 text-sm">
              <tr>
                <th className="p-4">Transaction ID</th>
                <th className="p-4">Customer</th>
                <th className="p-4">Method</th>
                <th className="p-4">Amount</th>
                <th className="p-4">Date</th>
                <th className="p-4">Status</th>
                <th className="p-4">Actions</th>
              </tr>
            </thead>

            <tbody>
              {filtered.map((tx, index) => (
                <tr key={index} className="border-t hover:bg-gray-50">
                  <td className="p-4 font-medium">{tx.id}</td>
                  <td className="p-4">{tx.customer}</td>
                  <td className="p-4">{tx.method}</td>
                  <td className="p-4">${tx.amount}</td>
                  <td className="p-4">{tx.date}</td>

                  <td className="p-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColors[tx.status]}`}
                    >
                      {tx.status}
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
              No transactions found
            </p>
          )}
        </div>
      </div>
      
      {isOpen && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center p-4">
          <div className="bg-white rounded-xl p-6 w-full max-w-lg space-y-4">
            <h2 className="text-xl font-bold">
              {editingIndex !== null ? "Edit Transaction" : "Add Transaction"}
            </h2>

            <input
              placeholder="Transaction ID"
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
              placeholder="Payment Method"
              className="w-full border p-2 rounded"
              value={form.method}
              onChange={(e) => setForm({ ...form, method: e.target.value })}
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
              <option>Success</option>
              <option>Pending</option>
              <option>Failed</option>
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

function Card({ title, value }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <p className="text-gray-500 text-sm">{title}</p>
      <h2 className="text-2xl font-bold">{value}</h2>
    </div>
  );
}
