<script>
	import { board } from '$lib/stores/Chess';

	let move = 0;
	let boardh = 0;
	let boardw = 0;
	let scorel = 0;
	let scored = 0;
	let win = false;
	board.subscribe(board => {
		move = board.move;
		boardw = board.width;
		boardh = board.height;
		scorel = board.scores.l;
		scored = board.scores.d;
		win = board.scores.win;
	})

</script>

<div class='fixed top-0 bottom-0 right-0 bg-red-800 text-white flex flex-col justify-evenly p-4 gap-4 max-w-[200px] z-20'>
	<p>Board Size: {boardw}x , {boardh}y</p>
	<p>Move: {move}</p>
	<p>Scores: l - {scorel}, d - {scored}</p>
	<p>Win: {win}</p>
	<p>It is {move % 2 === 0? "white's" : "black's"} turn.</p>
</div>