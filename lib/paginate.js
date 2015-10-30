var _ = require('underscore');

var paginate = function (opts) {
    opts = opts || {};
    var perPage = opts.perPage || 5;
    var items = opts.items || [];
    if (!items.length) { return false; }
    var pages = [];

    var sorted = _.sortBy(items, function (item) {
        return item.date;
    });
    sorted.reverse();

    var paginationStep = function (items, pageNo) {
        pageNo = pageNo || 0;
        var currentBunch = _.first(items, perPage);
        if (!currentBunch.length) { return false; }
        storePage(pageNo, currentBunch);
        items = _.rest(items, perPage);
        if (!items.length) { return false; }
        paginationStep(items, pageNo + 1);
    };

    var storePage = function(pageNo, pageData) {
        if (!pageData || !pageData.length) {
            console.log('No page data to save');
            return false;
        }
        if (((typeof pageNo) === 'undefined') || ((typeof pageNo) === 'null')) {
            console.log('No page number');
            return false;
        }
        pages.push({
            pageNo: pageNo,
            pageData: pageData
        });
    };

    paginationStep(sorted);

    return pages;
};

module.exports = paginate;
