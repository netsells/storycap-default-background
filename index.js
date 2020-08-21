/**
 * Check if we're running in an iframe.
 *
 * @returns {boolean}
 */
function inIframe() {
    try {
        return window.self !== window.top;
    } catch (e) {
        return true;
    }
}

/**
 * The decorator function.
 *
 * @param {Function} story
 * @param {object} context
 * @param {object} context.parameters
 *
 * @returns {{template: string, created: Function}}
 */
const withDefaultBackground = (story, { parameters }) => {
    const { backgrounds, default: defaultBg } = parameters;

    const backgroundOptions = Array.isArray(backgrounds.values)
        ? backgrounds.values
        : backgrounds;

    if (!backgroundOptions.length) {
        return story();
    }

    const defaultBackground = backgroundOptions.find((bg) => bg.default || (defaultBg && bg.name === defaultBg))
        || backgroundOptions[0];

    return {
        template: '<story />',

        created() {
            // If testing in the popout view we'll use the default background instead of white
            if (defaultBackground && !inIframe()) {
                document.body.style.backgroundColor = defaultBackground.value;
            }
        },
    };
};

module.exports = withDefaultBackground;
