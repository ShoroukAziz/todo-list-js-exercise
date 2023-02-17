
const newTask = (title, description) => {

  const task = {
    title: title,
    description: description,
    complete: false,
    markCompleted: function(params) {
      this.complete = true;
    },
    logState: function(params) {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);

    }

  }
  return task;
}



const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😝");

task1.logState();
task1.markCompleted();
task1.logState();
