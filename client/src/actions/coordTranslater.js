export default function translate(coord) {
    var translateRow = [8,7,6,5,4,3,2,1];
    var translateCol = ['A','B','C','D','E','F','G','H']

    var translated = ''
    translated+= translateCol[Number(coord[1])]
    translated+= translateRow[Number(coord[0])]

    return translated;
}