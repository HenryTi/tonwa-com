export function wait(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(), ms);
    });
}
//# sourceMappingURL=wait.js.map