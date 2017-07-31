function binarySearchMidPoint(left, right) {
    return Math.floor((right - left)/2) + left;
}

function recursiveBinarySearchArray(input, item, left, right) {
    if(right < left) {
        return -1;
    } else {
        var mid = binarySearchMidPoint(left, right);

        if(input[mid] > item) {
            return recursiveBinarySearchArray(input, item, left, mid - 1);
        } else if(input[mid] < item) {
            return recursiveBinarySearchArray(input, item, mid + 1, right);
        } else {
            return mid;
        }
    }
}

function binarySearchArray(input, item, sorted) {
    if(!sorted) {
        input = quickSort(input);
    }
    return recursiveBinarySearchArray(input, item, 0, input.length - 1);
}