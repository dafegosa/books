import { useField } from 'formik';

const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input
        className="border-solid border-2 border-indigo-600 rounded-md border-zinc-200"
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="text-xs text-red-500">{meta.error}</div>
      ) : null}
    </>
  );
};

export default TextInput;
