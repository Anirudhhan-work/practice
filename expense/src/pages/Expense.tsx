import { Plus } from "lucide-react";
import { useState } from "react";
import Modal from "../components/Modal";

const Expense = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="flex justify-between">
      <h1 className="text-4xl font-bold">Expenses</h1>
      <button
        className="flex items-center gap-2 text-lg bg-white rounded-lg text-black px-3 cursor-pointer hover:bg-white/90"
        onClick={() => setModalOpen(true)}
      >
        <Plus /> Expense
      </button>
      {modalOpen && <Modal closemodal={closeModal} />}
    </div>
  );
};

export default Expense;
