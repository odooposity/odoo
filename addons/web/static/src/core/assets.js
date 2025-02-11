import { Component, onWillStart, whenReady, xml } from "@odoo/owl";
import { session } from "@web/session";
import { registry } from "./registry";

/**
 * @typedef {{
 *  cssLibs: string[];
 *  jsLibs: string[];
 * }} BundleFileNames
 */

const computeCacheMap = () => {
    for (const script of document.head.querySelectorAll("script[src]")) {
        cacheMap.set(script.src, Promise.resolve());
    }
    for (const link of document.head.querySelectorAll("link[rel=stylesheet][href]")) {
        cacheMap.set(link.href, Promise.resolve());
    }
};

/**
 * @param {HTMLLinkElement | HTMLScriptElement} el
 * @param {(event: Event) => any} onLoad
 * @param {(error: Error) => any} onError
 */
<<<<<<< HEAD
assets.getBundle = memoize(async function getBundle(bundleName) {
    const url = new URL(`/web/bundle/${bundleName}`, location.origin);
    for (const [key, value] of Object.entries(session.bundle_params || {})) {
        url.searchParams.set(key, value);
    }
    const response = await browser.fetch(url.href);
    const json = await response.json();
    const assets = {
        cssLibs: [],
        cssContents: [], //todo cleanup
        jsLibs: [],
        jsContents: [],
=======
const onLoadAndError = (el, onLoad, onError) => {
    const onLoadListener = (event) => {
        removeListeners();
        onLoad(event);
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
    };

    const onErrorListener = (error) => {
        removeListeners();
        onError(error);
    };

    const removeListeners = () => {
        el.removeEventListener("load", onLoadListener);
        el.removeEventListener("error", onErrorListener);
    };

    el.addEventListener("load", onLoadListener);
    el.addEventListener("error", onErrorListener);
};

<<<<<<< HEAD
/**
 * Container dom containing all the owl templates that have been loaded.
 * This can be imported by the modules in order to use it when loading the
 * application and the components.
 */
export const templates = new DOMParser().parseFromString("<odoo/>", "text/xml");
/**
 * Each template is registered in xml_templates registry.
 * When a new template is added in the registry, it's also added to each owl App.
 */
registry.category("xml_templates").addEventListener("UPDATE", (ev) => {
    const { operation, value } = ev.detail;
    if (operation === "add") {
        const doc = new DOMParser().parseFromString(value, "text/xml");
        if (doc.querySelector("parsererror")) {
            // The generated error XML is non-standard so we log the full content to
            // ensure that the relevant info is actually logged.
            let strError = "";
            const nodes = doc.querySelectorAll("parsererror");
            for (const node of nodes) {
                strError += node.textContent.trim() + "\n";
            }
            throw new Error(strError);
        }
=======
/** @type {Map<string, Promise<BundleFileNames | void>>} */
const cacheMap = new Map();
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8

whenReady(computeCacheMap);

/** @type {typeof assets["getBundle"]} */
export function getBundle() {
    return assets.getBundle(...arguments);
}

/** @type {typeof assets["loadBundle"]} */
export function loadBundle() {
    return assets.loadBundle(...arguments);
}

/** @type {typeof assets["loadJS"]} */
export function loadJS() {
    return assets.loadJS(...arguments);
}

/** @type {typeof assets["loadCSS"]} */
export function loadCSS() {
    return assets.loadCSS(...arguments);
}

export class AssetsLoadingError extends Error {}

/**
 * Utility component that loads an asset bundle before instanciating a component
 */
export class LazyComponent extends Component {
    static template = xml`<t t-component="Component" t-props="props.props"/>`;
    static props = {
        Component: String,
        bundle: String,
        props: { type: Object, optional: true },
    };
    setup() {
        onWillStart(async () => {
            await loadBundle(this.props.bundle);
            this.Component = registry.category("lazy_components").get(this.props.Component);
        });
    }
}

/**
 * This export is done only in order to modify the behavior of the exported
 * functions. This is done in order to be able to make a test environment.
 * Modules should only use the methods exported below.
 */
export const assets = {
    retries: {
        count: 3,
        delay: 5000,
        extraDelay: 2500,
    },

    /**
     * Get the files information as descriptor object from a public asset template.
     *
     * @param {string} bundleName Name of the bundle containing the list of files
     * @returns {Promise<BundleFileNames>}
     */
    getBundle(bundleName) {
        if (cacheMap.has(bundleName)) {
            return cacheMap.get(bundleName);
        }
        const url = new URL(`/web/bundle/${bundleName}`, location.origin);
        for (const [key, value] of Object.entries(session.bundle_params || {})) {
            url.searchParams.set(key, value);
        }
        const promise = fetch(url)
            .then(async (response) => {
                const cssLibs = [];
                const jsLibs = [];
                if (!response.bodyUsed) {
                    const result = await response.json();
                    for (const { src, type } of Object.values(result)) {
                        if (type === "link" && src) {
                            cssLibs.push(src);
                        } else if (type === "script" && src) {
                            jsLibs.push(src);
                        }
                    }
                }
                return { cssLibs, jsLibs };
            })
            .catch((reason) => {
                cacheMap.delete(bundleName);
                throw reason;
            });
        cacheMap.set(bundleName, promise);
        return promise;
    },

    /**
     * Loads the given js/css libraries and asset bundles. Note that no library or
     * asset will be loaded if it was already done before.
     *
     * @param {string} bundleName
     * @returns {Promise<void[]>}
     */
    loadBundle(bundleName) {
        if (typeof bundleName !== "string") {
            throw new Error(
                `loadBundle(bundleName:string) accepts only bundleName argument as a string ! Not ${JSON.stringify(
                    bundleName
                )} as ${typeof bundleName}`
            );
        }
        return getBundle(bundleName).then(({ cssLibs, jsLibs }) =>
            Promise.all([...cssLibs.map(loadCSS), ...jsLibs.map(loadJS)])
        );
    },

    /**
     * Loads the given url as a stylesheet.
     *
     * @param {string} url the url of the stylesheet
     * @param {number} [retryCount]
     * @returns {Promise<void>} resolved when the stylesheet has been loaded
     */
    loadCSS(url, retryCount = 0) {
        if (cacheMap.has(url)) {
            return cacheMap.get(url);
        }
        const linkEl = document.createElement("link");
        linkEl.type = "text/css";
        linkEl.rel = "stylesheet";
        linkEl.href = url;
        const promise = new Promise((resolve, reject) =>
            onLoadAndError(linkEl, resolve, async () => {
                cacheMap.delete(url);
                if (retryCount < assets.retries.count) {
                    const delay = assets.retries.delay + assets.retries.extraDelay * retryCount;
                    await new Promise((res) => setTimeout(res, delay));
                    linkEl.remove();
                    loadCSS(url, retryCount + 1)
                        .then(resolve)
                        .catch((reason) => {
                            cacheMap.delete(url);
                            reject(reason);
                        });
                } else {
                    reject(new AssetsLoadingError(`The loading of ${url} failed`));
                }
            })
        );
        cacheMap.set(url, promise);
        document.head.appendChild(linkEl);
        return promise;
    },

    /**
     * Loads the given url inside a script tag.
     *
     * @param {string} url the url of the script
     * @returns {Promise<void>} resolved when the script has been loaded
     */
    loadJS(url) {
        if (cacheMap.has(url)) {
            return cacheMap.get(url);
        }
        const scriptEl = document.createElement("script");
        scriptEl.type = url.includes("web/static/lib/pdfjs/") ? "module" : "text/javascript";
        scriptEl.src = url;
        const promise = new Promise((resolve, reject) =>
            onLoadAndError(scriptEl, resolve, () => {
                cacheMap.delete(url);
                reject(new AssetsLoadingError(`The loading of ${url} failed`));
            })
        );
        cacheMap.set(url, promise);
        document.head.appendChild(scriptEl);
        return promise;
    },
};
