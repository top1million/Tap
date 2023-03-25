function majorityElements(nums) {
    let map = {};
    let majority = Math.floor(nums.length / 2);
    for (let i = 0; i < nums.length; i++) {
        if (map[nums[i]]) {
            map[nums[i]]++;
        } else {
            map[nums[i]] = 1;
        }
    }
    let result = [];
    for (let key in map) {
        if (map[key] > majority) {
            result.push(key);
        }
    }
    return result[0];
}


console.log(majorityElements([2,2,1,1,1,2,2]));