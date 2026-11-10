// big, medium, small given = spaces per each size
// 3 car types: 1,2,3 -> big,medium,small
// 2d array given 
// return true if a matching space is available 
// add number of available spaces to map -> first three numbers in the array 
// go through rest of the array and check if for the car, there is a fitting space available -> if yes -1, if no add false to the res array 

class ParkingSystem {
    constructor(big, medium, small) { // three space sizes 
       this.spaces = [0, big, medium, small]; // add 0 because the car numbers start at 1 
    }
    addCar(carType) { // three car types 
        if (this.spaces[carType] > 0) { // if there is a spot for this car type 
            this.spaces[carType]--; // decrement spot 
            return true;
        }
        return false;
        
    }
}
