(function() {
    
    var currentPlayer = "player1";
    var column = $(".column");
    var winningSlots = [];
    
    column.on("click", function(e) {
        var slotInColumns = $(e.currentTarget).children();
        var foundEmptySlot = false;
        
        for (var i = slotInColumns.length - 1; i >= 0; i--) {
            if (
                !slotInColumns.eq(i).children().hasClass("player1")
                &&
                !slotInColumns.eq(i).children().hasClass("player2")
            ) {
                slotInColumns.eq(i).children().addClass(currentPlayer);
                foundEmptySlot = true;
                break;
            }
        }
        
        if (!foundEmptySlot) {
            return;
        }
        
        if (checkVictory(slotInColumns)) {
            console.log(winningSlots);
            dancingVictory(currentPlayer);
        } else {
            var slotInRows = $(".row" + i);
            if (checkVictory(slotInRows)) {
                console.log(winningSlots);
                dancingVictory(currentPlayer);
            }
        }
    
        if (checkDiagonal()) {
            console.log(currentPlayer + " has won!");
            dancingVictory(currentPlayer);
        }

        switchPlayers();
    });

    function switchPlayers() {
        if (currentPlayer == "player1") {
            currentPlayer = "player2";
        }
        else {
            currentPlayer = "player1";
        }
    }

    function checkVictory(slots) {
        var count = 0;
        for (var i = 0; i < slots.length; i++) {
            if (slots.eq(i).children().hasClass(currentPlayer)) {
                count++;
                winningSlots.push(slots.eq(i).children());
                if (count == 4) {
                    return true;
                }
            } else {
                count = 0;
                winningSlots = [];
            }
        }
    }

    var combinations = [
        [$(".hole").eq(2), $(".hole").eq(9), $(".hole").eq(16), $(".hole").eq(23)],
        [$(".hole").eq(1), $(".hole").eq(8), $(".hole").eq(15), $(".hole").eq(22)],
        [$(".hole").eq(8), $(".hole").eq(15), $(".hole").eq(22), $(".hole").eq(29)],
        [$(".hole").eq(0), $(".hole").eq(7), $(".hole").eq(14), $(".hole").eq(21)],
        [$(".hole").eq(7), $(".hole").eq(14), $(".hole").eq(21), $(".hole").eq(28)],
        [$(".hole").eq(14), $(".hole").eq(21), $(".hole").eq(28), $(".hole").eq(35)],
        [$(".hole").eq(6), $(".hole").eq(13), $(".hole").eq(20), $(".hole").eq(27)],
        [$(".hole").eq(13), $(".hole").eq(20), $(".hole").eq(27), $(".hole").eq(34)],
        [$(".hole").eq(20), $(".hole").eq(27), $(".hole").eq(34), $(".hole").eq(41)],
        [$(".hole").eq(12), $(".hole").eq(19), $(".hole").eq(26), $(".hole").eq(33)],
        [$(".hole").eq(19), $(".hole").eq(26), $(".hole").eq(33), $(".hole").eq(40)],
        [$(".hole").eq(18), $(".hole").eq(25), $(".hole").eq(32), $(".hole").eq(39)],
        [$(".hole").eq(3), $(".hole").eq(8), $(".hole").eq(13), $(".hole").eq(18)],
        [$(".hole").eq(4), $(".hole").eq(9), $(".hole").eq(14), $(".hole").eq(19)],
        [$(".hole").eq(9), $(".hole").eq(14), $(".hole").eq(19), $(".hole").eq(24)],
        [$(".hole").eq(5), $(".hole").eq(10), $(".hole").eq(15), $(".hole").eq(20)],
        [$(".hole").eq(10), $(".hole").eq(15), $(".hole").eq(20), $(".hole").eq(25)],
        [$(".hole").eq(15), $(".hole").eq(20), $(".hole").eq(25), $(".hole").eq(30)],
        [$(".hole").eq(11), $(".hole").eq(16), $(".hole").eq(21), $(".hole").eq(26)],
        [$(".hole").eq(16), $(".hole").eq(21), $(".hole").eq(26), $(".hole").eq(31)],
        [$(".hole").eq(21), $(".hole").eq(26), $(".hole").eq(31), $(".hole").eq(36)],
        [$(".hole").eq(17), $(".hole").eq(22), $(".hole").eq(27), $(".hole").eq(32)],
        [$(".hole").eq(22), $(".hole").eq(27), $(".hole").eq(32), $(".hole").eq(37)],
        [$(".hole").eq(23), $(".hole").eq(28), $(".hole").eq(33), $(".hole").eq(38)]
    ];
    
    function checkDiagonal() {
        for (var i = 0; i < combinations.length; i++) {
            
            if (
                combinations[i][0].hasClass(currentPlayer) &&
                combinations[i][1].hasClass(currentPlayer) &&
                combinations[i][2].hasClass(currentPlayer) &&
                combinations[i][3].hasClass(currentPlayer)
            ) {
                winningSlots.push(
                    combinations[i][0],
                    combinations[i][1],
                    combinations[i][2],
                    combinations[i][3]
                );
                console.log(winningSlots);
                return true;
            }
        }
    }

    function dancingVictory(player) {
        var victory1 = $(".victory1");
        var victory2 = $(".victory2");
        
        if (player == "player1") {
            victory1.html("Player 1");
        } else {
            victory1.html("Player 2");
        }
        victory1.addClass("onscreen1");
        victory2.addClass("onscreen2");
        for (var i = 0; i < winningSlots.length; i++)
            winningSlots[i].addClass("winning-slots");
    }
    
}());


// function fourSlotsVertical() {
//     for (var i = 0; i<$(".hole").length; i++) {
//         if (
//             $(".hole").eq(i).hasClass(currentPlayer) &&
//             $(".hole").eq(i).next().hasClass(currentPlayer) &&
//             $(".hole").eq(i).next().next().hasClass(currentPlayer) &&
//             $(".hole").eq(i).next().next().next().hasClass(currentPlayer)
//         )
//     }
// }



// function checkDiagonal() {
//     for (var i = 0; i < combinations.length; i ++) {
//         for (var j = 0; j < combinations[i].length; j++) {
//             var count = 0;
//             if (combinations[i][j].hasClass(currentPlayer)) {
//                 // console.log(combinations[i][j]);
//                 console.log(count);
//                 count++;
//                 if (count == 4) {
//                     return true;
//                 } 
//                 // else {
//                 //     count = 0;
//                 // }
//             }
//         }
//     }
// }