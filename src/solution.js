/**
 * Leetcode code test
 */
const solution = (nums) => {
    let l = nums.length;
    let sorted = false;
    while (l > 0 && !sorted) {
        sorted = true;
        for (let i = 0; i < l - 1; i++) {
            if (nums[i] > nums[i + 1]) {
                [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]];
                sorted = false;
            }
        }
        l--;
    }
    return nums;
}

const tool = () => {
    console.log('This is a tool function.');
}
