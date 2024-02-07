export interface FormControlProps {
  children: React.ReactElement;
  helperText?: string;
  inputId: string;
  label: string;
  error?: string;
  warning?: string;
}

const FormControl = ({
  children,
  helperText,
  inputId,
  label,
  error,
  warning,
}: FormControlProps) => {
  return (
    <div
      className={`form-control ${error ? "error" : warning ? "warning" : null}`}
    >
      <label htmlFor={inputId}>{label}</label>
      <div>{children}</div>
      <p className="helper-text">
        {error ? error : warning ? warning : helperText}
      </p>
    </div>
  );
};
export default FormControl;
