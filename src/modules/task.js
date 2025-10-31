export class Task {
  constructor(
    task_title,
    task_desc,
    task_date = {},
    task_status,
    task_priority
  ) {
    const date = new Date();
    this.task_id = crypto.randomUUID();
    this.task_title = task_title;
    this.task_desc = task_desc;
    this.task_date = {
      start_date: task_date.start_date || date.toDateString(),
      end_date: task_date.end_date,
    };
    this.task_status = task_status?.toLowerCase() || "pending";
    this.task_priority = task_priority?.toLowerCase() || "low";
  }
  updateStatus(status) {
    if (status) this.task_status = status.toLowerCase();
  }
  updateDate(date) {
    this.task_date = {
      start_date: date.start_date,
      end_date: date.end_date,
    };
  }
  updatePriority(priority) {
    this.task_priority = priority?.toLowerCase() || "low";
  }
  toggleComplete() {
    this.task_status =
      this.task_status?.toLowerCase() === "pending" ? "complete" : "pending";
  }
  getSummary() {
    return {
      title: this.task_title,
      desc: this.task_desc,
      status: this.task_status,
    };
  }
}
