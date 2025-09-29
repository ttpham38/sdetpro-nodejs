import BaseAnimal from "./BaseAnimal";

type RaceResult = [string, number];

export default class RaceController {
    
    public static collectResults(animals: BaseAnimal[]): RaceResult[] {
        console.log("--- Bắt đầu cuộc đua! ---");
        return animals.map(animal => {
            const speed = animal.getSpeed();
            console.log(`${animal.name} đạt tốc độ: ${speed}`);
            return [animal.name, speed];
        });
    }

    public static findMaxSpeed(results: RaceResult[]): number {
        return results.reduce((max, current) => {
            const speed = current[1];
            return speed > max ? speed : max;
        }, 0);
    }

    public static findWinners(results: RaceResult[], maxSpeed: number): string[] {
        return results
            .filter(result => result[1] === maxSpeed)
            .map(result => result[0]);
    }

    public static printResults(results: RaceResult[], winners: string[], maxSpeed: number): void {
        console.log("\n--- KẾT QUẢ CHUNG CUỘC ---");
        
        if (winners.length === 1) {
            console.log(`\n🏆 Người chiến thắng là: ${winners[0]}`);
        } else if (winners.length > 1) {
            console.log(`\n🏁 Cuộc đua hòa! Người chiến thắng là: ${winners.join(" và ")}`);
        } else {
             console.log("\nKhông có kết quả hợp lệ.");
        }
        
        console.log(`Tốc độ thắng cuộc: ${maxSpeed}`);
    }
}