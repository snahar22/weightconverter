const inputWeight = document.getElementById('inputWeight');
const output = document.getElementById('output');
const weightOption = document.getElementById('weightOption');
const poundsOutput = document.getElementById('lbsOutput');
const ouncesOutput = document.getElementById('ozOutput');
const gramsOutput = document.getElementById('gOutput');
const kilogramsOutput = document.getElementById('kgOutput');


inputWeight.addEventListener('input', function(e){
  
    let chosenOption = weightOption;
    let weightValue = e.target.value;

	if(chosenOption.selectedIndex == 0){

		poundsOutput.innerHTML = weightValue;

		kilogramsOutput.innerHTML = (weightValue / 2.2046).toFixed(2);
		gramsOutput.innerHTML = (weightValue / 0.0022046 ).toFixed(2);
		ouncesOutput.innerHTML = (weightValue * 16).toFixed(2);
	}

	else if(chosenOption.selectedIndex == 1){

		ouncesOutput.innerHTML = weightValue;

		kilogramsOutput.innerHTML = (weightValue / 35.274).toFixed(2);
		poundsOutput.innerHTML = (weightValue * 0.062500 ).toFixed(2);
		gramsOutput.innerHTML = (weightValue / 0.035274).toFixed(2);
	}

	else if(chosenOption.selectedIndex == 2){

		gramsOutput.innerHTML = weightValue;

		poundsOutput.innerHTML = (weightValue * .0022).toFixed(2);
		kilogramsOutput.innerHTML = (weightValue * .001).toFixed(2);
		ouncesOutput.innerHTML = (weightValue * .035).toFixed(2);
	}

    else if(chosenOption.selectedIndex == 3){
    	
		kilogramsOutput.innerHTML = weightValue;

		poundsOutput.innerHTML = (weightValue * 2.2046).toFixed(2);
		gramsOutput.innerHTML = (weightValue * 1000).toFixed(2);
		ouncesOutput.innerHTML = (weightValue * 35.274).toFixed(2);
	}
});	
