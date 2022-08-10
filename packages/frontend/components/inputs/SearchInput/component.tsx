import { SearchWrapper, StyledInput } from './styles';

interface IInput extends React.HTMLAttributes<HTMLInputElement> {
  name: string;
  autocomplete?: string;
  placeholder?: string;
  required: boolean;
  value?: string;
}

const SearchInput = ({
  id,
  name,
  autocomplete = 'off',
  placeholder,
  value,
}: IInput) => (
    <SearchWrapper>
      <StyledInput
        type={'text'}
        id={id}
        name={name}
        placeholder={placeholder || ''}
        autoComplete={autocomplete}
        value={value}
      />
    </SearchWrapper>
  );
export default SearchInput;
