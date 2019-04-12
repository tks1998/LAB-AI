import { RPiece } from '../../Objects/RPiece';

export class InitGame {
    
    // random posistion chess 
    static RandomPosition(){
        var Rand = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
        var Mask = [] ;
        var Random = [] ;
        for (var element = 0 ; element < Rand.length ; element++)
        {
            while (1)
            {
                var k = Rand[ Math.floor(Math.random() * Rand.length) ];
                if (! (k.toString() in Mask) )
                {
                    Mask.push(k);
                    Random[element] = k ;    
                }
            }
        }
        return Random;
    }
    static RgetRedPieces() {
        var  RedTeam = [[1,1],[1,9],[3,2],[3,8],[1,2],[1,8],[1,3],[1,7],[1,4],[1,6],
        [4,1],[4,3],[4,5],[4,7],[4,9],[1,5]]
        var rand = [] ;
        var random = [];
        rand = this.RandomPosition();
        console.log(random);
        for (var ele = 0 ;ele <RedTeam.length ; ele++)
        {
            random[ele] = RedTeam[ele];
        }
        return [
            new RPiece('j1', random[0],1),
            new RPiece('j2', random[1],1),
            new RPiece('p1', random[2],1),
            new RPiece('p2', random[3],1),
            new RPiece('m1', random[4],1),
            new RPiece('m2', random[5],1),
            new RPiece('x1', random[6],1),
            new RPiece('x2', random[7],1),
            new RPiece('s1', random[8],1),
            new RPiece('s2', random[9],1),
            new RPiece('z1', random[10],1),
            new RPiece('z2', random[11],1),
            new RPiece('z3', random[12],1),
            new RPiece('z4', random[13],1),
            new RPiece('z5', random[14],1),
            new RPiece('k', random[15],1)
        ];
    }

    static RgetBlackPieces() {
        var BlueTeam = [[10, 1],[10, 9], [8, 2],[8, 8],[10, 2],[10, 8],[10, 3],[10, 7],
            [10, 4],[10, 6],[7, 1],[7, 3],[7, 5],[7, 7],[7, 9],[10, 5]];
        var rand = [] ;
        var random = [];
        rand = this.RandomPosition();
        console.log(random);
        for (var ele = 0 ;ele <BlueTeam.length ; ele++)
        {
            random[ele] = BlueTeam[ele];
        }
        return [
            new RPiece('j1', random[0],1),
            new RPiece('j2', random[1],1),
            new RPiece('p1', random[2],1),
            new RPiece('p2', random[3],1),
            new RPiece('m1', random[4],1),
            new RPiece('m2', random[5],1),
            new RPiece('x1', random[6],1),
            new RPiece('x2', random[7],1),
            new RPiece('s1', random[8],1),
            new RPiece('s2', random[9],1),
            new RPiece('z1', random[10],1),
            new RPiece('z2', random[11],1),
            new RPiece('z3', random[12],1),
            new RPiece('z4', random[13],1),
            new RPiece('z5', random[14],1),
            new RPiece('k', random[15],1)
        ];
    }
}
