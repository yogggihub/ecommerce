import "./form-input.styles.scss";
const FormInput = ({ label, ...inputOption }) => {
  return (
    <div className="group">
      <input className="form-input" {...inputOption} />
      <label
        className={`${
          inputOption.value.length ? "strink" : ""
        } form-input-label`}
      >
        {label}
      </label>
    </div>
  );
};
export default FormInput;
