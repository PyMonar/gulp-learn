/**
 * Leetcode code test
 * @param  {[type]} nums [description]
 * @return {[type]}      [description]
 */
const solution = (nums) => {
    nums = nums.filter((item, index, array) => {
        return array.indexOf(item) === index;
    });
    tool();
    return nums.reverse();
}

const tool = () => {
    console.log('This is a tool function.');
}
