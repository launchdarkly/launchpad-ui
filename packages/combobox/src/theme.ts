const getComboboxTheme = (isDarkModeEnabled: boolean) => {
  let colors = {
    hover: '#d0ebff',
    selected: '#a5d8ff',
    border: '#8a929c',
    borderFocus: '#007eff',
    text: '#212529',
    textSecondary: 'var(--gray-safe)',
    optionText: '#333',
  };

  if (isDarkModeEnabled) {
    colors = {
      ...colors,
      hover: 'var(--lp-color-bg-interactive-secondary-hover)',
      selected: 'var(--background-color-custom-select-option-selected)',
      border: 'var(--lp-color-border-field)',
      borderFocus: 'var(--focus-color)',
      text: 'var(--lp-color-text-ui-primary)',
      textSecondary: 'var(--lp-color-text-ui-tertiary)',
      optionText: 'var(--lp-color-text-ui-primary)',
    };
  }

  const control = (isFocused: boolean) => ({
    backgroundColor: 'var(--lp-color-bg-field)',
    minHeight: '3.2rem',
    display: 'flex',
    overflow: 'visible',
    width: '100%',
    boxShadow: isFocused ? 'inset 0 1px 1px rgba(0,0,0,.075), 0 0 0 3px rgba(0,126,255,.1)' : 0,
    borderColor: isFocused ? colors.borderFocus : colors.border,
    '&:hover': {
      borderColor: isFocused ? colors.borderFocus : colors.border,
    },
    outline: 0,
  });

  const option = (isSelected: boolean, isFocused: boolean, isDisabled: boolean) => ({
    backgroundColor: 'var(--lp-color-bg-overlay-primary)',
    ...(isFocused && { backgroundColor: colors.hover }),
    ...(isSelected && { backgroundColor: colors.selected }),
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    color: colors.optionText,
    ...(isDisabled && { backgroundColor: 'none', color: colors.text }),
    '&:hover': {
      cursor: !isDisabled ? 'pointer' : 'not-allowed',
      backgroundColor: isDisabled ? undefined : isSelected ? colors.selected : colors.hover,
    },
  });

  return {
    option,
    control,
    multiValueRemove: {
      '&:hover': {
        backgroundColor: 'var(--lp-color-gray-400)',
        borderRadius: '4px',
        cursor: 'pointer',
      },
    },
    multiValueLabel: {
      color: 'var(--lp-color-text-ui-primary)',
    },
    input: {
      color: 'var(--lp-color-text-ui-primary)',
    },
    multiValue: {
      backgroundColor: 'var(--lp-color-bg-interactive-secondary-hover)',
      borderRadius: '4px',
      maxWidth: '52rem',
    },
    menuPortal: {
      zIndex: 99, // One less than all modals and manager controls, and sticky menu
    },
    menu: {
      zIndex: 99, // One less than all modals and manager controls, and sticky menu
      borderColor: colors.border,
      backgroundColor: 'var(--lp-color-bg-overlay-primary)',
    },
    singleValue: {
      fontSize: '1.3rem',
      color: 'var(--lp-color-text-ui-primary)',
    },
    placeholder: {
      fontSize: '1.3rem',
      color: colors.textSecondary,
    },
    indicator: {
      color: colors.textSecondary,
      '&:hover': {
        color: colors.text,
        cursor: 'pointer',
      },
      padding: '0.5rem',
    },
  };
};

export { getComboboxTheme };
