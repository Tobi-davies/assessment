import Select from "react-select";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import {
  Pane,
  Label,
  Paragraph,
  ErrorIcon,
  minorScale,
  majorScale,
} from "evergreen-ui";

// const customStyles = {
//   control: (provided, state) => {
//     return {
//       ...provided,
//       minHeight: 'unset',
//       width: state.selectProps.width || '100%',
//       height: state.selectProps.height || 40,
//       color: state.selectProps.color || '#474d66',
//       fontSize: state.selectProps.fontSize || '0.875em',
//       borderRadius: state.selectProps.borderRadius || 5,
//       backgroundColor: state.selectProps.backgroundColor || '#fff',
//       borderColor: state.selectProps.isInvalid
//         ? '#D14343 !important'
//         : state.menuIsOpen || state.isFocused
//         ? '#ADC2FF !important'
//         : '#d8dae5 !important',
//       boxShadow:
//         state.menuIsOpen || state.isFocused
//           ? '0 0 0 2px #d6e0ff !important'
//           : 'none !important',
//       transition: 'all 80ms ease-in-out',
//     };
//   },

//   valueContainer: (provided, state) => {
//     return {
//       ...provided,
//       height: '100%',
//     };
//   },

//   placeholder: (provided, state) => {
//     return {
//       ...provided,
//       // color: 'var(--black-lighter-color)',
//     };
//   },

//   singleValue: (provided, state) => {
//     return {
//       ...provided,
//       color: 'inherit',
//     };
//   },

//   indicatorsContainer: (provided, state) => {
//     return {
//       ...provided,
//       height: '100%',
//     };
//   },

//   indicatorSeparator: (provided, state) => {
//     return {
//       ...provided,
//       display: 'none',
//     };
//   },

//   dropdownIndicator: (provided, state) => {
//     return {
//       ...provided,
//       // color: 'var(--black-lighter-color)',
//     };
//   },

//   menu: (provided, state) => {
//     return {
//       ...provided,
//       backgroundColor: '#FEFEFE',
//       // color: 'var(--black-light-color)',
//       fontSize: '0.875rem',
//     };
//   },

//   menuList: (provided, state) => {
//     return {
//       ...provided,
//       maxHeight: 180,
//     };
//   },

//   option: (provided, state) => {
//     return {
//       ...provided,
//       paddingTop: 5,
//       paddingBottom: 5,
//     };
//   },
// };

function getValueWithLabel(value, options) {
  if (value && value.hasOwnProperty("label")) {
    return value;
  }
  return options.find((x) => x.value === value);
}

const StyledSelect = styled(Select)`
  .form-select-box__dropdown-indicator svg {
    width: 16px;
  }
`;

function FormSelectBox({
  label,
  name,
  value,
  options = [],
  placeholder,
  isLoading,
  isInvalid,
  validationMessage,
  onChange,
  ...rest
}) {
  return (
    <Pane>
      {label && (
        <Pane marginBottom={majorScale(1)} display="flex">
          <Label>{label}</Label>
        </Pane>
      )}

      <StyledSelect
        // styles={customStyles}
        name={name}
        value={value && getValueWithLabel(value, options)}
        options={options}
        isLoading={isLoading}
        classNamePrefix="form-select-box"
        placeholder={placeholder}
        isInvalid={isInvalid}
        onChange={onChange}
        {...rest}
      />

      {isInvalid && validationMessage && (
        <Pane
          marginTop={majorScale(1)}
          display="flex"
          columnGap={minorScale(2)}
          color="#D14343"
        >
          <ErrorIcon size={14} />
          <Paragraph
            letterSpacing={0}
            color="#D14343"
            lineHeight="18px"
            fontSize="12px"
            fontWeight={400}
            marginBottom={0}
          >
            {validationMessage}
          </Paragraph>
        </Pane>
      )}
    </Pane>
  );
}

// FormSelectBox.propTypes = {
//   label: PropTypes.string,
//   name: PropTypes.string.isRequired,
//   value: PropTypes.any,
//   options: PropTypes.arrayOf(
//     PropTypes.shape({
//       label: PropTypes.any.isRequired,
//       value: PropTypes.any.isRequired,
//     })
//   ),
//   placeholder: PropTypes.string,
//   isLoading: PropTypes.bool,
//   isInvalid: PropTypes.bool,
//   validationMessage: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
//   onChange: PropTypes.func,
// };

export default FormSelectBox;
