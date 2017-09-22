module.exports = {
    'parser': 'babel-eslint',
    'parserOptions': {
        'ecmaVersion': 6,
        'sourceType': 'module',
        'ecmaFeatures': {
            'experimentalObjectRestSpread': true,
            'jsx': true
        },
    },
    'settings': {
        'import/extensions': ['.js', '.jsx'],
        'import/resolver': {
            'node': {
                // Note: will not complain if only _one_ of these files exists.
                'extensions': ['.js', '.jsx']
            }
        }
    },
    'extends': ['eslint:recommended'],
    'plugins': [
        'eslint-plugin-react',
        'eslint-plugin-filenames',
        'eslint-plugin-import'
    ],
    'env': {
        'browser': true,
        'node': true
    },
    'rules': {
        /* Import Plugin (recommended conf)*/
        // analysis/correctness
        // Check if import can be resolved on file system
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unresolved.md
        'import/no-unresolved': 'error',
        // Check if the import is correctly done, according to the named export, or the default one
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/named.md
        'import/named': 'error',
        // Check if the import * is done correctly, ie that the named import used after do exists
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/namespace.md
        'import/namespace': 'error',
        // Check if an import using default as been exported the same way
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/default.md
        'import/default': 'error',
        // Check if the export are done properly (no multiple default, or named one)
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/export.md
        'import/export': 'error',
        // red flags (thus, warnings)
        // Warning if the default export is imported the name of a named export
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default.md
        'import/no-named-as-default': 'warn',
        // Warning if the import is made on default, then used a member instead of named import
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default-member.md
        'import/no-named-as-default-member': 'warn',
        // Warning if duplicates imports are made on the same module
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md
        'import/no-duplicates': 'warn',
        // Warning if file has no import or export. See rule for Detail
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/unambiguous.md
        'import/unambiguous': 'warn',
        /* Filename Plugin */
        // Warning if the filename does not match the kebab case (a-z\-)
        'filenames/match-regex': ['warn', '^[a-z\-]+$'],
        //'filenames/match-exported': ['error', 'kebab'],
        //'filenames/no-index': 'error', // Could be a good idea
        /* React Plugin */
        // Warning if the component does not have a display name
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/display-name.md
        'react/display-name': 'warn',
        // Warning if props is a boolean as true
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md
        'react/jsx-boolean-value': 'warn',
        // Warning for the positioning of the closing bracket (auto fix)
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md
        'react/jsx-closing-bracket-location': 'warn',
        // Warning for the spaces around props value (auto fix)
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md
        'react/jsx-curly-spacing': 'warn',
        // Warning for the indentation (4 spaces)
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent.md
        'react/jsx-indent': 'warn',
        // Warning for the indentation of props (4 spaces)
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent-props.md
        'react/jsx-indent-props': 'warn',
        // 'react/jsx-max-props-per-line': ['error', { 'maximum': 4 }],
        // Error on duplicate props
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-duplicate-props.md
        'react/jsx-no-duplicate-props': 'error',
        // Warning when using litterals (should be wrapped in JSX, like {'toto'})
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-literals.md
        'react/jsx-no-literals': 'warn',
        // Error when using component, without import or declaration 
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-undef.md
        'react/jsx-no-undef': 'error',
        // 'react/jsx-sort-prop-types': 'error',
        // 'react/jsx-sort-props': 'error',
        // Error when using JSX, when missing React variable
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-react.md
        'react/jsx-uses-react': 'error',
        // Marking variable used in JSX as used 
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-vars.md
        'react/jsx-uses-vars': 'error',
        // Error when using component not in Pascal Case
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md
        'react/jsx-pascal-case': 'error',
        // Error when not wrapping JSX in parenthesis
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-wrap-multilines.md
        'react/jsx-wrap-multilines': 'error',
        // Error when using dangerously set inner html
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger.md
        'react/no-danger': 'error',
        // Warning when doing setState in didMount
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-mount-set-state.md
        'react/no-did-mount-set-state': ['warn', 'disallow-in-func'],
        // Error when using setState in didUpdate
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-update-set-state.md
        'react/no-did-update-set-state': ['error', 'disallow-in-func'],
        // Error when trying to mutate the state directly
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-direct-mutation-state.md
        'react/no-direct-mutation-state': 'error',
        // Warn when a not required props does not have default value
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-default-props.md
        'react/require-default-props': 'warn',
        // Warning when a Component can be a pure function
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md
        'react/prefer-stateless-function': ['warn', { 'ignorePureComponents': true }],
        // Error when declaring mutiple component in one file
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md
        'react/no-multi-comp': ['error', { 'ignoreStateless': true }],
        // Error on unknown DOM property 
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unknown-property.md
        'react/no-unknown-property': 'error',
        // Warning on missing prop types
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md
        'react/prop-types': 'warn',
        // Error on missing return in render method, or method using JSX
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-render-return.md
        'react/require-render-return': 'error',
        // Error when there is jsx without React var
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md
        'react/react-in-jsx-scope': 'error',
        // Warning on should be autoclosing component
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md
        'react/self-closing-comp': 'error',
        // Warning on method order
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-comp.md
        //'react/sort-comp': 'warn', // TODO to update
        /* Comments */
        // Warning if no comments
        // http://eslint.org/docs/rules/require-jsdoc
        'require-jsdoc': ['warn', {
            'require': {
                'FunctionDeclaration': true,
                'MethodDefinition': true,
                'ClassDeclaration': true,
                'ArrowFunctionExpression': true
            }
        }],
        // Warning uncomplete comments
        // http://eslint.org/docs/rules/require-jsdoc
        'valid-jsdoc': [
            'warn',
            {
                'requireParamDescription': true,
                'requireReturn': false
            }
        ],
        /* General */
        // Error if not using simple quotes
        // http://eslint.org/docs/rules/quotes
        'quotes': ['error', 'single', 'avoid-escape'],
        // Error if not using === 
        // http://eslint.org/docs/rules/eqeqeq
        'eqeqeq': 'error',
        'strict': 'error',
        // Error if using not camelcase variables
        // http://eslint.org/docs/rules/camelcase
        'camelcase': 'error',
        // Allowing _ in identifier
        // http://eslint.org/docs/rules/no-underscore-dangle
        'no-underscore-dangle': 'off',
        // Constructor should begin with capital letter
        // http://eslint.org/docs/rules/new-cap
        'new-cap': 'error',
        // Error if not using single quotes in JSX
        // http://eslint.org/docs/rules/jsx-quotes
        'jsx-quotes': ['error', 'prefer-single'],
        // Error if trailing comma
        // http://eslint.org/docs/rules/comma-dangle
        'comma-dangle': 'error',
        // Error if using var (prefer let or cons)
        // http://eslint.org/docs/rules/no-var
        'no-var': 'error',
        // Indentation (4 spaces)
        // http://eslint.org/docs/rules/indent
        'indent': ['error', 4, { 'SwitchCase': 1 }],
        // Brace style (same line)
        // http://eslint.org/docs/rules/brace-style
        'brace-style': ['error', '1tbs', { 'allowSingleLine': true }],
        // Comma after element in array, etc
        // http://eslint.org/docs/rules/comma-style
        'comma-style': ['error', 'last'],
        // Function should always be named
        // http://eslint.org/docs/rules/func-names
        'func-names': 'error',
        // Spacing around colon
        // http://eslint.org/docs/rules/key-spacing
        'key-spacing': ['error', { 'beforeColon': false, 'afterColon': true }],
        // Maximum nested callbacks
        // http://eslint.org/docs/rules/max-nested-callbacks
        'max-nested-callbacks': ['error', 3],
        // Avoid multiple empty lines (max 2)
        // http://eslint.org/docs/rules/no-multiple-empty-lines
        'no-multiple-empty-lines': 'error',
        // Quote props only if needed
        // http://eslint.org/docs/rules/quote-props
        'quote-props': ['error', 'as-needed'],
        // Do not use variable before they are defined
        // http://eslint.org/docs/rules/no-use-before-define
        'no-use-before-define': 'error',
        // Switch must have default case, even if empty
        // http://eslint.org/docs/rules/default-case
        'default-case': 'error',
        // Prefer foo.bar instead of foo["bar"]
        // http://eslint.org/docs/rules/dot-notation
        'dot-notation': 'error',
        // Alert should not be used
        // http://eslint.org/docs/rules/no-alert
        'no-alert': 'error',
        // Allowing console logging
        // http://eslint.org/docs/rules/no-console
        'no-console': 'off',
        // Eval should not be used in most case
        // http://eslint.org/docs/rules/no-eval
        'no-eval': 'error',
        // No useless block
        // http://eslint.org/docs/rules/no-lone-blocks
        'no-lone-blocks': 'error',
        // No multi spaces
        // http://eslint.org/docs/rules/no-multi-spaces
        'no-multi-spaces': 'error',
        // No reassign to window or process
        // http://eslint.org/docs/rules/no-global-assign
        'no-global-assign': 'error',
        // No multi line string (use backquote instead of \ in end of line)
        // http://eslint.org/docs/rules/no-multi-str
        'no-multi-str': 'error',
        // No primitive wrapper 
        // http://eslint.org/docs/rules/no-new-wrappers
        'no-new-wrappers': 'error',
        // No variable redeclare
        // http://eslint.org/docs/rules/no-redeclare
        'no-redeclare': 'error',
        // No return with an assign 
        // http://eslint.org/docs/rules/no-return-assign
        'no-return-assign': 'error',
        // No comparing a variable with itself
        // http://eslint.org/docs/rules/no-self-compare
        'no-self-compare': 'error',
        // Throw error or exception, not litterals
        // http://eslint.org/docs/rules/no-throw-literal
        'no-throw-literal': 'error',
        // No unused expressions
        // http://eslint.org/docs/rules/no-unused-expressions
        'no-unused-expressions': 'error',
        // No TODO or fixme
        // http://eslint.org/docs/rules/no-warning-commentss
        'no-warning-comments': ['warn', { 'terms': ['todo', 'fixme'], 'location': 'anywhere' }],
        // Use radix in parseInt 
        // http://eslint.org/docs/rules/radix
        'radix': 'error',
        // Wrap immediate function call in parenthesis
        // http://eslint.org/docs/rules/wrap-iife
        'wrap-iife': 'error',
        // No constant condition
        // http://eslint.org/docs/rules/no-constant-condition
        'no-constant-condition': 'error',
        // No duplicate arguments
        // http://eslint.org/docs/rules/no-dupe-args
        'no-dupe-args': 'error',
        // No duplicate keys in object
        // http://eslint.org/docs/rules/no-dupe-key
        'no-dupe-keys': 'error',
        // No duplicate case in switch
        // http://eslint.org/docs/rules/no-duplicate-case
        'no-duplicate-case': 'error',
        // No empty statement
        // http://eslint.org/docs/rules/no-empty
        'no-empty': 'error',
        // Error on extra semi colon
        // http://eslint.org/docs/rules/no-extra-semi
        'no-extra-semi': 'error',
        // No reassign on function 
        // http://eslint.org/docs/rules/no-func-assign
        'no-func-assign': 'error',
        // No sparse arrays 
        // http://eslint.org/docs/rules/no-sparse-arrays
        'no-sparse-arrays': 'error',
        // No unreachable code
        // http://eslint.org/docs/rules/no-unreachable
        'no-unreachable': 'error',
        // Use isNan, do not compare NaN
        // http://eslint.org/docs/rules/use-isnan
        'use-isnan': 'error',
        // Ensure typeof literal is correct
        // http://eslint.org/docs/rules/valid-typeof
        'valid-typeof': 'error',
        // Ensure spacing around block
        // http://eslint.org/docs/rules/space-before-blocks
        'space-before-blocks': 'error',
        // Ensure spacing around fat arrow
        // http://eslint.org/docs/rules/arrow-spacing
        'arrow-spacing': 'error',
        // Ensure spacing around keywords
        'keyword-spacing': 'error'
    }
};