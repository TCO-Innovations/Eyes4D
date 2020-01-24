module.exports = {
    theme: {
        extend: {},
        minWidth: {
            '24': '6rem'
        },
        customForms: theme => ({
            sm: {
                'input, textarea, multiselect, select': {
                    fontSize: theme('fontSize.sm'),
                    padding: `${theme('spacing.1')} ${theme('spacing.2')}`,
                },
                select: {
                    paddingRight: `${theme('spacing.4')}`,
                },
                'checkbox, radio': {
                    width: theme('spacing.3'),
                    height: theme('spacing.3'),
                },
            }
        })
    },
    variants: {
        borderWidth: ['responsive', 'last', 'hover', 'focus'],
    },
    plugins: [
        require('@tailwindcss/custom-forms'),
    ]
};
