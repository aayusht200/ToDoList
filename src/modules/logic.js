import { Project } from "./project.js";
import { Task } from "./task.js";
import * as Storage from "./storage.js";

export class AppLogic {
  constructor() {
    this.projectList = [];
    this.loadFromStorage();
  }

  // --- Project Management ---
  createProject(title, desc, date) {
    this.projectList.push(new Project(title, desc, date, "open", []));
  }
  deleteProject(project_id) {
    this.projectList = this.projectList.filter(
      (project) => project.id !== project_id
    );
  }
  getAllProjects() {
    return this.projectList;
  }
  getProjectById(project_id) {
    return this.projectList.find((project) => project.id === project_id);
  }

  // --- Task Management ---
  addTaskToProject(project_id, taskData) {
    this.getProjectById(project_id).addTask(
      taskData.title,
      taskData.desc,
      taskData.date,
      taskData.status,
      taskData.priority
    );
  }
  removeTaskFromProject(project_id, task_id) {
    this.getProjectById(project_id).removeTask(task_id);
  }
  updateTaskStatus(project_id, task_id, status) {
    this.getProjectById(project_id)?.getTaskById(task_id)?.updateStatus(status);
  }

  // --- Utility / Summary ---
  getAppSummary() {}

  // --- Sync Helpers ---
  saveToStorage() {}
  loadFromStorage() {}
}
