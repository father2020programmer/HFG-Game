const canvas = $('canvas');
const titleScreen = $('.titleScreen');
const scoreBoard = $('.score-board');
const numLives = $('.num-lives');
const scoreNum = $('.score');
const currentLevel = $('.levels');
const floorHeight = 100;
const floorWidth = 2000;
const floory = 1000;
const dropx = [175, 400, 610, 840];

let score = 0;
let lives = 10;
let level = 1;
let dropy = 230;
let i = 0;
let playerX = 500;