function FormCheckbox({ text, handleChange, name, value }) {
  return (
    <div className="mb-4">
      <label className="flex items-center">
        <input
          type="checkbox"
          onChange={handleChange}
          name={name}
          checked={value}
          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
        />
        <span className="ml-2 text-sm text-gray-700">{text}</span>
      </label>
    </div>
  );
}

export default FormCheckbox;
