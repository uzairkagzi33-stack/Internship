    $(document).ready(function () {
        let clicks = 0;
        let tiles = [1, 2, 3, 4, 5, 6, 7, 8, ""];

        function drawBoard() {

            $("#board").html("");
            tiles.forEach(function (v) {
            $("#board").append(
                `<div class="col tile ${v == "" ? "blank" : ""}">${v}</div>`,
            );
        });
        }

        function shuffle() {
            tiles.sort(() => Math.random() - 0.5);
            clicks = 0;
            $("#clicks").text(clicks);
            // console.log('shuffle');
            drawBoard(); 
        }

        function isAdjacent(i, j) {
            let r1 = Math.floor(i / 3),
            c1 = i % 3;
            let r2 = Math.floor(j / 3),
            c2 = j % 3;
            // console.log(i);
            // console.log((i / 3));
            // console.log(j);
            // console.log((j / 3));
            // console.log(`r1 ${r1}`);
            // console.log(`c1 ${c1}`);
            // console.log(`r1 ${r2}`);
            // console.log(`c1 ${c2}`);
            // console.log(Math.abs(r1 - r2) + Math.abs(c1 - c2));
            return Math.abs(r1 - r2) + Math.abs(c1 - c2) === 1;
        }

        $("#board").on("click", ".tile", function () {
            let index = $(this).index();
            // console.log(`First index ${index}`);
            let blankIndex = tiles.indexOf("");
            // console.log(`First index ${blankIndex}`);

            if (isAdjacent(index, blankIndex)) {
            [tiles[index], tiles[blankIndex]] = [
                tiles[blankIndex],
                tiles[index],
            ];
            clicks++;
            $("#clicks").text(clicks);
            drawBoard();
            }
        });

        $("#shuffle").click(shuffle); 

        drawBoard();
        });