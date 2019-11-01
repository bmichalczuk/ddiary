export default (showFunc, hideFunc, timeout = 3000) => {
    showFunc();
    setTimeout(hideFunc, timeout);
};