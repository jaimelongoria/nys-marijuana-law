$(document).ready(() => {
	const watcher = new Watch($("#all_conviction"));

	watcher.inView(() => {
		$(".dot").each(function (i, el) {
			setTimeout(() => {
				const $dot = $(this);

				$dot.addClass("dot_appear");
			}, 10 * (1 + (i / 10)));

		});
		$(".arrow").addClass("arrow_hidden");
		$(".no_conviction.dot_gray").removeClass("dot_gray");
	});

	watcher.outView(() => {
		$(".arrow.arrow_hidden").removeClass("arrow_hidden");
	});
});





$(document).ready(() => {
	const watcher = new Watch($("#no_conviction"));

	watcher.inView(() => {
		$(".no_conviction").addClass("dot_gray");
		$(".graphic.metrics").removeClass("metrics");
	});
});


$(document).ready(() => {
	const watcher = new Watch($("#zoom"));

	watcher.inView(() => {
		$(".graphic").addClass("metrics");
		$(".sell.dot_sell").removeClass("dot_sell");
	});
});


$(document).ready(() => {
	const watcher = new Watch($("#sell"));

	watcher.inView(() => {
		$(".sell").addClass("dot_sell");
		$(".possession.dot_possession").removeClass("dot_possession");
	});
});


$(document).ready(() => {
	const watcher = new Watch($("#possession"));

	watcher.inView(() => {
		$(".possession").addClass("dot_possession");
		$(".marijuana_default.dot_default").removeClass("dot_default");
	});
});


$(document).ready(() => {
	const watcher = new Watch($("#marijuana_default"));

	watcher.inView(() => {
		$(".marijuana_default").addClass("dot_default");
		$(".smuggle.dot_smuggle").removeClass("dot_smuggle");
	});
});


$(document).ready(() => {
	const watcher = new Watch($("#smuggle"));

	watcher.inView(() => {
		$(".smuggle").addClass("dot_smuggle");
		$(".conclude.dot_conclude").removeClass("dot_conclude");
	});
});


$(document).ready(() => {
	const watcher = new Watch($("#conclude"));

	watcher.inView(() => {
		$(".conclude").addClass("dot_conclude");
	});
});