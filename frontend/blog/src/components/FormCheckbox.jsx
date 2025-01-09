function FormCheckbox({ text, handleChange, name, value }) {
  return (
    <>
      <label htmlFor="checkbox">{text}</label>
      <input
        id="checkbox"
        type="checkbox"
        value={value}
        name={name}
        onChange={handleChange}
      />
    </>
  );
}

export default FormCheckbox;
