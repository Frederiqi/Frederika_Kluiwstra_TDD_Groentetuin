// code for initial tests

const get_yield_for_plant = crop => crop.yield;

const get_yield_for_crop = input => get_yield_for_plant(input.crop) * input.num_crops;

const get_total_yield = ({ crops }) => {
    totalYieldAllCrops = crops.map(crop => get_yield_for_crop(crop));
    return totalYieldAllCrops.reduce((accumulatedYield, yieldOfOneCrop) => accumulatedYield + yieldOfOneCrop)
};

module.exports = {
    get_yield_for_plant,
    get_yield_for_crop,
    get_total_yield
};