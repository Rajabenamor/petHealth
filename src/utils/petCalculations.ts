//the formula for rer : the ideal one 
// there is another formula (30 * weight_kg) + 70 but only accurate for cats and dogs weighing between 2kg and 20kg.

export const calculateRER = (weight : string) => {
    const weightNum = parseFloat(weight);
    if(!weightNum || weightNum <= 0) return 0;
    return 70 * Math.pow(weightNum , 0.75);
}; 


// pet-specific multipliers (mer)

export const PET_DATA  = {
    Cat : {
        multipliers : {
            "Neutered Adult (Inactive)": 1.2,
            "Intact Adult": 1.4,
            "Active Adult": 1.6,
            "Kitten (0-4 months)": 3.0,
            "Kitten (4-12 months)": 2.0,
            "Obese Prone": 1.0,
        }
    },
    Dog:{
        multipliers : {
            "Neutered Adult": 1.6,
            "Intact Adult": 1.8,
            "Active Adult": 2.5,
            "Puppy (< 4 months)": 3.0,
            "Weight Loss": 1.0,
        }
    }

} as const ;

export type PetType = keyof typeof PET_DATA;
