//initial tests

const {
    get_yield_for_plant,
    get_yield_for_crop,
    get_total_yield,
    get_costs_for_crop,
    get_revenue_for_crop,
    get_profit_for_crop,
    get_total_profit,
    get_yield_for_plant_factors,
    get_yield_for_plant_multiple_factors,
    get_yield_for_plant_multiple_relevant_factors,
} = require("./farm");

describe("get_yield_for_plant", () => {
    const corn = {
        name: "corn",
        yield: 30,
    };

    test("Get yield for plant with no environment factors", () => {
        expect(get_yield_for_plant(corn)).toBe(30);
    });
});

describe("get_yield_for_crop", () => {
    test("Get yield for crop, simple", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const input = {
            crop: corn,
            num_crops: 10,
        };
        expect(get_yield_for_crop(input)).toBe(30);
    });
});

describe("get_total_yield", () => {
    test("Calculate total yield with multiple crops", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const pumpkin = {
            name: "pumpkin",
            yield: 4,
        };
        const crops = [
            { crop: corn, num_crops: 5 },
            { crop: pumpkin, num_crops: 2 },
        ];
        expect(get_total_yield({ crops })).toBe(23);
    });

    test("Calculate total yield with 0 amount", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const crops = [{ crop: corn, num_crops: 0 }];
        expect(get_total_yield({ crops })).toBe(0);
    });
});

// 1. Adding functionalities and testing them: costs for a crop

describe("get_costs_for_crop", () => {
    const corn = {
        name: "corn",
        costs: 1,
    };
    const input = {
        crop: corn,
        num_crops: 5000,
    };
    test("Get costs for a crop", () => {
        expect(get_costs_for_crop(input)).toBe(5000);
    });
});

// 2. Adding functionalities and testing them: revenue for a crop (calculated without environmental factors)

describe("get_revenue_for_crop", () => {
    const pumpkin = {
        name: "pumpkin",
        yield: 2,
        sale_price: 3,
    };
    const input = {
        crop: pumpkin,
        num_crops: 100,
    };
    test("Get revenue for a crop", () => {
        expect(get_revenue_for_crop(input)).toBe(600);
    });
});

// 3. Adding functionalities and testing them: profit for a crop (calculated without environmental factors)

describe("get_profit_for_crop", () => {
    const carrots = {
        name: "carrots",
        yield: 1,
        costs: 1,
        sale_price: 2,
    };
    const input = {
        crop: carrots,
        num_crops: 200,
    };
    test("Get profit for a crop", () => {
        expect(get_profit_for_crop(input)).toBe(200);
    });
});

// 4. Adding functionalities and testing them: total profit (calculated without environmental factors)

describe("get_total_profit", () => {
    test("Calculate total profit with multiple crops", () => {
        const corn = {
            name: "corn",
            yield: 1,
            costs: 1,
            sale_price: 2,
        };
        const pumpkin = {
            name: "pumpkin",
            yield: 4,
            costs: 2,
            sale_price: 6,
        };
        const carrots = {
            name: "carrots",
            yield: 1,
            costs: 1,
            sale_price: 3,
        };
        const crops = [
            { crop: corn, num_crops: 100 },
            { crop: pumpkin, num_crops: 10 },
            { crop: carrots, num_crops: 50 },
        ];
        expect(get_total_profit({ crops })).toBe(420);
    });
});

// 5. Adding functionalities and testing them: yield for plant, calculated with environmental factors

describe("get_yield_for_plant_factors", () => {
    const corn = {
        name: "corn",
        yield: 30,
        factors: {
            sun: {
                low: -50,
                medium: 0,
                high: 50,
            },
        },
    };

    const environment_factors = {
        sun: "low",
    };
    test("Calculate yield for plant, environmental factors included", () => {
        expect(get_yield_for_plant_factors(corn, environment_factors)).toBe(15)
    });
});

// 6. Adding functionalities and testing them: yield for plant, calculated with multiple environmental factors

describe("get_yield_for_plant_multiple_factors", () => {
    const corn = {
        name: "corn",
        yield: 30,
        factors: {
            sun: {
                low: -50,
                medium: 0,
                high: 50,
            },
            wind: {
                little: 0,
                medium: -30,
                strong: -60,
            },
            soil: {
                sand: -20,
                peat: 0,
                clay: 30,
            },
        },
    };

    const environment_factors = {
        sun: "low",
        wind: "medium",
        soil: "clay",
    };
    test("Calculate yield for plant, multiple environmental factors included", () => {
        expect(get_yield_for_plant_multiple_factors(corn, environment_factors)).toBe(13.65)
    });
});

// 7. Adding functionalities and testing them: yield for plant, calculated with multiple relevant environmental factors

describe("get_yield_for_plant_multiple_relevant_factors", () => {
    const corn = {
        name: "corn",
        yield: 30,
        factors: {
            sun: {
                low: -50,
                medium: 0,
                high: 50,
            },
            wind: {
                little: 0,
                medium: -30,
                strong: -60,
            },
            soil: {
                sand: -20,
                peat: 0,
                clay: 30,
            },
        },
    };
    const pumpkin = {
        name: "pumpkin",
        yield: 4,
        costs: 2,
        sale_price: 6,
        factors: {
            sun: {
                low: -20,
                medium: 0,
                high: 30,
            },
            soil: {
                sand: 0,
                peat: 20,
                clay: 30,
            },
        },
    };
    const avocado = {
        name: "avocado",
        yield: 1,
        costs: 1,
        sale_price: 3,
        factors: {
            sun: {
                low: -60,
                medium: 0,
                high: 60,
            },
            wind: {
                little: 0,
                medium: -10,
                strong: -20,
            },
        },
    };
    const environment_factors = {
        sun: "medium",
        wind: "strong",
        soil: "peat",
    };
    test("Calculate yield for plant, multiple relevant environmental factors included", () => {
        expect(get_yield_for_plant_multiple_relevant_factors(corn, environment_factors)).toBe(12)
    });
    test("Calculate yield for plant, multiple relevant environmental factors included", () => {
        expect(get_yield_for_plant_multiple_relevant_factors(pumpkin, environment_factors)).toBe(4.8)
    });
    test("Calculate yield for plant, multiple relevant environmental factors included", () => {
        expect(get_yield_for_plant_multiple_relevant_factors(avocado, environment_factors)).toBe(0.8)
    });
});