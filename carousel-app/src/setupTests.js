import { shallow, render, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
const { JSDOM } = require('jsdom');

const jsdom = new JSDOM('<!doctype html><html><body></body></html>');
const { window } = jsdom;

function copyProps(src, target) {
  const props = Object.getOwnPropertyNames(src)
    .filter((prop) => typeof target[prop] === 'undefined')
    .map((prop) => Object.getOwnPropertyDescriptor(src, prop));
  Object.defineProperties(target, props);
}

global.window = window;
global.DOMParser = window.DOMParser;
global.window.scrollTo = (xCoord, yCoord) => {}; // this fix jsdom's error: "Error: Not implemented: window.scrollTo"
global.matchMedia = (mediaQueryString) => {};

global.document = window.document;
global.window.document.body.classList.remove = jest.fn();
global.document.querySelector = (elem) => {
  return {
    scrollTop: '',
    scrollLeft: '',
    scrollHeight: '',
    scrollWidth: '',
    id: '',
    children: [],
    localName: elem,
  };
};

global.requestAnimationFrame = function (callback) {
  return setTimeout(callback, 0);
};

global.cancelAnimationFrame = function (id) {
  clearTimeout(id);
};

global.navigator = {
  userAgent: 'node.js',
};
global.fetch = require('fetch-everywhere');
copyProps(window, global);

// Make Enzyme functions available in all test files without importing
global.shallow = shallow;
global.render = render;
global.mount = mount;
