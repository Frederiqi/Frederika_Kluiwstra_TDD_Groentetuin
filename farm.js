// code for initial tests

const get_yield_for_plant = crop => crop.yield;

const get_yield_for_crop = input => get_yield_for_plant(input.crop) * input.num_crops;

const get_total_yield = ({ crops }) => {
    totalYieldAllCrops = crops.map(crop => get_yield_for_crop(crop));
    return totalYieldAllCrops.reduce((accumulatedYield, yieldOfOneCrop) => accumulatedYield + yieldOfOneCrop)
};

// 1. Adding functionalities: costs for a crop

const get_costs_for_crop = input => input.crop.costs * input.num_crops;

// 2. Adding functionalities: revenue for a crop (calculated without environmental factors)

const get_revenue_for_crop = input => get_yield_for_crop(input) * input.crop.sale_price;

module.exports = {
    get_yield_for_plant,
    get_yield_for_crop,
    get_total_yield,
    get_costs_for_crop,
    get_revenue_for_crop,
};