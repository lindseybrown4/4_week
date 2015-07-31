app.service('pokeService', function(){

//############################################################
// Version 1:
// //############################################################
// 	var pokemon = [
// 		{
// 	        "name": "squirtle",
// 	        "happiness": "67",
// 	        "attack": "28", 
// 	        "species": "reptile"
// 		},
// 		{
//             "name": "charzard",
//             "happiness": "3",
//             "attack": "96", 
//             "species": "reptile"
// 	    },
// 		{
//             "name": "fluffy",
//             "happiness": "99",
//             "attack": "77", 
//             "species": "mammal"
//         },
// 		{
//             "name": "blobby",
//             "happiness": "23",
//             "attack": "12", 
//             "species": "amphibian"
// 	    }

// 	];

// 	this.getData = function() {
// 		return pokemon; 
// 	}; //end of function

//############################################################
// Version 2:
//############################################################

	// this.pokemon = [
	// 	{
	//         "name": "squirtle",
	//         "happiness": "67",
	//         "attack": "28", 
	//         "species": "reptile"
	// 	},
	// 	{
 //            "name": "charzard",
 //            "happiness": "3",
 //            "attack": "96", 
 //            "species": "reptile"
	//     },
	// 	{
 //            "name": "fluffy",
 //            "happiness": "99",
 //            "attack": "77", 
 //            "species": "mammal"
 //        },
	// 	{
 //            "name": "blobby",
 //            "happiness": "23",
 //            "attack": "12", 
 //            "species": "amphibian"
	//     }

	// ];

//############################################################
// Version 3:
//############################################################
var pokemon = [
		{
	        "name": "squirtle",
	        "happiness": "67",
	        "attack": "28", 
	        "species": "reptile"
		},
		{
            "name": "charzard",
            "happiness": "3",
            "attack": "96", 
            "species": "reptile"
	    },
		{
            "name": "fluffy",
            "happiness": "99",
            "attack": "77", 
            "species": "mammal"
        },
		{
            "name": "blobby",
            "happiness": "23",
            "attack": "12", 
            "species": "amphibian"
	    }
	];

	this.getData = function() {
		return pokemon; 
	};

});
