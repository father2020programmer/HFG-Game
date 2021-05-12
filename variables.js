
/////// Const Variables ///////////
const canvas = $('canvas');
const titleScreen = $('.titleScreen');
const endScreen= $('.endScreen');
const floorHeight = 100;
const floorWidth = 2000;
const floory = 1000;
const dropCount = 4;
const drop = [];
const dropx = [175, 400, 610, 840];
const starty = 230;
const playerWidth = 70;

//////// Changable Variables/////////

let score = 35;
let lives = 20;
let level = 1;
let i = 0;
let playerX = 500;
let newNum = 0;
let lastNum = 3;
let dropSpeed = 3;
let levelSpeed = 15;
let rainSpeed = 2000;
let playerSpeed = 15;
let gameInterval;
let numInterval;