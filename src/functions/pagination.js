import React from 'react';

const pagination = function (c, m,fun) {

    if (m > 1000)  {
        m = 1000;
    }

    var current = c,
        last = m,
        delta = 2,
        left = current - delta,
        right = current + delta + 1,
        range = [],
        rangeWithDots = [],
        l;

    for (let i = 1; i <= last; i++) {
        if (i == 1 || i == last || i >= left && i < right) {
            range.push(i);
        }
    }

    for (let i of range) {
        if (l) {
            if (i - l === 2) {
                rangeWithDots.push(<li onClick={fun} data-id={l + 1}>{l + 1}</li>);
            } else if (i - l !== 1) {
                rangeWithDots.push(<span className="down ml-0 mr-4 d-flex flex-column justify-content-end">...</span>);
            }
        }

        i !== parseInt(c, 10) ? rangeWithDots.push(<li onClick={fun}
                                                                       data-id={i}>{i}</li>) : rangeWithDots.push(
            <li onClick={fun} className="selectedPage" data-id={i}>{i}</li>)

        l = i;
    }

    return rangeWithDots;
}

export default pagination;
