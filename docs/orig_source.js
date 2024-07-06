(() => {
const shapes = [
    {
        shapeType: 0,
        bins: [
            0b11,
            0b11
        ],
        blockLine: [
            {
                x1: -1,
                y1: 0,
                x2: 0,
                y2: 0
            },
            {
                x1: -1,
                y1: 1,
                x2: 0,
                y2: 1
            },
            {
                x1: -1,
                y1: 0,
                x2: -1,
                y2: 1
            },
            {
                x1: 0,
                y1: 0,
                x2: 0,
                y2: 1
            },
            {
                x1: -1,
                y1: 0.5,
                x2: 0,
                y2: 0.5
            }
        ]
    },
    {
        shapeType: 1,
        bins: [
            0b1,
            0b1,
            0b1,
            0b1
        ],
        blockLine: [
            {
                x1: 0,
                y1: 0,
                x2: 0,
                y2: 3
            }
        ]
    },
    {
        shapeType: 1,
        bins: [
            0b1111
        ],
        blockLine: [
            {
                x1: -3,
                y1: 0,
                x2: 0,
                y2: 0
            }
        ]
    },
    {
        shapeType: 2,
        bins: [
            0b111,
            0b010
        ],
        blockLine: [
            {
                x1: -2,
                y1: 0,
                x2: 0,
                y2: 0
            },
            {
                x1: -1,
                y1: 0,
                x2: -1,
                y2: 1
            }
        ]
    },
    {
        shapeType: 2,
        bins: [
            0b01,
            0b11,
            0b01
        ],
        blockLine: [
            {
                x1: -1,
                y1: 1,
                x2: 0,
                y2: 1
            },
            {
                x1: 0,
                y1: 0,
                x2: 0,
                y2: 2
            }
        ]
    },
    {
        shapeType: 2,
        bins: [
            0b010,
            0b111
        ],
        blockLine: [
            {
                x1: -2,
                y1: 1,
                x2: 0,
                y2: 1
            },
            {
                x1: -1,
                y1: 0,
                x2: -1,
                y2: 1
            }
        ]
    },
    {
        shapeType: 2,
        bins: [
            0b10,
            0b11,
            0b10
        ],
        blockLine: [
            {
                x1: -1,
                y1: 1,
                x2: 0,
                y2: 1
            },
            {
                x1: -1,
                y1: 0,
                x2: -1,
                y2: 2
            }
        ]
    },
    {
        shapeType: 3,
        bins: [
            0b10,
            0b10,
            0b11
        ],
        blockLine: [
            {
                x1: -1,
                y1: 2,
                x2: 0,
                y2: 2
            },
            {
                x1: -1,
                y1: 0,
                x2: -1,
                y2: 2
            }
        ]
    },
    {
        shapeType: 3,
        bins: [
            0b001,
            0b111
        ],
        blockLine: [
            {
                x1: -2,
                y1: 1,
                x2: 0,
                y2: 1
            },
            {
                x1: 0,
                y1: 0,
                x2: 0,
                y2: 1
            }
        ]
    },
    {
        shapeType: 3,
        bins: [
            0b11,
            0b01,
            0b01
        ],
        blockLine: [
            {
                x1: -1,
                y1: 0,
                x2: 0,
                y2: 0
            },
            {
                x1: 0,
                y1: 0,
                x2: 0,
                y2: 2
            }
        ]
    },
    {
        shapeType: 3,
        bins: [
            0b111,
            0b100
        ],
        blockLine: [
            {
                x1: -2,
                y1: 0,
                x2: 0,
                y2: 0
            },
            {
                x1: -2,
                y1: 0,
                x2: -2,
                y2: 1
            }
        ]
    },
    {
        shapeType: 4,
        bins: [
            0b01,
            0b01,
            0b11
        ],
        blockLine: [
            {
                x1: -1,
                y1: 2,
                x2: 0,
                y2: 2
            },
            {
                x1: 0,
                y1: 0,
                x2: 0,
                y2: 2
            }
        ]
    },
    {
        shapeType: 4,
        bins: [
            0b111,
            0b001,
        ],
        blockLine: [
            {
                x1: -2,
                y1: 0,
                x2: 0,
                y2: 0
            },
            {
                x1: 0,
                y1: 0,
                x2: 0,
                y2: 1
            }
        ]
    },
    {
        shapeType: 4,
        bins: [
            0b11,
            0b10,
            0b10
        ],
        blockLine: [
            {
                x1: -1,
                y1: 0,
                x2: 0,
                y2: 0
            },
            {
                x1: -1,
                y1: 0,
                x2: -1,
                y2: 2
            }
        ]
    },
    {
        shapeType: 4,
        bins: [
            0b100,
            0b111
        ],
        blockLine: [
            {
                x1: -2,
                y1: 1,
                x2: 0,
                y2: 1
            },
            {
                x1: -2,
                y1: 0,
                x2: -2,
                y2: 1
            }
        ]
    },
    {
        shapeType: 5,
        bins: [
            0b011,
            0b110
        ],
        blockLine: [
            {
                x1: -1,
                y1: 0,
                x2: 0,
                y2: 0
            },
            {
                x1: -2,
                y1: 1,
                x2: -1,
                y2: 1
            },
            {
                x1: -1,
                y1: 0,
                x2: -1,
                y2: 1
            }
        ]
    },
    {
        shapeType: 5,
        bins: [
            0b10,
            0b11,
            0b01
        ],
        blockLine: [
            {
                x1: -1,
                y1: 1,
                x2: 0,
                y2: 1
            },
            {
                x1: -1,
                y1: 0,
                x2: -1,
                y2: 1
            },
            {
                x1: 0,
                y1: 1,
                x2: 0,
                y2: 2
            }
        ]
    },
    {
        shapeType: 6,
        bins: [
            0b110,
            0b011
        ],
        blockLine: [
            {
                x1: -2,
                y1: 0,
                x2: -1,
                y2: 0
            },
            {
                x1: -1,
                y1: 1,
                x2: 0,
                y2: 1
            },
            {
                x1: -1,
                y1: 0,
                x2: -1,
                y2: 1
            }
        ]
    },
    {
        shapeType: 6,
        bins: [
            0b01,
            0b11,
            0b10
        ],
        blockLine: [
            {
                x1: -1,
                y1: 1,
                x2: 0,
                y2: 1
            },
            {
                x1: -1,
                y1: 1,
                x2: -1,
                y2: 2
            },
            {
                x1: 0,
                y1: 0,
                x2: 0,
                y2: 1
            }
        ]
    }
];
class BitCalc {
    static getFirstIndex(bin) {
        let i = 0;
        while (bin > 0) {
            if (bin & 1) {
                break;
            }
            i++;
            bin >>= 1;
        }
        return i;
    }
    static getCount(bin) {
        let count = 0;
        while (bin > 0) {
            if (bin & 1) {
                count++;
            }
            bin >>= 1;
        }
        return count;
    }
}
class Block {
    static fromFirstMatch(i, shapeIndex) {
        const pi = BitCalc.getFirstIndex(shapes[shapeIndex].bins[0]);
        return Block.make(0, i - pi, shapeIndex);
    }
    static make(j, i, shapeIndex) {
        let block = j;
        block <<= 4;
        block |= i;
        block <<= 8;
        block |= shapeIndex;
        return String.fromCharCode(block);
    }
}
class Tetro {
    static binsToTetro(bins) {
        const sb = [];
        for (let j = 0; j < bins.length; j++) {
            sb.push(String.fromCharCode(bins[j]));
        }
        return sb.join('');
    }
    static getPoints(tetro) {
        const points = [];
        for (let j = 0; j < tetro.length; j++) {
            let bin = tetro.charCodeAt(j);
            let i = 0;
            while (bin > 0) {
                if (bin & 1) {
                    points.push({ x: 9 - 1 - i, y: j });
                }
                i++;
                bin >>= 1;
            }
        }
        return points;
    }
    static tetroToInput(tetro) {
        const sb = [];
        for (let j = 0; j < tetro.length; j++) {
            const bin = tetro.charCodeAt(j);
            sb.push(('0'.repeat(9) + bin.toString(2)).slice(-9));
        }
        return sb.join('\n');
    }
    static getMarginTop(tetro) {
        let mt = 0;
        for (let j = 0; j < tetro.length; j++) {
            if (tetro.charCodeAt(j) != 0) {
                break;
            }
            mt++;
        }
        return mt;
    }
    static getMarginBottom(tetro) {
        let mb = 0;
        for (let j = tetro.length - 1; j >= 0; j--) {
            if (tetro.charCodeAt(j) != 0) {
                break;
            }
            mb++;
        }
        return mb;
    }
    static getMarginRight(tetro) {
        let mr = 9;
        for (let j = 0; j < tetro.length; j++) {
            const m = BitCalc.getFirstIndex(tetro.charCodeAt(j));
            if (m < mr) {
                mr = m;
            }
        }
        return mr;
    }
    static getCount(tetro) {
        let count = 0;
        for (let j = 0; j < tetro.length; j++) {
            count += BitCalc.getCount(tetro.charCodeAt(j));
        }
        return count;
    }
    static strip(tetro) {
        tetro = tetro.slice(Tetro.getMarginTop(tetro), tetro.length - Tetro.getMarginBottom(tetro));
        const mr = Tetro.getMarginRight(tetro);
        const sb = [];
        for (let j = 0; j < tetro.length; j++) {
            sb.push(String.fromCharCode(tetro.charCodeAt(j) >> mr));
        }
        return sb.join('');
    }
    static getMatchedBlock(tetro, j, i) {
        let block = '';
        for (let shapeIndex = 0; shapeIndex < shapes.length; shapeIndex++) {
            const shape = shapes[shapeIndex];
            for (let pj = 0; pj < shape.bins.length; pj++) {
                if (j - pj + shape.bins.length <= tetro.length && pj <= j) {
                    let pBin = shape.bins[pj];
                    let pi = 0;
                    while (pBin > 0) {
                        if (pBin & 1) {
                            if (pi <= i) {
                                let bool = true;
                                for (let sj = 0; sj < shape.bins.length; sj++) {
                                    let sBin = shape.bins[sj];
                                    let bin = tetro.charCodeAt(j - pj + sj);
                                    if (((sBin << (i - pi)) & ~bin) != 0) {
                                        bool = false;
                                        break;
                                    }
                                }
                                if (bool) {
                                    const newBlock = Block.make(j - pj, i - pi, shapeIndex);
                                    if (block.length == 0) {
                                        block = newBlock;
                                    }
                                    else {
                                        return null;
                                    }
                                }
                            }
                        }
                        pi++;
                        pBin >>= 1;
                    }
                }
            }
        }
        return block;
    }
    static getMatchOfFirstPoint(tetro, i) {
        let match = 0;
        for (let shapeIndex = 0; shapeIndex < shapes.length; shapeIndex++) {
            match <<= 1;
            const shape = shapes[shapeIndex];
            const pi = BitCalc.getFirstIndex(shape.bins[0]);
            if (pi <= i || shape.bins.length <= tetro.length) {
                let bool = true;
                for (let sj = 0; sj < shape.bins.length; sj++) {
                    const sBin = shape.bins[sj];
                    const bin = tetro.charCodeAt(sj);
                    if (((sBin << (i - pi)) & ~bin) != 0) {
                        bool = false;
                        break;
                    }
                }
                if (bool) {
                    match |= 1;
                }
            }
        }
        return match;
    }
    static removeBlock(tetro, block) {
        const blockCode = block.charCodeAt(0);
        const j = (blockCode >> 12) & 0b1111;
        const i = (blockCode >> 8) & 0b1111;
        const shapeIndex = blockCode & 0b11111111;
        const shape = shapes[shapeIndex];
        const sb = [tetro.slice(0, j)];
        for (let sj = 0; sj < shape.bins.length; sj++) {
            const sBin = shape.bins[sj];
            const bin = tetro.charCodeAt(j + sj);
            sb.push(String.fromCharCode(bin & ~(sBin << i)));
        }
        sb.push(tetro.slice(j + shape.bins.length));
        return sb.join('');
    }
    static scanGetBlock(tetro) {
        if (Tetro.scanMap.has(tetro)) {
            return Tetro.scanMap.get(tetro);
        }
        for (let j = 0; j < tetro.length; j++) {
            let bin = tetro.charCodeAt(j);
            let i = 0;
            while (bin > 0) {
                if (bin & 1) {
                    const block = Tetro.getMatchedBlock(tetro, j, i);
                    if (block != null) {
                        if (block.length == 0) {
                            Tetro.scanMap.set(tetro, '');
                            return '';
                        }
                        Tetro.scanMap.set(tetro, block);
                        return block;
                    }
                }
                i++;
                bin >>= 1;
            }
        }
        Tetro.scanMap.set(tetro, null);
        return null;
    }
    static getSolutionList(tetro_) {
        const solutions = [];
        function buildSolution(tetro, solution) {
            tetro = Tetro.strip(tetro);
            if (tetro == '') {
                solutions.push(solution);
                return true;
            }
            const scanBlock = Tetro.scanGetBlock(tetro);
            if (scanBlock == null) {
                const i = BitCalc.getFirstIndex(tetro.charCodeAt(0));
                let match = Tetro.cmMap.get(tetro);
                if (match !== undefined) {
                    let shapeIndex = shapes.length - 1;
                    while (match > 0) {
                        if (match & 1) {
                            const block = Block.fromFirstMatch(i, shapeIndex);
                            buildSolution(Tetro.removeBlock(tetro, block), solution + block);
                        }
                        shapeIndex--;
                        match >>= 1;
                    }
                    return true;
                }
                let completeMatch = 0;
                match = Tetro.getMatchOfFirstPoint(tetro, i);
                let shapeIndex = shapes.length - 1;
                while (match > 0) {
                    if (match & 1) {
                        const block = Block.fromFirstMatch(i, shapeIndex);
                        if (buildSolution(Tetro.removeBlock(tetro, block), solution + block)) {
                            completeMatch |= 1 << (shapes.length - 1 - shapeIndex);
                        }
                    }
                    shapeIndex--;
                    match >>= 1;
                }
                if (completeMatch > 0) {
                    Tetro.cmMap.set(tetro, completeMatch);
                    return true;
                }
                return false;
            }
            if (scanBlock.length == 0) {
                return false;
            }
            return buildSolution(Tetro.removeBlock(tetro, scanBlock), solution + scanBlock);
        }
        buildSolution(tetro_, '');
        return solutions;
    }
    static getSolutionMapList(tetro) {
        if (Tetro.getCount(tetro) % 4 != 0) {
            return [];
        }
        const solMap = new Map();
        const sols = Tetro.getSolutionList(tetro);
        for (let i = 0; i < sols.length; i++) {
            const sol = sols[i];
            let cb = [0, 0, 0, 0, 0, 0, 0];
            for (let j = 0; j < sol.length; j++) {
                const blockCode = sol.charCodeAt(j);
                const shapeIndex = blockCode & 0b11111111;
                const shapeType = shapes[shapeIndex].shapeType;
                cb[shapeType]++;
            }
            const key = String.fromCharCode(...cb);
            let arr;
            if (solMap.has(key)) {
                arr = solMap.get(key);
            }
            else {
                arr = [];
                solMap.set(key, arr);
            }
            arr.push(sol);
        }
        return [...solMap.entries()].sort();
    }
    static solutionToBlockLines(tetro, solution) {
        const res = [];
        let tpj = 0;
        let tpi = 0;
        for (let k = 0; k < solution.length; k++) {
            const mt = Tetro.getMarginTop(tetro);
            const mb = Tetro.getMarginBottom(tetro);
            tetro = tetro.slice(mt, tetro.length - mb);
            tpj += mt;
            const mr = Tetro.getMarginRight(tetro);
            tpi += mr;
            const sb = [];
            for (let j = 0; j < tetro.length; j++) {
                sb.push(String.fromCharCode(tetro.charCodeAt(j) >> mr));
            }
            tetro = sb.join('');
            tetro = Tetro.removeBlock(tetro, solution[k]);
            const blockCode = solution.charCodeAt(k);
            const j = (blockCode >> 12) & 0b1111;
            const i = (blockCode >> 8) & 0b1111;
            const shapeIndex = blockCode & 0b11111111;
            const shape = shapes[shapeIndex];
            const blockLine = [];
            for (let l = 0; l < shape.blockLine.length; l++) {
                const line = shape.blockLine[l];
                blockLine.push({
                    x1: 9 - 1 - tpi - i + line.x1,
                    y1: tpj + j + line.y1,
                    x2: 9 - 1 - tpi - i + line.x2,
                    y2: tpj + j + line.y2
                });
            }
            res.push(blockLine);
        }
        return res;
    }
}
Tetro.cmMap = new Map();
Tetro.scanMap = new Map();
const presets = [
    [
        "ひよこ",
        Tetro.binsToTetro([
            0b000000000, 0b000000000, 0b000000000, 0b000100000, 0b001100010,
            0b000110110, 0b000111100, 0b000011100, 0b000001000
        ])
    ],
    [
        "鶏",
        Tetro.binsToTetro([
            0b000000000, 0b001100000, 0b011100001, 0b001110011, 0b001111111,
            0b001111111, 0b000111110, 0b000011100, 0b000111000
        ])
    ],
    [
        "ドーベルマン",
        Tetro.binsToTetro([
            0b011000000, 0b111000000, 0b011000000, 0b011000000, 0b011111111,
            0b011111110, 0b011000110, 0b011000110, 0b011000110
        ])
    ],
    [
        "ペンギン",
        Tetro.binsToTetro([
            0b000011000, 0b000111000, 0b000111100, 0b000111000, 0b001111100,
            0b011111110, 0b010111010, 0b000111000, 0b001101100
        ])
    ],
    [
        "幽霊",
        Tetro.binsToTetro([
            0b000011000, 0b000111100, 0b001111110, 0b001101010, 0b101101011,
            0b111111111, 0b111111110, 0b011111100, 0b000111000
        ])
    ],
    [
        "カニ",
        Tetro.binsToTetro([
            0b111000111, 0b100000001, 0b110101011, 0b010101010, 0b011111110,
            0b001111100, 0b001111100, 0b011111110, 0b010000010
        ])
    ],
    [
        "メロン",
        Tetro.binsToTetro([
            0b000111000, 0b000010000, 0b000111000, 0b001111100, 0b011111110,
            0b011101110, 0b011111110, 0b001111100, 0b000111000
        ])
    ],
    [
        "鹿",
        Tetro.binsToTetro([
            0b000100100, 0b000111110, 0b000000111, 0b000001111, 0b001111110,
            0b011111100, 0b111111100, 0b101101100, 0b001000100
        ])
    ],
    [
        "サボテン",
        Tetro.binsToTetro([
            0b001000000, 0b011010100, 0b011010110, 0b011111110, 0b001111100,
            0b000010000, 0b011111110, 0b001111100, 0b001111100
        ])
    ],
    [
        "象",
        Tetro.binsToTetro([
            0b110000000, 0b100110000, 0b101111000, 0b111111000, 0b111111110,
            0b001111111, 0b001111111, 0b001111110, 0b001100110
        ])
    ],
    [
        "十字架",
        Tetro.binsToTetro([
            0b000111000, 0b000111000, 0b000111000, 0b111111111, 0b111101111,
            0b111111111, 0b000111000, 0b000111000, 0b000111000
        ])
    ],
    [
        "フェイスペイント",
        Tetro.binsToTetro([
            0b000111000, 0b001111100, 0b011111110, 0b010010010, 0b011101110,
            0b011101110, 0b011111110, 0b001101100, 0b000111000
        ])
    ],
    [
        "穴の開いたハート",
        Tetro.binsToTetro([
            0b001000100, 0b011101110, 0b111111111, 0b111101111, 0b111101111,
            0b011101110, 0b001111100, 0b000111000, 0b000010000
        ])
    ],
    [
        "家",
        Tetro.binsToTetro([
            0b000111000, 0b001111100, 0b011111110, 0b111111111, 0b110011111,
            0b010011110, 0b011110010, 0b011111010, 0b011110010
        ])
    ],
    [
        "やかん",
        Tetro.binsToTetro([
            0b000010000, 0b000111000, 0b110111100, 0b011111111, 0b011111101,
            0b001111111, 0b001111100, 0b000111000, 0b001101100
        ])
    ],
    [
        "つるはし",
        Tetro.binsToTetro([
            0b000111110, 0b011111100, 0b011100000, 0b111110000, 0b110111000,
            0b110011100, 0b110001110, 0b100000111, 0b000000011
        ])
    ],
    [
        "太古の亡霊",
        Tetro.binsToTetro([
            0b000111000, 0b001111100, 0b001111110, 0b011101010, 0b011101010,
            0b011101010, 0b011111110, 0b010101010, 0b010101010
        ])
    ],
    [
        "ヘリコプター",
        Tetro.binsToTetro([
            0b000000000, 0b111101111, 0b000010000, 0b000111100, 0b101111010,
            0b111111111, 0b101111111, 0b000100100, 0b001111110
        ])
    ],
    [
        "ラクダ",
        Tetro.binsToTetro([
            0b001000000, 0b111001100, 0b111011110, 0b011111111, 0b011111111,
            0b001111111, 0b000110011, 0b000100001, 0b000100001
        ])
    ],
    [
        "リス",
        Tetro.binsToTetro([
            0b001000100, 0b111000110, 0b111000111, 0b011100111, 0b111110111,
            0b011110111, 0b001111110, 0b000111100, 0b001111000
        ])
    ],
    [
        "蝶々",
        Tetro.binsToTetro([
            0b100000001, 0b100000001, 0b111010111, 0b011111110, 0b011111110,
            0b001111100, 0b011111110, 0b011010110, 0b001000100
        ])
    ],
    [
        "猫",
        Tetro.binsToTetro([
            0b001010000, 0b001110000, 0b001110000, 0b000100010, 0b001110011,
            0b011111001, 0b011111101, 0b011111111, 0b001111000
        ])
    ],
    [
        "オウム",
        Tetro.binsToTetro([
            0b000111000, 0b001110100, 0b011111110, 0b011110010, 0b011111000,
            0b011111000, 0b011111000, 0b001111000, 0b000110000
        ])
    ],
    [
        "魚",
        Tetro.binsToTetro([
            0b000010000, 0b000111000, 0b001011101, 0b011111111, 0b111111111,
            0b011111111, 0b001111101, 0b000111000, 0b000010000
        ])
    ],
    [
        "帆船",
        Tetro.binsToTetro([
            0b000011000, 0b000011100, 0b000011110, 0b000011000, 0b000010000,
            0b111111111, 0b011111110, 0b011111110, 0b001111100
        ])
    ],
    [
        "ウサギ",
        Tetro.binsToTetro([
            0b011101110, 0b010101010, 0b011101110, 0b011111110, 0b110111011,
            0b110111011, 0b111111111, 0b011101110, 0b001101100
        ])
    ],
    [
        "スズメ",
        Tetro.binsToTetro([
            0b000000100, 0b100001110, 0b110011111, 0b111011110, 0b111111110,
            0b011111100, 0b001111000, 0b111110000, 0b110000000
        ])
    ],
    [
        "太陽と月",
        Tetro.binsToTetro([
            0b000011100, 0b000101110, 0b001110111, 0b011111011, 0b111111011,
            0b011111011, 0b001110111, 0b000101110, 0b000011100
        ])
    ],
    [
        "雫",
        Tetro.binsToTetro([
            0b000010000, 0b000111000, 0b001111100, 0b011111110, 0b010111110,
            0b010011110, 0b011001110, 0b001111100, 0b000111000
        ])
    ],
    [
        "キノコ",
        Tetro.binsToTetro([
            0b000111000, 0b001101100, 0b011010110, 0b010111010, 0b011111110,
            0b000111000, 0b000111000, 0b000111000, 0b000111000
        ])
    ],
    [
        "傘",
        Tetro.binsToTetro([
            0b000111000, 0b001111100, 0b011111110, 0b111111111, 0b100111001,
            0b000010000, 0b000010000, 0b001010000, 0b001110000
        ])
    ],
    [
        "クジラ",
        Tetro.binsToTetro([
            0b111110000, 0b011100000, 0b001000000, 0b011110000, 0b111111001,
            0b101111011, 0b111111111, 0b011111011, 0b000000001
        ])
    ],
    [
        "白鳥",
        Tetro.binsToTetro([
            0b011000000, 0b111000000, 0b001000000, 0b001000000, 0b001011100,
            0b001111110, 0b001100011, 0b001111011, 0b000110111
        ])
    ],
    [
        "ワシ",
        Tetro.binsToTetro([
            0b000010000, 0b000110000, 0b000010000, 0b111010111, 0b110111011,
            0b011010110, 0b001111100, 0b000111000, 0b000010000
        ])
    ],
    [
        "アリ",
        Tetro.binsToTetro([
            0b000001110, 0b000001000, 0b000001011, 0b000001110, 0b000001110,
            0b111001110, 0b111111000, 0b111111100, 0b101010100
        ])
    ],
    [
        "ダチョウ",
        Tetro.binsToTetro([
            0b010000000, 0b110001100, 0b010111110, 0b011111111, 0b001111110,
            0b000011100, 0b000001000, 0b000001000, 0b000011000
        ])
    ],
    [
        "キツネ",
        Tetro.binsToTetro([
            0b000101000, 0b001111100, 0b011111110, 0b011010110, 0b011010110,
            0b011111110, 0b001111100, 0b000111000, 0b000010000
        ])
    ],
    [
        "フクロウ",
        Tetro.binsToTetro([
            0b100000001, 0b111111111, 0b100010001, 0b100010001, 0b100010001,
            0b111111111, 0b111101111, 0b011101110, 0b001111100
        ])
    ],
    [
        "ソード",
        Tetro.binsToTetro([
            0b000000011, 0b000000111, 0b010001110, 0b011011100, 0b001101000,
            0b001110000, 0b011111000, 0b111001100, 0b110000000
        ])
    ],
    [
        "カエル",
        Tetro.binsToTetro([
            0b011101110, 0b010101010, 0b010101010, 0b011111110, 0b111111111,
            0b111111111, 0b111111011, 0b011000110, 0b001111100
        ])
    ],
    [
        "アットホームな家",
        Tetro.binsToTetro([
            0b000010000, 0b000111000, 0b001111100, 0b011111110, 0b111111111,
            0b010011110, 0b010010010, 0b011110110, 0b011110010
        ])
    ],
    [
        "ネイトラム",
        Tetro.binsToTetro([
            0b000101000, 0b001101100, 0b000101000, 0b011111110, 0b010111010,
            0b111010111, 0b111111111, 0b011000110, 0b001101100
        ])
    ],
    [
        "真・ネイトラム",
        Tetro.binsToTetro([
            0b001000100, 0b011000110, 0b001101100, 0b000101000, 0b001111100,
            0b011010110, 0b111111111, 0b011000110, 0b001111100
        ])
    ],
    [
        "プロトMk-XⅢ",
        Tetro.binsToTetro([
            0b000000100, 0b000111100, 0b001111110, 0b010111010, 0b011111110,
            0b011111110, 0b011010110, 0b011111110, 0b001000100
        ])
    ],
    [
        "真・プロトMk-XⅢ",
        Tetro.binsToTetro([
            0b110010011, 0b111111111, 0b011111110, 0b010010010, 0b111000111,
            0b011101110, 0b011101110, 0b111111111, 0b110010011
        ])
    ],
    [
        "ヴォルネーク",
        Tetro.binsToTetro([
            0b100111001, 0b110101011, 0b110101011, 0b110101011, 0b100111001,
            0b001111100, 0b001010100, 0b001111100, 0b000111000
        ])
    ],
    [
        "真・ヴォルネーク",
        Tetro.binsToTetro([
            0b000111000, 0b001101100, 0b011111110, 0b010010111, 0b000000111,
            0b010010111, 0b011111111, 0b000000111, 0b000000011
        ])
    ],
    [
        "[SP]ネイトラム",
        Tetro.binsToTetro([
            0b100000001, 0b111101111, 0b001101100, 0b001000100, 0b011111110,
            0b110010011, 0b111111111, 0b011010110, 0b001000100
        ])
    ],
    [
        "[SP]プロトMk-XⅢ",
        Tetro.binsToTetro([
            0b001010100, 0b001010100, 0b011111110, 0b010110010, 0b010010110,
            0b011111110, 0b011111110, 0b111111111, 0b100100101
        ])
    ],
    [
        "[SP]ヴォルネーク",
        Tetro.binsToTetro([
            0b000000110, 0b000001111, 0b001100001, 0b011111001, 0b000011001,
            0b011001111, 0b111100011, 0b000111111, 0b000001111
        ])
    ],
    [
        "ギアンティ",
        Tetro.binsToTetro([
            0b111000111, 0b001101100, 0b111101111, 0b010111010, 0b011111110,
            0b100111001, 0b110111011, 0b011111110, 0b000111000
        ])
    ],
    [
        "ヴァルカン",
        Tetro.binsToTetro([
            0b111101111, 0b111101111, 0b111111111, 0b111111111, 0b010010010,
            0b111010111, 0b011111110, 0b001000100, 0b011111110
        ])
    ],
    [
        "シルバッド",
        Tetro.binsToTetro([
            0b000111000, 0b011111110, 0b111111111, 0b111010111, 0b110101011,
            0b111111111, 0b011111110, 0b111010111, 0b101010101
        ])
    ],
    [
        "カリアの幻影",
        Tetro.binsToTetro([
            0b111010111, 0b001010100, 0b111010111, 0b100010001, 0b111111111,
            0b111010111, 0b001111100, 0b000111000, 0b001101100
        ])
    ],
    [
        "蒼の女神像",
        Tetro.binsToTetro([
            0b000010000, 0b110111011, 0b111111111, 0b011111110, 0b011010110,
            0b011111110, 0b011000110, 0b111111111, 0b000111000
        ])
    ],
    [
        "ザレンフォス",
        Tetro.binsToTetro([
            0b111110000, 0b100111000, 0b001101100, 0b011101110, 0b111010111,
            0b111111111, 0b110101011, 0b010101010, 0b011111110
        ])
    ],
    [
        "アルゴス",
        Tetro.binsToTetro([
            0b000001100, 0b001111110, 0b000001111, 0b000111001, 0b000001001,
            0b100001111, 0b101001111, 0b101001111, 0b111111111
        ])
    ],
    [
        "プロトMk-Ⅳ",
        Tetro.binsToTetro([
            0b111101111, 0b101101101, 0b110111011, 0b011111110, 0b000111000,
            0b000111000, 0b111101111, 0b100000001, 0b110000011
        ])
    ],
    [
        "アルドール",
        Tetro.binsToTetro([
            0b110000011, 0b111000111, 0b001101100, 0b100111001, 0b111111111,
            0b100111001, 0b110010011, 0b011111110, 0b000111000
        ])
    ],
    [
        "使用人のランプ",
        Tetro.binsToTetro([
            0b000010000, 0b000111000, 0b111111111, 0b101111110, 0b101111110,
            0b011111100, 0b000111000, 0b000010000, 0b000111000
        ])
    ],
    [
        "黄昏の魔人",
        Tetro.binsToTetro([
            0b001111100, 0b101111101, 0b101111101, 0b111111111, 0b010010010,
            0b011010110, 0b011111110, 0b011000110, 0b001111100
        ])
    ],
    [
        "ヤシの木の島",
        Tetro.binsToTetro([
            0b000000110, 0b001111100, 0b011010000, 0b000010000, 0b000010000,
            0b000111000, 0b001111100, 0b011111110, 0b111111111
        ])
    ],
    [
        "クラーケン",
        Tetro.binsToTetro([
            0b000111000, 0b001111101, 0b101010101, 0b101111111, 0b111111100,
            0b001111110, 0b011010010, 0b010011010, 0b110001011
        ])
    ],
    [
        "ウィッチハット",
        Tetro.binsToTetro([
            0b000001111, 0b000011100, 0b000111100, 0b001111000, 0b011111110,
            0b110000011, 0b100000001, 0b111111111, 0b011111110
        ])
    ],
    [
        "カボチャ",
        Tetro.binsToTetro([
            0b000010000, 0b011111110, 0b110111011, 0b100010001, 0b111111111,
            0b101010101, 0b110000011, 0b011111110, 0b001111100
        ])
    ],
    [
        "シリウス",
        Tetro.binsToTetro([
            0b000111000, 0b001111100, 0b011100110, 0b111001111, 0b111011111,
            0b111001111, 0b011100110, 0b001111100, 0b000111000
        ])
    ],
    [
        "魔毒兵器イオス",
        Tetro.binsToTetro([
            0b010010010, 0b110010011, 0b111111111, 0b101101101, 0b100111001,
            0b100010001, 0b001111100, 0b001000100, 0b001000100
        ])
    ],
    [
        "守護者",
        Tetro.binsToTetro([
            0b000000011, 0b000000111, 0b001100101, 0b011110111, 0b111111100,
            0b111111100, 0b111111100, 0b111111100, 0b110011000
        ])
    ],
    [
        "8分音符",
        Tetro.binsToTetro([
            0b000001100, 0b000001100, 0b000001110, 0b000001011, 0b000001001,
            0b011101000, 0b111111000, 0b111111000, 0b011110000
        ])
    ],
    [
        "走る",
        Tetro.binsToTetro([
            0b000011000, 0b000011001, 0b001111101, 0b111111111, 0b100111000,
            0b100010000, 0b000111100, 0b000100100, 0b011100100
        ])
    ],
    [
        "トロフィー",
        Tetro.binsToTetro([
            0b011000110, 0b010111010, 0b010111010, 0b011111110, 0b001111100,
            0b000111000, 0b000111000, 0b000010000, 0b000111000
        ])
    ],
    [
        "アクアリスの城",
        Tetro.binsToTetro([
            0b000010000, 0b000111000, 0b100111001, 0b110111011, 0b110010011,
            0b110111011, 0b111101111, 0b111101111, 0b111101111
        ])
    ]
];
class SVG {
    static create(tag, attr) {
        const el = document.createElementNS('http://www.w3.org/2000/svg', tag);
        for (const key in attr) {
            el.setAttributeNS(null, key, attr[key]);
        }
        return el;
    }
    static drawBlock(group, blockLine, attr, size, offset) {
        for (let i = 0; i < blockLine.length; i++) {
            const line = blockLine[i];
            group.appendChild(SVG.create('line', Object.assign(Object.assign({}, attr), { x1: line.x1 * size + offset.x, y1: line.y1 * size + offset.y, x2: line.x2 * size + offset.x, y2: line.y2 * size + offset.y })));
        }
    }
}
class MainSVG {
    static init() {
        const el = this.getTetroGroup();
        for (let y = 0; y < 9; y++) {
            for (let x = 0; x < 9; x++) {
                const rect = this.createRect({
                    x: x * 100,
                    y: y * 100,
                    width: 100,
                    height: 100,
                    stroke: 'none'
                });
                el.appendChild(rect);
                rect.addEventListener('click', (e) => {
                    if (!this.customMode) {
                        return;
                    }
                    e.currentTarget.classList.toggle('_active');
                    this.customTetro = this.readTetro();
                    Dom.onChangeTetro();
                });
            }
        }
        for (let x = 0; x <= 9; x++) {
            const line = SVG.create('line', {
                x1: x * 100,
                y1: 0,
                x2: x * 100,
                y2: 9 * 100,
                stroke: 'black',
                'stroke-width': 1
            });
            el.appendChild(line);
        }
        for (let y = 0; y <= 9; y++) {
            const line = SVG.create('line', {
                x1: 0,
                y1: y * 100,
                x2: 9 * 100,
                y2: y * 100,
                stroke: 'black',
                'stroke-width': 1
            });
            el.appendChild(line);
        }
    }
    static readTetro() {
        const rects = this.getTetroGroup().children;
        const bins = [];
        for (let y = 0; y < 9; y++) {
            let bin = 0;
            for (let x = 0; x < 9; x++) {
                bin <<= 1;
                if (rects.item(y * 9 + x).classList.contains('_active')) {
                    bin |= 1;
                }
            }
            bins.push(bin);
        }
        return Tetro.binsToTetro(bins);
    }
    static drawTetro(tetro) {
        this.getSolutionGroup().innerHTML = '';
        const rects = this.getTetroGroup().children;
        for (let i = 0; i < rects.length; i++) {
            rects.item(i).classList.remove('_active');
        }
        const points = Tetro.getPoints(tetro);
        for (let i = 0; i < points.length; i++) {
            const { x, y } = points[i];
            rects.item(y * 9 + x).classList.add('_active');
        }
    }
    static drawSolution(tetro, solution) {
        this.getSolutionGroup().innerHTML = '';
        const blockLines = Tetro.solutionToBlockLines(tetro, solution);
        for (let i = 0; i < blockLines.length; i++) {
            const blockLine = blockLines[i];
            SVG.drawBlock(this.getSolutionGroup(), blockLine, {
                'stroke-width': 80,
                'stroke-linecap': 'square'
            }, 100, { x: 50, y: 50 });
        }
    }
    static getTetroGroup() {
        return document.getElementById('_group_tetro');
    }
    static getSolutionGroup() {
        return document.getElementById('_group_solution');
    }
    static createRect(attr) {
        return SVG.create('rect', attr);
    }
}
MainSVG.customMode = false;
MainSVG.customTetro = Tetro.binsToTetro([0, 0, 0, 0, 0, 0, 0, 0, 0]);
class MainRange {
    static init() {
        const range = this.getRange();
        range.max = `${presets.length - 1}`;
        this.getLabel().innerHTML = `1/${presets.length}`;
        range.addEventListener('input', () => {
            const _range = this.getRange();
            const i = parseInt(_range.value);
            this.getLabel().innerHTML = `${i + 1}/${presets.length}`;
            const _select = this.getSelect();
            _select.selectedIndex = i;
            CustomInput.setCheckbox(false);
            Dom.onChangeTetro();
        });
        this.getButton().addEventListener('click', () => {
            this.calculate();
        });
        this.getButtonLeft().addEventListener('click', () => {
            const _range = this.getRange();
            let i = parseInt(_range.value);
            if (i == 0) {
                i = parseInt(_range.max);
            }
            else {
                i -= 1;
            }
            _range.value = i.toString();
            _range.dispatchEvent(new Event('input'));
        });
        this.getButtonRight().addEventListener('click', () => {
            const _range = this.getRange();
            let i = parseInt(_range.value);
            if (i == parseInt(_range.max)) {
                i = 0;
            }
            else {
                i += 1;
            }
            _range.value = i.toString();
            _range.dispatchEvent(new Event('input'));
        });
        const select = this.getSelect();
        presets.forEach((preset, i) => {
            const option = document.createElement('option');
            option.value = i.toString();
            option.text = preset[0];
            select.add(option);
        });
        select.addEventListener('input', () => {
            const _select = this.getSelect();
            const i = _select.selectedIndex;
            this.getLabel().innerHTML = `${i + 1}/${presets.length}`;
            this.getRange().value = i.toString();
            CustomInput.setCheckbox(false);
            Dom.onChangeTetro();
        });
    }
    static calculate() {
        const tetro = Dom.getTetro();
        if (Tetro.getCount(tetro) % 4 != 0) {
            alert(`マス数は4の倍数である必要があります。あと${4 - (Tetro.getCount(tetro) % 4)}マス選んでください.`);
            return;
        }
        ResultTable.onCalculate(tetro);
    }
    static getIndex() {
        return parseInt(this.getRange().value);
    }
    static getRange() {
        return document.getElementById('_range_main');
    }
    static getLabel() {
        return document.getElementById('_label_main');
    }
    static getButton() {
        return document.getElementById('_button_main');
    }
    static getButtonLeft() {
        return document.getElementById('_button_preset_left');
    }
    static getButtonRight() {
        return document.getElementById('_button_preset_right');
    }
    static getSelect() {
        return document.getElementById('_select_puzzle_name');
    }
}
class ResultTable {
    static init() {
        this.initHeader();
        this.initSort();
        this.initFilter();
    }
    static initHeader() {
        const groups = this.getHeaderShapeGroups();
        const size = 25;
        const attr = { 'stroke-width': size, 'stroke-linecap': 'square', class: '_table_block' };
        SVG.drawBlock(groups[0], shapes[0].blockLine, attr, size, { x: 62.5, y: 37.5 });
        SVG.drawBlock(groups[1], shapes[1].blockLine, attr, size, { x: 50, y: 12.5 });
        SVG.drawBlock(groups[2], shapes[4].blockLine, attr, size, { x: 62.5, y: 25 });
        SVG.drawBlock(groups[3], shapes[9].blockLine, attr, size, { x: 62.5, y: 25 });
        SVG.drawBlock(groups[4], shapes[13].blockLine, attr, size, { x: 62.5, y: 25 });
        SVG.drawBlock(groups[5], shapes[16].blockLine, attr, size, { x: 62.5, y: 25 });
        SVG.drawBlock(groups[6], shapes[18].blockLine, attr, size, { x: 62.5, y: 25 });
    }
    static initSort() {
        this.getHeaderSortTds().forEach((el, i) => {
            el.addEventListener('click', () => {
                this.sortState[i] = !this.sortState[i];
                this.onToggleSort(i);
            });
        });
    }
    static onToggleSort(i) {
        if (this.sortState[i]) {
            this.solMapList.sort((a, b) => a[0].charCodeAt(i) - b[0].charCodeAt(i));
            this.keyList.sort((a, b) => a.charCodeAt(i) - b.charCodeAt(i));
        }
        else {
            this.solMapList.sort((a, b) => b[0].charCodeAt(i) - a[0].charCodeAt(i));
            this.keyList.sort((a, b) => b.charCodeAt(i) - a.charCodeAt(i));
        }
        this.getHeaderSortTds().forEach((el, i) => (el.innerHTML = this.sortState[i] ? '▲' : '▼'));
        this.buildBody();
        this.getTableBody().scrollTo({ top: 0 });
    }
    static initFilter() {
        this.getMinFilters().forEach((el, i) => {
            el.addEventListener('input', (e) => {
                const el = e.currentTarget;
                this.filterState[i][0] = parseInt(el.value);
                this.onChangeFilter();
            });
        });
        this.getMaxFilters().forEach((el, i) => {
            el.addEventListener('input', (e) => {
                const el = e.currentTarget;
                this.filterState[i][1] = parseInt(el.value);
                this.onChangeFilter();
            });
        });
    }
    static onChangeFilter() {
        this.keyList = this.solMapList.reduce((arr, item) => {
            for (let i = 0; i < this.filterState.length; i++) {
                const n = item[0].charCodeAt(i);
                const fMin = this.filterState[i][0];
                const fMax = this.filterState[i][1];
                if (n < fMin || n > fMax) {
                    return arr;
                }
            }
            arr.push(item[0]);
            return arr;
        }, []);
        this.buildBody();
    }
    static reset() {
        this.solMapList = [];
        this.keyList = [];
        this.selectedIndex = 0;
        this.sortState.forEach((_v, i, arr) => (arr[i] = true));
        this.getHeaderSortTds().forEach((el) => (el.innerHTML = '▲'));
        this.filterState.forEach((_v, i, arr) => ((arr[i][0] = 0), (arr[i][1] = 0)));
        this.getMinFilters().forEach((el) => {
            el.min = '0';
            el.max = '0';
            el.value = '0';
        });
        this.getMaxFilters().forEach((el) => {
            el.min = '0';
            el.max = '0';
            el.value = '0';
        });
        this.getTableBody().innerHTML = '';
        ArrangementRange.reset();
    }
    static buildBody() {
        const tBody = this.getTableBody();
        tBody.innerHTML = '';
        for (let j = 0; j < this.keyList.length; j++) {
            const key = this.keyList[j];
            const row = document.createElement('tr');
            const cell = document.createElement('td');
            cell.innerHTML = `${j + 1}`;
            row.appendChild(cell);
            for (let i = 0; i < key.length; i++) {
                const cell = document.createElement('td');
                const n = key.charCodeAt(i);
                cell.innerHTML = `${n == 0 ? '' : n}`;
                row.appendChild(cell);
            }
            const key_ = key;
            row.addEventListener('click', () => {
                this.onClickRow(key_);
            });
            tBody.appendChild(row);
        }
        this.selectedIndex = 0;
        this.onChangeSelect();
    }
    static onClickRow(key) {
        this.selectedIndex = this.keyList.indexOf(key);
        this.onChangeSelect();
    }
    static onChangeSelect() {
        if (this.keyList.length == 0) {
            Dom.onChangeSols([]);
            return;
        }
        const el = document.getElementsByClassName('_selected').item(0);
        el === null || el === void 0 ? void 0 : el.classList.remove('_selected');
        this.getTableBody().children.item(this.selectedIndex).classList.add('_selected');
        Dom.onChangeSols(this.getCurrentSols());
    }
    static onCalculate(tetro) {
        this.sortState.forEach((_v, i, arr) => (arr[i] = true));
        this.getHeaderSortTds().forEach((el) => (el.innerHTML = '▲'));
        this.filterState.forEach((_v, i, arr) => ((arr[i][0] = 0), (arr[i][1] = 0)));
        this.getMinFilters().forEach((el) => (el.value = '0'));
        this.getMaxFilters().forEach((el) => (el.value = '0'));
        this.solMapList = Tetro.getSolutionMapList(tetro);
        this.keyList = this.solMapList.map((item) => item[0]);
        this.buildBody();
        this.setMinMax();
    }
    static setMinMax() {
        if (this.solMapList.length == 0) {
            return;
        }
        const min = [100, 100, 100, 100, 100, 100, 100];
        const max = [0, 0, 0, 0, 0, 0, 0];
        this.solMapList.forEach((item) => {
            const key = item[0];
            for (let i = 0; i < key.length; i++) {
                const n = key.charCodeAt(i);
                if (n < min[i]) {
                    min[i] = n;
                }
                if (n > max[i]) {
                    max[i] = n;
                }
            }
        });
        this.filterState.forEach((_v, i, arr) => ((arr[i][0] = min[i]), (arr[i][1] = max[i])));
        this.getMinFilters().forEach((el, i) => {
            el.min = `${min[i]}`;
            el.max = `${max[i]}`;
            el.value = `${min[i]}`;
        });
        this.getMaxFilters().forEach((el, i) => {
            el.min = `${min[i]}`;
            el.max = `${max[i]}`;
            el.value = `${max[i]}`;
        });
    }
    static getCurrentSols() {
        const key = this.keyList[this.selectedIndex];
        return this.solMapList.find((item) => item[0] == key)[1];
    }
    static getTds(trId) {
        const tr = document.getElementById(trId);
        const els = [...tr.children];
        els.shift();
        return els;
    }
    static getHeaderShapeGroups() {
        return this.getTds('_tr_shape').map((el) => el.firstElementChild.firstElementChild);
    }
    static getHeaderSortTds() {
        return this.getTds('_tr_sort');
    }
    static getTableBody() {
        return document.getElementById('_table_body');
    }
    static getMinFilters() {
        return this.getTds('_tr_min_filter').map((el) => el.firstElementChild);
    }
    static getMaxFilters() {
        return this.getTds('_tr_max_filter').map((el) => el.firstElementChild);
    }
}
ResultTable.sortState = [true, true, true, true, true, true, true];
ResultTable.filterState = [
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0]
];
ResultTable.solMapList = [];
ResultTable.keyList = [];
ResultTable.selectedIndex = 0;
class ArrangementRange {
    static init() {
        this.getRange().addEventListener('input', (e) => {
            const range = e.currentTarget;
            const index = parseInt(range.value);
            this.getLabel().innerHTML = `${index + 1}/${this.sols.length}`;
            Dom.onChangeArrange(index);
        });
    }
    static reset() {
        this.setVisible(false);
        this.getRange().value = '0';
    }
    static applySols(sols) {
        this.sols = sols;
        this.getRange().value = '0';
        this.getRange().max = `${sols.length - 1}`;
        if (sols.length == 0) {
            this.setVisible(false);
            MainSVG.drawSolution(Dom.getTetro(), '');
        }
        else {
            if (sols.length == 1) {
                this.setVisible(false);
            }
            else {
                this.getLabel().innerHTML = `1/${sols.length}`;
                this.setVisible(true);
            }
            Dom.onChangeArrange(0);
        }
    }
    static getRange() {
        return document.getElementById('_range_arrangement');
    }
    static getLabel() {
        return document.getElementById('_label_arrangement');
    }
    static setVisible(bool) {
        const div = document.getElementById('_div_arrangement_control');
        div.style.visibility = bool ? 'visible' : 'hidden';
    }
}
ArrangementRange.sols = [];
class CustomInput {
    static init() {
        this.getCheckbox().addEventListener('change', () => {
            const val = this.getCheckbox().checked;
            MainSVG.customMode = val;
            this.showTextArea(val);
            Dom.onChangeTetro();
        });
        this.getButtonRefresh().addEventListener('click', () => {
            const input = Tetro.tetroToInput(MainSVG.customTetro);
            this.getTextArea().value = input;
        });
        this.getButtonExport().addEventListener('click', () => {
            const input = this.getTextArea().value;
            if (this.getBins(input) == null) {
                return;
            }
            Dom.download(input);
        });
        this.getButtonImport().addEventListener('click', () => {
            Dom.upload((input) => {
                if (input) {
                    if (this.getBins(input) == null) {
                        return;
                    }
                    const el = CustomInput.getTextArea();
                    el.value = input;
                    CustomInput.getButton().dispatchEvent(new Event('click'));
                }
                else {
                    alert('ファイルを読み込めません.');
                }
            });
        });
        this.getButton().addEventListener('click', () => {
            const input = this.getTextArea().value;
            const bins = this.getBins(input);
            if (bins == null) {
                return;
            }
            MainSVG.customTetro = Tetro.binsToTetro(bins);
            Dom.onChangeTetro();
            MainRange.calculate();
        });
    }
    static getBins(input) {
        const bins = this.parseInput(input);
        if (bins == null) {
            alert('形式が正しくありません.');
            return null;
        }
        return bins;
    }
    static setCheckbox(val) {
        const el = this.getCheckbox();
        el.checked = val;
        el.dispatchEvent(new Event('change'));
    }
    static showTextArea(show) {
        if (show) {
            this.getDivInner().style.display = '';
        }
        else {
            this.getDivInner().style.display = 'none';
        }
    }
    static parseInput(input) {
        let trimmed = input.trim();
        const sList = trimmed.split('\n');
        if (sList.length != 9) {
            return null;
        }
        const bins = [];
        for (const s of sList) {
            if (s.length != 9 || !/^[01]+$/.test(s)) {
                return null;
            }
            bins.push(parseInt(s, 2));
        }
        return bins;
    }
    static getCheckbox() {
        return document.getElementById('_checkbox_custom');
    }
    static getDivInner() {
        return document.getElementById('_div_custom_inner');
    }
    static getTextArea() {
        return document.getElementById('_textarea_custom');
    }
    static getButtonRefresh() {
        return document.getElementById('_button_custom_refresh');
    }
    static getButtonExport() {
        return document.getElementById('_button_custom_export');
    }
    static getButtonImport() {
        return document.getElementById('_button_custom_import');
    }
    static getButton() {
        return document.getElementById('_button_custom');
    }
}
class Dom {
    static init() {
        MainSVG.init();
        MainRange.init();
        ResultTable.init();
        ArrangementRange.init();
        CustomInput.init();
        this.onChangeTetro();
    }
    static onChangeTetro() {
        MainSVG.drawTetro(this.getTetro());
        ResultTable.reset();
    }
    static getTetro() {
        if (MainSVG.customMode) {
            return MainSVG.customTetro;
        }
        const index = MainRange.getIndex();
        return presets[index][1];
    }
    static onChangeSols(sols) {
        ArrangementRange.applySols(sols);
    }
    static onChangeArrange(index) {
        MainSVG.drawSolution(this.getTetro(), ResultTable.getCurrentSols()[index]);
    }
    static download(input) {
        const el = document.getElementById('_tetro_download');
        el.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(input));
        el.click();
    }
    static upload(callback) {
        const el = document.getElementById('_tetro_upload');
        el.onchange = () => {
            if (el.files && el.files.length >= 1 && el.files[0]) {
                const file = el.files[0];
                const reader = new FileReader();
                reader.onload = () => {
                    var _a;
                    callback((_a = reader.result) === null || _a === void 0 ? void 0 : _a.toString());
                };
                reader.readAsText(file);
                el.value = '';
            }
        };
        el.click();
    }
}
window.addEventListener('DOMContentLoaded', () => {
    Dom.init();
});
})();