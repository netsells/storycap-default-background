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

const defaultBackgroundDecorator = (story, { parameters }) => {
    const hasBackground = parameters.backgrounds && parameters.backgrounds.length;

    return {
        template: '<story />',

        created() {
            // If testing in the popout view we'll use the default background instead of white
            if (hasBackground && !inIframe()) {
                document.body.style.backgroundColor = (
                    parameters.backgrounds.find((bg) => bg.default)
                    || parameters.backgrounds[0]
                ).value;
            }
        },
    };
};

export default defaultBackgroundDecorator;
