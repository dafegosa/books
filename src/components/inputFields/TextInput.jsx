import { useField } from 'formik';

const TextInput = ({ label, labelStyles, inputStyles, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label className={labelStyles} htmlFor={props.id || props.name}>
        {label}
      </label>
      <input className={inputStyles} {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="text-xs text-red-500">{meta.error}</div>
      ) : null}
    </>
  );
};

export default TextInput;
