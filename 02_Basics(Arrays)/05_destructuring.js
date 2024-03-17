const myVehicle = {
    brandName: "BMW",
    model: "M2",
    color: {
        red: 'M Toronto Red Metallic',
        white: 'Alpine White',
        blue: 'M Zandvoort Blue',
        black: 'Black Sapphire',
        grey: 'M Brooklyn Grey Metallic'
    },
    price: "99.90 lakh"
}

function detailMyVehicle({brandName,model,price,color: {red}}){
    console.log(`${brandName}'s ${model} model              in ${red} color is in ${price} only`)
}

detailMyVehicle(myVehicle);