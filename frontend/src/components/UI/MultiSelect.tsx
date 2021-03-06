import { useTheme } from '@material-ui/core/styles';
import Select, { Props } from 'react-select';

const MultiSelect = (props: Props) => {
  const theme = useTheme();

  const customStyles = {
    control: (provided: any) => ({
      ...provided,
      border: 'none',
      boxShadow: 'none',
      display: 'flex',
    }),
    dropdownIndicator: () => ({
      display: 'none',
    }),
    indicatorsContainer: (provided: any) => ({
      ...provided,
      cursor: 'pointer',
    }),
    indicatorSeparator: () => ({
      display: 'none',
    }),
    input: (provided: any) => ({
      ...provided,
      flex: 1,
      cursor: 'text',
    }),
    menu: (provided: any) => ({
      ...provided,
      borderRadius: 0,
      border: 'none',
      fontFamily: theme.typography.fontFamily,
      zIndex: 2,
      boxShadow: theme.shadows[8],
      maxHeight: 400,
    }),
    multiValue: (provided: any) => ({
      ...provided,
      borderRadius: 0,
      border: `1px solid ${theme.palette.primary.main}`,
      color: theme.palette.primary.main,
      backgroundColor: 'transparent',
    }),
    multiValueLabel: (provided: any) => ({
      ...provided,
      color: theme.palette.primary.main,
      fontFamily: theme.typography.fontFamily,
    }),
    multiValueRemove: (provided: any) => ({
      ...provided,
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: 'transparent',
        color: theme.palette.primary.dark,
      },
    }),
    option: (provided: any) => ({
      ...provided,
      backgroundColor: 'transparent',
      '&:hover': {
        backgroundColor: theme.palette.action.hover,
      },
    }),
    placeholder: (provided: any) => ({
      ...provided,
      fontFamily: theme.typography.fontFamily,
      cursor: 'text',
    }),
  };

  return <Select {...props} styles={customStyles} />;
};

export default MultiSelect;
