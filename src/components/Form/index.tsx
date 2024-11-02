import {
  ButtonHTMLAttributes,
  FormHTMLAttributes,
  InputHTMLAttributes,
  ReactNode,
  TextareaHTMLAttributes,
} from 'react';

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  children?: ReactNode;
}

const Form = ({ children, className = '', ...props }: FormProps) => {
  return (
    <form
      className={`flex w-full max-w-[500px] flex-col gap-3 ${className}`}
      {...props}
    >
      {children}
    </form>
  );
};
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helpText?: string;
  view?: boolean;
}

const Input = ({ label, error, helpText, view, ...props }: InputProps) => {
  return (
    <div>
      <label className="flex flex-col gap-2">
        <span className="ml-2 text-sm text-gray-700">{label}</span>
        <input
          disabled={view || props.disabled}
          className={`w-full rounded-md border px-2 py-3 ${view && 'bg-white'} ${error ? 'border-red-400' : 'border-gray-300'} outline-none transition-colors focus-visible:border-gray-400`}
          {...props}
        />
      </label>
      <div className="p-2 text-sm">
        {error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <p className="text-gray-400">{helpText}</p>
        )}
      </div>
    </div>
  );
};
interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  view?: boolean;
}

const TextArea = ({ label, view, ...props }: TextAreaProps) => {
  return (
    <div>
      <label className="flex flex-col gap-2">
        <span className="ml-2 text-sm text-gray-700">{label}</span>
        <textarea
          disabled={view || props.disabled}
          className={`h-[300px] w-full rounded-md border border-gray-300 px-2 py-3 outline-none ${view && 'bg-white'} transition-colors focus-visible:border-gray-400`}
          {...props}
        />
      </label>
    </div>
  );
};

interface SubmitButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
}

const SubmitButton = ({ children, className, ...props }: SubmitButtonProps) => {
  return (
    <button
      type="submit"
      {...props}
      className={`w-full rounded-md px-2 py-3 text-white transition-colors ${props.disabled ? 'bg-sky-200' : 'bg-sky-500 hover:bg-sky-700'} ${className}`}
    >
      {children}
    </button>
  );
};

const ResetButton = ({
  children,
  className,
  ...props
}: SubmitButtonProps & ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      type="reset"
      {...props}
      className={`w-full rounded-md border border-gray-400 px-2 py-3 transition-colors hover:border-gray-700 ${className}`}
    >
      {children}
    </button>
  );
};

Form.Input = Input;
Form.TextArea = TextArea;
Form.SubmitButton = SubmitButton;
Form.ResetButton = ResetButton;

export default Form;
