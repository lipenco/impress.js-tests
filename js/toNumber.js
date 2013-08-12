var toNumber = function (numeric, fallback) {
        return isNaN(numeric) ? (fallback || 0) : Number(numeric);
    };