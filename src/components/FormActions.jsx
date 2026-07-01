import { RotateCcw, Send } from "lucide-react";

function FormActions({ onReset }) {
  return (
    <div className="flex items-center justify-between border-t border-gray-200 px-6 py-4">
      <button
        type="button"
        onClick={onReset}
        className="flex h-10 items-center gap-2 rounded-md border border-gray-300 bg-white px-4 text-sm font-bold text-black hover:bg-gray-50"
      >
        <RotateCcw className="h-4 w-4" aria-hidden="true" />
        รีเซ็ต
      </button>

      <button
        type="submit"
        className="flex h-10 items-center gap-2 rounded-md bg-[#6C35E7] px-4 text-sm font-bold text-white hover:bg-[#5B2FD0]"
      >
        <Send className="h-4 w-4" aria-hidden="true" />
        ส่งแบบสำรวจ
      </button>
    </div>
  );
}

export default FormActions;
