// You should implement your task here.

module.exports = function towelSort(matrix) {
    let sortedMatrix = [];
    if (!Array.isArray(matrix)) return [];
    for (i = 0; i < matrix.length; ++i) {
        if (i % 2 === 0) {
            sortedMatrix = sortedMatrix.concat(matrix[i]);
        } else {
            sortedMatrix = sortedMatrix.concat(matrix[i].reverse());
        }
    }
    return sortedMatrix;
};
