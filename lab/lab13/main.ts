import BaseAnimal from "./BaseAnimal";
import RaceController from "./RaceController";

const horse = new BaseAnimal("Horse", 75);
const tiger = new BaseAnimal("Tiger", 100);
const dog = new BaseAnimal("Dog", 60);

const results = RaceController.collectResults([horse, tiger, dog]);
const maxSpeed = RaceController.findMaxSpeed(results);
const winners = RaceController.findWinners(results, maxSpeed);

RaceController.printResults(results, winners, maxSpeed);