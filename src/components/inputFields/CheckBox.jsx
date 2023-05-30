import { useField } from 'formik';

const Checkbox = ({ children, ...props }) => {
  const [field, meta] = useField({ ...props, type: 'checkbox' });
  return (
    <>
      <label className="">
        <input {...field} {...props} type="checkbox" />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className="text-xs text-red-500">{meta.error}</div>
      ) : null}
    </>
  );
};

export default Checkbox;
