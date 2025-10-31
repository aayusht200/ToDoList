import { Project } from "./project.js";
import { Task } from "./task.js";
import * as Storage from "./storage.js";
export class AppLogic {
  constructor() {
    this.projectList = [];
  }

  // --- Initialization ---
  initApp() {}

  // --- Project Management ---
  createProject(title, desc, date) {}
  deleteProject(project_id) {}
  getAllProjects() {}
  getProjectById(project_id) {}

  // --- Task Management ---
  addTaskToProject(project_id, taskData) {}
  removeTaskFromProject(project_id, task_id) {}
  updateTaskStatus(project_id, task_id, status) {}

  // --- Utility / Summary ---
  getAppSummary() {}

  // --- Sync Helpers ---
  saveToStorage() {}
  loadFromStorage() {}
}
