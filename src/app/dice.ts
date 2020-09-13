export function launchDice(numberOfFace:number):number {
    return Math.round(Math.random() * (numberOfFace - 1)) + 1;
}