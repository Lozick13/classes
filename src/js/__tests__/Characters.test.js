import * as characters from "../app";
import { Character } from "../Character";

test.each([
  [characters.Bowman, "Лучник", [25, 25]],
  [characters.Swordsman, "Мечник", [40, 10]],
  [characters.Magician, "Маг", [10, 40]],
  [characters.Undead, "Нежить", [25, 25]],
  [characters.Zombie, "Зомби", [40, 10]],
  [characters.Daemon, "Демон", [10, 40]],
])("Тест классов персонажей", (Characters, name, stats) => {
  const hero = new Characters(name);
  const result = [hero.attack, hero.defence];
  expect(result.toString).toBe(stats.toString);
});

test.each([
  [{}, "Zombie", "Name error"],
  ["Зомби", {}, "Type error"],
])("Тест на ошибки при создании классов", (name, type, error) => {
  let result;

  try {
    new Character(name, type);
  } catch (e) {
    result = e.message;
  }
  expect(result).toBe(error);
});
