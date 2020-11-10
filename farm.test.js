//initial tests

const {
    get_yield_for_plant,
    get_yield_for_crop,
    get_total_yield,
    get_costs_for_crop,
    get_revenue_for_crop,
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