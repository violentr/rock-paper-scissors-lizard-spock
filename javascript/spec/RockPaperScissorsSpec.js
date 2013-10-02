describe("Rock-Paper-Scissors", function() {

  beforeEach(function() {

    player1 = new Player();
    player2 = new Player();
    game = new Game(player1, player2);

  });

  describe('winning and losing', function() {

    describe('rock', function() {

      it('should beat scissors and lizard', function() {

        player1.picks('rock');
        player2.picks('scissors');
        expect(game.winner()).toBe(player1);
        player1.picks('rock');
        player2.picks('lizard');
        expect(game.winner()).toBe(player1);
      });

      it('should lose to paper and spock', function() {

        player1.picks('rock');
        player2.picks('paper');
        expect(game.winner()).toBe(player2);
        player1.picks('spock');
        player2.picks('rock');
        expect(game.winner()).toBe(player1);
      });

    });

    describe('paper', function() {

      it('should beat rock and  spock', function() {

        player1.picks('paper');
        player2.picks('rock');
        expect(game.winner()).toBe(player1);
        player1.picks('paper');
        player2.picks('spock');
        expect(game.winner()).toBe(player1)

      });

      it('should lose to scissors and lizard', function() {

        player1.picks('paper');
        player2.picks('scissors');
        expect(game.winner()).toBe(player2);
        player1.picks('paper');
        player2.picks('lizard');
        expect(game.winner()).toBe(player2);
      });

    });

    describe('scissors', function() {

      it('should beat paper and lizard', function() {

        player1.picks('scissors');
        player2.picks('paper');
        expect(game.winner()).toBe(player1);
        player1.picks('lizard');
        player2.picks('scissors');
        expect(game.winner()).toBe(player2);
      });

      it('should lose to rock and to spock', function() {

        player1.picks('scissors');
        player2.picks('rock');
        expect(game.winner()).toBe(player2);
        player1.picks('spock');
        player2.picks('scissors');
        expect(game.winner()).toBe(player1);

      });

    });

  });

  describe('draws', function() {

    describe('any identical picks', function() {

      it('should result in no winner', function() {

        var drawGameResults = ['rock', 'paper', 'scissors','lizard','spock'].map(function(x) {
          player1.picks(x);
          player2.picks(x);
          return game.winner();
        });

        expect(drawGameResults).toEqual(drawGameResults);

      });

    });

  });

});