// code for initial tests

const get_yield_for_plant = crop => crop.yield;

const get_yield_for_crop = input => get_yield_for_plant(input.crop) * input.num_crops;

const get_total_yield = ({ crops }) => {
    const totalYieldAllCrops = crops.map(crop => get_yield_for_crop(crop));
    return totalYieldAllCrops.reduce((accumulatedYield, yieldOfOneCrop) => accumulatedYield + yieldOfOneCrop)
};

// 1. Adding functionalities: costs for a crop

const get_costs_for_crop = input => input.crop.costs * input.num_crops;

// 2. Adding functionalities: revenue for a crop (calculated without environmental factors)

const get_revenue_for_crop = input => get_yield_for_crop(input) * input.crop.sale_price;

// 3. Adding functionalities: profit for a crop (calculated without environmental factors)

const get_profit_for_crop = input => get_revenue_for_crop(input) - get_costs_for_crop(input);

// 4. Adding functionalities: total profit (calculated without environmental factors)

const get_total_profit = ({ crops }) => {
    const totalProfitAllCrops = crops.map(crop => get_profit_for_crop(crop));
    return totalProfitAllCrops.reduce((accumulatedProfit, profitOfOneCrop) => accumulatedProfit + profitOfOneCrop)
};

// 5. Adding functionalities: yield for plant, calculated with environmental factors

const get_yield_for_plant_factors = (crop, environment) => {
    const factorSun = environment.sun;
    const adjustYield = crop.factors.sun[factorSun];
    return get_yield_for_plant(crop) * (adjustYield / 100 + 1)
};

// 6. Adding functionalities: yield for plant, calculated with multiple environmental factors

const get_yield_for_plant_multiple_factors = (crop, environment) => {
    const factorSun = environment.sun;
    const factorWind = environment.wind;
    const factorSoil = environment.soil;
    const adjustForSun = crop.factors.sun[factorSun];
    const adjustForWind = crop.factors.wind[factorWind];
    const adjustForSoil = crop.factors.soil[factorSoil];
    const multiplicationFactorSun = (adjustForSun / 100 + 1);
    const multiplicationFactorWind = (adjustForWind / 100 + 1);
    const multiplicationFactorSoil = (adjustForSoil / 100 + 1);
    return get_yield_for_plant(crop) * multiplicationFactorSun * multiplicationFactorWind * multiplicationFactorSoil
};

module.exports = {
    get_yield_for_plant,
    get_yield_for_crop,
    get_total_yield,
    get_costs_for_crop,
    get_revenue_for_crop,
    get_profit_for_crop,
    get_total_profit,
    get_yield_for_plant_factors,
    get_yield_for_plant_multiple_factors,
};