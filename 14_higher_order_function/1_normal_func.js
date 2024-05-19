
{
    console.log("start")

    let radius = [3,2,4,5];
    
    //main function
    const calculateArea = function(arr){
        let output = [];
        for(let i = 0; i < arr.length; i++){
            output.push(Math.PI * arr[i] * arr[i])
        }
        return output;
    }

    const calculateCircumference = function(arr){
        let output = [];
        for(let i = 0; i < arr.length; i++){
            output.push(2 * Math.PI * arr[i] )
        }
        return output;
    }

    const calculateDiameter = function(arr){
        let output = [];
        for(let i = 0; i < arr.length; i++){
            output.push(2 * arr[i])
        }
        return output;
    }

    console.log("Area of given radius", calculateArea(radius))
    console.log("Circumference of given radius", calculateCircumference(radius))    
    console.log("Diameter of given radius", calculateDiameter(radius))
}
