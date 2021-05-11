const canvas = $('canvas');
const titleScreen = $('.titleScreen');
const floorHeight = 100;
const floorWidth = 2000;
const floory = 1000;
const dropCount = 4;
const drop = [];
const dropx = [175, 400, 610, 840];
const starty = 230;
const playerWidth = 70;

let score = 31;
let lives = 10;
let level = 1;
let i = 0;
let playerX = 500;
let newNum = 0;
let lastNum = 3;