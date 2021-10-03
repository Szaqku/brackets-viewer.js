"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bracketsViewer_1 = require("./viewer/bracketsViewer");
const inMemoryDatabase_1 = require("./manager/inMemoryDatabase");
const brackets_manager_1 = require("brackets-manager");
window.bracketsViewer = new bracketsViewer_1.BracketsViewer();
window.inMemoryDatabase = new inMemoryDatabase_1.InMemoryDatabase();
window.bracketsManager = new brackets_manager_1.BracketsManager(window.inMemoryDatabase);
//# sourceMappingURL=main.js.map