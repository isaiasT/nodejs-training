const checkRequired = (value, name: string) => {
    if (!value) {
        throw new Error(`Field '${name}' is required`);
    }
    return true;
};

export default checkRequired;
