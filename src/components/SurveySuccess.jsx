import { CheckCircle, RotateCcw } from "lucide-react";

function SurveySuccess({ formData, onReset }) {
  return (
    <div className="p-6">
      <div className="rounded-md border border-green-300 bg-green-50 px-4 py-5">
        <h2 className="mb-5 flex items-center gap-2 text-lg font-bold !text-green-900">
          <CheckCircle
            className="h-5 w-5 !text-green-600"
            aria-hidden="true"
          />
          ส่งแบบสำรวจสำเร็จ!
        </h2>

        <dl className="grid grid-cols-[110px_1fr] gap-y-4 text-sm">
          <dt className="font-bold !text-gray-600">ชื่อ:</dt>
          <dd className="!text-black">{formData.name}</dd>

          <dt className="font-bold !text-gray-600">อีเมล:</dt>
          <dd className="!text-black">{formData.email}</dd>

          <dt className="font-bold !text-gray-600">หนังที่เลือก:</dt>
          <dd className="font-medium !text-purple-600">
            {formData.selectedMovie}
          </dd>
        </dl>

        {formData.comment.trim() && (
          <>
            <div className="my-4 border-t border-green-200" />

            <p className="mb-3 text-sm font-bold !text-gray-600">
              ความคิดเห็น:
            </p>

            <div className="rounded-md bg-white px-4 py-3 text-sm !text-black">
              {formData.comment}
            </div>
          </>
        )}
      </div>

      <button
        type="button"
        onClick={onReset}
        className="mt-6 flex h-10 w-full items-center justify-center gap-2 rounded-md bg-[#181818] px-4 text-sm font-bold text-white hover:bg-black"
      >
        <RotateCcw className="h-4 w-4" aria-hidden="true" />
        ทำแบบสำรวจใหม่
      </button>
    </div>
  );
}

export default SurveySuccess;
