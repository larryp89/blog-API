function FormInput({ text, type, handleChange, name, value }) {
  return (
    <div className="mb-4">
      <label className="mb-2 block text-sm font-medium text-gray-700">
        {text}
      </label>

      {type === "textarea" ? (
        <textarea
          placeholder={text}
          onChange={handleChange}
          name={name}
          value={value}
          className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
        />
      ) : (
        <input
          type={type}
          placeholder={text}
          onChange={handleChange}
          name={name}
          value={value}
          className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
        />
      )}
    </div>
  );
}

export default FormInput;
