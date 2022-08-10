import { ErrorMessage, InputWrapper, StyledInput, StyledLabel } from './styles';

interface IInput extends React.HTMLAttributes<HTMLInputElement> {
  name: string;
  type: 'text' | 'email';
  autocomplete?: string;
  placeholder?: string;
  label?: string;
  error?: string;
  required: boolean;
  value?: string;
}

const Input = ({
  error,
  id,
  name,
  autocomplete = 'off',
  placeholder,
  label,
  type,
  value,
  ...props
}: IInput) => (
  <InputWrapper>
    {label && <StyledLabel htmlFor={id}>{label}</StyledLabel>}
    <StyledInput
      status={error ? 'error' : 'succeeded'}
      type={type}
      id={id}
      name={name}
      placeholder={placeholder || ''}
      autoComplete={autocomplete}
      value={value}
      {...props}
    />
    {error && (
      <ErrorMessage>
        {/* TODO: remove placeholder */}
        <span>!!!!</span>
        {error}
      </ErrorMessage>
    )}
  </InputWrapper>
);
export default Input;
