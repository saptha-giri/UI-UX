$( document ).ready(function() {
	const menu = document.querySelector('.menu');
	const trigger = document.querySelector('.trigger');

	// $(".skill-description").hide();

	function toggle() {
		console.log("clicked...")
	  menu.classList.toggle('menu--open');
	  trigger.classList.toggle('trigger--rotate');
	}

	trigger.addEventListener('click', toggle);

	var animate = '<g id="ANIMATE" transform="translate(3 3)"> <g id="Ellipse_35" data-name="Ellipse 35" transform="translate(0)" fill="#e25f3f" stroke="#fff" stroke-width="3"> <ellipse cx="23.01" cy="21.987" rx="23.01" ry="21.987" stroke="none"/> <ellipse cx="23.01" cy="21.987" rx="24.51" ry="23.487" fill="none"/> </g> <g id="Group_66" data-name="Group 66" transform="translate(8.462 12.382)"> <path id="Path_53" data-name="Path 53" d="M103.363,173.295H99.512l-1.531-3.983h-7.01l-1.447,3.983H85.767L92.6,155.758h3.744Zm-6.519-6.938-2.416-6.507-2.369,6.507Z" transform="translate(-85.767 -155.758)" fill="#fff" opacity="0.5"/> <path id="Path_54" data-name="Path 54" d="M305.433,220.716h-3.362v-6.484a10.02,10.02,0,0,0-.215-2.662,1.868,1.868,0,0,0-.7-.939,2,2,0,0,0-1.166-.335,2.7,2.7,0,0,0-1.567.479,2.411,2.411,0,0,0-.951,1.268,10.952,10.952,0,0,0-.257,2.919v5.754h-3.361v-12.7h3.122v1.866a5.206,5.206,0,0,1,6.22-1.753,3.411,3.411,0,0,1,1.394,1.023,3.706,3.706,0,0,1,.658,1.412,10.51,10.51,0,0,1,.185,2.261v7.9Z" transform="translate(-275.651 -203.179)" fill="#fff" opacity="0.5"/> </g> </g>';

	var dreamviewer = '<g id="DREAM" transform="translate(3 3)"> <g id="Ellipse_36" data-name="Ellipse 36" transform="translate(0)" fill="#8dc652" stroke="#fff" stroke-width="3"> <ellipse cx="23.01" cy="22.498" rx="23.01" ry="22.498" stroke="none"/> <ellipse cx="23.01" cy="22.498" rx="24.51" ry="23.998" fill="none"/> </g> <path id="Path_61" data-name="Path 61" d="M83.388,166.285h5.728a11.194,11.194,0,0,1,2.954.3,5.2,5.2,0,0,1,2.34,1.429,6.785,6.785,0,0,1,1.482,2.515,11.455,11.455,0,0,1,.508,3.669,10.2,10.2,0,0,1-.477,3.3,6.844,6.844,0,0,1-1.662,2.742,5.512,5.512,0,0,1-2.2,1.239,9.478,9.478,0,0,1-2.774.328h-5.9Zm3.134,2.626v10.281h2.34a8.539,8.539,0,0,0,1.9-.148,2.893,2.893,0,0,0,1.265-.646,3.287,3.287,0,0,0,.821-1.5,10.124,10.124,0,0,0,.318-2.843,9.272,9.272,0,0,0-.318-2.764,3.552,3.552,0,0,0-.889-1.5,2.984,2.984,0,0,0-1.451-.731,14.218,14.218,0,0,0-2.573-.148Z" transform="translate(-74.75 -150.619)" fill="#fff" opacity="0.5"/> <path id="Path_62" data-name="Path 62" d="M238.42,226.979l-3.558-11.245h2.891l2.107,7.37,1.938-7.37h2.869l1.874,7.37,2.149-7.37h2.933l-3.611,11.245h-2.859l-1.938-7.232-1.906,7.232Z" transform="translate(-213.12 -195.79)" fill="#fff" opacity="0.5"/> </g>';
	var illustator = '<g id="ILLUSTRATOR" transform="translate(3 3)"> <g id="Ellipse_34" data-name="Ellipse 34" transform="translate(0)" fill="#df871e" stroke="#fff" stroke-width="3"> <ellipse cx="22.498" cy="21.987" rx="22.498" ry="21.987" stroke="none"/> <ellipse cx="22.498" cy="21.987" rx="23.998" ry="23.487" fill="none"/> </g> <g id="Group_65" data-name="Group 65" transform="translate(8.931 11.833)"> <path id="Path_50" data-name="Path 50" d="M125.992,153.908h-4.733l-1.882-4.9h-8.614l-1.779,4.9h-4.616l8.393-21.55h4.6Zm-8.011-8.526-2.969-8-2.911,8Z" transform="translate(-104.369 -132.358)" fill="#fff" opacity="0.5"/> <path id="Path_51" data-name="Path 51" d="M360.41,136.18v-3.822h4.13v3.822Zm0,17.728V138.3h4.13v15.611h-4.13Z" transform="translate(-338.014 -132.358)" fill="#fff" opacity="0.5"/> </g> </g>';
	var after = '<g id="AFTER" transform="translate(3 3)"> <g id="Ellipse_36" data-name="Ellipse 36" fill="#a87eb7" stroke="#fff" stroke-width="3"> <ellipse cx="22.498" cy="21.987" rx="22.498" ry="21.987" stroke="none"/> <ellipse cx="22.498" cy="21.987" rx="23.998" ry="23.487" fill="none"/> </g> <g id="Group_67" data-name="Group 67" transform="translate(6.836 12.897)"> <path id="Path_56" data-name="Path 56" d="M103.268,158.911H99.084l-1.663-4.327H89.806l-1.572,4.327h-4.08l7.42-19.049h4.067Zm-7.082-7.537-2.625-7.069-2.573,7.069Z" transform="translate(-84.154 -139.862)" fill="#fff" opacity="0.5"/> <path id="Path_57" data-name="Path 57" d="M307.363,206.032l3.638.611a5.968,5.968,0,0,1-2.215,3.047A6.508,6.508,0,0,1,305,210.735a6.174,6.174,0,0,1-5.328-2.352,7.9,7.9,0,0,1-1.364-4.756,7.62,7.62,0,0,1,1.793-5.373,5.906,5.906,0,0,1,4.535-1.943,6.126,6.126,0,0,1,4.86,2.034q1.78,2.034,1.7,6.231h-9.148a3.693,3.693,0,0,0,.884,2.527,2.763,2.763,0,0,0,2.1.9,2.235,2.235,0,0,0,1.442-.468A2.89,2.89,0,0,0,307.363,206.032Zm.208-3.69a3.515,3.515,0,0,0-.819-2.41,2.635,2.635,0,0,0-3.872.045,3.368,3.368,0,0,0-.767,2.365h5.457Z" transform="translate(-279.574 -191.374)" fill="#fff" opacity="0.5"/> </g> </g>';
	var adobexd = ' <g id="XD" transform="translate(3 3)"> <g id="Ellipse_37" data-name="Ellipse 37" transform="translate(0)" fill="#da2286" stroke="#fff" stroke-width="3"> <ellipse cx="21.987" cy="22.498" rx="21.987" ry="22.498" stroke="none"/> <ellipse cx="21.987" cy="22.498" rx="23.487" ry="23.998" fill="none"/> </g> <g id="Group_68" data-name="Group 68" transform="translate(7.327 13.66)"> <path id="Path_59" data-name="Path 59" d="M88.515,169.361l6.156-9.4-5.578-8.614h4.251l3.613,5.787,3.539-5.787h4.215l-5.6,8.749,6.156,9.265h-4.387l-3.993-6.23-4.006,6.23Z" transform="translate(-88.515 -151.347)" fill="#fff" opacity="0.5"/> <path id="Path_60" data-name="Path 60" d="M290.558,169.361h-3.207v-1.917a5.18,5.18,0,0,1-1.886,1.665,4.84,4.84,0,0,1-2.193.547,4.97,4.97,0,0,1-3.852-1.812,7.372,7.372,0,0,1-1.6-5.056,7.287,7.287,0,0,1,1.56-5.044,5.088,5.088,0,0,1,3.944-1.726,4.887,4.887,0,0,1,3.785,1.818v-6.488h3.453v18.014Zm-9.216-6.807a5.972,5.972,0,0,0,.578,3.023,2.609,2.609,0,0,0,2.334,1.352,2.541,2.541,0,0,0,2.027-1.014,4.679,4.679,0,0,0,.836-3.029,5.121,5.121,0,0,0-.811-3.238,2.567,2.567,0,0,0-2.077-.989,2.594,2.594,0,0,0-2.058.977A4.413,4.413,0,0,0,281.342,162.553Z" transform="translate(-261.257 -151.347)" fill="#fff" opacity="0.5"/> </g> </g>';
	var photoshop = '<g id="PHOTOSHOP" transform="translate(3 3)"> <g id="Ellipse_33" data-name="Ellipse 33" transform="translate(0)" fill="#76c8da" stroke="#fff" stroke-width="3"> <circle cx="21.476" cy="21.476" r="21.476" stroke="none"/> <circle cx="21.476" cy="21.476" r="22.976" fill="none"/> </g> <g id="Group_64" data-name="Group 64" transform="translate(6.882 11.226)"> <path id="Path_47" data-name="Path 47" d="M93.783,162.619V143.31c6.4,0,9.565-.066,10.893.29a5.064,5.064,0,0,1,2.779,1.89,6.965,6.965,0,0,1,.474,6.75,5.492,5.492,0,0,1-3.662,2.819,39.543,39.543,0,0,1-6.586.277v7.284Zm3.9-16.043v5.479c3.951,0,5.491.128,6.434-1.251a2.743,2.743,0,0,0-.178-3.24C102.95,146.471,101.87,146.576,97.682,146.576Z" transform="translate(-93.783 -143.305)" fill="#fff" opacity="0.5"/> <path id="Path_48" data-name="Path 48" d="M268.844,210.892l3.714-.567a2.67,2.67,0,0,0,2.99,2.2c1.207,0,2.647-.3,2.647-1.515,0-.815-.681-.994-1.5-1.185a19.959,19.959,0,0,1-5.677-1.8,3.6,3.6,0,0,1-1.659-3.148,3.88,3.88,0,0,1,1.436-3.056,6.7,6.7,0,0,1,4.452-1.238c3.056,0,5.336.734,6.19,3.7l-3.49.645a2.159,2.159,0,0,0-.85-1.251,4.618,4.618,0,0,0-3.879-.026.836.836,0,0,0-.053,1.422c1.072.79,5.651,1.078,7.587,2.687a3.422,3.422,0,0,1,1.159,2.753,4.225,4.225,0,0,1-1.607,3.306,7.113,7.113,0,0,1-4.755,1.383,7.8,7.8,0,0,1-4.524-1.159A5.339,5.339,0,0,1,268.844,210.892Z" transform="translate(-253.531 -195.569)" fill="#fff" opacity="0.5"/> </g> </g>';
	var bridge = '<g id="BRIDGE" transform="translate(3 3)"> <g id="Ellipse_34" data-name="Ellipse 34" transform="translate(0)" fill="#df871e" stroke="#fff" stroke-width="3"> <ellipse cx="22.498" cy="21.987" rx="22.498" ry="21.987" stroke="none"/> <ellipse cx="22.498" cy="21.987" rx="23.998" ry="23.487" fill="none"/> </g> <g id="_552233" data-name="552233" transform="translate(-87.118 -130.398)"> <g id="Group_163" data-name="Group 163" transform="translate(96.345 141.804)"> <path id="Path_198" data-name="Path 198" d="M96.345,141.8h8.294a23.958,23.958,0,0,1,3.673.205,5.4,5.4,0,0,1,2.166.856,5.326,5.326,0,0,1,1.592,1.734,4.7,4.7,0,0,1,.637,2.427,4.919,4.919,0,0,1-2.916,4.5,5.462,5.462,0,0,1,2.916,1.882,5,5,0,0,1,1.019,3.128,6.167,6.167,0,0,1-.658,2.753,5.546,5.546,0,0,1-1.8,2.137,5.935,5.935,0,0,1-2.81.984q-1.048.113-5.053.142H96.345Zm4.19,3.454v4.8h2.746q2.449,0,3.043-.071a2.77,2.77,0,0,0,1.691-.743,2.191,2.191,0,0,0,.616-1.621,2.277,2.277,0,0,0-.531-1.564,2.4,2.4,0,0,0-1.578-.729q-.623-.071-3.581-.071Zm0,8.252v5.548h3.878a18.95,18.95,0,0,0,2.873-.127,2.6,2.6,0,0,0,1.522-.828,2.55,2.55,0,0,0,.587-1.762,2.707,2.707,0,0,0-.453-1.585,2.562,2.562,0,0,0-1.309-.948,14.233,14.233,0,0,0-3.715-.3h-3.383Z" transform="translate(-96.345 -141.804)" fill="#efc38f"/> <path id="Path_199" data-name="Path 199" d="M312.448,216.377h-3.977V201.346h3.694v2.137a6.422,6.422,0,0,1,1.706-2,3.138,3.138,0,0,1,1.72-.481,5.049,5.049,0,0,1,2.618.75l-1.231,3.468a3.491,3.491,0,0,0-1.868-.651,2.208,2.208,0,0,0-1.415.46,3.144,3.144,0,0,0-.913,1.663,23.621,23.621,0,0,0-.333,5.039v4.642Z" transform="translate(-289.199 -195.627)" fill="#efc38f"/> </g> </g> </g>';


	$(".myclick").on("click",function(){
		let description = $(this).attr("description");
		let title = $(this).attr("mytitle");

		if(title == "ANIMATE CC"){
			$(".viewLogo").html(animate);
		}else if(title == "DREAM VIEWER"){
			$(".viewLogo").html(dreamviewer);
		}else if(title == "ILLUSTRATOR"){
			$(".viewLogo").html(illustator);
		}else if(title == "AFTER EFFECTS"){
			$(".viewLogo").html(after);
		}else if(title == "ADOBE XD"){
			$(".viewLogo").html(adobexd);
		}else if(title == "PHOTOSHOP"){
			$(".viewLogo").html(photoshop);
		}else if(title == "BRIDGE"){
			$(".viewLogo").html(bridge);
		}

		
		$(".viewTitle").text(title);
		$(".viewDescription").text(description);
		$(".skill-description").show();
		$(".skill-description").addClass("boxShadow")
		console.log("clicked... "+description)
	})

});