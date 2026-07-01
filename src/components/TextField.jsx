function TextField({
  id,
  label,
  required = false,
  error = "",
  multiline = false,
  className = "",
  ...inputProps
}) {
  const describedBy = error ? `${id}-error` : undefined;
  const sharedProps = {
    id,
    "aria-required": required,
    "aria-invalid": Boolean(error),
    "aria-describedby": describedBy,
    className: `w-full rounded-md border px-3 text-sm outline-none placeholder:text-gray-500 ${
      error
        ? "border-red-500"
        : "border-gray-300 focus:border-indigo-500"
    } ${className}`,
    ...inputProps,
  };

  return (
    <div>
      <label
        htmlFor={id}
        className="mb-3 block text-[13px] font-bold"
      >
        {label}{" "}
        {required && (
          <span className="text-red-500" aria-hidden="true">
            *
          </span>
        )}
      </label>

      {multiline ? <textarea {...sharedProps} /> : <input {...sharedProps} />}

      {error && (
        <p id={describedBy} className="mt-2 text-[13px] text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}

export default TextField;
