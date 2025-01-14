function FormContainer({ children, title }) {
  return (
    <div className="mx-auto max-w-md rounded-lg border border-gray-200 bg-white p-8 shadow-sm">
      <h2 className="mb-6 text-center text-2xl font-bold text-gray-900">
        {title}
      </h2>
      {children}
    </div>
  );
}

export default FormContainer;
