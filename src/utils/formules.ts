import {IForm} from "@/types";

export const getCalories = (data: IForm) => {
    let normal = 0
    let day = 0

    if (data.gender === 'male') {
        normal = 66.5 + (13.75 * data.weight) + (5.003 * data.height) - (6.775 * data.age)
    }
    else {
        normal = 655.1 + (9.563 * data.weight) + (1.85 * data.height) - (4.676 * data.age)
    }

    switch (data.activity) {
        case 'min':
            day = normal * 1.2
            break
        case 'low':
            day = normal * 1.375
            break
        case 'medium':
            day = normal * 1.55
            break
        case 'high':
            day = normal * 1.7
            break
        case 'very-high':
            day = normal * 1.9
            break
    }

    return { normal: normal.toFixed(0), day: day.toFixed(0) }
}